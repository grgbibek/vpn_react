/**
 * Created by gerer on 1/31/18.
 */
import React, {Component} from 'react';
import './login.css';
import {Button} from 'react-materialize';

class login extends Component {
  render() {

    const fontStyle ={
      fontSize: '20px'
    };

    const styleButton = {
      marginTop: '10px',
      width: '100%',
    };

    const strongStyle={
      fontweight : 'bolder',
      fontSize: '15px',
      margin: '0 0 20px 0px'
    };




    return (
      <div className="login">
        <div className="header center">
          {/*<!-- <img src="VPNDemo.png" style="width: 50px; height: 50px;"> -->*/}
          <p style={fontStyle}>SpyOFF</p>
        </div>
        <strong style={strongStyle}>Enter your credentials </strong>
        <br />

        <form action="#" method="POST">
          <label for="username">Username</label>
          <input type="text" name="username" id="username"/>
          <br />
          <label for="password">Password</label>
          <input type="password" name="password" id="password"/>
          <br />
          <input type="checkbox" id="saveCredentials"/>
          <label for="saveCredentials">Save credentials</label>
          <br />
          <Button waves='light' style={styleButton} node='a' href='/dashboard'> Okay</Button>
          {/*<Button className="btn waves-effect waves-light center" type="submit" name="action">Okay
           </Button>*/}
        </form>
      </div>
    )
  }
};

export default login;
