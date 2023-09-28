import star from '../../../assets/images/star.png';
import greyStar from '../../../assets/images/grey-star.png';
import { useState } from "react";

const Feedback = () => {

    const [rating, setRating ] = useState(0)
    function rate(number) {
        if (rating === number) {
            setRating(number - 1)
        }
        else {

            setRating(number)
        }
    }
    function submitRate(event, rate) {
        event.preventDefault()
        alert(`You rated the service provider ${rate}`)
        setRating(0)
    }
    return (
        <form onSubmit={(event) => submitRate(event,rating)} className="Feedback">
            <h3>Rate the service provider</h3>
            <div className="Stars">
                <img className="Pointer" src={ rating > 0? star : greyStar} role={'button'} alt="star" onClick={() => rate(1)} />
                <img className="Pointer" src={ rating > 1? star : greyStar} role={'button'} alt="star" onClick={() => rate(2)} />
                <img className="Pointer" src={ rating > 2? star : greyStar} role={'button'} alt="star" onClick={() => rate(3)} />
                <img className="Pointer" src={ rating > 3? star : greyStar} role={'button'} alt="star" onClick={() => rate(4)} />
                <img className="Pointer" src={ rating > 4? star : greyStar} role={'button'} alt="star" onClick={() => rate(5)} />
            </div>
            <button className="Pointer">Submit</button>
        </form>
    )
}

export default Feedback