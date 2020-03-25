import React, {Component} from 'react';
import $ from "jquery";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './index.css';
import * as serviceWorker from './serviceWorker';
import {MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol,MDBNav,MDBNavItem,MDBNavLink,MDBTabContent,MDBTabPane} from "mdbreact";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'sigilai5',
            userData: [],
            userFollowers:[],
            userFollowing:[],
            userRepos:[],
            perPage: 5,
        }
    }

    //Get github user profile
    getUserData(){
        $.ajax({
            url:'https://api.github.com/users/'+this.state.username +'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
            dataType:'json',
            cache:false,
            success:function(data){
                this.setState({userData: data})
            }.bind(this),
            error:function(xhr,status,err){
                alert(err);
            }.bind(this)
        });
    }


    //Get github user followers
    getUserFollowers(){
        $.ajax({
            url:'https://api.github.com/users/'+this.state.username+'/followers',
            dataType:'json',
            cache:false,
            success:function(data){
                this.setState({userFollowers: data})
                console.log(data);
            }.bind(this),
            error:function(xhr,status,err){
                alert(err);
            }.bind(this)
        });
    }

    //Get github user following
    getUserFollowing(){
        $.ajax({
            url:'https://api.github.com/users/'+this.state.username+'/following',
            dataType:'json',
            cache:false,
            success:function(data){
                this.setState({userFollowing: data})
                console.log(data);
            }.bind(this),
            error:function(xhr,status,err){
            }.bind(this)
        });
    }

    //Get github repositories
    getUserRepos(){
        $.ajax({
            url:'https://api.github.com/users/'+this.state.username+'/repos',
            dataType:'json',
            cache:false,
            success:function(data){
                this.setState({userRepos: data})
                console.log(data);
            }.bind(this),
            error:function(xhr,status,err){
                alert(err);
            }.bind(this)
        });
    }

handleFormSubmit(username){
        this.setState({username:username},function () {
        this.getUserData();
        this.getUserFollowers();
        this.getUserFollowing();
        this.getUserRepos();

        });
}

    componentDidMount() {
        this.getUserData();
        this.getUserFollowers();
        this.getUserFollowing();
        this.getUserRepos();
    }


    render(){
        return (
            <React.Fragment>
                <h1><center>Github Search</center></h1>
                <Search onFormSubmit = {this.handleFormSubmit.bind(this)} />
                <Profile
                    userData = {this.state.userData }
                    userFollowers = {this.state.userFollowers}
                    userFollowing = {this.state.userFollowing}
                    userRepos ={this.state.userRepos}
                />
            </React.Fragment>
        )
    }

}


App.propTypes = {
    clientId: React.PropTypes,
    clientSecret: React.PropTypes
};

App.defaultProps = {
    clientId: '163d925f27b21a8a0b8e',
    clientSecret: '3244c0d43f3c5f598cb98e3827f339764e742b24'
}



class Profile extends Component {
    state = {
        activeItem: "1"
    };


    toggle = tab => e => {
        if (this.state.activeItem !== tab) {
            this.setState({
                activeItem: tab
            });
        }
    };

    render() {
        return(
            <React.Fragment>

                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="3">
                            <h2><u>User</u></h2>
                            <img
                                src={this.props.userData.avatar_url}
                                className="img-fluid"
                                alt=""
                                style={{
                                    //Below lines will help to set the border radius
                                    borderBottomLeftRadius: 250,
                                    borderBottomRightRadius: 250,
                                    borderTopRightRadius: 250,
                                    borderTopLeftRadius: 250,
                                    overflow: 'hidden',}}
                            />
                            <br />
                            <h3><MDBIcon icon="user-check" /> {this.props.userData.login}</h3>
                            <h5><MDBIcon icon="envelope" />{this.props.userData.email}</h5>
                            <h6><MDBIcon icon="location-arrow" /> {this.props.userData.location}</h6>
                            <a href={this.props.userData.html_url} style={{color:'white'}}><MDBBtn color="elegant">Visit Profile</MDBBtn></a>


                            </MDBCol>
                        <MDBCol md="9">
                            <h2><u>Profile</u></h2>
                            <MDBContainer>

                                <MDBNav className="nav-tabs mt-5">
                                    <MDBNavItem>
                                        <MDBIcon to="#" active={this.state.activeItem === "1"} onClick={this.toggle("1")} role="tab" >
                                            <MDBBtn rounded color="info">{this.props.userData.followers} Followers</MDBBtn>
                                        </MDBIcon>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBIcon to="#" active={this.state.activeItem === "2"} onClick={this.toggle("2")} role="tab" >
                                            <MDBBtn rounded color="warning">{this.props.userData.following} Following</MDBBtn>
                                        </MDBIcon>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBIcon to="#" active={this.state.activeItem === "3"} onClick={this.toggle("3")} role="tab" >
                                            <MDBBtn rounded color="danger">{this.props.userData.public_repos} Repositrories</MDBBtn>
                                        </MDBIcon>
                                    </MDBNavItem>
                                </MDBNav>
                                <MDBTabContent activeItem={this.state.activeItem} >
                                    <MDBTabPane tabId="1" role="tabpanel">
                                        <p className="mt-2">

                                            {this.props.userFollowers.map(follower => (

                                                <p><a href={follower.html_url}>
                                                    <img
                                                        src={follower.avatar_url}
                                                        className="img-fluid"
                                                        alt=""
                                                        width="80px"
                                                        style={{width: 100,
                                                            height: 100,
                                                            //Below lines will help to set the border radius
                                                            borderBottomLeftRadius: 50,
                                                            borderBottomRightRadius: 50,
                                                            borderTopRightRadius: 50,
                                                            borderTopLeftRadius: 50,
                                                            overflow: 'hidden',}}

                                                    />
                                                    @{follower.login}
                                                </a>
                                                </p>


                                            ))}

                                        </p>
                                    </MDBTabPane>
                                    <MDBTabPane tabId="2" role="tabpanel">
                                        <p className="mt-2">

                                            {this.props.userFollowing.map(follower => (

                                                <p><a href={follower.html_url}>
                                                    <img
                                                        src={follower.avatar_url}
                                                        className="img-fluid"
                                                        alt=""
                                                        width="80px"
                                                        style={{width: 100,
                                                            height: 100,
                                                            //Below lines will help to set the border radius
                                                            borderBottomLeftRadius: 50,
                                                            borderBottomRightRadius: 50,
                                                            borderTopRightRadius: 50,
                                                            borderTopLeftRadius: 50,
                                                            overflow: 'hidden',}}

                                                    />
                                                    @{follower.login}
                                                </a>
                                                </p>


                                            ))}

                                        </p>

                                    </MDBTabPane>
                                    <MDBTabPane tabId="3" role="tabpanel">
                                        <p className="mt-2">

                                            {this.props.userRepos.map(repo => (

                                                <p><a href={repo.html_url}>
                                                    <img
                                                        src={this.props.userData.avatar_url}
                                                        className="img-fluid"
                                                        alt=""
                                                        style={{width: 100,
                                                            height: 100,
                                                            //Below lines will help to set the border radius
                                                            borderBottomLeftRadius: 50,
                                                            borderBottomRightRadius: 50,
                                                            borderTopRightRadius: 50,
                                                            borderTopLeftRadius: 50,
                                                            overflow: 'hidden',}}

                                                    />
                                                    {repo.name}
                                                </a>
                                                </p>


                                            ))}

                                        </p>
                                    </MDBTabPane>
                                </MDBTabContent>
                            </MDBContainer>
                        </MDBCol>

                    </MDBRow>
                </MDBContainer>

            </React.Fragment>
        )
    }
}

class Search extends Component {
    onSubmit(e){
        e.preventDefault();
        let username = this.refs.username.value.trim();
        if(!username){
            alert('Please enter a valid username');
            return;
        }
        this.props.onFormSubmit(username);
        this.refs.username.value = '';
    }

    render() {
        return(
            <React.Fragment>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Search Users</label>
                    <input type="text" ref="username" className="form-control" />

                </form>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();