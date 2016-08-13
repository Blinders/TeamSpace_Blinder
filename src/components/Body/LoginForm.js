import React, {Component} from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
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
    return (
    <div>
      <Paper style={paperStyle} zDepth={3}>
        <div style={loginHeaderStyle}>
          Welcome To Team Space
        </div>
        <form action='#' id='loginForm'>
          <div style={{marginTop: '40px'}}>
            <div style={{padding: '10px'}}>
              <TextField
                hintText="gray.lee@naver.com"
                floatingLabelText="E-mail"
                floatingLabelFocusStyle = {{color: '#2196F3'}}
                underlineFocusStyle = {{borderColor: '#2196F3'}}
                />
              <br />
            </div>
            <div style={{padding: '10px'}}>
              <TextField
                hintText="insert password"
                floatingLabelText="Password"
                floatingLabelFocusStyle = {{color: '#2196F3'}}
                underlineFocusStyle = {{borderColor: '#2196F3'}}
                />
              <br />
            </div>
            <div style={{padding: '10px'}}>
              <RaisedButton type='submit' label='Login' backgroundColor='#2196F3' labelColor='#FFFFFF' style={{margin: 12, width:'300px' }} />
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
        </form>
      </Paper>
    </div>
    );
  }
}


let mapDispatchToProps = (dispatch) => {
    return {

    }
}

Login = connect(undefined, undefined)(Login);

export default Login;
