import React, { Component } from 'react';
import Full_page from '../Components/Full_page';
import data from '../data.json';
import './Third_page.css';

import Arrow_up from '../Components/Arrow_up.js';

export default class Third_page extends Component {
	// Pages of Skills
	render() {
		return (
			<Full_page className="Third_page">
				<h1>{data.sections[1].title}</h1>

			<div className="flexiy"> 
			<section >
					<div className="background_skills">
						<img src={data.sections[1].items[0].content.image} />
						<p>{data.sections[1].items[0].content.Explanation}</p>
					</div>
					<br />
					<br />

					<div className="background_skills">
						<img src={data.sections[1].items[1].content.image} />
						<p>{data.sections[1].items[1].content.Explanation}</p>
					</div>
				</section>
				<section>
					<div className="background_skills">
						<img src={data.sections[1].items[2].content.image} />
						<p>{data.sections[1].items[2].content.Explanation}</p>
					</div>
					<br />
					<br />
					<div className="background_skills">
						<img src={data.sections[1].items[3].content.image} />
						<p>{data.sections[1].items[3].content.Explanation}</p>
					</div>
				
				</section>
				<section>
					<div className="background_skills">
						<img src={data.sections[1].items[4].content.image} />
						<p>{data.sections[1].items[4].content.Explanation}</p>
					</div>
					<br />
					<br />
					<div className="background_skills">
						<img src={data.sections[1].items[5].content.image} />
						<p>{data.sections[1].items[5].content.Explanation}</p>
					</div>
				</section>
			</div>
			<br/>
			<br/>
			<Arrow_up className="Arrow_up" scrollTop="-2000vh" />
			</Full_page>
		);
	}
}
