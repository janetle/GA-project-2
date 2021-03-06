var React = require("react");
var DefaultLayout = require('./layouts/defaultUser')
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
      <DefaultLayout>
          <div class = "main">

            <div class="form-popup form-container" id="myLoginForm">
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
                      <button class="btn btn-primary btn-lg mt-20 mb-3 btn-button" type="submit">Submit</button>
                      <h5 class="display-5" id = "quotes"></h5>
                    </form>
                    <div > </div>
                    <hr class="my-4" />
                    <h4 class="display-5 forecast">Weather forecast</h4>
                    <div id ="ty"></div>
                    
                    <a class="btn btn-primary btn-lg mt-4 mb-4 btn-button" href="https://www.nea.gov.sg/weather" role="button">Find out more</a>
                  </div>
                </div>

                <div class = "col-md-9">
                  <div class = "announcement-wrapper">
                    <div class="announcement">
                      <div class = "announcement-logo">
                        <h3>Announcement</h3> 
                        <img class = "logo-img" src = "/announcement.png" />
                      </div>
                        <div id ="announcement">{announcementElements}</div>
                    </div>
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
                            <p class= "card-text"> Teacher in charge<br/> Mr Gray & Ms Wee</p>
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
                            <p class= "card-text"> Teacher in charge <br/> Ms Choo & Mr Jason</p>
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
                            <p class= "card-text">Teacher in charge<br/> Ms Hellen & Mdm Cheong</p>
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
     </DefaultLayout>
    );
  }
}

module.exports = HOME;

