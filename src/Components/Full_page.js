import React, { Component } from 'react';
import './Full_page.css';

export default class Full_page extends Component {
	render() {
		const { children } = this.props;
		return <div className={`full_page ${this.props.className || ''}`}>{children}</div>;
	}
}
