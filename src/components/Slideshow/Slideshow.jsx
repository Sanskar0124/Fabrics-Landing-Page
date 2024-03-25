import React, { useState, useEffect } from 'react';
import './Slideshow.css'; // Import your CSS file for additional styles

const Slideshow = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState('right');

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 2500); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    const goToPrevSlide = () => {
        if (currentSlide > 0)
            setCurrentSlide(currentSlide - 1);
        else
            setCurrentSlide(images.length);
    };

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    return (
        <div className="slideshow-container">
            <div className="slide">
                <img className='slide-img' src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
            </div>
        </div>
    );
};

export default Slideshow;
