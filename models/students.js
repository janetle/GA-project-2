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
    let num = (data.id);
    let query = `SELECT name from students WHERE id = ${num} `;
    dbPoolInstance.query(query, (err,result)=> {
    if(err | data.name != result.rows[0].name){
      callback(err, null);
    } else  {

      let queryString = " INSERT INTO student_project(student_id,project_id) VALUES( $1, $2) RETURNING *";
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








  return {
    getHomepage,
    getClasslist,
    getProjects,
    getQuotes,
    postQuotes,
    signUp
  };

};







 
