import React, { useEffect, useState } from "react";
import EsquemaRoca from "../images/esquemap-lineaRoca.svg";
import "./styles.css";

const SvgComponent: React.FC = () => {
    const [ancho, setAncho] = useState("3900px");
    const [alto, setAlto] = useState("900px");

    useEffect(() => {
        const handleOrientationChange = () => {
            if (typeof window.orientation !== "undefined") {
                const orientacion = window.orientation;
                if (orientacion === 0) {
                    setAncho("400px");
                    setAlto("700px");
                } else if (Math.abs(orientacion) === 90) {
                    setAncho("800px");
                    setAlto("350px");
                    entrarEnFullscreen();
                } else {
                    // Otra orientación, puedes manejar esto según tus necesidades
                    setAncho("800px");
                    setAlto("350px");
                }
            } else {
                // La propiedad window.orientation no está definida en este dispositivo
                setAncho("3900px");
                setAlto("900px");
            }
        };

        const entrarEnFullscreen = () => {
            const element = document.documentElement;
            if (element.requestFullscreen) {
                element
                    .requestFullscreen()
                    .then(() => {
                        console.log("Entró en fullscreen correctamente.");
                    })
                    .catch((error) => {
                        console.error(
                            "Error al intentar entrar en fullscreen:",
                            error
                        );
                        console.log(
                            error
                            
                        );
                    });
            } else {
                console.log("Tu navegador no soporta el modo fullscreen.");
            }
        };

        // Llama a la función una vez para establecer el estado inicial
        handleOrientationChange();

        // Suscribirse al evento de cambio de orientación
        window.addEventListener("orientationchange", handleOrientationChange);

        // Limpiar el event listener al desmontar el componente
        return () => {
            window.removeEventListener(
                "orientationchange",
                handleOrientationChange
            );
        };
    }, []);

    return (
        <div id="svg-container">
            <iframe
                id="svg-image"
                src={EsquemaRoca}
                width={ancho}
                height={alto}
            />
        </div>
    );
};

export default SvgComponent;
