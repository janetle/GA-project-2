var React = require("react");
var DefaultLayout = require("../layouts/default");

class Anouncement extends React.Component {
  render() {
    return (
      <DefaultLayout>
          
          <div class="form new" >
                <form  autocomplete="off" method='POST' action='/announcement'>
                  <h2> Make announcement</h2>
                  <input type="text" placeholder="announcement" name="announcement" required autocomplete="off" autofocus />
                  <button type="submit" class="btn">Submit</button>
                </form>
                <button type="submit" class="btn cancel">Cancel</button>
            </div>


       </DefaultLayout>
    );
  }
}

module.exports = Anouncement;

