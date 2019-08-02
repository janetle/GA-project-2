/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
const SALT = 'CARROT IS BOTH FRUIT AND VEGGIE';
const sha256 = require('js-sha256');

module.exports = (dbPoolInstance) => {

  const getList= (data,callback)=>{
    console.log('show me classlist');
    const query = 'SELECT * FROM students';
    dbPoolInstance.query(query,(err,result)=>{
      if(err){
        callback(err, null);
      } else {
        callback(err, true);
       
      }
    });
  };


  
  const getStudentInfo = function(data, callback) {
    console.log('Get student details')
    const query = " SELECT name, description, due_date FROM student_project JOIN projects On project_id = id" //insert value here
    const value = "" //search term here
    dbPoolInstance.query(query,value,(err,result) =>{
      if(err){
        callback(err,err);
      }else {
          callback(err, result)
        }
      });
      
    };
  

  


  const getProject = (callback)=>{
  const query = 'SELECT * FROM projects';
    dbPoolInstance.query(query, (err,result)=>{// worked here
      if(err){
        callback(err, null);
      } else {
        if (result.rows.length > 0) {
          callback(null,result.rows);

        } else {
          callback(null, null);

        }
      }
    });
  };

  const createAnouncement = (anouncement) =>{
  const query = 'INSERT INTO anouncement( quote) VALUES($1)';
    const values = [data];//check here for correct value
    dbPoolInstance.query(query,values, (err, result)=>{
      if(err){
        console.log('err');
      }else {
        return result.rows;
      }
    });
  };
  

  return {
   createAnouncement,
   getStudentInfo,
   getList,
   getProject,
   createTweet
  };
};
