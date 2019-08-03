var React = require("react");

class Signup extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          
        </head>
        <body>
          <header>
            <nav>
              <a href="/classlist">Class Members</a>
              <a href="/projects">Projects</a>
            </nav>
          </header>
    
              <div class="form-popup" id="myForm">
               <form method='POST' action='/register'>
                    <h1> Sign up </h1>
                  <label for="name"><b>Name</b></label>
                  <input type="text" placeholder="your name" name="name" autocomplete="off" autofocus />

                  <label for="id"><b>Student Id</b></label>
                  <input type="text" name="id" placeholder="your id" required />

                  <label for="projectId"><b>Project Id</b></label>
                  <input type="text" name="projectId" required />

                  <button type="submit" class="btn">Sign up</button>
                  <button type="submit" class="btn cancel" onclick="closeForm()">Close</button>
                </form>
              </div>


          <footer>
            <p>Strictly for Hackberry students only</p>
            <a href="/login">Admin</a>
          </footer>
          
        </body>
        </html>
    );
  }
}

module.exports = Signup;

