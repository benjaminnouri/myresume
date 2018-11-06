import React, { Component } from 'react';

import './App.css';

import First_page from './Sections/First_page.js';
import Third_page from './Sections/Third_page.js';
import Second_Page from './Sections/Second_page';

import Navigation from './Components/Navigation';
import Color_change from './Components/Color_change';
class App extends Component {
	render() {
		return (
			<div className="App">
				<Navigation />
				<Color_change class="App"/>
				<First_page />
				<Second_Page />
				<Third_page />
			</div>
		);
	}
}

export default App;
