import React, {Component} from 'react';
import { connect } from 'react-redux';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import HomeButton from './HomeButton'

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
