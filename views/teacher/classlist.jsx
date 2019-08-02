var React = require("react");




class ListItem extends React.Component {
  
    render() {
      console.log(this.props.item);
        return (
          <li>
            <p> Name : {this.props.item.name}</p>
            <p>Profile photo : {this.props.item.profile_pic}</p>
            <button> <a href= "#">Remove this student</a></button>
            <div class = 'toggle'>
           
            </div>

          </li>
        );
    }

};




class ClassList extends React.Component {
    render() {
     { /* map over classlistItem */}
      let itemsElements = this.props.student.map( (item, index) => {
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
                <a href="/teacher">Home</a>
                <a href="/projects">Projects</a>
              </nav>
            </header>

            <div >

              <ol>
                {itemsElements}
              </ol>
              
            </div> 

            <footer>
              <p>Strictly for Hackberry students only</p>
              <a href="">Admin</a>
            </footer>
            
          </body>
          </html>
      );
    }
  }

module.exports = ClassList;

