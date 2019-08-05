var React = require("react");
var DefaultLayout = require('./layouts/default')



class ListItem extends React.Component {
  
    render() {
      console.log(this.props.item);
        return (
          <li class = "item classlist">
            <p class = "item-title"> Name : {this.props.item.name}</p>
            <p class = "item-photos">Profile photo <br />
            {this.props.item.profile_pic}</p>
       
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
        <DefaultLayout>
            <div class="form-popup form-container" id="myForm">
                <form  autocomplete="off" method='POST' action='/login'>
                  <h1> Log in</h1>
                  <label for="name"><b>Name</b></label>
                  <input type="text" placeholder="your name" name="name" autocomplete="off" autofocus />

                  <label for="password"><b>Password</b></label>
                  <input type="password" name="password" placeholder="password" required />
                  <button type="submit" class="btn" id = " success" >Sign up</button>
                  
                </form>
                <button type="submit" class="btn cancel">Cancel</button>
            </div>
        

            <div >

              <ol>
                {itemsElements}
              </ol>
              
            </div> 
            <nav class="navbar navbar-light show justify-content-center " id ="footer">
              <p id = "center"> © Copyright Hackberry 2019 </p>
            </nav>
       </DefaultLayout>
      );
    }
  }

module.exports = ClassList;

