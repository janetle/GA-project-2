const express = require('express');
const methodOverride = require('method-override');
const pg = require('pg');
var sha256 = require('js-sha256');
const cookieParser = require('cookie-parser')

// Initialise postgres client
const configs = {
  user: 'janetle',
  host: '127.0.0.1',
  database: 'project2',
  port: 5432,
};

const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

SALT='AwholeNewWorld';

/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

// Init express app
const app = express();

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(methodOverride('_method'));

app.use(express.static(__dirname+'/public'));


// Set react-views to be the default view engine
const reactEngine = require('express-react-views').createEngine();
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);

/**
 * ===================================
 * Callback Functions
 * ===================================
 */




/*
 * ===================================
 * ===================================
 *                DB
 * ===================================
 * ===================================
 */

// db contains *ALL* of our models
// const allModels = require('./db');

/**
 * ===================================
 * ===================================
 * Routes
 * ===================================
 * ===================================
 */

// get the thing that contains all the routes
// const setRoutesFunction = require('./routes');

// call it and pass in the "app" so that we can set routes on it (also models)
// setRoutesFunction(app, allModels);


app.get('/', (req, res)=>{
	console.log('hey,  that')
	let data = {
		announcements: [],
		quotes: [],
		science: [],
		art: [],
		humanities: []
	};

	let query = 'SELECT anouncement FROM anouncement ORDER BY id DESC LIMIT 2'; 

	pool.query(query, (err, result)=> {
		if(err){
			console.log('Error searching for anouncement');
		} else {
			data.announcements = result.rows;
			console.log(data.anouncement);
			let query = `SELECT name FROM students JOIN student_project ON id = student_id WHERE project_id = 1 OR project_id = 2`;
			pool.query(query, (err, result)=> {
				if(err){
					console.log('Error searching for quotes');
				} else {
					data.science =result.rows;

					let query = `SELECT name FROM students JOIN student_project ON id = student_id WHERE project_id = 3 OR project_id = 6`;
					pool.query(query, (err, result)=> {
						if(err){
							console.log('Error searching for quotes');
						} else {
							data.art =result.rows;

							let query = `SELECT name FROM students JOIN student_project ON id = student_id WHERE project_id = 3 OR project_id = 6`;
							pool.query(query, (err, result)=> {
								if(err){
									console.log('Error searching for quotes');
								} else {
									data.humanities =result.rows;
									res.render('home', data);
									console.log(data);
								}
							});
						}
					});
				}
			});
		}
	});
});



app.get('/classList', (req, res)=>{
	console.log('searching')
	const query = 'SELECT * FROM students';
	pool.query(query, (err, result) => {
		if (err){
			console.log('error');
		} else {


			// get all student ids

			// CONSTRUCT THIS QUERY
			// SELECT name, description, due_date FROM student_project JOIN projects On project_id = id WHERE student_id IN (15,23);


			// make query

			// get results

			// loop through results and match to the result.rows of students
			const data = {
				student : result.rows
			}
			res.render('classlist', data);
		};
	});
});

app.get('/classList/:id', (req, res)=> {
	console.log("searching");
	const query = " SELECT name, description, due_date FROM student_project JOIN projects On project_id = id WHERE student_id =" + req.params;
	pool.query(query, (err, result)=>{
		if(err){
			console.log("err",err);
		} else {
			console.log('Yeah!')
			let data = {
				item :result.rows
			}
			res.render('student',data)
		}
	})
})


app.get('/projects', (req, res)=>{
	console.log('searching')
	const query = 'SELECT * FROM projects';
	pool.query(query, (err, result) => {
		if (err){
			console.log('error');
		} else {
			const data = {
				project : result.rows
			}
			res.render('projects', data)
		};
	});
});

app.get('/quotes', (req, res)=>{
	console.log('looking for quotes');
	const query = 'SELECT * FROM quotes ORDER BY id DESC LIMIT 1'; 

	pool.query(query, (err, result)=> {
		if(err){
			console.log('Error searching for quotes');
		} else {
			res.json(result.rows);
		}
	});
});

app.post('/quotes', (req,res)=> {
	console.log('ok, logging');
	const query = 'INSERT INTO quotes( quote) VALUES($1)';
	const value = [req.body.quote];
	console.log(value);
	pool.query(query, value, (err,result)=> {
		if(err){
			console.log('err',err);
		} else {
			console.log( 'Good');
			res.redirect('/');
		}
	});
});

app.get('/register', (req, res)=>{
	res.render('signUp');
})

app.post ('/register',(req,res)=>{
	
	const queryString = " INSERT INTO student_project(student_id,project_id) VALUES( $1, $2)";
	value = [ req.body.id,req.body.projectId]
	pool.query(queryString,value,(err)=>{
		if(err){
			console.log("err",err)
		} else {
			console.log('done');
			res.render('confirmation')
		}
	});
});

app.get('/login', (req, res)=>{
	res.render('teacher/logIn');
});

app.post('/login',(req, res)=>{
	if( req.body.username === "George" & sha256(req.body.password + SALT) === sha256("banana" + SALT)){
		res.render('teacher/home')
	} else {
		res. send ('You are not authorised to perform this action.')
	}
});

app.get('/login/classlist',(req, res)=>{
	res.render('teacher/classlist')
});

app.get('/login/projects',(req, res)=>{
	res.render('teacher/projects')
});

// app.get('/login/anouncement',(req, res)=>{
	
// });


app.get('/login/new/anouncement',(req, res)=> {
	res.render('teacher/anouncement');
});

app.post('/login/anouncement',(req, res)=>{
	console.log(req.body.anouncement);
	const queryString = " INSERT INTO anouncement(anouncement) VALUES($1)";
	value = [req.body.anouncement];
	console.log(value);
	pool.query(queryString,value,(err)=>{
		if(err){
			console.log("err",err)
		} else {
			console.log('done');
			res.render('confirmation');
		}
	});
});

// app.get('/confimation',(req, res)=>{
// 	res.render('confirmation')
// });



/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => console.log('~~~ Tuning in to the waves of port '+PORT+' ~~~'));

let onClose = function(){

  server.close(() => {
    console.log('Process terminated')
    allModels.pool.end( () => console.log('Shut down db connection pool'));
  })
};

process.on('SIGTERM', onClose);
process.on('SIGINT', onClose);
