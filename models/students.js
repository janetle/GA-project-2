/**
 * ===========================================
 * Export model functions as a module
 * ===========================================

*/

const SALT = "CARROT IS BOTH FRUIT AND VEGGIE";
var sha256 = require('js-sha256');
module.exports = (dbPoolInstance) => {

  let getHomepage = (callback) => {
    console.log('hey,  that')
    let data = {
      announcements: [],
      
      science: [],
      art: [],
      humanities: []
    };
    let query = 'SELECT anouncement FROM anouncement ORDER BY id DESC LIMIT 2'; 

    dbPoolInstance.query(query, (err, result)=> {
      if(err){
        callback(err, null);

      } else {
        data.announcements = result.rows;
        let query = `SELECT name FROM students JOIN student_project ON id = student_id WHERE project_id = 1 OR project_id = 2`;
        dbPoolInstance.query(query, (err, result)=> {
          if(err){
            callback(err, null);
          } else {
            data.science =result.rows;

            let query = `SELECT name FROM students JOIN student_project ON id = student_id WHERE project_id = 3 OR project_id = 6`;
            dbPoolInstance.query(query, (err, result)=> {
              if(err){
                callback(err, null);
              } else {
                data.art =result.rows;
                let query = `SELECT name FROM students JOIN student_project ON id = student_id WHERE project_id = 4 OR project_id = 5`;
                dbPoolInstance.query(query, (err, result)=> {
                  if(err){
                    callback(err, null);
                  } else {
                    data.humanities =result.rows;
                    callback(null, data);
                    
                  }
                });
              }
            });
          }
        });
      }
    });
  };

  let getClasslist = (callback)=>{
    console.log('searching')
    const query = 'SELECT * FROM students';
    dbPoolInstance.query(query, (err, result) => {
      if (err){
        callback(err, null);
      } else {
          const data = {
          student : result.rows
          };
          callback(null, data);
      }
    });
  };

  let getProjects = (callback)=>{
    console.log('searching projects')
    const query = 'SELECT * FROM projects';
    dbPoolInstance.query(query, (err, result) => {
      if (err){
        callback(err, null);
      } else {
          const data = {
          project : result.rows
          };
          callback(null, data);
      };
    });
  };


  let getQuotes = (callback)=>{
    console.log('searching quotes')
    const query = 'SELECT * FROM quotes ORDER BY id DESC LIMIT 1'; 
    dbPoolInstance.query(query, (err, result) => {
      if (err){
        callback(err, null);
      } else {
          const data = {
          project : result.rows
          };
          callback(null, data);
      };
    });
  };


  let postQuotes = (quote,callback)=>{
    
    console.log('posting quotes')
    const query = 'INSERT INTO quotes( quote) VALUES($1) RETURNING *';
    const value = [quote];
    dbPoolInstance.query(query, value,(err, result) => {
      if (err){
        callback(err, null);
      } else {
         
          callback(null, result);
      };
    });
  };

let signUp = (data,callback)=>{
    
    console.log('signing up');
    const num1 = data.id;
    const num2 = data.projectId;
    console.log(num1, num2);
    
    const query = `SELECT * from student_project WHERE student_id = ${num1} AND project_id = ${num2} `;
    dbPoolInstance.query(query, (err,result)=> {
    if(err){

      callback(err, null);
    } else if(result.rows.length < 1) {

        const queryString = " INSERT INTO student_project(student_id,project_id) VALUES( $1, $2) RETURNING *";
        value = [ data.id,data.projectId];
        dbPoolInstance.query(queryString,value,(err)=>{
          if(err){
            callback(err, null);
          } else {
            console.log('done');
            callback(null, result);
          };
      });
    }
  }); 
};

// let admin = (callback)=> {
//   callback();
// }


let login = (data,callback) =>{
  
 if( data.name === "George" & sha256(data.password + SALT) === sha256("banana" + SALT)){
    callback(true);
  } else {
    callback(false);
  }
};















let postAnnouncement = (data, callback) => {
  console.log(" trying to post");
  let news = data.announcement;
  const query = 'INSERT INTO anouncement( anouncement) VALUES($1) RETURNING *';
    const value = [news];
    dbPoolInstance.query(query, value,(err, result) => {
      if (err){
        callback(err, null);
      } else {
         
          callback(null, result);
      };
    });
};

let postProjectForm = (data,callback)=>{
    console.log('searching')
    const query = 'INSERT INTO projects(teacher_ic,category,name,description) VALUES($1,$2,$3,$4) RETURNING *';
    let value = [data.teacher_ic, data.category, data.name, data.description];
    dbPoolInstance.query(query,value, (err, result) => {
      if (err){
        callback(err, null);
      } else {
          // const data = {
          // student : result.rows
          // };
          callback(null, result.rows);
      }
    });
};

let deleteProject = (data,callback) => {
  let deleteId = data.id;
  console.log('deleting a project');
  const query = `DELETE FROM projects WHERE id = ${deleteId}`; 
  dbPoolInstance.query(query, (err, result) => {
    if (err){
      callback(err, null);
    } else {
        const data = {
        project : result.rows
        };
        callback(null, data);
    };
  });
};


let addStudent = (info, callback) => {
  console.log('add new student')
   const query = 'INSERT INTO students(name, profile_pic) VALUES($1,$2) RETURNING *';
    let value = [info.name, info.pic];
    dbPoolInstance.query(query,value, (err, result) => {
      if (err){
        callback(err, null);
      } else {
          const data = {
          student : result.rows
          };
          callback(null, data.student);
      }
    });
};

let removeThisStudent = (data,callback)=> {
  let deleteId = data.id;
  console.log('deleting a project');
  const query = `DELETE FROM students WHERE id = ${deleteId}`; 
  dbPoolInstance.query(query, (err, result) => {
    if (err){
      callback(err, null);
    } else {
        const data = {
        project : result.rows
        };
        callback(null, data);
    };
  });

}



  return {
    getHomepage,
    getClasslist,
    getProjects,
    getQuotes,
    postQuotes,
    signUp,
    // admin,
    login,
    postAnnouncement,
    addStudent,
    // postProjectForm
    deleteProject,
    removeThisStudent
    
  };
};










 
