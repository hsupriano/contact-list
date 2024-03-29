import React, { Component } from "react";
import UserCard from "./components/user-card";
import Service from "./components/userservice";
import UserForm from "./components/user-editor";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    
    

  };







  componentDidMount() {

    Service.getUser().then(r => {
      const users = r.data.data;
      this.setState({ users: users });
    });
  }

  saveUser(user) {
    const newUser =
      this.state.users.concat(user);
    this.setState({ users: user });
    console.log("partent function", user)
    
  }


  render(props) {
    

    return (

      <div>
        <UserForm saveUser={this.saveUser.bind(this)} />
        <h1>Contact List</h1>
        <h3>Users</h3>
        {this.state.users.map(user => (
          <UserCard user={user} />
        ))}


      </div>
    );
  }
}

export default App;
