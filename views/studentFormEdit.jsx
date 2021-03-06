
var React = require("react");
var DefaultLayout = require("./layouts/default");

class StudentEdit extends React.Component {
  render() {
    return (
      <DefaultLayout>
          
       <div class="new" id ="myForm" >
        <form  autocomplete="off" method='POST' action='/studentsnew'>
          <h2> Edit student</h2>
          <input type="text" placeholder="Student name" name="name" required autocomplete="off" autofocus />

          <input type="text" name="id" placeholder="id"/>

          <input type="text" name="pic" placeholder="Student's photo"/>

          <button type="submit" class="btn">Edit</button>
          
        </form>
        <button type="submit" class="btn cancel">Cancel</button>
      </div>
      <script src ="/script3.js"></script>

      </DefaultLayout>  
       
    );
  }
}

module.exports = StudentEdit;



