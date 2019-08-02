var React = require("react");

class Anouncement extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          
        </head>
        <body>
          <header>
            
            <nav>
              <a href="/classlist">Class Members</a>
              <a href="/projects"> SIA Projects</a>
            </nav>
          </header>
          
          <div >
              <form method='POST' action='/login/anouncement'>
                
                <input type="text" name ='anouncement' autocomplete="off" autofocus />
                
                <input type="submit" />
              </form>
          </div>
            
          <footer>
            <p>Strictly for Hackberry students only</p>
          </footer>
          
        </body>
        </html>
    );
  }
}

module.exports = Anouncement;

