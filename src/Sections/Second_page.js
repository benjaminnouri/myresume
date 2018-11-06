import React, { Component } from 'react';
import data from '../data.json';
import './Second_page.css';
import Full_page from '../Components/Full_page';
import Arrow_down from '../Components/Arrow_down.js';

export default class Second_Page extends Component {
	render() {
		return (
			<Full_page className="about">
				<h1>{data.sections[0].title}</h1>
				<p>{data.sections[0].items[0].content}</p>
				<Arrow_down className="Arrow_down_second" scrollTop="2000vh" />
			</Full_page>
		);
	}
}
