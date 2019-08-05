

const SALT = "CARROT IS BOTH FRUIT AND VEGGIE";
var sha256 = require('js-sha256');

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */
  const showHomepage = (req, res) => {
    db.students.getHomepage((err, queryResult) => {
      if (err) {
        console.error('error', err);
        res.sendStatus(500);
      } else {
        res.render('home',queryResult);
      }
    });
  };
  const showClasslist =(req, res)=>{
    db.students.getClasslist((err, queryResult) => {
        if (err) {
          console.error('error', err);
          res.sendStatus(500);
        } else {
          res.render('classlist',queryResult);
        }
      });

  };
  const showProjects =(req, res)=>{
    db.students.getProjects((err, queryResult) => {
        if (err) {
          console.error('error', err);
          res.sendStatus(500);
        } else {
          res.render('projects',queryResult);
        }
      });

  };

  const showQuotes =(req, res)=>{
    db.students.getQuotes((err, queryResult) => {
        if (err) {
          console.error('error', err);
          res.sendStatus(500);
        } else {
          res.json(queryResult.project);
        }
      });

  };

  const updateQuotes =(req, res)=>{
    let newQuote = req.body.quote;
    console.log(newQuote);
    db.students.postQuotes(newQuote,(err, queryResult) => {
        if (err) {
          console.error('error', err);
          res.sendStatus(500);
        } else {
          console.log('posted');
          res.redirect('/');
        }
      });

  };

  const gotSignUp =(req, res)=>{
    let info = req.body;
    db.students.signUp(info,(err, queryResult) => {
        if (err) {
          console.error('error', err);
          res.sendStatus(500);
        } else {
          res.render('confirmation');
        }
    });
  };

  // const gotLogin = (req, res)=>{
  //   let info = req.body;
  //   console.log(info);
  //   db.students.login(info, (err,queryResult)=>{
  //     if (err) {
  //         console.error('error', err);
  //         res.sendStatus(500);
  //     } else if(queryResult===false){
  //         res.alert('Please enter correct username and password')
  //     } else if(queryResult===true){
  //       let hasshedUsername = sha256('GEORGE' + SALT);
  //       res.cookie("loggedin", hasshedUsername);
  //       res.render('./teacher/home');
  //     } else {
  //       res.redirect('/');
  //     }
  //   });
  // };
  const adminLogin = (req, res) => {
    
    // db.students.admin( () => {
      
      res.render("teacherHome")
  };

 

  const gotLogin = (req, res)=> {
    let data = req.body;
    db.students.login(data,(queryResult) => {
      if (queryResult===true) {
        
        let hasshedUsername = sha256('GEORGE' + SALT);
        res.cookie("loggedin", hasshedUsername);
        res.render('./teacherHome');
          
        } else {
         
          res.send('Please enter correct username and password');
        }
      });
  };


  const makeAnnouncement = (req, res) => {   
    res.render('./teacher/announcement');
  }

  const announcement = (req, res) => {
    console.log ("how");
    let latestNews = req.body;
    db.students.postAnnouncement(latestNews,(err, queryResult) => {
        if (err) {
          console.error('error', err);
          res.sendStatus(500);
        } else {
          res.render('confirmation');
        }
    });
  };

  const getNewProject = (req, res) => {
    res.render('projectForm');
  };

  

  const postNewProject = (req, res) => {
    console.log('Are you posting?')
    let data = req.body;
    console.log(data);
    db.students.postProjectForm(data,(err,queryResult) => {
      if (err) {
        console.error('error', err);
        res.sendStatus(500);
      } else {
        res.render('confirmation');
      }
    });
  };

  const getDeleteProject = (req, res)=> {
    res.render('projectFormDelete')
  }
  const deletedProject = (req, res) => {
    let data = req.body;
    db.students.deleteProject(data,(err,queryResult) => {
      if (err) {
        console.error('error', err);
        res.sendStatus(500);
      } else {
        res.render('confirmation');
      }
    });

  };

  const getEditProject = (req, res)=> {
    res.render('projectFormEdit');
  }

const getStudentForm = (req, res) => {
    res.render('studentForm');
  };

const addNewStudent = (req, res) => {
  let data = req.body;
  db.students.addStudent(data,(err,queryResult) => {
        if (err) {
          console.error('error', err);
          res.sendStatus(500);
        } else {
          res.render('confirmation');
        }
    });
  };
const removeStudentForm = (req,res) => {
  res.render('studentFormDelete')
}
const removeStudent = (req, res) => {
  let data = req.body;
  db.students.removeThisStudent(data,(err,queryResult) => {
    if (err) {
      console.error('error', err);
      res.sendStatus(500);
    } else {
      res.render('confirmation');
    }
  });
};

const getStudentEditForm = (req, res) => {
    res.render('studentFormEdit');
}




  // const gotLogout= (req, res)=>{
  //   if(err){
  //     console.error('error', err);
  //     res.sendStatus(500);
  //   } else {
  //   res.clearcookies();
  //   res.redirect('/')
  //   }
  // };
 




  return {
    showHomepage,
    showClasslist,
    showProjects,
    showQuotes,
    updateQuotes,
    gotSignUp,
    adminLogin,
    gotLogin,
    makeAnnouncement,
    announcement,
    postNewProject,
    getNewProject,
    getDeleteProject,
    getEditProject,
    deletedProject,
    getStudentForm,
    addNewStudent,
    removeStudentForm,
    removeStudent

    // gotLogout
    
  };
}




















