const sha256 = require('js-sha256');
const SALT = 'CARROT IS BOTH FRUIT AND VEGGIE';
module.exports = function(db) {
   /* ===========================================
   * Controller logic
   * ===========================================
   */
 
const loginRequest = function(request, response) {
    response.render('teacher/logIn');
   
  };

const authenticate = function(request, response) {
    let data = {
      name: request.body.name,
      password: sha256(request.body.password + SALT)

    };
    if(authenticateLogin) {
      response.render('./teacher/home')
    } else {
      response.send('You are not authorised to perform this action')
    }
  };
    
const logoutRequest = (request, response)=> {
  response.redirect('/');
};


const signupForProject = (request, response) =>{
  let data = request.body;
  db.users.signup(data,(err, result)=>{
    console.log('done');
    if(result === null){
      response.status(403).send("Username already exist!");
    } else {
      response.redirect("/projects");
    };  
  });
};

const viewClasslist = (request, response)=>{
  db.getClasslist(data,(err,result)=>{
    if(result.rows < 1){
      response.status(403).send("Sorry. Classlist is not available.Please come back later.>");
    } else {
      response.send('classlist');
};

const viewProjects =(request, response)=>{
  db.getProject(data,(err,result)=>{
    if(result.rows < 1){
      response.status(403).send("There's no available project at this moment>");
    } else {
        response.send('projects');
    } 
  };
};

const makeNewAnouncement =(request, response)=>{

}



  let registerNewUser = (request, response) => {
        let data = [request.body.screen_name, hashFunc(request.body.password), request.body.avatar];
        db.queryMod.addUser(data, (error, results) => {
            if (results === null) {
                response.status(403).send("<h1>DUPLICATE SCREEN NAME. CHOOSE ANOTHER</h1>");
            } else {
                giveCookie(results[0].id, request.body.screen_name, response);
                db.queryMod.getAll((error, allResults) => {
                    console.log(allResults);
                    response.render('main/index', {
                        allResults
                    });
                });
            }
        });
    };


  let mainTweetHandler = (request, response) =>{
    db.users.getAllTweets((err, result)=> {

    response.send(result);
  });
};
  





  let createTweetHandler = function(err,request, response) {

    if(err){
      console.log('err');
    } else if(request.cookies === true){
        response.render('user/login');
    }
  };




  return {
    loginHandler,
    verifyHandler,
    logoutHandler,
    registerHandler,
    newAccountHandler,
    mainTweetHandler,
    createTweetHandler
  };
}




