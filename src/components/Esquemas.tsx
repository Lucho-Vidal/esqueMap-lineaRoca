import Carousel from "./Carousel";
const images:string[] = []
for (let i = 1; i <= 13; i++) {
        images.push(require(`../images/${i+1}.png`));
    }
const Esquemas = () => {
    // const images = [
    //     "images/1.png",
    //     "images/2.png",
    //     "../images/3.png",
    //     "../images/4.png",
    //     "../images/5.png",
    //     "../images/6.png",
    //     "../images/7.png",
    //     "../images/8.png",
    //     "../images/9.png",
    //     "../images/10.png",
    //     "../images/11.png",
    //     "../images/12.png",
    //     "../images/13.png",

    //     // Agrega más imágenes aquí según sea necesario
    // ];
    

    return (
        <div className="app">
            <h1>Carousel Example</h1>
            <Carousel images={images} />
        </div>
    );
};

export default Esquemas;
