require('styles/App.css');

import React from 'react';

class SwiperCarousel extends React.Component {
	render() {
		return (
			<div className='m-slider'>
				<div className="carousel">
					<div>react 斗鱼 1</div>
					<div>Slide 2</div>
					<div>react 3</div>
				</div>
			</div>
			);
	}
}

SwiperCarousel.defaultProps = {
};

export default SwiperCarousel;
