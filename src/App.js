import "./App.css";
import React from "react";
import PostUser from "./PostUser.js"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
      numberOfUser: 0,
    };
    this.changePage = this.changePage.bind(this)
  }

  componentDidMount() {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result.data,
            firstName: result.data[this.state.numberOfUser].first_name,
            lastName: result.data[this.state.numberOfUser].last_name,
            email: result.data[this.state.numberOfUser].email,
            avatar: result.data[this.state.numberOfUser].avatar,

            firstName2: result.data[this.state.numberOfUser+1].first_name,
            lastName2: result.data[this.state.numberOfUser+1].last_name,
            email2: result.data[this.state.numberOfUser+1].email,
            avatar2: result.data[this.state.numberOfUser+1].avatar,
          });
        },
        
      );
  }
  
  changePage(event){
    this.setState( (state) => {
      return{ numberOfUser: state.numberOfUser + 1}
    });
    console.log(this.state.numberOfUser)
    event.preventDefault()
    this.componentDidMount()
  }
  

  render() {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div class="loader">Loading...</div>;
    } else {
      return (
        <div id='posts'>
          <h1 style={{textAlign:'center'}}>Юзеры</h1>
          <div><PostUser  firstName={this.state.firstName} lastName ={this.state.lastName} email={this.state.email} avatar = {this.state.avatar}/></div>
          <div><PostUser  firstName={this.state.firstName2} lastName ={this.state.lastName2} email={this.state.email2} avatar = {this.state.avatar2}/></div>
          <a href="" className="gradient-button" onClick={this.changePage}>change page </a>
          <span>Текущая страница: {this.state.numberOfUser+1}</span>
        </div>
      );
    }
  }
}
