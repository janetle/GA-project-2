var React = require("react");


{/*class StudentInfo extends React.Component {
  
    render() {
        return (
        
          <li>
            <p> Project:</p>
            <p> Project: {this.props.item.name}</p>
            <p>Due date: {this.props.item.due_date}</p>
            <p>Project detail: {this.props.item.description}</p>
          </li>

        
        );
    }

};


class Student extends React.Component {
  
    render() {
      let projectElements = this.props.item.map( (item, index) => {
          return <StudentInfo item={item}></StudentInfo>;
        });
      return (
      
        <ul>
          {projectElements}
        </ul>

        
        );
    };

};
*/}



class ListItem extends React.Component {
  
    render() {
      console.log(this.props.item);
        return (
         
          <li>
            <div class="row">
              <div class="col-md-6">
                <div class="card student" > 
                  <img src={this.props.item.profile_pic} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <a href="#" class="btn btn-primary">{this.props.item.name}</a>
                  </div> 
                </div> 
              </div> 
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
            <link rel="stylesheet" href="style1.css"/>
          </head>
          <body>
            <header>
              <h1>Welcome to Hackberry Class</h1>
              <nav>
                <a href="/">Home</a>
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

