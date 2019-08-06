
var React = require("react");
var DefaultLayout = require("./layouts/default");

class Student extends React.Component {
  render() {
    return (
      
        <DefaultLayout>
           <div class="new"  id = "myForm">
                <form autocomplete="off" method='POST' action='/studentsdelete'>
                  <h2> Remove student</h2>
                  <input type="text" placeholder="Student name" name="name" required autocomplete="off" autofocus />

                  <input type="text" name="id" placeholder="id"/>
                 
                  <input type="text" name="pic" placeholder="Student's photo"/>

                  <button type="submit" class="btn">Remove</button>
                  
                </form>
                <button type="submit" class="btn cancel">Cancel</button>
            </div>

            <nav class="navbar navbar-light show justify-content-center " id ="footer">
              <p id = "center"> © Copyright Hackberry 2019 </p>
            </nav>
          <script src ="/script3.js"></script>
       </DefaultLayout>
    );
  }
}

module.exports = Student;



