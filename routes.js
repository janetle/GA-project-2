
module.exports = (app, allModels) => {

    // require the controller
    const users = require('./controllers/index')(allModels);
    app.get('/', users.showHomepage);
    app.get('/classList',users.showClasslist);
    app.get('/projects', users.showProjects);
    app.post('/projects', users.gotSignUp);

    app.get('/quotes', users.showQuotes);  
    app.post('/quotes',users.updateQuotes) ;

}

// module.exports = (app, db) => {

//   const students= require('./controllers/index')(db);

//   app.get('/', students.showClasslist);
//   app.get('/projects', students.showProjects);
//   app.post('/quotes', students.showQuotes);
//   app.get('/login', student.getLoggin);
  
// };