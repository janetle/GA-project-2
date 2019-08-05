var React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
        	<title>{this.props.title}</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="style.css"/>
            <link href="https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap|Open+Sans|Roboto+Condensed:300&display=swap|Faster+One|Nunito&display=swap" rel="stylesheet" />

        </head>
        <body>
          <nav class="navbar navbar-expand-sm navbar-light" id ="header">
            <a class="logo" href="/"> <div id = "logopic">Home</div></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse show justify-content-end" id="navbarSupportedContent">
              <a class="nav-link" href="/classlist">Class members</a>
              <a class="nav-link" href="/projects"> SIA Projects</a>
              <button type="submit" class= "login">Admin</button>

            </div>
          </nav>
        	{this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;