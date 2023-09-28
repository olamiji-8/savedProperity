import tempImage from '../../../assets/images/picture2.png'
import Button from '../../../components/ui/Button'
import { Link } from 'react-router-dom'
const Vendor = ({image, name, occupation, rating, location}) => {

    return (
        <div className='VendorCard'>
            <img src={image || tempImage} alt="vendor" />
            <h4 className='Vendor-Name'>{name || 'Blessed Creatives'}</h4>
            <p className='Vendor-Occupation'>{occupation || 'Interior designer'}</p>
            <p className='Vendor-Rating'><span>{rating || 4.2} </span>ratings</p>
            <p className='Vendor-Location'>{location || 'Oyo, Nigeria'}</p>
            <div>
                <p><Link to={'/vendors/2'}>View Profile</Link></p>
                <p className='Call'><a href={'tel:+234 813 163 1318'}>Call</a></p>
                <Button text={'message'} link={'/'}/>
            </div>
        </div>
    )
}


export default Vendor;
