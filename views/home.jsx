var React = require("react");

class Announcement extends React.Component {
    render() {
        return (
          <li >{this.props.item.anouncement}</li>
        );
    };
};


class Science extends React.Component {
    render() {
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
      
      <html>
        <head>
          <title>{this.props.title}</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="style.css"/>
            <link href="https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap|Open+Sans|Roboto+Condensed:300&display=swap|Faster+One|Nunito&display=swap" rel="stylesheet" />

        </head>
        <body>
          <nav class="navbar navbar-expand-sm navbar-light" id ="header">
            <a class="logo" href="/"> <div id = "logopic">Home</div></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse show justify-content-end" id="navbarSupportedContent">
              <a class="nav-link" href="/classlist">Class members</a>
              <a class="nav-link" href="/projects"> SIA Projects</a>
              <button type="submit" class= "login">Admin</button>

            </div>
          </nav>
          <div class = "main">
        

            <div class="form-popup form-container" id="myForm">
                <form  autocomplete="off" method='POST' action='/login'>
                  <h1> Log in</h1>
                  <label for="name"><b>Name</b></label>
                  <input type="text" placeholder="your name" name="name" autocomplete="off" autofocus />

                  <label for="password"><b>Password</b></label>
                  <input type="password" name="password" placeholder="password" required />
                  <button type="submit" class="btn" id = " success" >Sign up</button>
                  
                </form>
                <button type="submit" class="btn cancel">Cancel</button>
            </div>

            <div class = "main-info">
              <div class = "row">
                <div class ="col-sm-8 col-md-3 sidebar">
                  <div class="jumbotron weatherbar">
                    
                    <h3 id = "heading"> What inspires you today, Hackberry?</h3>
                    <form class="form-inline my-2 my-sm-0 quote-form" method='POST' action='/quotes'>
                      <input name = "quote" class="form-control mb-4 mr-sm-2" type="text" placeholder="Your quote" aria-label="quote"/>
                      <button class="btn btn-primar btn-lg mt-20 mb-3 btn-warning" type="submit">Submit</button>
                      <h5 class="display-5" id = "quotes"></h5>
                    </form>
                    <div > </div>
                    <hr class="my-4" />
                    <h4 class="display-5 forecast">Weather forecast</h4>
                    <div id ="ty"></div>
                    
                    <a class="btn btn-primary btn-lg mt-4 mb-4 btn-warning" href="https://www.nea.gov.sg/weather" role="button">Find out more</a>
                  </div>
                </div>

                <div class = "col-md-9">
                  
                    <div class="announcement">
                      <h3>Announcement</h3>
                        <div id ="announcement">{announcementElements}</div>
                    </div>
                

                  <div class = "categ" >  
                    <h4> SIA Categories</h4>

                  </div>
                  <div class= "wrapper">
                  <div class = "row namelist" >  
                    <div class = "col-sm-12 col-md-4 ">
                      <div class = "card mb-4">
                          <div class = "card-body text-center">
                           <h5 class = "card-title"> Science</h5>
                            <h6 class= "card-text"> Teacher in charge: name</h6>
                            <p class ="card-text">
                            <ol class= "text-left" id ="science">{scienceElements}</ol>
                            </p>
                          </div>
                      </div>
                    </div>

                    <div class = "col-sm-12 col-md-4 ">
                      <div class = "card mb-4">
                          <div class = "card-body text-center">
                           <h5 class = "card-title"> Art</h5>
                            <p class= "card-text"> Teacher in charge: name</p>
                            <p class ="card-text">
                            <ol class= "text-left" id ="art">{artElements}</ol>
                            </p>
                          </div>
                      </div>
                    </div>

                    <div class = "col-sm-12 col-md-4 ">
                      <div class = "card mb-4">
                          <div class = "card-body text-center">
                           <h5 class = "card-title"> Humanities</h5>
                            <p class= "card-text">Teacher in charge: name</p>
                            <p class ="card-text">
                            <ol class= "text-left" id ="humanities">{humanitiesElements }</ol>
                            </p>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <nav class="navbar navbar-light show justify-content-center " id ="footer">
              <p id = "center"> © Copyright Hackberry 2019 </p>
            </nav>
          </div>

          <script src='script1.js'></script>
          <script src='script3.js'></script>
       </body>
      </html>
    );
  }
}

module.exports = HOME;

