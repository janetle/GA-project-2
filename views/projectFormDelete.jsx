

var React = require("react");

class ProjectForm extends React.Component {
  render() {
    return (
      <html lang="en">
     
          <head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
          <link rel="stylesheet" href="style.css"/>
          <link href="https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap|Open+Sans|Roboto+Condensed:300&display=swap" rel="stylesheet" />

        </head>
        <body>
          <header>
            <nav class="navbar navbar-expand-sm navbar-light" id ="header">
              <a class="logo" href="/"> <div id = "logopic">Home</div></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse show justify-content-end" id="navbarSupportedContent">
                  <a class="nav-link" href="/classlist">Class members</a>
                  <a class="nav-link" href="/projects"> SIA Projects</a>
                  <div class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      George<span class="caret"></span></a>
                    <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                      <li class="dropdown-header">Projects</li>
                      <li><a class="dropdown-item" href="/projectsdelete">Delete project</a></li>
                      <li><a class="dropdown-item" href="#">Edit project</a></li>
                      <li><a class="dropdown-item" href="/projectsnew">Add new project</a></li>
                      <li class="dropdown-divider"></li>
                      <li class="dropdown-header">Students</li>
                      <li><a class="dropdown-item" href="#">Remove students</a></li>
                      <li><a class="dropdown-item" href="#">Edit students</a></li>
                      <li><a class="dropdown-item" href="#">Add new students</a></li>
                      <li class="dropdown-divider"></li>
                      <li class="dropdown-header">Announcement</li>
                      <li><a class="dropdown-item" href="#">Make announcement</a></li>
                      <li class="dropdown-divider"></li>
                      <li><a class="dropdown-item" href="#">Log out</a></li>
                    </ul>
                  </div>
              </div>
            </nav>
            
          </header>
          
          <div class="new" >
              <form  autocomplete="off" method='POST' action='/projectsdelete'>
                <h2> Delete project</h2>
                <input type="text" placeholder="Project name" required name="name" autocomplete="off" autofocus />

                <input type="text" placeholder="Project Id" required name="id" autocomplete="off" autofocus />

                <input type="text" name="category" placeholder="Category "  />

                <input type="text" name="teacher" placeholder="Teacher in charge"required/>

                <input type="text" name="description" placeholder="Description"/>

                <button type="submit" class="btn">Delete</button>
                
              </form>
              <button type="submit" class="btn cancel">Cancel</button>
          </div>

 
        </body>
      </html>
    );
  }
}

module.exports = ProjectForm;

