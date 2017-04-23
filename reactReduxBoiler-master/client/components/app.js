import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import Display from '../containers/display.jsx';
import Form from '../containers/form.jsx';

class App extends React.Component {
	componentWillMount() {
	   window.secrets = {
	       client_id: process.env.CLIENT_ID,
	       client_secret: process.env.CLIENT_SECRET,
	       redirect_uri: process.env.REDIRECT_URI
	   };
	}
  render () {
    return ( 
    <div>
    <Form />
    <Display />
    </div>
    )
  }
}

export default App;