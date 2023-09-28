import tempImage from '../../../assets/images/picture1.png'
import { Link } from 'react-router-dom'
const VendorCard = ({image, name, occupation}) => {
    return (
        <div className="VendorCard-Two">
            <img src={image || tempImage} alt="vendor" />
            <h2>{name || 'Tunde Fasasin'}</h2>
            <p>{occupation || 'Electrician'}</p>
            <div>
                <a href={'tel:+234 123 456 7890'}>Call</a>
                <Link to={'/'}>Message</Link>
            </div>
        </div>
    )
}

export default VendorCard