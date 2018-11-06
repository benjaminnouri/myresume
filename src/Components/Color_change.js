import React, { Component } from 'react';
import data from '../data.json';
import './Color_change.css';
import $ from 'jquery';
import SnowStorm from 'react-snowstorm';

export default class Color_change extends Component {
	oncliked_changecolor = () => {
		var letters = '0123456789ABCDEF';
		var colory = '#';
		for (var i = 0; i < 6; i++) {
			colory += letters[Math.floor(Math.random() * 16)];
		}
		$('div').css('background-color', colory);
		//******************************************************/

		var letters = '0123456789ABCDEF';
		var colory = '#';
		for (var i = 0; i < 6; i++) {
			colory += letters[Math.floor(Math.random() * 16)];
		}
		$('div, Arrow_second,h1, section, p, .snow, btn').css('color', colory);
	};
	render() {
		return (
			<a href="#" onClick={this.oncliked_changecolor}>
				<img src={data.icons.change_color} className="color_change" alt={data.icons.Change_Color_Text}   alt="Change Color" title="Chnage My Color"/>
				<SnowStorm className="snow" />
			</a>
		);
	}
}
