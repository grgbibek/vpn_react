/**
 * Created by gerer on 2/1/18.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './dashboard.css';


class Dashboard extends Component{
  render(){

    const buttonDivStyle = {
        padding: '0 27.5%'
    };

    const buttonStyle = {
      padding : '0px inherit'
    };

    const footerTextStyle = {
      textAlign: 'center'
    };

    return(
      <div className="dashboard">
                    <div className="row header1">
                      <div className="col-11 content">
                        <strong> Protection is not active </strong>
                      </div>
                      <div className="col-1 logo">
                        <i className="material-icons">warning</i>
                      </div>
                    </div>

                    <div className="row header2">
                      <div className="col-8">
                        Logo
                      </div>
                      <div className="col-4 adsdress">
                        <p>Current IP Address 192.168.100.8</p>
                      </div>
                    </div>

                    <div className="row buttonServer">
                      <button type="button">Server Location</button>
                    </div>

                    <div className="row countryCollection">
                      <ul className="collection">
                        <li><a href="#!" className="collection-item">America</a></li>
                        <li><a href="#!" className="collection-item">Antarctica</a></li>
                        <li><a href="#!" className="collection-item">Botswana</a></li>
                        <li><a href="#!" className="collection-item">Bouvet Island</a></li>
                        <li><a href="#!" className="collection-item">Cambodia</a></li>
                        <li><a href="#!" className="collection-item">Cocos (Keeling) Islands</a></li>
                        <li><a href="#!" className="collection-item">Colombia</a></li>
                        <li><a href="#!" className="collection-item">Comoros</a></li>
                        <li><a href="#!" className="collection-item">Finland</a></li>
                        <li><a href="#!" className="collection-item">Gabon</a></li>
                        <li><a href="#!" className="collection-item">Guernsey</a></li>
                        <li><a href="#!" className="collection-item">Guinea</a></li>
                        <li><a href="#!" className="collection-item">Jamaica</a></li>
                        <li><a href="#!" className="collection-item">Luxembourg</a></li>
                        <li><a href="#!" className="collection-item">Nauru</a></li>
                        <li><a href="#!" className="collection-item">Nepal</a></li>
                        <li><a href="#!" className="collection-item">New Zealand</a></li>
                        <li><a href="#!" className="collection-item">Norway</a></li>

                    </ul>
                  </div>

                  <div className="row menus">

                    <div className="col-3 sub-menu">
                        <Link to="">
                          <div className="sub-menu-icon">
                          <i className="material-icons">security</i>
                          </div>
                          <div className="sub-menu-text">
                          Ultra Secure
                          </div>
                        </Link>
                    </div>
                    <div className="col-3 sub-menu">
                      <Link to="">
                        <div className="sub-menu-icon">
                        <i className="material-icons">security</i>
                        </div>
                        <div className="sub-menu-text">
                        Balanced
                        </div>
                      </Link>
                    </div>

                    <div className="col-3 sub-menu">
                      <Link to="">
                        <div className="sub-menu-icon">
                          <i className="material-icons">security</i>
                        </div>
                        <div className="sub-menu-text">
                          High Speed
                        </div>
                      </Link>
                    </div>

                    <div className="col-3 sub-menu">
                      <Link to="">
                        <div className="sub-menu-icon">
                        <i className="material-icons">security</i>
                        </div>
                        <div className="sub-menu-text">
                        Setting
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className="row" style={buttonDivStyle}>
                      <button type="button" style={buttonStyle} class="btn btn-success">Connect</button>
                  </div>

                  <div className="row social">
                      <div className="col-5 social-icons">
                        <Link to="#"><i href="" className="fa fa-facebook fa-lg" aria-hidden="true"></i></Link>
                        <Link to="#"><i  className="fa fa-twitter fa-lg" aria-hidden="true"></i></Link>
                        <Link to="#">  <i  className="fa fa-google-plus fa-lg" aria-hidden="true"></i></Link>
                        <Link to="#">  <i  className="fa fa-tumblr fa-lg" aria-hidden="true"></i></Link>
                      </div>
                      <div className="col-7 optionsBox">
                        <p id="account">My account</p>
                        <p id ="support">Support</p>
                      </div>
                  </div>

                  <div className="row footer">
                      <p style={footerTextStyle}>Status: not connected</p>
                  </div>
      </div>
    )
  }
};

export default Dashboard;