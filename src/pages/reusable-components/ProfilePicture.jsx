import React, {useState, useEffect} from 'react'

const ProfilePicture = () => {
   const [image, setImage] = useState();
	const [preview, setPreview] = useState(); 


   useEffect(() => {
      if (image) {
         const reader = new FileReader();
         reader.onloadend = () => {
            setPreview(reader.result);
         };
         reader.readAsDataURL(image);
      } else {
         setPreview(null);
      }
   }, [image, preview]);

		const changeProfile = (e) => {
			const file = e.target.files[0];
			if (file && file.type.substring(0, 5) === 'image') {
				setImage(file);
			} else {
				setImage(null);
			}
		};

		const chooseProfile = (e) => {
			e.preventDefault();
			const btn = document.querySelector('#defaultProfile');
			btn.click();
		};
  return (
		<div>
			{!preview ? (
				<div className="service-provider-img"></div>
			) : (
				<img
					className="service-provider-img-profile"
					id="preview-img"
					src={preview}
					alt="profile"
					style={{ objectFit: 'center' }}
				/>
			)}
			<p>
				<input
					id="defaultProfile"
					hidden
					type="file"
					accept="image/*"
					placeholder=""
					onChange={changeProfile}
				/>
				<span
					className="service-provider-link profile-pic"
					onClick={chooseProfile}
				>
					Change Profile Picture{' '}
				</span>
			</p>
		</div>
	);
}

export default ProfilePicture
