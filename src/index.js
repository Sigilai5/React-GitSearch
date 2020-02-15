import React, {Component} from 'react';
import $ from "jquery";
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './index.css';
import * as serviceWorker from './serviceWorker';
import {MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol} from "mdbreact";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Sigilai5',
            userData: [],
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
                console.log(data);
            }.bind(this),
            error:function(xhr,status,err){
                alert(err);
            }.bind(this)
        });
    }

    componentDidMount() {
        this.getUserData();
    }


    render(){
        return (
            <React.Fragment>
                <Profile userData = {this.state.userData }/>
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
    render() {
        return(
            <React.Fragment>
                <h1><center>Github Search</center></h1>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="3">
                            <h2>User</h2>
                            <img
                                src={this.props.userData.avatar_url}
                                className="img-fluid"
                                alt=""
                                radius="50%"
                            />
                            <br />
                            <h3><MDBIcon icon="user-check" /> {this.props.userData.login}</h3>
                            <h6><MDBIcon icon="location-arrow" /> {this.props.userData.location}</h6>
                            <a href={this.props.userData.html_url} style={{color:'white'}}><MDBBtn color="elegant">Visit Profile</MDBBtn></a>


                            </MDBCol>
                        <MDBCol md="6">
                            <h2>Profile</h2>
                            <MDBBtn rounded color="info">Followers</MDBBtn>
                            <MDBBtn rounded color="warning">Following</MDBBtn>
                            <MDBBtn rounded color="danger">Repositories</MDBBtn>
                        </MDBCol>
                        <MDBCol md="3"><h2>Repositories</h2></MDBCol>
                    </MDBRow>
                </MDBContainer>

            </React.Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();