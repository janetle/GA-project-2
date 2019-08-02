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
              <a href="/login/classlist">Class Members</a>
              <a href="/login/projects">Projects</a>
            </nav>
          </header>
          
            <form method={'POST'} action={'/newProject'}>
              <p> Add new projecr</p>
              <input type={'text'} placeholder={'name'} name={'name'} /><br />
              <input type={'text'} placeholder={'description'} name={'description'} /><br />
              <input type={'text'} placeholder={'due date'} name={'due_date'} /><br />
              <button type={'submit'}>Submit</button>
            </form>
            <p> Add new student</p>
            <form method={'POST'} action={'/newStudent'}>
              <input type={'text'} placeholder={'name'} name={'name'} /><br />
              <input type={'text'} placeholder={'profile link'} name={'profile_pic'} /><br />
              <input type={'text'} placeholder={'title'} name={'title'} /><br />
              <button type={'submit'}>Submit</button>
            </form>
            <p> Make announcement</p>
            <form method={'POST'} action={'/login/anouncement'}>
              <input type={'text'} placeholder={'anouncement'} name={'anouncement'} /><br />
              <button type={'submit'}>Submit</button>
            </form>

        </body>
        </html>
    );
  }
}

module.exports = HOME;

