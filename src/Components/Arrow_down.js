import React, { Component } from 'react';
import './Arrow_down.css';
import $ from 'jquery';
export default class Arrow_down extends Component {
	oncliked_arrow = () => {
		$('html, body').animate({ scrollTop: this.props.scrollTop }, 2000);

		//	$("html, body").scrollTop(5000);
	};
	render() {
		return (
			<a href="#">
				<img
					className={this.props.className}
					onClick={this.oncliked_arrow}
					src="http://www.animatedimages.org/data/media/111/animated-arrow-image-0275.gif"
					border="0"
					alt="animated-arrow-image-0275"
				/>
			</a>
		);
	}
}
