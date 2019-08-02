var React = require("react");
class Announcement extends React.Component {
  
    render() {
    
        return (
          <li>{this.props.item.anouncement}</li>
                      
        );
    };
};


class Science extends React.Component {
  
    render() {
      // console.log('hello')
      // console.log( this.props.item);
        return (

          <li>{this.props.item.name}</li>
                      
        );
    };

};
class Art extends React.Component {
  
    render() {
        return (
          <li>{this.props.item.name}</li>
                      
        );
    };

};
class Humanities extends React.Component {
  
    render() {
        return (
          <li>{this.props.item.name}</li>
                      
        );
    };

};


class HOME extends React.Component {
  render() {
    // console.log('trying to find the truth');
    
    let announcementElements = this.props.announcements.map( (item, index) => {
     
    return <Announcement item={item}></Announcement>;
  });

    let scienceElements = this.props.science.map( (item, index) => {
    return <Science item={item}></Science>;
  });

    let artElements = this.props.art.map( (item, index) => {
    return <Art item={item}></Art>;
  });

    let humanitiesElements = this.props.humanities.map( (item, index) => {
    return <Humanities item={item}></Humanities>;
  });

    return (
      <html lang="en">
        <head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
          <link rel="stylesheet" href="style.css"/>
          <link href="https://fonts.googleapis.com/css?family=Courgette&display=swap" rel="stylesheet"/>

        </head>
        <body>
          <header>
            
            <nav class="navbar navbar-expand-sm navbar-light " id = "header">
              <a class="nav-link" href="/">Hackberry<span class="sr-only">(current)</span></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse show justify-content-end" id="navbarSupportedContent">
                  <a class="nav-link" href="/classlist">Class members</a>
                  <a class="nav-link" href="/projects"> SIA Projects</a>
                  <a class="nav-link" href="/login">Admin</a>

              </div>
            </nav>
            

            
          </header>
          <div class = "row">
            <div class ="col-md-4">
              <div class="jumbotron ">
                
                <h3 id ="heading"> What inspires you today, Hackberry?</h3>
                <form class="form-inline my-2 my-md-0" method='POST' action='/quotes'>
                  <input name = "quote" class="form-control mr-sm-2" type="text" placeholder="Your quote" aria-label="quote"/>
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Submit</button>
                  <h5 class="display-5" id = "quotes"></h5>
                </form>
                <div > </div>
                <hr class="my-4" />
                <h4 class="display-7">Weather forecast</h4>
                <div id ="ty"></div>
                
                <a class="btn btn-primary btn-sm mt-10" href="#" role="button">Find out more</a>
              </div>
            </div>

          <div class = "col-md -8">
            <div class ="row">
              <div class="jumbotron ">
                <h4 class="display-7">Announcement</h4>
                  <div id ="announcement">{announcementElements}</div>
              </div>
            </div>

            <div class = "row" >  
              <h4> SIA Categories</h4>

            </div>

            <div class = "row" >  
              <div class = "col-md -2">
              <h5> Science</h5>
              <p> Teacher in charge</p>
              <p> Name</p>
              <ol id ="science">{scienceElements}</ol>
              </div>
              <div class = "col-md -2">
              <h5> Art</h5>
              <p> Teacher in charge: name</p>
              <ol id ="art">{artElements}</ol>
              </div>
              <div class = "col-md -2">
              <h5> Humanities</h5>
              <p> Teacher in charge</p>
              <p> Name</p>
              <ol id ="humanities">{humanitiesElements }</ol>
              </div>

            </div>
          </div>
        </div>

          <nav class="navbar navbar-light show justify-content-center " id ="footer">
            <p id = "center"> © Strictly for Hackberry students and teachers only </p>
          </nav>
          <script src='script1.js'></script>
        </body>
        </html>
    );
  }
}

module.exports = HOME;

