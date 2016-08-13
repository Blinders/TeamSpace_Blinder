import React, {Component} from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';

class Body extends Component {

    gray(){
      console.log("Gray Click")
    }
    render() {

        return (
            <div style={{
              height: 'calc(100vh - 100px)',
              backgroundColor: '#EEE',
              textAlign: 'center'
            }}>
            <LoginForm />
            </div>
        )
    }
}


let mapDispatchToProps = (dispatch) => {
    return {

    }
}

Body = connect(undefined, undefined)(Body);

export default Body;
