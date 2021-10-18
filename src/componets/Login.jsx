import React, { Component } from 'react'
import { Redirect } from 'react-router';
import Input from './Input';

export default class Login extends Component {
    state = {
        account: {username : "",password : ""}
    }
    //username = React.createRef();
    // componentDidMount(){
    //     this.username.current.focus();
    // }
    handelChange = ({currentTarget: input}) =>{
        
        //console.log(e.currentTarget.value);
        const account = {...this.state.account};
        account[input.name]= input.value;
        this.setState({ account });
        
    }

    handelSubmit = e =>{
        e.preventDefault();
        //const username = this.username.current.value;
        //console.log(username);
        if(this.state.account.username === "Amit" && this.state.account.password === "Master")
        {
            //this.props.history.push("/movies");    
            alert("login successfully.");
            this.props.history.push('/movies');
           // <Redirect to="/movies" />
        }
        else{
            alert("Please check UserName and password");
        }
        
    }
    render() {
        const {account} = this.state;
        
        return (
            <div>
                <h3>Login Form</h3>
                <p>UserName = Amit , Password = Master </p>
                <form onSubmit={this.handelSubmit} style={{textAlign:"left"}}>
                <Input name="username" label="userName" onChange={this.handelChange} value={account.username} />
                <Input name="password" label="Password" onChange={this.handelChange} value={account.password} />  

                <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        )
    }
}
