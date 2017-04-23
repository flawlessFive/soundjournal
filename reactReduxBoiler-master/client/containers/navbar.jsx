import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';


class Login extends Component {
	 constructor(props) {
	    super(props);
	}




  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="Login" />
    );
  }
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

Logged.muiName = 'IconMenu';

class AppBarExampleComposition extends Component {
    constructor(props) {
    super(props);

    this.state = {
    logged: true,
    playSong:'0zVMzJ37VQNFUNvdxxat2E'
  };
  
} 

  handleChange = (event, logged) => {
    this.setState({logged: logged});
  };

  componentWillMount() {
    
  }

  render() {
    return (
      <div id="overview" className="col-sm-8 col-md-9 animated animated-sm bounceInUp">
        <AppBar
          title="De Ja Muse"
          iconElementRight={this.state.logged ? <Logged /> : <Login />}
        />
        <div id="widget">

      	 <iframe src={`https://embed.spotify.com/?uri=spotify:track:${this.props.song ? this.props.song: this.state.playSong}`} width={250} height={330} frameBorder={0} allowTransparency="true" />
           <div>
              <h1 id="plays"> plays </h1> 
           </div>
      </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    song: state.song
  };
}


export default connect(mapStateToProps)(AppBarExampleComposition);