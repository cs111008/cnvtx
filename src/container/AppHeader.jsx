import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import * as userActions from './../action/userActions';
import _ from 'lodash';


class AppHeader extends Component {

    constructor(props){
        super(props);
        this.state={
            email:'',
            password: ''
        }
    }

    handleUserLogin = (e) => {
        e.preventDefault();
        const {email, password} = this.state;
        
        
        if(!_.isEmpty(email) && !_.isEmpty(password)){
            this.props.dispatch(userActions.userLogin({
                email,
                password
            }));
        }        
        
    }
    hangleEmailchange = (e) => {
        this.setState({email: e.target.value})
    }
    hanglePasswordchange = (e) => {
        this.setState({password: e.target.value})
    }


    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
                <div className="container">
                    <Link className="navbar-brand burger-nav" to="/">
                    <div></div>
                    <div></div>
                    <div></div>
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mx-0 mx-lg-1">
                                <form onSubmit={this.handleUserLogin}>
                                    <div className="form-row">
                                        <div className="col">
                                            <input type="email" className="form-control" name="uEmail" placeholder="Email" onChange={this.hangleEmailchange} />
                                        </div>
                                        <div className="col">
                                            <input type="password" className="form-control" name="upassword" placeholder="Password" onChange={this.hanglePasswordchange} />
                                        </div>
                                        <div className="col">
                                            <button className="btn btn-primary btn-sm" type="submit" >Sign In</button>
                                        </div>
                                    </div>
                                </form>
                                <span>
                                    <span className="sign-up-container">Don't have Account ?
                                    <span className="note-controls" >Sign Up</span>
                                    </span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
const mapStateToProps = state => state;

export default connect(mapStateToProps)(AppHeader);