var React = require("react");

class HOME extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          
        </head>
        <body>
          <header>
            <h1>Welcome to Hackberry Class</h1>
            <nav>
              <a href="/classlist">Class Members</a>
              <a href="/projects">Projects</a>
            </nav>
          </header>
          
            <form method={'POST'} action={'/logIn'}>
              <input type={'text'} placeholder={'username'} name={'username'} /><br />
              <input type={'password'} placeholder={'password'} name={'password'} /><br />
              <button type={'submit'}>Register</button>
            </form>
            
          <footer>
            <p>Strictly for Hackberry students only</p>
            <a href="">Admin</a>
          </footer>
          
        </body>
        </html>
    );
  }
}

module.exports = HOME;

