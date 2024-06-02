import React, { useState } from "react";

interface CarouselProps {
    images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [index, setIndex] = useState(0);

    const prevSlide = () => {
        setIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative w-full max-w-8xl mx-auto overflow-hidden" style={{ height: '980px' }}>
            {images.map((image, i) => (
                <div 
                    key={i} 
                    className={`w-full transition-transform duration-1000 ease-in-out transform ${
                        i === index ? "translate-x-0" : "translate-x-full"
                    } absolute top-0 left-0`}>
                    <img src={image} alt={`Slide ${i}`} className="w-full" />
                </div>
            ))}
                <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full"
                onClick={prevSlide}
            >
                &#10094;
            </button>
            <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full"
                onClick={nextSlide}
            >
                &#10095;
            </button>
            
        </div>
    );
};

export default Carousel;
