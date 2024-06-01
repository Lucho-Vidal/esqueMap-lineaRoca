import { useState } from "react";

interface CarouselProps {
    images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="carousel">
            <img src={require('../images/1.png')} alt="css" />
            <button onClick={prevSlide}>&#10094;</button>
            {images.map((image, i) => (
                <div key={i} className={i === index ? "slide active" : "slide"}>
                    <img src={image} alt={`Slide ${i}`} />
                </div>
            ))}
            <button onClick={nextSlide}>&#10095;</button>
        </div>
    );
};

export default Carousel;
