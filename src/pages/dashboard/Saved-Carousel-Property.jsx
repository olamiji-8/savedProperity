import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const SavedCarousel = () => {
  return (
		<div>
			<Carousel showThumbs={false} increment={true} autoPlay={true} interval={5000} selectedItem={2} infiniteLoop={true} transitionTime={2000}>
				<img
					className="saved-property-house"
					src="./saved-property-images/savedP_one.png"
					alt="nothing"
				/>
				<img
					className="saved-property-house"
					src="./saved-property-images/savedP_two.png"
					alt="nothing"
				/>
				<img
					className="saved-property-house"
					src="./saved-property-images/savedP_three.png"
					alt="nothing"
				/>
				<img
					className="saved-property-house"
					src="./saved-property-images/savedP_four.png"
					alt="nothing"
				/>
				<img
					className="saved-property-house"
					src="./saved-property-images/savedP_five.png"
					alt="nothing"
				/>
				<img
					className="saved-property-house"
					src="./saved-property-images/savedP_six.png"
					alt="nothing"
				/>
				<img
					className="saved-property-house"
					src="./saved-property-images/savedP_seven.png"
					alt="nothing"
				/>
			</Carousel>
		</div>
	);
}

export default SavedCarousel
