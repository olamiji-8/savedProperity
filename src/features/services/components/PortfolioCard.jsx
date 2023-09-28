const PortfolioCard = ({ left, index }) => {
    
    const styles = {
        left: `${left * 167}px`,
        transform: `translate(-${index*167}px)`
    }

    return (
        <div style={styles} className="Portfolio-Card">

        </div>
    )
}

export default PortfolioCard