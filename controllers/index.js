

const SALT = "CARROT IS BOTH FRUIT AND VEGGIE";
var sha256 = require('js-sha256');


module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */
  const showHomepage = (req, res) => {
    if(req.cookies["loggedin"] === "906367c8bce992f7d1b596ca6fb772b68a224fbde8c55ada4f418cd8e9683382"){
     res.redirect('/login');
    } else {

        db.students.getHomepage((err, queryResult) => {
          if (err) {
            console.error('error', err);
            res.sendStatus(500);
          } else {
            res.render('home',queryResult);
          }
        });
    };

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
          res.render('reject')
        } else {
          console.log("result for student: ", queryResult);
          if (queryResult === 'signed') {
            res.render('teacher/reject');
          } else {
            res.render('confirmation');
          }

          
        }
    });
  };

  const adminLogin = (req, res) => {
    if(req.cookies["loggedin"] === "906367c8bce992f7d1b596ca6fb772b68a224fbde8c55ada4f418cd8e9683382"){
      res.render("teacherHome");
    } else {
        res.redirect('/')
    }
  };


  const gotlogin = (req, res)=> {
    let data = req.body;
    db.students.login(data,(isLoggedIn) => {
      if (isLoggedIn===true) {
        let hasshedUsername = sha256('GEORGE' + SALT);
        res.cookie("loggedin", hasshedUsername);
        res.render('teacherHome');
          
      } else {
         
        res.send('Please enter correct username and password');
      }
    });
  };


  const makeAnnouncement = (req, res) => {  
    if(req.cookies["loggedin"] === "906367c8bce992f7d1b596ca6fb772b68a224fbde8c55ada4f418cd8e9683382"){ 
      res.render('./teacher/announcement');
    } else {
        res.redirect('/')
    }
  }

  const announcement = (req, res) => {
    if(req.cookies["loggedin"] === "906367c8bce992f7d1b596ca6fb772b68a224fbde8c55ada4f418cd8e9683382"){
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
    } else {
        res.redirect('/')
    } 
  }; 

  const getNewProject = (req, res) => {
    if(req.cookies["loggedin"] === "906367c8bce992f7d1b596ca6fb772b68a224fbde8c55ada4f418cd8e9683382"){
      res.render('projectForm');
    } else {
        res.redirect('/')
    }
  };

  

  const postNewProject = (req, res) => {
    if(req.cookies["loggedin"] === "906367c8bce992f7d1b596ca6fb772b68a224fbde8c55ada4f418cd8e9683382"){
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
    } else {
        res.redirect('/')
    }
  };


  const getDeleteProject = (req, res)=> {
    var cookieThatWasSet = "906367c8bce992f7d1b596ca6fb772b68a224fbde8c55ada4f418cd8e9683382";
    if(cookieThatWasSet === req.cookies["loggedin"]){
      res.render('projectFormDelete');
    } else {
      res.send('HI');
    }
  };

  const deletedProject = (req, res) => {
    if(req.cookies["loggedin"] === "906367c8bce992f7d1b596ca6fb772b68a224fbde8c55ada4f418cd8e9683382"){

      let data = req.body;
      db.students.deleteProject(data,(err,queryResult) => {
        if (err) {
          console.error('error', err);
          res.render('reject')
        } else {
          console.log("result for project: ", queryResult);
          if (queryResult === 'none') {
            res.render('teacher/reject');
          } else {
            res.render('confirmation');
          }
        };
      });
    } else {
        res.redirect ('/');
    }
  };
  

  const getEditProject = (req, res)=> {
    if(req.cookies["loggedin"] === "906367c8bce992f7d1b596ca6fb772b68a224fbde8c55ada4f418cd8e9683382"){
      res.render('projectFormEdit');
    }else {
      res. redirect ('/');
    }
  };

const getStudentForm = (req, res) => {
  if(req.cookies["loggedin"] === "906367c8bce992f7d1b596ca6fb772b68a224fbde8c55ada4f418cd8e9683382"){
    res.render('studentForm');
  } else {
    res.redirect('/')
  }
};

const addNewStudent = (req, res) => {
  if(req.cookies["loggedin"] === "906367c8bce992f7d1b596ca6fb772b68a224fbde8c55ada4f418cd8e9683382"){

    let data = req.body;
    db.students.addStudent(data,(err,queryResult) => {
          if (err) {
            console.error('error', err);
            res.sendStatus(500);
          } else {
            res.render('confirmation');
          }
      });
  } else {
        res.redirect('/')
  }
};


const removeStudentForm = (req,res) => {
  if(req.cookies["loggedin"] === "906367c8bce992f7d1b596ca6fb772b68a224fbde8c55ada4f418cd8e9683382"){
    res.render('studentFormDelete')
  } else {
      res.redirect('/');
  }
};

const removeStudent = (req, res) => {
  if(req.cookies["loggedin"] === "906367c8bce992f7d1b596ca6fb772b68a224fbde8c55ada4f418cd8e9683382"){
    let data = req.body;
    db.students.removeThisStudent(data,(err,queryResult) => {
      if (err) {
        console.error('error', err);
        res.sendStatus(500);
      } else {
          console.log("list of students: ", queryResult);
          if (queryResult === 'none') {
            res.send('No student matches.');
          } else {
            res.render('confirmation');
          }
      }
    });
  } else {
      res.redirect('');
  }
};






const getStudentEditForm = (req, res) => {
  if(req.cookies["loggedin"] === "906367c8bce992f7d1b596ca6fb772b68a224fbde8c55ada4f418cd8e9683382"){
    res.render('studentFormEdit');
  } else {
    res.redirect('/')
  }
};

const gotLogout= (req, res)=>{
  
  res.clearCookie("loggedin");
  console.log( "redirect")
  res.redirect('/');
};

 




  return {
    showHomepage,
    showClasslist,
    showProjects,
    showQuotes,
    updateQuotes,
    gotSignUp,
    adminLogin,
    gotlogin,
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
    removeStudent,
    gotLogout
   
  };
}




















