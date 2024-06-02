
import React, { useEffect, useState } from "react";
import importAllImages from "./imageImports";
import Carousel from "./Carousel";

const Esquemas: React.FC = () => {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const loadImages = async () => {
            const loadedImages = await importAllImages();
            setImages(loadedImages);
        };

        loadImages();
    }, []);

    return (
        <div className="app">
            {images.length > 0 && <Carousel images={images} />}
        </div>
    );
};

export default Esquemas;
