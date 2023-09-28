import star from '../../../assets/images/star.png'
import greyStar from '../../../assets/images/grey-star.png'

const VendorProfile = () => {
    return (
        <div className="VendorProfile">
            <p className="JobCompleted">
                <strong>Job completed </strong>
                <span>- 115</span>
            </p>
            <p className="Address">
                <strong>Address </strong>
                <span>- No. 10, Landstone road, Old Shabolu  Estate, Lagos state.</span>
            </p>
            <p className="PhoneNumber">
                <strong>Phone Number - </strong>
                <span>08033043234</span>
            </p>
            <p className="Rating">
                <strong>Rating - </strong>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={greyStar} alt="" />
                <span>{''}&nbsp;(4.2)</span>
            </p>
            <p className="Reg-Number">
                <strong>CAC Registration Number - 47895463589</strong>
            </p>
        </div>
    )
}

export default VendorProfile
