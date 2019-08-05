

var React = require("react");
var DefaultLayout = require("./layouts/default");
class ProjectForm extends React.Component {
  render() {
    return (
      <DefaultLayout>
          
          <div class="new" >
              <form  autocomplete="off" method='POST' action='/projectsdelete'>
                <h2> Edit project</h2>
                <input type="text" placeholder="Project name" required name="name" autocomplete="off" autofocus />

                <input type="text" placeholder="Project Id" required name="id" autocomplete="off" autofocus />

                <input type="text" name="category" placeholder="Category "  />

                <input type="text" name="teacher" placeholder="Teacher in charge"required/>

                <input type="text" name="description" placeholder="Description"/>

                <button type="submit" class="btn">Edit</button>
                
              </form>
              <button type="submit" class="btn cancel">Cancel</button>
          </div>

      </DefaultLayout>
    );
  };
}

module.exports = ProjectForm;

