import React, { Component } from 'react';

import './Navigation.css';

import $ from 'jquery';

export default class Navigation extends Component {
	oncliked_skills = () => {
		//	$('html, body').animate({ scrollTop: $(document).height() }, 2000);
		$('html, body').animate({ scrollTop: '2000vh' }, 2000);
		//	$("html, body").scrollTop(5000);
	};
	oncliked_about = () => {
		$('html, body').animate({ scrollTop: '968vh' }, 2000);

		// $("html, body").scrollTop(5000);
	};
	render() {
		return (
			<div class="container">
				<button type="button" class="btn btn-primary" onClick={this.oncliked_skills}>
					Portfolio
				</button>

				<button type="button" class="btn btn-primary" onClick={this.oncliked_about}>
					About
				</button>
			</div>
		);
	}
}
