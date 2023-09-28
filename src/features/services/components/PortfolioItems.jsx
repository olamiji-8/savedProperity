import PortfolioCard from "./PortfolioCard"
import prevArrow from '../../../assets/images/prev-arrow.png'
import nextArrow from '../../../assets/images/next-arrow.png'
import { useState } from "react"

const PortfolioItems = ({ data }) => {
    // loop (map) data to form list of PortfolioCards
    let items = []
    const [index, setIndex ]= useState(0)

    for (let i = 0; i<10; i++) {
        const element = <PortfolioCard index={index} key={i} left={i}/>;
        items.push(element)
    }
    const prev = () => {
        setIndex(prev => {
            if (prev === 0) {
                return 0
            }
            return prev - 1
        })
    }
    const next = () => {
        setIndex(prev => {
            if (prev === 10 - 1) { // 10 will be replaced by length of data
                return 0
            }
            return  prev + 1
        })
    }
    return (
        <div className="Portfolio-Items">
            <img className="Pointer Arrow prev" role={'button'} src={prevArrow} onClick={prev} alt="" />
            { items }
            <img className="Pointer Arrow next" role={'button'} src={nextArrow} onClick={next} alt="" />
        </div>
    )
}

export default PortfolioItems