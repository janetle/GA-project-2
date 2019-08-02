var React = require("react");

class HOME extends React.Component {
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
          
          <div >
              <form method='POST' action='/register'>
                Name:
                <input type="text" name ='name' autocomplete="off" autofocus />
                Student Id:
                <input type="text" name ='id' autocomplete="off" autofocus />
                Project Id:
                <input type="text" name ='projectId' autocomplete="off" autofocus />
                <input type="submit" />
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

module.exports = HOME;

