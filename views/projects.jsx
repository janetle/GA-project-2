var React = require("react");

class ListItem extends React.Component {
  
    render() {
        return (
          <li >
            <div class = "item">
              
                <h4 class = "item-title"> Project  {this.props.item.name}</h4>
                <p class = "item-text">Teacher-in-charge:   </p>
                <p class = "item-text">Project Id:   </p>
                <p class = "item-text"> Description : {this.props.item.description} </p>
                <div class = "signUpButton">
                  <button class="open-button signUp"> Sign up</button>
                </div>
         
            </div>

          </li>
        );
  

};

};

class Project extends React.Component {
  render() {
  {/* map over project item*/}
  let itemsElements = this.props.project.map( (item, index) => {
    return <ListItem item={item}></ListItem>;
  });

    return (
      <html lang="en">
        <head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
          <link rel="stylesheet" href="style1.css"/>
          <link href="https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap|Open+Sans|Roboto+Condensed:300&display=swap" rel="stylesheet" />

        </head>
        <body>
         <div class = "container">
          
            <nav class="navbar navbar-expand-sm ">
              <a class="logo ml-6" href="/">Home</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse show justify-content-end" id="navbarSupportedContent">
                  <a class="nav-link" href="/classlist">Class members</a>
                  <a class="nav-link ml-6 login" href="#">Admin</a>
              </div>
            </nav>
          
            <p class = "instruction">Hey, Hackberry! Choose your suitable projects!</p>

            
      
            <div class="form-popup form-container" id="myForm">
                <form  autocomplete="off" method='POST' action='/projects'>
                  <h1> Sign up </h1>
                  <label for="name"><b>Name</b></label>
                  <input type="text" placeholder="your name" name="name" autocomplete="off" autofocus />
                  
                  <label for="id"><b>Student Id</b></label>
                  <input type="text" name="id" placeholder="your id" required />

                  <label for="projectId"><b>Project Id</b></label>
                  <input type="text" name="projectId" required/>

                  <button type="submit" class="btn" id = " success" >Sign up</button>
                  
                </form>
                <button type="submit" class="btn cancel">Cancel</button>
            </div>

            <div >
              <ul class = "list">
                {itemsElements}
              </ul>
            </div>     
            <footer>
              <nav class="navbar navbar-light show justify-content-center " id ="footer">
              <p id = "center"> © Copyright Hackberry 2019 </p>
            </nav>
            </footer>

        </div>
        <script src='script3.js'></script>
        </body>
        </html>
    );
  }
}

module.exports = Project;

