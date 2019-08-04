
module.exports = (app, allModels) => {

    // require the controller
    const users = require('./controllers/index')(allModels);
    app.get('/', users.showHomepage);
    app.get('/login',users.adminLogin);
    app.post('/login', users.gotLogin);
    app.get('/classList',users.showClasslist);
    app.get('/projects', users.showProjects);
    app.post('/projects', users.gotSignUp);
    app.get('/quotes', users.showQuotes);  
    app.post('/quotes',users.updateQuotes);
   	app.get('/announcement',users.makeAnnouncement);
   	app.post('/announcement',users.announcement);
   	app.get ('/projectsnew',users.getNewProject);
	app.post('/projectsnew',users.postNewProject);
	app.get('/projectsdelete',users.getDeleteProject);
	app.post('/projectsdelete',users.deletedProject);
	   	// app.get('projects/edit',users.getEditProject)
	   	// app.post('projects/edit',users.editProject)
	app.get('/studentsnew',users.getStudentForm);
	app.post('/studentsnew',users.addNewStudent);
	app.get('/studentsdelete',users.removeStudentForm);
	app.post('/studentsdelete',users.removeStudent);
}

