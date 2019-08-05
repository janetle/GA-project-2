var React = require("react");
var DefaultLayout = require("./layouts/default");


class HOME extends React.Component {
  render() {
    
    return (
      <DefaultLayout>
      	<div class = "back">
        	<h1 class = "george">Welcome back, George!</h1>
        </div>
        <script src ="script4.js"></script>
    </DefaultLayout>
    );
  }
}

module.exports = HOME;

