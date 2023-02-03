import './slider.scss';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';

export default function Slider() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev)=> prev + 1 )
    }

    const data = [
        'https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/5325586/pexels-photo-5325586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ]
    return (
        <div className="sliderContainer">
            <div className="sliderImages" style={{transform : `translate(-${currentSlide * 100}vw)`}}>
                <img src={data[0]} alt=''/>
                <img src={data[1]} alt=''/>
                <img src={data[2]} alt=''/>
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <ArrowBackIosNewIcon/>
                </div>
                <div className="icon" onClick={nextSlide}>
                    <ArrowForwardIosIcon/>
                </div>
            </div>
            
        </div>
    )
}