import React, {Component} from 'react';
import { connect } from 'react-redux';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import HomeButton from './HomeButton'
import { Link } from 'react-router'
import FlatButton from 'material-ui/FlatButton'

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
      open: false
    }
  }

  handleChange(event, index, value){
    console.log(handleEvent)
    this.setState({value})
  }
  gray(){
    console.log(this)
    }

    handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    return (
      <div style={{height: '56px'}}>
      <Toolbar style={{backgroundColor: '#2196F3'}}>
        <ToolbarGroup firstChild={true} >
          <HomeButton />
          <Link to='wooju' style={{paddingTop : '7px'}}>
            <FlatButton  label='WOOJU'  labelStyle={{fontSize: '16px'}} />
          </Link>
          <Link to='hojin' style={{paddingTop : '7px'}}>
            <FlatButton  label='HOJIN'  labelStyle={{fontSize: '16px'}} />
          </Link>
          <Link to='jisu' style={{paddingTop : '7px'}}>
            <FlatButton  label='JISU'  labelStyle={{fontSize: '16px'}} />
          </Link>
          <Link to='gray' style={{paddingTop : '7px'}}>
            <FlatButton  label='GRAY'  labelStyle={{fontSize: '16px'}} />
          </Link>
        </ToolbarGroup>
      </Toolbar>
      </div>
    );
  }
}


let mapDispatchToProps = (dispatch) => {
    return {

    }
}

Header = connect(undefined, undefined)(Header);

export default Header;
