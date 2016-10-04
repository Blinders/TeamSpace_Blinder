import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import { Link } from 'react-router'

const styles = {
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

const HomeButton = () => (
  <div>
<Link to='/' >
    <FlatButton
     label='Team Space'
  //   href='http://localhost:9000/'
     secondary={true}
     style={{marginTop: '7px'}}
     labelStyle={{color: 'white', fontSize: '25px'}}
     rippleColor='#2196F3'
     icon={<i className='fa fa-rocket fa-rotate-270 fa-2x' style={{color : 'white', fontSize: '25px', marginTop: '3px'}}></i>}
   />
</Link>
  </div>
);

export default HomeButton;
