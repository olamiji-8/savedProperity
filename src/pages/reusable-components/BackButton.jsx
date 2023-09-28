import React from 'react';
import { useNavigate } from 'react-router-dom';
import lessThan from '../../assets/images/LessThan.png';

const BackButton = () => {
	const navigate = useNavigate();
	return (
		<div>
			<button className=" back-button lease-back" onClick={() => navigate(-1)}>
				<img className="less-icon" src={lessThan} alt="less-than" /> Back
			</button>
		</div>
	);
};
//To make the back button only show when at a min-width of 800px, then do this on your page:
//<div className='min-show'>BackButton</div>

export default BackButton;
