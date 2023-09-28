import { useParams, useNavigate } from "react-router-dom"
import VendorCard from "../components/VendorCard"
import VendorProfile from "../components/VendorProfile"
import Feedback from "../components/Feedback"
import backArrow from '../../../assets/images/back-arrow.png'
import PortfolioItems from "../components/PortfolioItems"

const VendorDetailPage  = () => {
    const { vendorId } = useParams();
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }
    return (
        <main className="idk1 Vendor-Detail">
            <strong role={'button'} onClick={goBack} className="Pointer Back-Btn">
                <img src={backArrow} alt="" />
                Back
            </strong>
            <VendorCard/>
            <div className="Profile-Feedback">
                <VendorProfile/>
                <Feedback/>
            </div>
            <section className="Portfolio-Section">
                <h2>Portfolio</h2>
                    <PortfolioItems/>
            </section>
        </main>
    )
}

export default VendorDetailPage