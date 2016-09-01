import React, {Component} from 'react';
import { connect } from 'react-redux';

class Footer extends Component {

  constructor(props) {
   super(props);
   this.state = {value: 1};
 }

    render() {
        return (
            <div style={{
              minHeight: '44px',
              backgroundColor: 'lightgray'
            }}>
              Copylight : Team Space 2016

            </div>
        )
    }
}


let mapDispatchToProps = (dispatch) => {
    return {

    }
}

 // 여기선 mapStateToProps가 필요 없으니 undefined
 // 대신 inc와 dec에 대한 action을 전달
Footer = connect(undefined, undefined)(Footer);

export default Footer;
