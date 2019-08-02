var React = require("react");

class ListItem extends React.Component {
  
    render() {
      console.log(this.props.item);
        return (
          <li>
            <p> Project  {this.props.item.name}</p>
            <p>Teachear-in-charge:   </p>
            <div class = 'toggle'>
            <p> Description : {this.props.item.description} </p>
            <button> <a href = "/register" >Sign up </a></button>

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
          
        </head>
        <body>
          <header>
            <h1>Welcome to Hackberry Class</h1>
            <nav>
              <a href="/">Home</a>
              <a href="/classlist">Class List</a>
            </nav>
          </header>
          <h3>Hey, Hackberry! Choose your suitable poject from the list below.</h3>
          <div >
        {  /* should include project content and a sign up form*/}

            <ol>
              {itemsElements}
            </ol>
          </div>     
          <footer>
            <p>Strictly for Hackberry students only</p>
            <a href="">Admin</a>
          </footer>
     {/* <script src='script2.js'></script>*/ }
        </body>
        </html>
    );
  }
}

module.exports = Project;

