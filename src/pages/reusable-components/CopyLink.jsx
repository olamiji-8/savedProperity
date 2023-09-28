import React, {useState, useEffect} from 'react';
import { FcCheckmark } from 'react-icons/fc';


const CopyLink = ({text, placeholder}) => {

  const [link, setLink] = useState('');
	const [copied, setCopied] = useState(false);

	const copyLink = () => {
		navigator.clipboard.writeText(link);
		console.log(`copied! ${link}`);
		setCopied(true);
	};
	const copyMsg = () => {
		setCopied(false);
	};

	useEffect(() => {
		const timeout = setTimeout(() => {
			copyMsg();
		}, 2000);
		return () => clearTimeout(timeout);
	}, [copied]);
	return (
		<div className="service-provider-top-down more-top-down ">
			<p className="url-p service-provider-inline">{text}
			</p>
			<p className="copied-msg">{copied && 'copied!'}</p>
			<div className="url-combo more-top-down">
				<input
					className="url-input"
					type="url"
					name="link"
					value={link}
					onChange={(e) => {
						setLink(e.target.value);
					}}
					placeholder={placeholder}
				/>
				{copied ? (
					<FcCheckmark className="check-mark url-copy-icon " />
				) : (
					<img
						className="url-copy-icon "
						src="../Service-Provider-Img-Icons/copy.png"
						alt="copy"
						onClick={copyLink}
					/>
				)}
			</div>
		</div>
	);
};

export default CopyLink;
