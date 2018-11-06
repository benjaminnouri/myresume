import React, { Component } from 'react';
import './First_page.css';

import Full_page from '../Components/Full_page';
import data from '../data.json';
import { SocialIcon } from 'react-social-icons';


import Arrow_down from '../Components/Arrow_down';

export default class First_page extends Component {
	render() {
		return (
			<Full_page className="first_page">
				<h1>{data.title}</h1>
				<h2>{data.subtitle}</h2>
				<div>{Object.keys(data.links).map((key) => <SocialIcon url={data.links[key]} />)}</div>
				<Arrow_down className="Arrow_down_first" scrollTop="968vh" />
			</Full_page>
		);
	}
}
