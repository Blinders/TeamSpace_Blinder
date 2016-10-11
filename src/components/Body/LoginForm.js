import React, {Component} from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Form } from 'formsy-react'
import { FormsySelect, FormsyText } from 'formsy-material-ui/lib'
import { login } from '../../actions'

const paperStyle = {
    height: 450,
    width: 350,
    margin: 20,
    marginTop: '10%',
    textAlign: 'center',
    display: 'inline-block',
  }

  const loginHeaderStyle = {
    color: '#fff',
    fontSize: '20px',
    fontWeight: 'normal',
    padding: '20px 0',
    textAlign: 'center',
    textTransform: 'uppercase',
    background: '#2196F3',
    }

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      password: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.loginAction = this.loginAction.bind(this);
  }

  handleChange(e) {
    let nextState = {};
    //nextState[e.target.value] = e.target.value;
    this.setState({password : e.target.value});
    this.setState({id : e.target.value});
  }

  kakaoLoginPopup(){
    Kakao.Auth.login({
     success: function(obj) {
      console.log("Token Get : " + JSON.stringify(obj));
      Kakao.API.request({
          url: '/v1/user/me',
          success: function(res) {
            console.log("NickName : " + JSON.stringify(res));
          },
          fail: function(error) {
            console.log("Nick Err" + JSON.stringify(error));
          }
        });
     },
     fail: function(err) {
       console.log(JSON.stringify(err));
     }
    });
  }

  loginAction() {
    console.log(this.state.password);
    fetch('http://localhost:3000/teamspace/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id : this.state.id,
        password: this.state.password
      })
    }).then(result =>  {
      console.log(result);
    })
  }

  handleLogin = (data) => {
    console.log(data);
    this.props.login(data);
  }


  render() {

    return (
    <div>
      <Paper style={paperStyle} zDepth={3}>
        <div style={loginHeaderStyle}>
          Welcome To Team Space
        </div>
        <Form
          onValid={this.enableBtn}
          onInvalid={this.disableBtn}
          onValidSubmit={this.handleLogin}
        >
          <div>
            <div style={{padding: '10px'}}>

              <FormsyText
                fullWidth
                 required
                 name='userId'
                 floatingLabelText='E-mail'
                 hintText='example@example.com'
                 floatingLabelFocusStyle = {{color: '#2196F3'}}
                 underlineFocusStyle = {{borderColor: '#2196F3'}}
                 validations="isEmail"
                 validationError="Please check email format"

               />
            </div>

            <div style={{padding: '10px'}}>
             <FormsyText
              fullWidth
               required
               name='userpw'
               type='password'
               hintText='input admin password'
               floatingLabelText='Password'
               floatingLabelFocusStyle = {{color: '#2196F3'}}
               underlineFocusStyle = {{borderColor: '#2196F3'}}
             />



              <br />
            </div>
            <div style={{padding: '10px'}}>
              <RaisedButton id='loginBtn' type='submit' label='Login' backgroundColor='#2196F3' labelColor='#FFFFFF' style={{margin: 12, width:'300px' }} labelStyle={{fontWeight: 'bold'}} />
              <RaisedButton id='kakaoLoginBtn' onClick={this.kakaoLoginPopup} label='KaKao Login' backgroundColor='#ffef3f' labelColor='#000000' style={{margin: 12, width:'300px' }} labelStyle={{fontWeight: 'bold'}} />
              <br />
            </div>
          </div>
          <div style={{padding: '10px'}}>
          <div style={{float: 'left'}}>
          <FlatButton label="Register Now" rippleColor='#2196F3'/>
          </div>
          <div style={{float: 'right'}}>
          <FlatButton label="Forgot Password?" rippleColor='#2196F3'/>
          </div>
          </div>
        </Form>
      </Paper>
    </div>
    );
  }
}




LoginForm.PropTypes = {
  login: React.PropTypes.func.isRequired
}
