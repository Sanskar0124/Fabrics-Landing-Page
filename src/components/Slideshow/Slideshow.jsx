import React, { useState, useEffect } from 'react';
import './Slideshow.css'; // Import your CSS file for additional styles

const Slideshow = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
    };

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    return (
        <div className="slideshow-container">
            <div className="slide">
                <img className='slide-img' src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
            </div>
            <button className="prev" onClick={goToPrevSlide}>&#10094;</button>
            <button className="next" onClick={goToNextSlide}>&#10095;</button>
        </div>
    );
};

export default Slideshow;
