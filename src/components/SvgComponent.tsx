// import EsquemaRoca from '../images/esquemap-lineaRoca.svg';
// // import Viewer from 'react-viewerjs';
// import 'viewerjs/dist/viewer.css'; // Estilos de ViewerJS

// const SvgComponent: React.FC = () => {
//     return (
//         <>
//             <img src={EsquemaRoca} alt="Esquemap" style={{ width: '100%', height: 'auto' }} />
//             {/* <Viewer fileUrl={EsquemaRoca} fileType="svg" /> */}
//         </>
//     )
// }
// export default SvgComponent;
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={16000}
        height={1200}
        {...props}
    >
        <defs>
            <linearGradient id="f">
                <stop
                    offset={0}
                    style={{
                        stopColor: "#333",
                        stopOpacity: 1,
                    }}
                />
                <stop
                    offset={1}
                    style={{
                        stopColor: "#bd30ff",
                        stopOpacity: 1,
                    }}
                />
            </linearGradient>
            <linearGradient id="e">
                <stop
                    offset={0}
                    style={{
                        stopColor: "#333",
                        stopOpacity: 1,
                    }}
                />
                <stop
                    offset={1}
                    style={{
                        stopColor: "#fff",
                        stopOpacity: 1,
                    }}
                />
            </linearGradient>
            <linearGradient id="d">
                <stop
                    offset={0}
                    style={{
                        stopColor: "#1c1818",
                        stopOpacity: 1,
                    }}
                />
                <stop
                    offset={1}
                    style={{
                        stopColor: "#1c1818",
                        stopOpacity: 0,
                    }}
                />
            </linearGradient>
            <linearGradient id="b">
                <stop
                    offset={0}
                    style={{
                        stopColor: "#333",
                        stopOpacity: 1,
                    }}
                />
                <stop
                    offset={1}
                    style={{
                        stopColor: "#fdff24",
                        stopOpacity: 1,
                    }}
                />
            </linearGradient>
            <linearGradient id="a">
                <stop
                    offset={0}
                    style={{
                        stopColor: "#333",
                        stopOpacity: 1,
                    }}
                />
                <stop
                    offset={1}
                    style={{
                        stopColor: "#3bff24",
                        stopOpacity: 1,
                    }}
                />
            </linearGradient>
            <linearGradient id="c">
                <stop
                    offset={0}
                    style={{
                        stopColor: "#333",
                        stopOpacity: 1,
                    }}
                />
                <stop
                    offset={1}
                    style={{
                        stopColor: "#ff3624",
                        stopOpacity: 1,
                    }}
                />
            </linearGradient>
            <linearGradient
                xlinkHref="#a"
                id="aE"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.45264 0 0 .33706 57.484 -91.187)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="aF"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.45264 0 0 .33706 57.444 -87.347)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="aG"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.45264 0 0 .33706 57.52 -79.663)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#c"
                id="aH"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.45264 0 0 .33706 57.53 -83.41)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#d"
                id="aI"
                x1={787.445}
                x2={792.66}
                y1={396.923}
                y2={396.923}
                gradientTransform="matrix(.45264 0 0 .33706 99.646 -84.18)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="aJ"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.33184 0 0 .23609 161.67 -30.744)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="aK"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.33184 0 0 .23609 167.482 -30.809)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#e"
                id="aL"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.33184 0 0 .23609 164.418 -33.083)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#f"
                id="aM"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.45264 0 0 .33706 57.676 -62.017)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#a"
                id="bq"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.45264 0 0 .33706 520.14 287.938)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="br"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.45264 0 0 .33706 520.167 292.52)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#c"
                id="bs"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.45264 0 0 .33706 520.23 296.853)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#d"
                id="bt"
                x1={787.445}
                x2={792.66}
                y1={396.923}
                y2={396.923}
                gradientTransform="matrix(.45264 0 0 .33706 562.364 294.124)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#a"
                id="bl"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.45264 0 0 .33706 106.247 -90.299)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="bm"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.45264 0 0 .33706 106.207 -86.46)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="bn"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.45264 0 0 .33706 106.284 -78.776)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#c"
                id="bo"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.45264 0 0 .33706 106.294 -82.522)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#d"
                id="bp"
                x1={787.445}
                x2={792.66}
                y1={396.923}
                y2={396.923}
                gradientTransform="matrix(.45264 0 0 .33706 148.41 -83.292)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#a"
                id="aN"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 369.853 -363.714)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="aO"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 369.82 -360.786)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#c"
                id="aP"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 369.893 -357.784)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#d"
                id="aQ"
                x1={787.445}
                x2={792.66}
                y1={396.923}
                y2={396.923}
                gradientTransform="matrix(.37897 0 0 .25702 405.153 -358.37)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="aR"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.27782 0 0 .18003 457.081 -317.623)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="aS"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.27782 0 0 .18003 461.947 -317.672)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#e"
                id="aT"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.27782 0 0 .18003 459.382 -319.406)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#f"
                id="aU"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 370.014 -341.47)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#a"
                id="aV"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 301.631 -305.881)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="aW"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 301.597 -302.954)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#c"
                id="aX"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 301.67 -299.951)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#d"
                id="aY"
                x1={787.445}
                x2={792.66}
                y1={396.923}
                y2={396.923}
                gradientTransform="matrix(.37897 0 0 .25702 336.93 -300.538)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="aZ"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.27782 0 0 .18003 388.859 -259.79)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="ba"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.27782 0 0 .18003 393.724 -259.84)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#e"
                id="bb"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.27782 0 0 .18003 391.16 -261.574)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#f"
                id="bc"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 301.792 -283.638)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#a"
                id="bd"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 267.715 -305.816)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="be"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 267.68 -302.889)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#c"
                id="bf"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 267.754 -299.886)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#d"
                id="bg"
                x1={787.445}
                x2={792.66}
                y1={396.923}
                y2={396.923}
                gradientTransform="matrix(.37897 0 0 .25702 303.014 -300.473)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="bh"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.27782 0 0 .18003 354.943 -259.726)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="bi"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.27782 0 0 .18003 359.808 -259.775)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#e"
                id="bj"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.27782 0 0 .18003 357.243 -261.51)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#f"
                id="bk"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 267.876 -283.573)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#a"
                id="bG"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 199.325 -365.472)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="bH"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 199.29 -362.544)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#c"
                id="bI"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 199.364 -359.542)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#d"
                id="bJ"
                x1={787.445}
                x2={792.66}
                y1={396.923}
                y2={396.923}
                gradientTransform="matrix(.37897 0 0 .25702 234.624 -360.129)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="bK"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.27782 0 0 .18003 286.552 -319.381)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="bL"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.27782 0 0 .18003 291.418 -319.43)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#e"
                id="bM"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.27782 0 0 .18003 288.853 -321.165)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#f"
                id="bN"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 199.486 -343.229)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#a"
                id="bO"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 164.665 -365.306)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="bP"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 164.631 -362.378)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#c"
                id="bQ"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 164.704 -359.376)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#d"
                id="bR"
                x1={787.445}
                x2={792.66}
                y1={396.923}
                y2={396.923}
                gradientTransform="matrix(.37897 0 0 .25702 199.965 -359.963)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="bS"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.27782 0 0 .18003 251.893 -319.216)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="bT"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.27782 0 0 .18003 256.758 -319.265)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#e"
                id="bU"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.27782 0 0 .18003 254.193 -320.999)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#f"
                id="bV"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 164.826 -343.063)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#a"
                id="cD"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.43067 0 0 .32123 53.25 -396.952)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="cE"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.43067 0 0 .32123 53.21 -393.293)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#c"
                id="cF"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.43067 0 0 .32123 53.294 -389.54)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#d"
                id="cG"
                x1={787.445}
                x2={792.66}
                y1={396.923}
                y2={396.923}
                gradientTransform="matrix(.43067 0 0 .32123 93.365 -390.275)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="cH"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.31573 0 0 .225 152.378 -339.348)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="cI"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.31573 0 0 .225 157.907 -339.41)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#e"
                id="cJ"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.31573 0 0 .225 154.992 -341.577)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#f"
                id="cK"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.43067 0 0 .32123 53.432 -369.153)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#a"
                id="cL"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.43067 0 0 .32123 23.418 -398.197)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="cM"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.43067 0 0 .32123 23.38 -394.538)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#c"
                id="cN"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.43067 0 0 .32123 23.462 -390.786)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#d"
                id="cO"
                x1={787.445}
                x2={792.66}
                y1={396.923}
                y2={396.923}
                gradientTransform="matrix(.43067 0 0 .32123 63.534 -391.52)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="cP"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.31573 0 0 .225 122.547 -340.593)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="cQ"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.31573 0 0 .225 128.076 -340.655)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#e"
                id="cR"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.31573 0 0 .225 125.16 -342.822)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#f"
                id="cS"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.43067 0 0 .32123 23.601 -370.398)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#a"
                id="au"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.43067 0 0 .32123 -46.845 -431.202)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="av"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.43067 0 0 .32123 -46.883 -427.543)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#c"
                id="aw"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.43067 0 0 .32123 -46.8 -423.79)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#d"
                id="ax"
                x1={787.445}
                x2={792.66}
                y1={396.923}
                y2={396.923}
                gradientTransform="matrix(.43067 0 0 .32123 -6.729 -424.524)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="ay"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.31573 0 0 .225 52.284 -373.598)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="az"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.31573 0 0 .225 57.813 -373.66)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#e"
                id="aA"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.31573 0 0 .225 54.898 -375.827)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#f"
                id="aB"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.43067 0 0 .32123 -46.662 -403.402)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#a"
                id="cT"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.45588 0 0 .30515 -86.535 -486.787)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="cU"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.45588 0 0 .30515 -86.576 -483.31)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#c"
                id="cV"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.45588 0 0 .30515 -86.488 -479.746)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#d"
                id="cW"
                x1={787.445}
                x2={792.66}
                y1={396.923}
                y2={396.923}
                gradientTransform="matrix(.45588 0 0 .30515 -44.071 -480.443)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="cX"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.3342 0 0 .21374 18.396 -432.066)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="cY"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.3342 0 0 .21374 24.248 -432.124)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#e"
                id="cZ"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.3342 0 0 .21374 21.163 -434.183)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#f"
                id="da"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.45588 0 0 .30515 -86.341 -460.378)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#d"
                id="bW"
                x1={787.445}
                x2={792.66}
                y1={396.923}
                y2={396.923}
                gradientTransform="matrix(.47453 0 0 .18233 45.6 -24.893)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="bX"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.33184 0 0 .23609 125.323 -32.644)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="bY"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.33184 0 0 .23609 131.134 -32.709)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#e"
                id="bZ"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.33184 0 0 .23609 128.07 -34.982)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#d"
                id="db"
                x1={787.445}
                x2={792.66}
                y1={396.923}
                y2={396.923}
                gradientTransform="matrix(.47453 0 0 .18233 38.343 106.012)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="dc"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.33184 0 0 .23609 119.158 98.225)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="dd"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.33184 0 0 .23609 124.97 98.16)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#e"
                id="de"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.33184 0 0 .23609 121.906 95.887)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#d"
                id="df"
                x1={787.445}
                x2={792.66}
                y1={396.923}
                y2={396.923}
                gradientTransform="matrix(.47453 0 0 .18233 38.343 106.012)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="dg"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.33184 0 0 .23609 119.158 98.225)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="dh"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.33184 0 0 .23609 124.97 98.16)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#e"
                id="di"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.33184 0 0 .23609 121.906 95.887)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#d"
                id="ca"
                x1={787.445}
                x2={792.66}
                y1={396.923}
                y2={396.923}
                gradientTransform="matrix(.47453 0 0 .18233 45.6 -24.893)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="cb"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.33184 0 0 .23609 125.323 -32.644)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="cc"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.33184 0 0 .23609 131.134 -32.709)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#e"
                id="cd"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.33184 0 0 .23609 128.07 -34.982)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#d"
                id="ce"
                x1={787.445}
                x2={792.66}
                y1={396.923}
                y2={396.923}
                gradientTransform="matrix(.47453 0 0 .18233 45.6 -24.893)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="cf"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.33184 0 0 .23609 125.323 -32.644)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="cg"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.33184 0 0 .23609 131.134 -32.709)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#e"
                id="ch"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.33184 0 0 .23609 128.07 -34.982)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#d"
                id="cq"
                x1={787.445}
                x2={792.66}
                y1={396.923}
                y2={396.923}
                gradientTransform="matrix(.47453 0 0 .18233 45.6 -24.893)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="cr"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.33184 0 0 .23609 125.323 -32.644)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="cs"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.33184 0 0 .23609 131.134 -32.709)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#e"
                id="ct"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.33184 0 0 .23609 128.07 -34.982)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#d"
                id="ci"
                x1={787.445}
                x2={792.66}
                y1={396.923}
                y2={396.923}
                gradientTransform="matrix(.47453 0 0 .18233 45.6 -24.893)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="cj"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.33184 0 0 .23609 125.323 -32.644)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="ck"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.33184 0 0 .23609 131.134 -32.709)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#e"
                id="cl"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.33184 0 0 .23609 128.07 -34.982)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#a"
                id="cu"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 405.182 -365.77)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="cv"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 405.148 -362.842)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="cw"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 405.213 -356.983)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#c"
                id="cx"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 405.221 -359.84)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#d"
                id="cy"
                x1={787.445}
                x2={792.66}
                y1={396.923}
                y2={396.923}
                gradientTransform="matrix(.37897 0 0 .25702 440.482 -360.427)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="cz"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.27782 0 0 .18003 492.41 -319.68)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="cC"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.27782 0 0 .18003 496.898 -334.533)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#e"
                id="cA"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.27782 0 0 .18003 494.71 -321.462)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#f"
                id="cB"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 405.343 -343.526)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#a"
                id="dj"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 405.182 -365.77)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="dk"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 405.148 -362.842)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="dl"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 405.213 -356.983)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#c"
                id="dm"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 405.221 -359.84)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#d"
                id="dn"
                x1={787.445}
                x2={792.66}
                y1={396.923}
                y2={396.923}
                gradientTransform="matrix(.37897 0 0 .25702 440.482 -360.427)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="do"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.27782 0 0 .18003 492.41 -319.68)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#e"
                id="dp"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.27782 0 0 .18003 494.71 -321.462)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#f"
                id="dq"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 405.343 -343.526)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="dr"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.27782 0 0 .18003 496.898 -334.533)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#a"
                id="ds"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 405.182 -365.77)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="dt"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 405.148 -362.842)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="du"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 405.213 -356.983)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#c"
                id="dv"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 405.221 -359.84)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#d"
                id="dw"
                x1={787.445}
                x2={792.66}
                y1={396.923}
                y2={396.923}
                gradientTransform="matrix(.37897 0 0 .25702 440.482 -360.427)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="dx"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.27782 0 0 .18003 492.41 -319.68)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#e"
                id="dy"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.27782 0 0 .18003 494.71 -321.462)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#f"
                id="dz"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 405.343 -343.526)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="dA"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.27782 0 0 .18003 496.898 -334.533)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#a"
                id="dB"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 405.182 -365.77)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="dC"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 405.148 -362.842)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="dD"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 405.213 -356.983)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#c"
                id="dE"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 405.221 -359.84)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#d"
                id="dF"
                x1={787.445}
                x2={792.66}
                y1={396.923}
                y2={396.923}
                gradientTransform="matrix(.37897 0 0 .25702 440.482 -360.427)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="dG"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.27782 0 0 .18003 492.41 -319.68)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#e"
                id="dH"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.27782 0 0 .18003 494.71 -321.462)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#f"
                id="dI"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 405.343 -343.526)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="dJ"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.27782 0 0 .18003 496.898 -334.533)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#a"
                id="dK"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 405.182 -365.77)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="dL"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 405.148 -362.842)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="dM"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 405.213 -356.983)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#c"
                id="dN"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 405.221 -359.84)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#d"
                id="dO"
                x1={787.445}
                x2={792.66}
                y1={396.923}
                y2={396.923}
                gradientTransform="matrix(.37897 0 0 .25702 440.482 -360.427)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="dP"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.27782 0 0 .18003 492.41 -319.68)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#e"
                id="dQ"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.27782 0 0 .18003 494.71 -321.462)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#f"
                id="dR"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.37897 0 0 .25702 405.343 -343.526)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="dS"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.27782 0 0 .18003 496.898 -334.533)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#a"
                id="bu"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.45264 0 0 .33706 -1401.63 291.771)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="bv"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.45264 0 0 .33706 -1401.603 296.353)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#c"
                id="bw"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.45264 0 0 .33706 -1401.539 300.686)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#d"
                id="bx"
                x1={787.445}
                x2={792.66}
                y1={396.923}
                y2={396.923}
                gradientTransform="matrix(.45264 0 0 .33706 -1359.406 297.957)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#a"
                id="bC"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.45264 0 0 .33706 -1401.63 291.771)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="bD"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.45264 0 0 .33706 -1401.603 296.353)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#c"
                id="bE"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.45264 0 0 .33706 -1401.539 300.686)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#d"
                id="bF"
                x1={787.445}
                x2={792.66}
                y1={396.923}
                y2={396.923}
                gradientTransform="matrix(.45264 0 0 .33706 -1359.406 297.957)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#d"
                id="cm"
                x1={787.445}
                x2={792.66}
                y1={396.923}
                y2={396.923}
                gradientTransform="matrix(.47453 0 0 .18233 45.6 -24.893)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="cn"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.33184 0 0 .23609 125.323 -32.644)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="co"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.33184 0 0 .23609 131.134 -32.709)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#e"
                id="cp"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.33184 0 0 .23609 128.07 -34.982)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#a"
                id="by"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.45264 0 0 .33706 -1401.63 291.771)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="bz"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.45264 0 0 .33706 -1401.603 296.353)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#c"
                id="bA"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.45264 0 0 .33706 -1401.539 300.686)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#d"
                id="bB"
                x1={787.445}
                x2={792.66}
                y1={396.923}
                y2={396.923}
                gradientTransform="matrix(.45264 0 0 .33706 -1359.406 297.957)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#d"
                id="dT"
                x1={787.445}
                x2={792.66}
                y1={396.923}
                y2={396.923}
                gradientTransform="matrix(.47453 0 0 .18233 45.6 -24.893)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="dU"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.33184 0 0 .23609 125.323 -32.644)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="dV"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.33184 0 0 .23609 131.134 -32.709)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#e"
                id="dW"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.33184 0 0 .23609 128.07 -34.982)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#d"
                id="eb"
                x1={787.445}
                x2={792.66}
                y1={396.923}
                y2={396.923}
                gradientTransform="matrix(.47453 0 0 .18233 45.6 -24.893)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="ec"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.33184 0 0 .23609 125.323 -32.644)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="ed"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.33184 0 0 .23609 131.134 -32.709)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#e"
                id="ee"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.33184 0 0 .23609 128.07 -34.982)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#d"
                id="dX"
                x1={787.445}
                x2={792.66}
                y1={396.923}
                y2={396.923}
                gradientTransform="matrix(.47453 0 0 .18233 45.6 -24.893)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="dY"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.33184 0 0 .23609 125.323 -32.644)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#b"
                id="dZ"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.33184 0 0 .23609 131.134 -32.709)"
                gradientUnits="userSpaceOnUse"
            />
            <linearGradient
                xlinkHref="#e"
                id="ea"
                x1={876.194}
                x2={888.646}
                y1={350.163}
                y2={350.163}
                gradientTransform="matrix(.33184 0 0 .23609 128.07 -34.982)"
                gradientUnits="userSpaceOnUse"
            />
            <path id="at" d="M47.012 743.336h138.992v30.66H47.012z" />
            <path id="n" d="M1253.655 451.043h532.803v76.309h-532.803z" />
            <path id="m" d="M782.342 185.153h57.062v33.045h-57.062z" />
            <path id="h" d="M924.23 133.542h50.759v28.275H924.23z" />
            <path id="g" d="M12.945 1009.737h35.429v30.66H12.945z" />
            <path id="i" d="M924.23 133.542h50.759v28.275H924.23z" />
            <path id="j" d="M924.23 133.542h50.759v28.275H924.23z" />
            <path id="q" d="M1253.655 451.043h532.803v76.309h-532.803z" />
            <path id="o" d="M924.23 133.542h50.759v28.275H924.23z" />
            <path id="p" d="M1253.655 451.043h532.803v76.309h-532.803z" />
            <path id="r" d="M1253.655 451.043h532.803v76.309h-532.803z" />
            <path id="t" d="M1253.655 451.043h532.803v76.309h-532.803z" />
            <path id="k" d="M924.23 133.542h50.759v28.275H924.23z" />
            <path id="l" d="M924.23 133.542h50.759v28.275H924.23z" />
            <path id="s" d="M924.23 133.542h50.759v28.275H924.23z" />
            <path id="u" d="M924.23 133.542h50.759v28.275H924.23z" />
            <path id="v" d="M1253.655 451.043h532.803v76.309h-532.803z" />
            <path id="w" d="M924.23 133.542h50.759v28.275H924.23z" />
            <path id="x" d="M1253.655 451.043h532.803v76.309h-532.803z" />
            <path id="y" d="M924.23 133.542h50.759v28.275H924.23z" />
            <path id="z" d="M1253.655 451.043h532.803v76.309h-532.803z" />
            <path id="A" d="M924.23 133.542h50.759v28.275H924.23z" />
            <path id="B" d="M1253.655 451.043h532.803v76.309h-532.803z" />
            <path id="C" d="M924.23 133.542h50.759v28.275H924.23z" />
            <path id="D" d="M1253.655 451.043h532.803v76.309h-532.803z" />
            <path id="E" d="M924.23 133.542h50.759v28.275H924.23z" />
            <path id="F" d="M1253.655 451.043h532.803v76.309h-532.803z" />
            <path id="G" d="M924.23 133.542h50.759v28.275H924.23z" />
            <path id="H" d="M1253.655 451.043h532.803v76.309h-532.803z" />
            <path id="I" d="M924.23 133.542h50.759v28.275H924.23z" />
            <path id="J" d="M1253.655 451.043h532.803v76.309h-532.803z" />
            <path id="K" d="M924.23 133.542h50.759v28.275H924.23z" />
            <path id="L" d="M1253.655 451.043h532.803v76.309h-532.803z" />
            <path id="M" d="M924.23 133.542h50.759v28.275H924.23z" />
            <path id="N" d="M1253.655 451.043h532.803v76.309h-532.803z" />
            <path id="P" d="M924.23 133.542h50.759v28.275H924.23z" />
            <path id="Q" d="M1253.655 451.043h532.803v76.309h-532.803z" />
            <path id="R" d="M924.23 133.542h50.759v28.275H924.23z" />
            <path id="S" d="M1253.655 451.043h532.803v76.309h-532.803z" />
            <path id="T" d="M924.23 133.542h50.759v28.275H924.23z" />
            <path id="U" d="M1253.655 451.043h532.803v76.309h-532.803z" />
            <path id="V" d="M924.23 133.542h50.759v28.275H924.23z" />
            <path id="W" d="M1253.655 451.043h532.803v76.309h-532.803z" />
            <path id="X" d="M924.23 133.542h50.759v28.275H924.23z" />
            <path id="Y" d="M1253.655 451.043h532.803v76.309h-532.803z" />
            <path id="ab" d="M924.23 133.542h50.759v28.275H924.23z" />
            <path id="ac" d="M1253.655 451.043h532.803v76.309h-532.803z" />
            <path id="O" d="M1253.655 451.043h532.803v76.309h-532.803z" />
            <path id="ad" d="M924.23 133.542h50.759v28.275H924.23z" />
            <path id="ae" d="M1253.655 451.043h532.803v76.309h-532.803z" />
            <path id="af" d="M924.23 133.542h50.759v28.275H924.23z" />
            <path id="ag" d="M1253.655 451.043h532.803v76.309h-532.803z" />
            <path id="ah" d="M924.23 133.542h50.759v28.275H924.23z" />
            <path id="ai" d="M1253.655 451.043h532.803v76.309h-532.803z" />
            <path id="al" d="M924.23 133.542h50.759v28.275H924.23z" />
            <path id="am" d="M1253.655 451.043h532.803v76.309h-532.803z" />
            <path id="an" d="M924.23 133.542h50.759v28.275H924.23z" />
            <path id="ao" d="M1253.655 451.043h532.803v76.309h-532.803z" />
            <path id="ap" d="M924.23 133.542h50.759v28.275H924.23z" />
            <path id="aq" d="M1253.655 451.043h532.803v76.309h-532.803z" />
            <path id="ar" d="M924.23 133.542h50.759v28.275H924.23z" />
            <path id="as" d="M1253.655 451.043h532.803v76.309h-532.803z" />
            <path id="aj" d="M924.23 133.542h50.759v28.275H924.23z" />
            <path id="ak" d="M1253.655 451.043h532.803v76.309h-532.803z" />
            <path id="aC" d="M924.23 133.542h50.759v28.275H924.23z" />
            <path id="aD" d="M1253.655 451.043h532.803v76.309h-532.803z" />
            <path id="Z" d="M924.23 133.542h50.759v28.275H924.23z" />
            <path id="aa" d="M1253.655 451.043h532.803v76.309h-532.803z" />
        </defs>
        <rect
            width={161.055}
            height={4.841}
            x={3493.835}
            y={-2635.248}
            ry={1.337}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 1.60129,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.75097 .66033 -.77655 .63006 0 0)"
        />
        <rect
            width={158.07}
            height={57.232}
            x={11208.771}
            y={499.067}
            ry={1.514}
            style={{
                fill: "#b7bec8",
                fillRule: "evenodd",
                strokeWidth: 1.92344,
                paintOrder: "stroke fill markers",
            }}
        />
        <rect
            width={102.617}
            height={5.39}
            x={11033.462}
            y={5306.053}
            ry={0.643}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 0.868464,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.90833 -.41826 .03167 .9995 0 0)"
        />
        <rect
            width={120.939}
            height={6.193}
            x={11275.109}
            y={6211.608}
            ry={0.878}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 1.10114,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.87482 -.48444 .02634 .99965 0 0)"
        />
        <rect
            width={93.26}
            height={5.744}
            x={1113.776}
            y={-363.437}
            ry={0.695}
            style={{
                opacity: 1,
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 4.06253,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.65642 .7544 -.79417 .60769 0 0)"
        />
        <rect
            width={66.914}
            height={4.835}
            x={1001.039}
            y={-414.425}
            ry={0.516}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 3.02467,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.5995 .80037 -.8159 .57818 0 0)"
        />
        <rect
            width={183.74}
            height={5.535}
            x={367.727}
            y={281.231}
            ry={0}
            style={{
                opacity: 0.97,
                fill: "#333",
                strokeWidth: 0.295262,
            }}
        />
        <rect
            width={66.906}
            height={4.78}
            x={382.008}
            y={-134.805}
            ry={0.51}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 3.00732,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.58537 .81077 -.8057 .59233 0 0)"
        />
        <rect
            width={73.833}
            height={4.601}
            x={-16.167}
            y={-1010.761}
            ry={0.563}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 3.2447,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.69165 .72224 -.82202 -.56946 0 0)"
        />
        <rect
            width={15912.563}
            height={21.803}
            x={31.224}
            y={1140.039}
            ry={8.857}
            style={{
                opacity: 0.97,
                fill: "#999",
                strokeWidth: 1.00114,
            }}
        />
        <g transform="matrix(.7643 0 0 .80113 -151.143 623.362)">
            <ellipse
                cx={245.962}
                cy={656.806}
                rx={22.484}
                ry={21.803}
                style={{
                    opacity: 0.97,
                    fill: "#06f",
                }}
            />
            <ellipse
                cx={245.877}
                cy={657.275}
                rx={15.756}
                ry={15.117}
                style={{
                    opacity: 0.97,
                    fill: "#fff",
                    strokeWidth: 1.16199,
                }}
            />
        </g>
        <ellipse
            cx={94.72}
            cy={37.408}
            rx={17.184}
            ry={17.467}
            style={{
                opacity: 0.97,
                fill: "#06f",
                strokeWidth: 0.782495,
            }}
        />
        <ellipse
            cx={94.655}
            cy={37.784}
            rx={12.042}
            ry={12.111}
            style={{
                opacity: 0.97,
                fill: "#fff",
                strokeWidth: 0.909252,
            }}
        />
        <g transform="translate(9.972 -869.464)">
            <ellipse
                cx={152}
                cy={908.268}
                rx={17.826}
                ry={16.26}
                style={{
                    opacity: 0.97,
                    fill: "#999",
                    strokeWidth: 0.95647,
                }}
            />
            <ellipse
                cx={152}
                cy={908.617}
                rx={13.484}
                ry={12.66}
                style={{
                    opacity: 0.97,
                    fill: "#fff",
                    strokeWidth: 1.09032,
                }}
            />
        </g>
        <g transform="translate(320.38 242.263)">
            <ellipse
                cx={152}
                cy={908.268}
                rx={17.826}
                ry={16.26}
                style={{
                    opacity: 0.97,
                    fill: "#999",
                    strokeWidth: 0.95647,
                }}
            />
            <ellipse
                cx={152}
                cy={908.617}
                rx={13.484}
                ry={12.66}
                style={{
                    opacity: 0.97,
                    fill: "#fff",
                    strokeWidth: 1.09032,
                }}
            />
        </g>
        <text
            xmlSpace="preserve"
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 16,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                whiteSpace: "pre",
                shapeInside: "url(#g)",
                display: "inline",
                opacity: 0.97,
                fill: "#000",
            }}
            transform="translate(-8.974 159.599)"
        >
            <tspan x={12.945} y={1022.336}>
                {"KM"}
            </tspan>
        </text>
        <text
            xmlSpace="preserve"
            x={35.994}
            y={1182.282}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 16,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                opacity: 0.97,
                fill: "#000",
            }}
        >
            <tspan x={35.994} y={1182.282}>
                {"0,000"}
            </tspan>
        </text>
        <text
            xmlSpace="preserve"
            x={454.547}
            y={1185.148}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 16,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                opacity: 0.97,
                fill: "#000",
            }}
        >
            <tspan x={454.547} y={1185.148}>
                {"0,500"}
            </tspan>
        </text>
        <g transform="translate(824.216 242.566)">
            <ellipse
                cx={152}
                cy={908.268}
                rx={17.826}
                ry={16.26}
                style={{
                    opacity: 0.97,
                    fill: "#999",
                    strokeWidth: 0.95647,
                }}
            />
            <ellipse
                cx={152}
                cy={908.617}
                rx={13.484}
                ry={12.66}
                style={{
                    opacity: 0.97,
                    fill: "#fff",
                    strokeWidth: 1.09032,
                }}
            />
        </g>
        <text
            xmlSpace="preserve"
            x={950.459}
            y={1186.236}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 16,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                opacity: 0.97,
                fill: "#000",
            }}
            transform="translate(4.088)"
        >
            <tspan x={950.459} y={1186.236}>
                {"1.000"}
            </tspan>
        </text>
        <g transform="translate(1824.216 242.089)">
            <ellipse
                cx={152}
                cy={908.268}
                rx={17.826}
                ry={16.26}
                style={{
                    opacity: 0.97,
                    fill: "#999",
                    strokeWidth: 0.95647,
                }}
            />
            <ellipse
                cx={152}
                cy={908.617}
                rx={13.484}
                ry={12.66}
                style={{
                    opacity: 0.97,
                    fill: "#fff",
                    strokeWidth: 1.09032,
                }}
            />
        </g>
        <text
            xmlSpace="preserve"
            x={950.459}
            y={1186.236}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 16,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                opacity: 0.97,
                fill: "#000",
            }}
            transform="translate(1004.088 -.478)"
        >
            <tspan x={950.459} y={1186.236}>
                {"2.000"}
            </tspan>
        </text>
        <text
            xmlSpace="preserve"
            x={144.38}
            y={72.098}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 16,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                opacity: 0.97,
                fill: "#000",
            }}
        >
            <tspan x={144.38} y={72.098}>
                {"0.000"}
            </tspan>
        </text>
        <text
            xmlSpace="preserve"
            x={987.935}
            y={141.207}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: "18.6667px",
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                textAlign: "center",
                textAnchor: "middle",
                opacity: 0.97,
                fill: "#000",
            }}
        />
        <g transform="translate(-563.337 -109.193)">
            <rect
                width={47.693}
                height={27.253}
                x={919.12}
                y={129.454}
                ry={0}
                style={{
                    opacity: 0.97,
                    fill: "#000",
                }}
            />
            <path
                d="M920.483 130.816h45.138v24.528h-45.138z"
                style={{
                    opacity: 0.97,
                    fill: "#fff",
                    strokeWidth: 1.06703,
                }}
            />
        </g>
        <text
            xmlSpace="preserve"
            x={10.586}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 24,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                whiteSpace: "pre",
                shapeInside: "url(#h)",
                display: "inline",
                opacity: 0.97,
                fill: "#000",
            }}
            transform="translate(-570.321 -114.644)"
        >
            <tspan x={936.248} y={152.437}>
                <tspan
                    style={{
                        fontSize: "18.6667px",
                        textAlign: "center",
                        textAnchor: "middle",
                    }}
                >
                    {"AN"}
                </tspan>
            </tspan>
        </text>
        <path
            d="M927.637 149.383h30.66v1.703h-30.66z"
            style={{
                opacity: 0.97,
                fill: "#000",
            }}
            transform="translate(-563.678 -109.363)"
        />
        <g transform="translate(-587.044 -118.035)">
            <rect
                width={47.693}
                height={27.253}
                x={821}
                y={138}
                ry={0}
                style={{
                    opacity: 0.97,
                    fill: "#000",
                }}
            />
            <path
                d="M822.363 139.363h45.138v24.528h-45.138z"
                style={{
                    opacity: 0.97,
                    fill: "#fff",
                    strokeWidth: 1.06703,
                }}
            />
        </g>
        <text
            xmlSpace="preserve"
            x={10.586}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 24,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                whiteSpace: "pre",
                shapeInside: "url(#i)",
                display: "inline",
                opacity: 0.97,
                fill: "#000",
            }}
            transform="translate(-692.103 -112.231)"
        >
            <tspan x={937} y={152.437}>
                <tspan
                    style={{
                        fontSize: "18.6667px",
                        textAlign: "center",
                        textAnchor: "middle",
                    }}
                >
                    {"PN"}
                </tspan>
            </tspan>
        </text>
        <path
            d="M825.303 150.247h7.154v1.703h-7.154z"
            style={{
                opacity: 0.97,
                fill: "#000",
                strokeWidth: 0.483046,
            }}
            transform="translate(-587.044 -118.035)"
        />
        <path
            d="M856.286 149.95h8.006v1.703h-8.006z"
            style={{
                opacity: 0.97,
                fill: "#000",
                strokeWidth: 0.51099,
            }}
            transform="translate(-587.044 -118.035)"
        />
        <g transform="translate(-572.11 -150.314)">
            <rect
                width={47.693}
                height={27.253}
                x={868}
                y={171}
                ry={0}
                style={{
                    opacity: 0.97,
                    fill: "#000",
                }}
            />
            <path
                d="M869.363 172.363h45.138v24.528h-45.138z"
                style={{
                    opacity: 0.97,
                    fill: "#fff",
                    strokeWidth: 1.06703,
                }}
            />
        </g>
        <text
            xmlSpace="preserve"
            x={10.586}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 24,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                whiteSpace: "pre",
                shapeInside: "url(#j)",
                display: "inline",
                opacity: 0.97,
                fill: "#000",
            }}
            transform="translate(-629.443 -110.032)"
        >
            <tspan x={936.23} y={152.437}>
                <tspan
                    style={{
                        fontSize: "18.6667px",
                        textAlign: "center",
                        textAnchor: "middle",
                    }}
                >
                    {"BN"}
                </tspan>
            </tspan>
        </text>
        <path
            d="M876.605 175.016h30.66v1.703h-30.66z"
            style={{
                opacity: 0.97,
                fill: "#000",
            }}
            transform="translate(-572.11 -150.314)"
        />
        <g transform="translate(276.856 -39.923)">
            <rect
                width={47.693}
                height={27.253}
                x={868}
                y={171}
                ry={0}
                style={{
                    opacity: 0.97,
                    fill: "#000",
                }}
            />
            <path
                d="M869.363 172.363h45.138v24.528h-45.138z"
                style={{
                    opacity: 0.97,
                    fill: "#fff",
                    strokeWidth: 1.06703,
                }}
            />
        </g>
        <text
            xmlSpace="preserve"
            x={10.586}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 24,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                whiteSpace: "pre",
                shapeInside: "url(#k)",
                display: "inline",
                opacity: 0.97,
                fill: "#000",
            }}
            transform="translate(219.522 .36)"
        >
            <tspan x={936.23} y={152.437}>
                <tspan
                    style={{
                        fontSize: "18.6667px",
                        textAlign: "center",
                        textAnchor: "middle",
                    }}
                >
                    {"BN"}
                </tspan>
            </tspan>
        </text>
        <path
            d="M876.605 175.016h30.66v1.703h-30.66z"
            style={{
                opacity: 0.97,
                fill: "#000",
            }}
            transform="translate(276.856 -39.923)"
        />
        <g transform="translate(681 -41.088)">
            <rect
                width={47.693}
                height={27.253}
                x={868}
                y={171}
                ry={0}
                style={{
                    opacity: 0.97,
                    fill: "#000",
                }}
            />
            <path
                d="M869.363 172.363h45.138v24.528h-45.138z"
                style={{
                    opacity: 0.97,
                    fill: "#fff",
                    strokeWidth: 1.06703,
                }}
            />
        </g>
        <text
            xmlSpace="preserve"
            x={10.586}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 24,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                whiteSpace: "pre",
                shapeInside: "url(#l)",
                display: "inline",
                opacity: 0.97,
                fill: "#000",
            }}
            transform="translate(623.666 -.806)"
        >
            <tspan x={936.23} y={152.437}>
                <tspan
                    style={{
                        fontSize: "18.6667px",
                        textAlign: "center",
                        textAnchor: "middle",
                    }}
                >
                    {"BN"}
                </tspan>
            </tspan>
        </text>
        <path
            d="M876.605 175.016h30.66v1.703h-30.66z"
            style={{
                opacity: 0.97,
                fill: "#000",
            }}
            transform="translate(681 -41.088)"
        />
        <rect
            width={38.542}
            height={921.744}
            x={1148.619}
            y={164.354}
            ry={10.435}
            style={{
                opacity: 0.97,
                fill: "#b3b3b3",
                strokeWidth: 1.0854,
            }}
        />
        <text
            xmlSpace="preserve"
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 24,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                textAlign: "center",
                whiteSpace: "pre",
                shapeInside: "url(#n)",
                display: "inline",
                opacity: 0.97,
                fill: "#000",
            }}
            transform="matrix(0 -.66929 .82598 0 785.585 1291.59)"
        >
            <tspan x={1374.955} y={469.939}>
                {"Km. 1,142 - BRANDSEN "}
            </tspan>
        </text>
        <rect
            width={371.303}
            height={7.21}
            x={613.899}
            y={-221.906}
            ry={1.281}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 7.59756,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.66116 .75024 -.59963 .80028 0 0)"
        />
        <g transform="matrix(1 0 0 1.15435 17.255 -20.07)">
            <rect
                width={38.542}
                height={782.404}
                x={514.364}
                y={159.165}
                ry={8.857}
                style={{
                    opacity: 0.97,
                    fill: "#b3b3b3",
                }}
            />
            <g transform="translate(-409.448 .551)">
                <rect
                    width={47.693}
                    height={27.253}
                    x={919.12}
                    y={129.454}
                    ry={0}
                    style={{
                        opacity: 0.97,
                        fill: "#000",
                    }}
                />
                <path
                    d="M920.483 130.816h45.138v24.528h-45.138z"
                    style={{
                        opacity: 0.97,
                        fill: "#fff",
                        strokeWidth: 1.06703,
                    }}
                />
            </g>
            <text
                xmlSpace="preserve"
                x={10.586}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 24,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    whiteSpace: "pre",
                    shapeInside: "url(#o)",
                    display: "inline",
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="translate(-416.432 -4.9)"
            >
                <tspan x={936.248} y={152.437}>
                    <tspan
                        style={{
                            fontSize: "18.6667px",
                            textAlign: "center",
                            textAnchor: "middle",
                        }}
                    >
                        {"AN"}
                    </tspan>
                </tspan>
            </text>
            <path
                d="M927.637 149.383h30.66v1.703h-30.66z"
                style={{
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="translate(-409.789 .38)"
            />
        </g>
        <text
            xmlSpace="preserve"
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 24,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                textAlign: "center",
                whiteSpace: "pre",
                shapeInside: "url(#p)",
                display: "inline",
                opacity: 0.97,
                fill: "#000",
            }}
            transform="matrix(0 -.6558 .82598 0 170.285 1269.926)"
        >
            <tspan x={1372.289} y={469.939}>
                {"Km. 0,525 - ITUZAINGO "}
            </tspan>
        </text>
        <path
            d="M10.181 944.751h2.96v18.698h-2.96z"
            style={{
                opacity: 0.97,
                fill: "#0055d4",
                strokeWidth: 0.429912,
            }}
        />
        <rect
            width={446.209}
            height={5.535}
            x={11.52}
            y={951.381}
            ry={0}
            style={{
                opacity: 0.97,
                fill: "#0055d4",
                strokeWidth: 0.460125,
            }}
        />
        <rect
            width={315.571}
            height={5.535}
            x={822.813}
            y={896.685}
            ry={0}
            style={{
                opacity: 0.97,
                fill: "#0055d4",
                strokeWidth: 0.386951,
            }}
        />
        <rect
            width={356.386}
            height={5.535}
            x={11.04}
            y={892.504}
            ry={0}
            style={{
                opacity: 0.97,
                fill: "#0055d4",
                strokeWidth: 0.411213,
            }}
        />
        <rect
            width={607.869}
            height={4.787}
            x={424.617}
            y={-117.144}
            ry={1.266}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 6.02853,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.67178 .74075 -.7636 .6457 0 0)"
        />
        <rect
            width={1126.618}
            height={5.535}
            x={12.145}
            y={850.507}
            ry={0}
            style={{
                opacity: 0.97,
                fill: "#0055d4",
                strokeWidth: 0.731131,
            }}
        />
        <text
            xmlSpace="preserve"
            x={1406.786}
            y={404.692}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 24,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                textAlign: "center",
                textAnchor: "middle",
                opacity: 0.97,
                fill: "#000",
            }}
        />
        <text
            xmlSpace="preserve"
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 24,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                textAlign: "center",
                whiteSpace: "pre",
                shapeInside: "url(#q)",
                display: "inline",
                opacity: 0.97,
                fill: "#000",
            }}
            transform="matrix(.56811 0 0 .82598 -16.095 -324.844)"
        >
            <tspan x={1374.955} y={469.939}>
                {"Km. 1,142 - BRANDSEN "}
            </tspan>
        </text>
        <rect
            width={38.542}
            height={925.46}
            x={1553.619}
            y={164.492}
            ry={10.477}
            style={{
                opacity: 0.97,
                fill: "#b3b3b3",
                strokeWidth: 1.08758,
            }}
        />
        <text
            xmlSpace="preserve"
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 24,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                textAlign: "center",
                whiteSpace: "pre",
                shapeInside: "url(#r)",
                display: "inline",
                opacity: 0.97,
                fill: "#000",
            }}
            transform="matrix(0 -.67198 .82598 0 1190.585 1283.31)"
        >
            <tspan x={1393.436} y={469.939}>
                {"Km. 1,547 - SUAREZ "}
            </tspan>
        </text>
        <g transform="translate(1033.725 -41.45)">
            <rect
                width={47.693}
                height={27.253}
                x={868}
                y={171}
                ry={0}
                style={{
                    opacity: 0.97,
                    fill: "#000",
                }}
            />
            <path
                d="M869.363 172.363h45.138v24.528h-45.138z"
                style={{
                    opacity: 0.97,
                    fill: "#fff",
                    strokeWidth: 1.06703,
                }}
            />
        </g>
        <text
            xmlSpace="preserve"
            x={10.586}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 24,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                whiteSpace: "pre",
                shapeInside: "url(#s)",
                display: "inline",
                opacity: 0.97,
                fill: "#000",
            }}
            transform="translate(976.391 -1.168)"
        >
            <tspan x={936.23} y={152.437}>
                <tspan
                    style={{
                        fontSize: "18.6667px",
                        textAlign: "center",
                        textAnchor: "middle",
                    }}
                >
                    {"BN"}
                </tspan>
            </tspan>
        </text>
        <path
            d="M876.605 175.016h30.66v1.703h-30.66z"
            style={{
                opacity: 0.97,
                fill: "#000",
            }}
            transform="translate(1033.725 -41.45)"
        />
        <rect
            width={38.542}
            height={927.318}
            x={1906.619}
            y={164.561}
            ry={10.498}
            style={{
                opacity: 0.97,
                fill: "#b3b3b3",
                strokeWidth: 1.08868,
            }}
        />
        <text
            xmlSpace="preserve"
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 24,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                textAlign: "center",
                whiteSpace: "pre",
                shapeInside: "url(#t)",
                display: "inline",
                opacity: 0.97,
                fill: "#000",
            }}
            transform="matrix(0 -.67333 .82598 0 1543.585 1331.222)"
        >
            <tspan x={1326.527} y={469.939}>
                {"Km. 1,900 - BENITO Q. MARTIN "}
            </tspan>
        </text>
        <g transform="translate(173.275 .45)">
            <g transform="translate(1033.725 -41.45)">
                <rect
                    width={47.693}
                    height={27.253}
                    x={868}
                    y={171}
                    ry={0}
                    style={{
                        opacity: 0.97,
                        fill: "#000",
                    }}
                />
                <path
                    d="M869.363 172.363h45.138v24.528h-45.138z"
                    style={{
                        opacity: 0.97,
                        fill: "#fff",
                        strokeWidth: 1.06703,
                    }}
                />
            </g>
            <text
                xmlSpace="preserve"
                x={10.586}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 24,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    whiteSpace: "pre",
                    shapeInside: "url(#u)",
                    display: "inline",
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="translate(976.391 -1.168)"
            >
                <tspan x={936.23} y={152.437}>
                    <tspan
                        style={{
                            fontSize: "18.6667px",
                            textAlign: "center",
                            textAnchor: "middle",
                        }}
                    >
                        {"BN"}
                    </tspan>
                </tspan>
            </text>
            <path
                d="M876.605 175.016h30.66v1.703h-30.66z"
                style={{
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="translate(1033.725 -41.45)"
            />
            <rect
                width={38.542}
                height={927.318}
                x={1906.619}
                y={164.561}
                ry={10.498}
                style={{
                    opacity: 0.97,
                    fill: "#b3b3b3",
                    strokeWidth: 1.08868,
                }}
            />
            <text
                xmlSpace="preserve"
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 24,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    whiteSpace: "pre",
                    shapeInside: "url(#v)",
                    display: "inline",
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="matrix(0 -.67333 .82598 0 1543.585 1331.222)"
            >
                <tspan x={1377.188} y={469.939}>
                    {"Km. 2,075 - ALVARADO "}
                </tspan>
            </text>
            <text
                xmlSpace="preserve"
                x={2047.875}
                y={377.009}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 16,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "start",
                    textAnchor: "start",
                    opacity: 1,
                    fill: "#0055d4",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <g transform="translate(174)">
                <g transform="translate(1033.725 -41.45)">
                    <rect
                        width={47.693}
                        height={27.253}
                        x={868}
                        y={171}
                        ry={0}
                        style={{
                            opacity: 0.97,
                            fill: "#000",
                        }}
                    />
                    <path
                        d="M869.363 172.363h45.138v24.528h-45.138z"
                        style={{
                            opacity: 0.97,
                            fill: "#fff",
                            strokeWidth: 1.06703,
                        }}
                    />
                </g>
                <text
                    xmlSpace="preserve"
                    x={10.586}
                    style={{
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: 400,
                        fontStretch: "normal",
                        fontSize: 24,
                        lineHeight: 1,
                        fontFamily: "sans-serif",
                        InkscapeFontSpecification: "sans-serif",
                        whiteSpace: "pre",
                        shapeInside: "url(#w)",
                        display: "inline",
                        opacity: 0.97,
                        fill: "#000",
                    }}
                    transform="translate(976.391 -1.168)"
                >
                    <tspan x={936.23} y={152.437}>
                        <tspan
                            style={{
                                fontSize: "18.6667px",
                                textAlign: "center",
                                textAnchor: "middle",
                            }}
                        >
                            {"BN"}
                        </tspan>
                    </tspan>
                </text>
                <path
                    d="M876.605 175.016h30.66v1.703h-30.66z"
                    style={{
                        opacity: 0.97,
                        fill: "#000",
                    }}
                    transform="translate(1033.725 -41.45)"
                />
                <rect
                    width={38.542}
                    height={927.318}
                    x={1906.619}
                    y={164.561}
                    ry={10.498}
                    style={{
                        opacity: 0.97,
                        fill: "#b3b3b3",
                        strokeWidth: 1.08868,
                    }}
                />
                <text
                    xmlSpace="preserve"
                    style={{
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: 400,
                        fontStretch: "normal",
                        fontSize: 24,
                        lineHeight: 1,
                        fontFamily: "sans-serif",
                        InkscapeFontSpecification: "sans-serif",
                        textAlign: "center",
                        whiteSpace: "pre",
                        shapeInside: "url(#x)",
                        display: "inline",
                        opacity: 0.97,
                        fill: "#000",
                    }}
                    transform="matrix(0 -.67333 .82598 0 1543.585 1331.222)"
                >
                    <tspan x={1367.49} y={469.939}>
                        {"Km. 2,249 - CALIFORNIA "}
                    </tspan>
                </text>
            </g>
            <g transform="translate(282)">
                <g transform="translate(1033.725 -41.45)">
                    <rect
                        width={47.693}
                        height={27.253}
                        x={868}
                        y={171}
                        ry={0}
                        style={{
                            opacity: 0.97,
                            fill: "#000",
                        }}
                    />
                    <path
                        d="M869.363 172.363h45.138v24.528h-45.138z"
                        style={{
                            opacity: 0.97,
                            fill: "#fff",
                            strokeWidth: 1.06703,
                        }}
                    />
                </g>
                <text
                    xmlSpace="preserve"
                    x={10.586}
                    style={{
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: 400,
                        fontStretch: "normal",
                        fontSize: 24,
                        lineHeight: 1,
                        fontFamily: "sans-serif",
                        InkscapeFontSpecification: "sans-serif",
                        whiteSpace: "pre",
                        shapeInside: "url(#y)",
                        display: "inline",
                        opacity: 0.97,
                        fill: "#000",
                    }}
                    transform="translate(976.391 -1.168)"
                >
                    <tspan x={936.23} y={152.437}>
                        <tspan
                            style={{
                                fontSize: "18.6667px",
                                textAlign: "center",
                                textAnchor: "middle",
                            }}
                        >
                            {"BN"}
                        </tspan>
                    </tspan>
                </text>
                <path
                    d="M876.605 175.016h30.66v1.703h-30.66z"
                    style={{
                        opacity: 0.97,
                        fill: "#000",
                    }}
                    transform="translate(1033.725 -41.45)"
                />
                <rect
                    width={38.542}
                    height={927.318}
                    x={1906.619}
                    y={164.561}
                    ry={10.498}
                    style={{
                        opacity: 0.97,
                        fill: "#b3b3b3",
                        strokeWidth: 1.08868,
                    }}
                />
                <text
                    xmlSpace="preserve"
                    style={{
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: 400,
                        fontStretch: "normal",
                        fontSize: 24,
                        lineHeight: 1,
                        fontFamily: "sans-serif",
                        InkscapeFontSpecification: "sans-serif",
                        textAlign: "center",
                        whiteSpace: "pre",
                        shapeInside: "url(#z)",
                        display: "inline",
                        opacity: 0.97,
                        fill: "#000",
                    }}
                    transform="matrix(0 -.67333 .82598 0 1543.585 1331.222)"
                >
                    <tspan x={1393.096} y={469.939}>
                        {"Km. 2,357 - IRIARTE"}
                    </tspan>
                </text>
            </g>
            <g transform="translate(438)">
                <g transform="translate(1033.725 -41.45)">
                    <rect
                        width={47.693}
                        height={27.253}
                        x={868}
                        y={171}
                        ry={0}
                        style={{
                            opacity: 0.97,
                            fill: "#000",
                        }}
                    />
                    <path
                        d="M869.363 172.363h45.138v24.528h-45.138z"
                        style={{
                            opacity: 0.97,
                            fill: "#fff",
                            strokeWidth: 1.06703,
                        }}
                    />
                </g>
                <text
                    xmlSpace="preserve"
                    x={10.586}
                    style={{
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: 400,
                        fontStretch: "normal",
                        fontSize: 24,
                        lineHeight: 1,
                        fontFamily: "sans-serif",
                        InkscapeFontSpecification: "sans-serif",
                        whiteSpace: "pre",
                        shapeInside: "url(#A)",
                        display: "inline",
                        opacity: 0.97,
                        fill: "#000",
                    }}
                    transform="translate(976.391 -1.168)"
                >
                    <tspan x={936.23} y={152.437}>
                        <tspan
                            style={{
                                fontSize: "18.6667px",
                                textAlign: "center",
                                textAnchor: "middle",
                            }}
                        >
                            {"BN"}
                        </tspan>
                    </tspan>
                </text>
                <path
                    d="M876.605 175.016h30.66v1.703h-30.66z"
                    style={{
                        opacity: 0.97,
                        fill: "#000",
                    }}
                    transform="translate(1033.725 -41.45)"
                />
                <rect
                    width={38.542}
                    height={927.318}
                    x={1906.619}
                    y={164.561}
                    ry={10.498}
                    style={{
                        opacity: 0.97,
                        fill: "#b3b3b3",
                        strokeWidth: 1.08868,
                    }}
                />
                <text
                    xmlSpace="preserve"
                    style={{
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: 400,
                        fontStretch: "normal",
                        fontSize: 24,
                        lineHeight: 1,
                        fontFamily: "sans-serif",
                        InkscapeFontSpecification: "sans-serif",
                        textAlign: "center",
                        whiteSpace: "pre",
                        shapeInside: "url(#B)",
                        display: "inline",
                        opacity: 0.97,
                        fill: "#000",
                    }}
                    transform="matrix(0 -.67333 .82598 0 1543.585 1331.222)"
                >
                    <tspan x={1365.814} y={469.939}>
                        {"Km. 2,513 - RIO CUARTO "}
                    </tspan>
                </text>
            </g>
            <g transform="translate(567)">
                <g transform="translate(1033.725 -41.45)">
                    <rect
                        width={47.693}
                        height={27.253}
                        x={868}
                        y={171}
                        ry={0}
                        style={{
                            opacity: 0.97,
                            fill: "#000",
                        }}
                    />
                    <path
                        d="M869.363 172.363h45.138v24.528h-45.138z"
                        style={{
                            opacity: 0.97,
                            fill: "#fff",
                            strokeWidth: 1.06703,
                        }}
                    />
                </g>
                <text
                    xmlSpace="preserve"
                    x={10.586}
                    style={{
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: 400,
                        fontStretch: "normal",
                        fontSize: 24,
                        lineHeight: 1,
                        fontFamily: "sans-serif",
                        InkscapeFontSpecification: "sans-serif",
                        whiteSpace: "pre",
                        shapeInside: "url(#C)",
                        display: "inline",
                        opacity: 0.97,
                        fill: "#000",
                    }}
                    transform="translate(976.391 -1.168)"
                >
                    <tspan x={936.23} y={152.437}>
                        <tspan
                            style={{
                                fontSize: "18.6667px",
                                textAlign: "center",
                                textAnchor: "middle",
                            }}
                        >
                            {"BN"}
                        </tspan>
                    </tspan>
                </text>
                <path
                    d="M876.605 175.016h30.66v1.703h-30.66z"
                    style={{
                        opacity: 0.97,
                        fill: "#000",
                    }}
                    transform="translate(1033.725 -41.45)"
                />
                <rect
                    width={38.542}
                    height={927.318}
                    x={1906.619}
                    y={164.561}
                    ry={10.498}
                    style={{
                        opacity: 0.97,
                        fill: "#b3b3b3",
                        strokeWidth: 1.08868,
                    }}
                />
                <text
                    xmlSpace="preserve"
                    style={{
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: 400,
                        fontStretch: "normal",
                        fontSize: 24,
                        lineHeight: 1,
                        fontFamily: "sans-serif",
                        InkscapeFontSpecification: "sans-serif",
                        textAlign: "center",
                        whiteSpace: "pre",
                        shapeInside: "url(#D)",
                        display: "inline",
                        opacity: 0.97,
                        fill: "#000",
                    }}
                    transform="matrix(0 -.67333 .82598 0 1543.585 1331.222)"
                >
                    <tspan x={1335.105} y={469.939}>
                        {"Km. 2,642 - SANTO DOMINGO "}
                    </tspan>
                </text>
            </g>
            <g transform="translate(650)">
                <g transform="translate(1033.725 -41.45)">
                    <rect
                        width={47.693}
                        height={27.253}
                        x={868}
                        y={171}
                        ry={0}
                        style={{
                            opacity: 0.97,
                            fill: "#000",
                        }}
                    />
                    <path
                        d="M869.363 172.363h45.138v24.528h-45.138z"
                        style={{
                            opacity: 0.97,
                            fill: "#fff",
                            strokeWidth: 1.06703,
                        }}
                    />
                </g>
                <text
                    xmlSpace="preserve"
                    x={10.586}
                    style={{
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: 400,
                        fontStretch: "normal",
                        fontSize: 24,
                        lineHeight: 1,
                        fontFamily: "sans-serif",
                        InkscapeFontSpecification: "sans-serif",
                        whiteSpace: "pre",
                        shapeInside: "url(#E)",
                        display: "inline",
                        opacity: 0.97,
                        fill: "#000",
                    }}
                    transform="translate(976.391 -1.168)"
                >
                    <tspan x={936.23} y={152.437}>
                        <tspan
                            style={{
                                fontSize: "18.6667px",
                                textAlign: "center",
                                textAnchor: "middle",
                            }}
                        >
                            {"BN"}
                        </tspan>
                    </tspan>
                </text>
                <path
                    d="M876.605 175.016h30.66v1.703h-30.66z"
                    style={{
                        opacity: 0.97,
                        fill: "#000",
                    }}
                    transform="translate(1033.725 -41.45)"
                />
                <rect
                    width={38.542}
                    height={927.318}
                    x={1906.619}
                    y={164.561}
                    ry={10.498}
                    style={{
                        opacity: 0.97,
                        fill: "#b3b3b3",
                        strokeWidth: 1.08868,
                    }}
                />
                <text
                    xmlSpace="preserve"
                    style={{
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: 400,
                        fontStretch: "normal",
                        fontSize: 24,
                        lineHeight: 1,
                        fontFamily: "sans-serif",
                        InkscapeFontSpecification: "sans-serif",
                        textAlign: "center",
                        whiteSpace: "pre",
                        shapeInside: "url(#F)",
                        display: "inline",
                        opacity: 0.97,
                        fill: "#000",
                    }}
                    transform="matrix(0 -.67333 .82598 0 1543.585 1331.222)"
                >
                    <tspan x={1402.582} y={469.939}>
                        {"Km. 2,725 - JORGE "}
                    </tspan>
                </text>
            </g>
            <g transform="translate(706)">
                <g transform="translate(1033.725 -41.45)">
                    <rect
                        width={47.693}
                        height={27.253}
                        x={868}
                        y={171}
                        ry={0}
                        style={{
                            opacity: 0.97,
                            fill: "#000",
                        }}
                    />
                    <path
                        d="M869.363 172.363h45.138v24.528h-45.138z"
                        style={{
                            opacity: 0.97,
                            fill: "#fff",
                            strokeWidth: 1.06703,
                        }}
                    />
                </g>
                <text
                    xmlSpace="preserve"
                    x={10.586}
                    style={{
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: 400,
                        fontStretch: "normal",
                        fontSize: 24,
                        lineHeight: 1,
                        fontFamily: "sans-serif",
                        InkscapeFontSpecification: "sans-serif",
                        whiteSpace: "pre",
                        shapeInside: "url(#G)",
                        display: "inline",
                        opacity: 0.97,
                        fill: "#000",
                    }}
                    transform="translate(976.391 -1.168)"
                >
                    <tspan x={936.23} y={152.437}>
                        <tspan
                            style={{
                                fontSize: "18.6667px",
                                textAlign: "center",
                                textAnchor: "middle",
                            }}
                        >
                            {"BN"}
                        </tspan>
                    </tspan>
                </text>
                <path
                    d="M876.605 175.016h30.66v1.703h-30.66z"
                    style={{
                        opacity: 0.97,
                        fill: "#000",
                    }}
                    transform="translate(1033.725 -41.45)"
                />
                <rect
                    width={38.542}
                    height={927.318}
                    x={1906.619}
                    y={164.561}
                    ry={10.498}
                    style={{
                        opacity: 0.97,
                        fill: "#b3b3b3",
                        strokeWidth: 1.08868,
                    }}
                />
                <text
                    xmlSpace="preserve"
                    style={{
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: 400,
                        fontStretch: "normal",
                        fontSize: 24,
                        lineHeight: 1,
                        fontFamily: "sans-serif",
                        InkscapeFontSpecification: "sans-serif",
                        textAlign: "center",
                        whiteSpace: "pre",
                        shapeInside: "url(#H)",
                        display: "inline",
                        opacity: 0.97,
                        fill: "#000",
                    }}
                    transform="matrix(0 -.67333 .82598 0 1543.585 1331.222)"
                >
                    <tspan x={1345.699} y={469.939}>
                        {"Km. 2,781 - OSVALDO CRUZ "}
                    </tspan>
                </text>
            </g>
            <g transform="translate(815)">
                <g transform="translate(1033.725 -41.45)">
                    <rect
                        width={47.693}
                        height={27.253}
                        x={868}
                        y={171}
                        ry={0}
                        style={{
                            opacity: 0.97,
                            fill: "#000",
                        }}
                    />
                    <path
                        d="M869.363 172.363h45.138v24.528h-45.138z"
                        style={{
                            opacity: 0.97,
                            fill: "#fff",
                            strokeWidth: 1.06703,
                        }}
                    />
                </g>
                <text
                    xmlSpace="preserve"
                    x={10.586}
                    style={{
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: 400,
                        fontStretch: "normal",
                        fontSize: 24,
                        lineHeight: 1,
                        fontFamily: "sans-serif",
                        InkscapeFontSpecification: "sans-serif",
                        whiteSpace: "pre",
                        shapeInside: "url(#I)",
                        display: "inline",
                        opacity: 0.97,
                        fill: "#000",
                    }}
                    transform="translate(976.391 -1.168)"
                >
                    <tspan x={936.23} y={152.437}>
                        <tspan
                            style={{
                                fontSize: "18.6667px",
                                textAlign: "center",
                                textAnchor: "middle",
                            }}
                        >
                            {"BN"}
                        </tspan>
                    </tspan>
                </text>
                <path
                    d="M876.605 175.016h30.66v1.703h-30.66z"
                    style={{
                        opacity: 0.97,
                        fill: "#000",
                    }}
                    transform="translate(1033.725 -41.45)"
                />
                <rect
                    width={38.542}
                    height={927.318}
                    x={1906.619}
                    y={164.561}
                    ry={10.498}
                    style={{
                        opacity: 0.97,
                        fill: "#b3b3b3",
                        strokeWidth: 1.08868,
                    }}
                />
                <text
                    xmlSpace="preserve"
                    style={{
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: 400,
                        fontStretch: "normal",
                        fontSize: 24,
                        lineHeight: 1,
                        fontFamily: "sans-serif",
                        InkscapeFontSpecification: "sans-serif",
                        textAlign: "center",
                        whiteSpace: "pre",
                        shapeInside: "url(#J)",
                        display: "inline",
                        opacity: 0.97,
                        fill: "#000",
                    }}
                    transform="matrix(0 -.67333 .82598 0 1543.585 1331.222)"
                >
                    <tspan x={1371.867} y={469.939}>
                        {"Km. 2,890 -  VILLARINO "}
                    </tspan>
                </text>
            </g>
        </g>
        <rect
            width={198.001}
            height={103.635}
            x={2768.454}
            y={479.762}
            ry={0}
            style={{
                fill: "#999",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#000",
                strokeWidth: 4.10044,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
        />
        <text
            xmlSpace="preserve"
            x={4258.544}
            y={342.764}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: "20.9362px",
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                textAlign: "center",
                textAnchor: "middle",
                fill: "#030303",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 3.79469,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="scale(.673 1.48588)"
        >
            <tspan
                x={4258.544}
                y={342.764}
                style={{
                    fontSize: "20.9362px",
                    strokeWidth: 3.79469,
                }}
            >
                {"HIPOLITO YRIGOYEN "}
            </tspan>
            <tspan
                x={4258.544}
                y={363.7}
                style={{
                    fontSize: "20.9362px",
                    strokeWidth: 3.79469,
                }}
            >
                {"(HY)"}
            </tspan>
            <tspan
                x={4258.544}
                y={384.636}
                style={{
                    fontSize: "20.9362px",
                    strokeWidth: 3.79469,
                }}
            >
                {"KM. 2840"}
            </tspan>
        </text>
        <g transform="translate(135.103 1.248)">
            <g transform="translate(2141.897 -42.248)">
                <rect
                    width={47.693}
                    height={27.253}
                    x={868}
                    y={171}
                    ry={0}
                    style={{
                        opacity: 0.97,
                        fill: "#000",
                    }}
                />
                <path
                    d="M869.363 172.363h45.138v24.528h-45.138z"
                    style={{
                        opacity: 0.97,
                        fill: "#fff",
                        strokeWidth: 1.06703,
                    }}
                />
            </g>
            <text
                xmlSpace="preserve"
                x={10.586}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 24,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    whiteSpace: "pre",
                    shapeInside: "url(#K)",
                    display: "inline",
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="translate(2084.563 -1.966)"
            >
                <tspan x={936.23} y={152.437}>
                    <tspan
                        style={{
                            fontSize: "18.6667px",
                            textAlign: "center",
                            textAnchor: "middle",
                        }}
                    >
                        {"BN"}
                    </tspan>
                </tspan>
            </text>
            <path
                d="M876.605 175.016h30.66v1.703h-30.66z"
                style={{
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="translate(2141.897 -42.248)"
            />
            <rect
                width={38.542}
                height={927.318}
                x={3014.791}
                y={163.764}
                ry={10.498}
                style={{
                    opacity: 0.97,
                    fill: "#b3b3b3",
                    strokeWidth: 1.08868,
                }}
            />
            <text
                xmlSpace="preserve"
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 24,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    whiteSpace: "pre",
                    shapeInside: "url(#L)",
                    display: "inline",
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="matrix(0 -.67333 .82598 0 2651.757 1330.424)"
            >
                <tspan x={1404.68} y={469.939}>
                    {"Km. 3,145 - LUJAN "}
                </tspan>
            </text>
        </g>
        <text
            xmlSpace="preserve"
            x={3156.047}
            y={376.211}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 16,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                textAlign: "start",
                textAnchor: "start",
                fill: "#0055d4",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 2.9,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
        />
        <g transform="translate(2442 -41)">
            <rect
                width={47.693}
                height={27.253}
                x={868}
                y={171}
                ry={0}
                style={{
                    opacity: 0.97,
                    fill: "#000",
                }}
            />
            <path
                d="M869.363 172.363h45.138v24.528h-45.138z"
                style={{
                    opacity: 0.97,
                    fill: "#fff",
                    strokeWidth: 1.06703,
                }}
            />
        </g>
        <text
            xmlSpace="preserve"
            x={10.586}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 24,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                whiteSpace: "pre",
                shapeInside: "url(#M)",
                display: "inline",
                opacity: 0.97,
                fill: "#000",
            }}
            transform="translate(2384.666 -.718)"
        >
            <tspan x={936.23} y={152.437}>
                <tspan
                    style={{
                        fontSize: "18.6667px",
                        textAlign: "center",
                        textAnchor: "middle",
                    }}
                >
                    {"BN"}
                </tspan>
            </tspan>
        </text>
        <path
            d="M876.605 175.016h30.66v1.703h-30.66z"
            style={{
                opacity: 0.97,
                fill: "#000",
            }}
            transform="translate(2442 -41)"
        />
        <rect
            width={38.542}
            height={927.318}
            x={3314.894}
            y={165.012}
            ry={10.498}
            style={{
                opacity: 0.97,
                fill: "#b3b3b3",
                strokeWidth: 1.08868,
            }}
        />
        <text
            xmlSpace="preserve"
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 24,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                textAlign: "center",
                whiteSpace: "pre",
                shapeInside: "url(#N)",
                display: "inline",
                opacity: 0.97,
                fill: "#000",
            }}
            transform="matrix(0 -.67333 .82598 0 2951.86 1331.673)"
        >
            <tspan x={1323.545} y={469.939}>
                {"Km. 3,310 - CARLOS PELEGRINI "}
            </tspan>
        </text>
        <rect
            width={98.499}
            height={1088.112}
            x={3205.176}
            y={40.208}
            ry={12.318}
            style={{
                opacity: 0.97,
                fill: "#d38d5f",
                strokeWidth: 1.88527,
            }}
        />
        <text
            xmlSpace="preserve"
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 24,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                textAlign: "center",
                whiteSpace: "pre",
                shapeInside: "url(#O)",
                display: "inline",
                opacity: 0.97,
                fill: "#000",
            }}
            transform="matrix(0 -.81287 1.81037 0 2419.461 1649.237)"
        >
            <tspan x={1282.16} y={469.939}>
                {"Km. 3,200 - RIO MATANZA RIACHUELO "}
            </tspan>
        </text>
        <g transform="translate(2006.275 .45)">
            <g transform="translate(1033.725 -41.45)">
                <rect
                    width={47.693}
                    height={27.253}
                    x={868}
                    y={171}
                    ry={0}
                    style={{
                        opacity: 0.97,
                        fill: "#000",
                    }}
                />
                <path
                    d="M869.363 172.363h45.138v24.528h-45.138z"
                    style={{
                        opacity: 0.97,
                        fill: "#fff",
                        strokeWidth: 1.06703,
                    }}
                />
            </g>
            <text
                xmlSpace="preserve"
                x={10.586}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 24,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    whiteSpace: "pre",
                    shapeInside: "url(#P)",
                    display: "inline",
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="translate(976.391 -1.168)"
            >
                <tspan x={936.23} y={152.437}>
                    <tspan
                        style={{
                            fontSize: "18.6667px",
                            textAlign: "center",
                            textAnchor: "middle",
                        }}
                    >
                        {"BN"}
                    </tspan>
                </tspan>
            </text>
            <path
                d="M876.605 175.016h30.66v1.703h-30.66z"
                style={{
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="translate(1033.725 -41.45)"
            />
            <rect
                width={38.542}
                height={927.318}
                x={1906.619}
                y={164.561}
                ry={10.498}
                style={{
                    opacity: 0.97,
                    fill: "#b3b3b3",
                    strokeWidth: 1.08868,
                }}
            />
            <text
                xmlSpace="preserve"
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 24,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    whiteSpace: "pre",
                    shapeInside: "url(#Q)",
                    display: "inline",
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="matrix(0 -.67333 .82598 0 1543.585 1331.222)"
            >
                <tspan x={1378.359} y={469.939}>
                    {"Km. 3,908 - AV. PAVON"}
                </tspan>
            </text>
        </g>
        <g transform="translate(2898.275 .45)">
            <g transform="translate(1033.725 -41.45)">
                <rect
                    width={47.693}
                    height={27.253}
                    x={868}
                    y={171}
                    ry={0}
                    style={{
                        opacity: 0.97,
                        fill: "#000",
                    }}
                />
                <path
                    d="M869.363 172.363h45.138v24.528h-45.138z"
                    style={{
                        opacity: 0.97,
                        fill: "#fff",
                        strokeWidth: 1.06703,
                    }}
                />
            </g>
            <text
                xmlSpace="preserve"
                x={10.586}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 24,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    whiteSpace: "pre",
                    shapeInside: "url(#R)",
                    display: "inline",
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="translate(976.391 -1.168)"
            >
                <tspan x={936.23} y={152.437}>
                    <tspan
                        style={{
                            fontSize: "18.6667px",
                            textAlign: "center",
                            textAnchor: "middle",
                        }}
                    >
                        {"BN"}
                    </tspan>
                </tspan>
            </text>
            <path
                d="M876.605 175.016h30.66v1.703h-30.66z"
                style={{
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="translate(1033.725 -41.45)"
            />
            <rect
                width={38.542}
                height={927.318}
                x={1906.619}
                y={164.561}
                ry={10.498}
                style={{
                    opacity: 0.97,
                    fill: "#b3b3b3",
                    strokeWidth: 1.08868,
                }}
            />
            <text
                xmlSpace="preserve"
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 24,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    whiteSpace: "pre",
                    shapeInside: "url(#S)",
                    display: "inline",
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="matrix(0 -.67333 .82598 0 1543.585 1331.222)"
            >
                <tspan x={1342.951} y={469.939}>
                    {"Km. 4,800 - VIAS FERROSUR "}
                </tspan>
            </text>
        </g>
        <g transform="translate(3992 -41)">
            <rect
                width={47.693}
                height={27.253}
                x={868}
                y={171}
                ry={0}
                style={{
                    opacity: 0.97,
                    fill: "#000",
                }}
            />
            <path
                d="M869.363 172.363h45.138v24.528h-45.138z"
                style={{
                    opacity: 0.97,
                    fill: "#fff",
                    strokeWidth: 1.06703,
                }}
            />
        </g>
        <text
            xmlSpace="preserve"
            x={10.586}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 24,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                whiteSpace: "pre",
                shapeInside: "url(#T)",
                display: "inline",
                opacity: 0.97,
                fill: "#000",
            }}
            transform="translate(3934.666 -.718)"
        >
            <tspan x={936.23} y={152.437}>
                <tspan
                    style={{
                        fontSize: "18.6667px",
                        textAlign: "center",
                        textAnchor: "middle",
                    }}
                >
                    {"BN"}
                </tspan>
            </tspan>
        </text>
        <path
            d="M876.605 175.016h30.66v1.703h-30.66z"
            style={{
                opacity: 0.97,
                fill: "#000",
            }}
            transform="translate(3992 -41)"
        />
        <rect
            width={38.542}
            height={927.318}
            x={4864.894}
            y={165.012}
            ry={10.498}
            style={{
                opacity: 0.97,
                fill: "#b3b3b3",
                strokeWidth: 1.08868,
            }}
        />
        <text
            xmlSpace="preserve"
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 24,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                textAlign: "center",
                whiteSpace: "pre",
                shapeInside: "url(#U)",
                display: "inline",
                opacity: 0.97,
                fill: "#000",
            }}
            transform="matrix(0 -.67333 .82598 0 4501.86 1358.652)"
        >
            <tspan x={1279.734} y={469.939}>
                {"Km. 4,860 - C. LARRALDE (7 PUENTES) "}
            </tspan>
        </text>
        <rect
            width={161.055}
            height={4.841}
            x={3639.941}
            y={-2638.524}
            ry={1.337}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 1.60129,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.75042 .66096 -.77707 .62941 0 0)"
        />
        <g transform="translate(3835.275 .45)">
            <g transform="translate(1033.725 -41.45)">
                <rect
                    width={47.693}
                    height={27.253}
                    x={868}
                    y={171}
                    ry={0}
                    style={{
                        opacity: 0.97,
                        fill: "#000",
                    }}
                />
                <path
                    d="M869.363 172.363h45.138v24.528h-45.138z"
                    style={{
                        opacity: 0.97,
                        fill: "#fff",
                        strokeWidth: 1.06703,
                    }}
                />
            </g>
            <text
                xmlSpace="preserve"
                x={10.586}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 24,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    whiteSpace: "pre",
                    shapeInside: "url(#V)",
                    display: "inline",
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="translate(976.391 -1.168)"
            >
                <tspan x={936.23} y={152.437}>
                    <tspan
                        style={{
                            fontSize: "18.6667px",
                            textAlign: "center",
                            textAnchor: "middle",
                        }}
                    >
                        {"BN"}
                    </tspan>
                </tspan>
            </text>
            <path
                d="M876.605 175.016h30.66v1.703h-30.66z"
                style={{
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="translate(1033.725 -41.45)"
            />
            <rect
                width={38.542}
                height={927.318}
                x={1906.619}
                y={164.561}
                ry={10.498}
                style={{
                    opacity: 0.97,
                    fill: "#b3b3b3",
                    strokeWidth: 1.08868,
                }}
            />
            <text
                xmlSpace="preserve"
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 24,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    whiteSpace: "pre",
                    shapeInside: "url(#W)",
                    display: "inline",
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="matrix(0 -.67333 .82598 0 1543.585 1331.222)"
            >
                <tspan x={1338.311} y={469.939}>
                    {"Km. 5,737 - AV. DE LA SERNA "}
                </tspan>
            </text>
        </g>
        <g transform="translate(5632.275 .45)">
            <g transform="translate(1033.725 -41.45)">
                <rect
                    width={47.693}
                    height={27.253}
                    x={868}
                    y={171}
                    ry={0}
                    style={{
                        opacity: 0.97,
                        fill: "#000",
                    }}
                />
                <path
                    d="M869.363 172.363h45.138v24.528h-45.138z"
                    style={{
                        opacity: 0.97,
                        fill: "#fff",
                        strokeWidth: 1.06703,
                    }}
                />
            </g>
            <text
                xmlSpace="preserve"
                x={10.586}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 24,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    whiteSpace: "pre",
                    shapeInside: "url(#X)",
                    display: "inline",
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="translate(976.391 -1.168)"
            >
                <tspan x={936.23} y={152.437}>
                    <tspan
                        style={{
                            fontSize: "18.6667px",
                            textAlign: "center",
                            textAnchor: "middle",
                        }}
                    >
                        {"BN"}
                    </tspan>
                </tspan>
            </text>
            <path
                d="M876.605 175.016h30.66v1.703h-30.66z"
                style={{
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="translate(1033.725 -41.45)"
            />
            <rect
                width={38.542}
                height={927.318}
                x={1906.619}
                y={164.561}
                ry={10.498}
                style={{
                    opacity: 0.97,
                    fill: "#b3b3b3",
                    strokeWidth: 1.08868,
                }}
            />
            <text
                xmlSpace="preserve"
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 24,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    whiteSpace: "pre",
                    shapeInside: "url(#Y)",
                    display: "inline",
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="matrix(0 -.67333 .82598 0 1543.585 1331.222)"
            >
                <tspan x={1327.564} y={469.939}>
                    {"Km. 7,534 - AV. G. RODRIGUEZ "}
                </tspan>
            </text>
        </g>
        <g transform="translate(4779.275 .45)">
            <g transform="translate(1033.725 -41.45)">
                <rect
                    width={47.693}
                    height={27.253}
                    x={868}
                    y={171}
                    ry={0}
                    style={{
                        opacity: 0.97,
                        fill: "#000",
                    }}
                />
                <path
                    d="M869.363 172.363h45.138v24.528h-45.138z"
                    style={{
                        opacity: 0.97,
                        fill: "#fff",
                        strokeWidth: 1.06703,
                    }}
                />
            </g>
            <text
                xmlSpace="preserve"
                x={10.586}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 24,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    whiteSpace: "pre",
                    shapeInside: "url(#Z)",
                    display: "inline",
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="translate(976.391 -1.168)"
            >
                <tspan x={936.23} y={152.437}>
                    <tspan
                        style={{
                            fontSize: "18.6667px",
                            textAlign: "center",
                            textAnchor: "middle",
                        }}
                    >
                        {"BN"}
                    </tspan>
                </tspan>
            </text>
            <path
                d="M876.605 175.016h30.66v1.703h-30.66z"
                style={{
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="translate(1033.725 -41.45)"
            />
            <rect
                width={38.542}
                height={927.318}
                x={1906.619}
                y={164.561}
                ry={10.498}
                style={{
                    opacity: 0.97,
                    fill: "#b3b3b3",
                    strokeWidth: 1.08868,
                }}
            />
            <text
                xmlSpace="preserve"
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 24,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    whiteSpace: "pre",
                    shapeInside: "url(#aa)",
                    display: "inline",
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="matrix(0 -.67333 .82598 0 1543.585 1331.222)"
            >
                <tspan x={1360.336} y={469.939}>
                    {"Km. 6,681 - BUSTAMANTE "}
                </tspan>
            </text>
        </g>
        <g transform="translate(6741.275 .45)">
            <g transform="translate(1033.725 -41.45)">
                <rect
                    width={47.693}
                    height={27.253}
                    x={868}
                    y={171}
                    ry={0}
                    style={{
                        opacity: 0.97,
                        fill: "#000",
                    }}
                />
                <path
                    d="M869.363 172.363h45.138v24.528h-45.138z"
                    style={{
                        opacity: 0.97,
                        fill: "#fff",
                        strokeWidth: 1.06703,
                    }}
                />
            </g>
            <text
                xmlSpace="preserve"
                x={10.586}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 24,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    whiteSpace: "pre",
                    shapeInside: "url(#ab)",
                    display: "inline",
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="translate(976.391 -1.168)"
            >
                <tspan x={936.23} y={152.437}>
                    <tspan
                        style={{
                            fontSize: "18.6667px",
                            textAlign: "center",
                            textAnchor: "middle",
                        }}
                    >
                        {"BN"}
                    </tspan>
                </tspan>
            </text>
            <path
                d="M876.605 175.016h30.66v1.703h-30.66z"
                style={{
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="translate(1033.725 -41.45)"
            />
            <rect
                width={38.542}
                height={927.318}
                x={1906.619}
                y={164.561}
                ry={10.498}
                style={{
                    opacity: 0.97,
                    fill: "#b3b3b3",
                    strokeWidth: 1.08868,
                }}
            />
            <text
                xmlSpace="preserve"
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 24,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    whiteSpace: "pre",
                    shapeInside: "url(#ac)",
                    display: "inline",
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="matrix(0 -.67333 .82598 0 1543.585 1331.222)"
            >
                <tspan x={1377.867} y={469.939}>
                    {"Km. 8,643 -  TUCUMAN "}
                </tspan>
            </text>
        </g>
        <g transform="translate(7707.275 .45)">
            <g transform="translate(1033.725 -41.45)">
                <rect
                    width={47.693}
                    height={27.253}
                    x={868}
                    y={171}
                    ry={0}
                    style={{
                        opacity: 0.97,
                        fill: "#000",
                    }}
                />
                <path
                    d="M869.363 172.363h45.138v24.528h-45.138z"
                    style={{
                        opacity: 0.97,
                        fill: "#fff",
                        strokeWidth: 1.06703,
                    }}
                />
            </g>
            <text
                xmlSpace="preserve"
                x={10.586}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 24,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    whiteSpace: "pre",
                    shapeInside: "url(#ad)",
                    display: "inline",
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="translate(976.391 -1.168)"
            >
                <tspan x={936.23} y={152.437}>
                    <tspan
                        style={{
                            fontSize: "18.6667px",
                            textAlign: "center",
                            textAnchor: "middle",
                        }}
                    >
                        {"BN"}
                    </tspan>
                </tspan>
            </text>
            <path
                d="M876.605 175.016h30.66v1.703h-30.66z"
                style={{
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="translate(1033.725 -41.45)"
            />
            <rect
                width={38.542}
                height={927.318}
                x={1906.619}
                y={164.561}
                ry={10.498}
                style={{
                    opacity: 0.97,
                    fill: "#b3b3b3",
                    strokeWidth: 1.08868,
                }}
            />
            <text
                xmlSpace="preserve"
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 24,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    whiteSpace: "pre",
                    shapeInside: "url(#ae)",
                    display: "inline",
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="matrix(0 -.67333 .82598 0 1543.585 1331.222)"
            >
                <tspan x={1333.605} y={469.939}>
                    {"Km. 9,609 -  CASTRO BARROS "}
                </tspan>
            </text>
        </g>
        <g transform="translate(8796.275 .45)">
            <g transform="translate(1033.725 -41.45)">
                <rect
                    width={47.693}
                    height={27.253}
                    x={868}
                    y={171}
                    ry={0}
                    style={{
                        opacity: 0.97,
                        fill: "#000",
                    }}
                />
                <path
                    d="M869.363 172.363h45.138v24.528h-45.138z"
                    style={{
                        opacity: 0.97,
                        fill: "#fff",
                        strokeWidth: 1.06703,
                    }}
                />
            </g>
            <text
                xmlSpace="preserve"
                x={10.586}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 24,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    whiteSpace: "pre",
                    shapeInside: "url(#af)",
                    display: "inline",
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="translate(976.391 -1.168)"
            >
                <tspan x={936.23} y={152.437}>
                    <tspan
                        style={{
                            fontSize: "18.6667px",
                            textAlign: "center",
                            textAnchor: "middle",
                        }}
                    >
                        {"BN"}
                    </tspan>
                </tspan>
            </text>
            <path
                d="M876.605 175.016h30.66v1.703h-30.66z"
                style={{
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="translate(1033.725 -41.45)"
            />
            <rect
                width={38.542}
                height={927.318}
                x={1906.619}
                y={164.561}
                ry={10.498}
                style={{
                    opacity: 0.97,
                    fill: "#b3b3b3",
                    strokeWidth: 1.08868,
                }}
            />
            <text
                xmlSpace="preserve"
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 24,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    whiteSpace: "pre",
                    shapeInside: "url(#ag)",
                    display: "inline",
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="matrix(0 -.67333 .82598 0 1543.585 1331.222)"
            >
                <tspan x={1313.01} y={469.939}>
                    {"Km. 10,698 -  29 DE SEPTIEMBRE "}
                </tspan>
            </text>
        </g>
        <g transform="translate(10288.275 .45)">
            <g transform="translate(1033.725 -41.45)">
                <rect
                    width={47.693}
                    height={27.253}
                    x={868}
                    y={171}
                    ry={0}
                    style={{
                        opacity: 0.97,
                        fill: "#000",
                    }}
                />
                <path
                    d="M869.363 172.363h45.138v24.528h-45.138z"
                    style={{
                        opacity: 0.97,
                        fill: "#fff",
                        strokeWidth: 1.06703,
                    }}
                />
            </g>
            <text
                xmlSpace="preserve"
                x={10.586}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 24,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    whiteSpace: "pre",
                    shapeInside: "url(#ah)",
                    display: "inline",
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="translate(976.391 -1.168)"
            >
                <tspan x={936.23} y={152.437}>
                    <tspan
                        style={{
                            fontSize: "18.6667px",
                            textAlign: "center",
                            textAnchor: "middle",
                        }}
                    >
                        {"BN"}
                    </tspan>
                </tspan>
            </text>
            <path
                d="M876.605 175.016h30.66v1.703h-30.66z"
                style={{
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="translate(1033.725 -41.45)"
            />
            <rect
                width={38.542}
                height={927.318}
                x={1906.619}
                y={164.561}
                ry={10.498}
                style={{
                    opacity: 0.97,
                    fill: "#b3b3b3",
                    strokeWidth: 1.08868,
                }}
            />
            <text
                xmlSpace="preserve"
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 24,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    whiteSpace: "pre",
                    shapeInside: "url(#ai)",
                    display: "inline",
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="matrix(0 -.67333 .82598 0 1543.585 1331.222)"
            >
                <tspan x={1308.949} y={469.939}>
                    {"Km. 12,190 -  URIARTE / MALABIA "}
                </tspan>
            </text>
        </g>
        <g transform="translate(11358.275 .45)">
            <g transform="translate(1033.725 -41.45)">
                <rect
                    width={47.693}
                    height={27.253}
                    x={868}
                    y={171}
                    ry={0}
                    style={{
                        opacity: 0.97,
                        fill: "#000",
                    }}
                />
                <path
                    d="M869.363 172.363h45.138v24.528h-45.138z"
                    style={{
                        opacity: 0.97,
                        fill: "#fff",
                        strokeWidth: 1.06703,
                    }}
                />
            </g>
            <text
                xmlSpace="preserve"
                x={10.586}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 24,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    whiteSpace: "pre",
                    shapeInside: "url(#aj)",
                    display: "inline",
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="translate(976.391 -1.168)"
            >
                <tspan x={936.23} y={152.437}>
                    <tspan
                        style={{
                            fontSize: "18.6667px",
                            textAlign: "center",
                            textAnchor: "middle",
                        }}
                    >
                        {"BN"}
                    </tspan>
                </tspan>
            </text>
            <path
                d="M876.605 175.016h30.66v1.703h-30.66z"
                style={{
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="translate(1033.725 -41.45)"
            />
            <rect
                width={38.542}
                height={927.318}
                x={1906.619}
                y={164.561}
                ry={10.498}
                style={{
                    opacity: 0.97,
                    fill: "#b3b3b3",
                    strokeWidth: 1.08868,
                }}
            />
            <text
                xmlSpace="preserve"
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 24,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    whiteSpace: "pre",
                    shapeInside: "url(#ak)",
                    display: "inline",
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="matrix(0 -.67333 .82598 0 1543.585 1331.222)"
            >
                <tspan x={1368.258} y={469.939}>
                    {"Km. 13,260 - LARROQUE "}
                </tspan>
            </text>
        </g>
        <g transform="translate(12445.275 .45)">
            <g transform="translate(1033.725 -41.45)">
                <rect
                    width={47.693}
                    height={27.253}
                    x={868}
                    y={171}
                    ry={0}
                    style={{
                        opacity: 0.97,
                        fill: "#000",
                    }}
                />
                <path
                    d="M869.363 172.363h45.138v24.528h-45.138z"
                    style={{
                        opacity: 0.97,
                        fill: "#fff",
                        strokeWidth: 1.06703,
                    }}
                />
            </g>
            <text
                xmlSpace="preserve"
                x={10.586}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 24,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    whiteSpace: "pre",
                    shapeInside: "url(#al)",
                    display: "inline",
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="translate(976.391 -1.168)"
            >
                <tspan x={936.23} y={152.437}>
                    <tspan
                        style={{
                            fontSize: "18.6667px",
                            textAlign: "center",
                            textAnchor: "middle",
                        }}
                    >
                        {"BN"}
                    </tspan>
                </tspan>
            </text>
            <path
                d="M876.605 175.016h30.66v1.703h-30.66z"
                style={{
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="translate(1033.725 -41.45)"
            />
            <rect
                width={38.542}
                height={927.318}
                x={1906.619}
                y={164.561}
                ry={10.498}
                style={{
                    opacity: 0.97,
                    fill: "#b3b3b3",
                    strokeWidth: 1.08868,
                }}
            />
            <text
                xmlSpace="preserve"
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 24,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    whiteSpace: "pre",
                    shapeInside: "url(#am)",
                    display: "inline",
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="matrix(0 -.67333 .82598 0 1543.585 1331.222)"
            >
                <tspan x={1311.902} y={469.939}>
                    {"Km. 14,347 -  PEREYRA / MATHEU "}
                </tspan>
            </text>
        </g>
        <g transform="translate(12976.275 .45)">
            <g transform="translate(1033.725 -41.45)">
                <rect
                    width={47.693}
                    height={27.253}
                    x={868}
                    y={171}
                    ry={0}
                    style={{
                        opacity: 0.97,
                        fill: "#000",
                    }}
                />
                <path
                    d="M869.363 172.363h45.138v24.528h-45.138z"
                    style={{
                        opacity: 0.97,
                        fill: "#fff",
                        strokeWidth: 1.06703,
                    }}
                />
            </g>
            <text
                xmlSpace="preserve"
                x={10.586}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 24,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    whiteSpace: "pre",
                    shapeInside: "url(#an)",
                    display: "inline",
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="translate(976.391 -1.168)"
            >
                <tspan x={936.23} y={152.437}>
                    <tspan
                        style={{
                            fontSize: "18.6667px",
                            textAlign: "center",
                            textAnchor: "middle",
                        }}
                    >
                        {"BN"}
                    </tspan>
                </tspan>
            </text>
            <path
                d="M876.605 175.016h30.66v1.703h-30.66z"
                style={{
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="translate(1033.725 -41.45)"
            />
            <rect
                width={38.542}
                height={927.318}
                x={1906.619}
                y={164.561}
                ry={10.498}
                style={{
                    opacity: 0.97,
                    fill: "#b3b3b3",
                    strokeWidth: 1.08868,
                }}
            />
            <text
                xmlSpace="preserve"
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 24,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    whiteSpace: "pre",
                    shapeInside: "url(#ao)",
                    display: "inline",
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="matrix(0 -.67333 .82598 0 1543.585 1331.222)"
            >
                <tspan x={1386.92} y={469.939}>
                    {"Km. 14,878 -  BOEDO "}
                </tspan>
            </text>
        </g>
        <g transform="translate(13370.275 .45)">
            <g transform="translate(1033.725 -41.45)">
                <rect
                    width={47.693}
                    height={27.253}
                    x={868}
                    y={171}
                    ry={0}
                    style={{
                        opacity: 0.97,
                        fill: "#000",
                    }}
                />
                <path
                    d="M869.363 172.363h45.138v24.528h-45.138z"
                    style={{
                        opacity: 0.97,
                        fill: "#fff",
                        strokeWidth: 1.06703,
                    }}
                />
            </g>
            <text
                xmlSpace="preserve"
                x={10.586}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 24,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    whiteSpace: "pre",
                    shapeInside: "url(#ap)",
                    display: "inline",
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="translate(976.391 -1.168)"
            >
                <tspan x={936.23} y={152.437}>
                    <tspan
                        style={{
                            fontSize: "18.6667px",
                            textAlign: "center",
                            textAnchor: "middle",
                        }}
                    >
                        {"BN"}
                    </tspan>
                </tspan>
            </text>
            <path
                d="M876.605 175.016h30.66v1.703h-30.66z"
                style={{
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="translate(1033.725 -41.45)"
            />
            <rect
                width={38.542}
                height={927.318}
                x={1906.619}
                y={164.561}
                ry={10.498}
                style={{
                    opacity: 0.97,
                    fill: "#b3b3b3",
                    strokeWidth: 1.08868,
                }}
            />
            <text
                xmlSpace="preserve"
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 24,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    whiteSpace: "pre",
                    shapeInside: "url(#aq)",
                    display: "inline",
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="matrix(0 -.67333 .82598 0 1543.585 1331.222)"
            >
                <tspan x={1393.266} y={469.939}>
                    {"Km. 15,272 -  LORIA "}
                </tspan>
            </text>
        </g>
        <g transform="translate(14817 -41)">
            <rect
                width={47.693}
                height={27.253}
                x={868}
                y={171}
                ry={0}
                style={{
                    opacity: 0.97,
                    fill: "#000",
                }}
            />
            <path
                d="M869.363 172.363h45.138v24.528h-45.138z"
                style={{
                    opacity: 0.97,
                    fill: "#fff",
                    strokeWidth: 1.06703,
                }}
            />
        </g>
        <text
            xmlSpace="preserve"
            x={10.586}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 24,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                whiteSpace: "pre",
                shapeInside: "url(#ar)",
                display: "inline",
                opacity: 0.97,
                fill: "#000",
            }}
            transform="translate(14759.666 -.718)"
        >
            <tspan x={936.23} y={152.437}>
                <tspan
                    style={{
                        fontSize: "18.6667px",
                        textAlign: "center",
                        textAnchor: "middle",
                    }}
                >
                    {"BN"}
                </tspan>
            </tspan>
        </text>
        <path
            d="M876.605 175.016h30.66v1.703h-30.66z"
            style={{
                opacity: 0.97,
                fill: "#000",
            }}
            transform="translate(14817 -41)"
        />
        <rect
            width={38.542}
            height={927.318}
            x={15689.894}
            y={165.012}
            ry={10.498}
            style={{
                opacity: 0.97,
                fill: "#b3b3b3",
                strokeWidth: 1.08868,
            }}
        />
        <text
            xmlSpace="preserve"
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 24,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                textAlign: "center",
                whiteSpace: "pre",
                shapeInside: "url(#as)",
                display: "inline",
                opacity: 0.97,
                fill: "#000",
            }}
            transform="matrix(0 -.67333 .82598 0 15326.86 1350.75)"
        >
            <tspan x={1294.424} y={469.939}>
                {"Km. 15,685 -  CERRITO / GARIBALDI "}
            </tspan>
        </text>
        <g transform="translate(1.927 165.731)">
            <rect
                width={224.84}
                height={45.649}
                x={14.649}
                y={735.5}
                ry={4.088}
                style={{
                    opacity: 1,
                    fill: "#999",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#000",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={18.506}
                y={764.74}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 16,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    textAnchor: "middle",
                    opacity: 1,
                    fill: "#030303",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            >
                <tspan
                    x={18.506}
                    y={764.74}
                    style={{
                        fontSize: 16,
                        textAlign: "start",
                        textAnchor: "start",
                    }}
                >
                    {"Plataforma 2 y 3"}
                </tspan>
            </text>
        </g>
        <g transform="translate(2.432 227.955)">
            <rect
                width={224.84}
                height={45.649}
                x={14.649}
                y={735.5}
                ry={4.088}
                style={{
                    opacity: 1,
                    fill: "#999",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#000",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={24.125}
                y={765.48}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 16,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "start",
                    textAnchor: "start",
                    opacity: 1,
                    fill: "#030303",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            >
                <tspan
                    x={24.125}
                    y={765.48}
                    style={{
                        fontSize: 16,
                    }}
                >
                    {"Plataforma 1"}
                </tspan>
            </text>
        </g>
        <g transform="translate(1.234 65.577)">
            <rect
                width={224.84}
                height={45.649}
                x={14.649}
                y={735.5}
                ry={4.088}
                style={{
                    opacity: 1,
                    fill: "#999",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#000",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={86.301}
                y={766.103}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 16,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    textAnchor: "middle",
                    opacity: 1,
                    fill: "#030303",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            >
                <tspan
                    x={86.301}
                    y={766.103}
                    style={{
                        fontSize: 16,
                    }}
                >
                    {"Plataforma 4 y 5"}
                </tspan>
            </text>
        </g>
        <rect
            width={204.946}
            height={6.835}
            x={5252.722}
            y={-4378.035}
            ry={1.738}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 2.0515,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.8612 .50826 -.8918 .45244 0 0)"
        />
        <rect
            width={199.6}
            height={6.075}
            x={9937.677}
            y={5915.989}
            ry={1.544}
            style={{
                fill: "#0055d4",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 1.90869,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.85697 -.51537 .03648 .99933 0 0)"
        />
        <rect
            width={105.302}
            height={5.306}
            x={10627.289}
            y={5058.056}
            ry={0.633}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 0.872891,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.91597 -.40124 .0333 .99945 0 0)"
        />
        <rect
            width={54.62}
            height={6.338}
            x={750.762}
            y={1477.762}
            ry={0.461}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 0.523552,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.6428 -.76603 .38213 .9241 0 0)"
        />
        <rect
            width={15946.066}
            height={5.535}
            x={12.255}
            y={790.538}
            ry={0}
            style={{
                opacity: 0.97,
                fill: "#0055d4",
                strokeWidth: 2.75064,
            }}
        />
        <rect
            width={157.573}
            height={4.755}
            x={-86.106}
            y={1037.453}
            ry={1.314}
            style={{
                fill: "#0055d4",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 1.5698,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.76193 -.64766 .50155 .86513 0 0)"
        />
        <rect
            width={160.694}
            height={4.819}
            x={286.206}
            y={1082.545}
            ry={1.331}
            style={{
                fill: "#0055d4",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 1.59583,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.76801 -.64043 .50877 .8609 0 0)"
        />
        <rect
            width={161.055}
            height={4.841}
            x={666.502}
            y={1368.669}
            ry={1.337}
            style={{
                fill: "#0055d4",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 1.60129,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.76577 -.64311 .5061 .86248 0 0)"
        />
        <rect
            width={161.441}
            height={4.846}
            x={3068.134}
            y={3154.375}
            ry={1.339}
            style={{
                fill: "#0055d4",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 1.60405,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.76707 -.64157 .50763 .86157 0 0)"
        />
        <rect
            width={159.234}
            height={4.795}
            x={3089.541}
            y={3224.228}
            ry={1.325}
            style={{
                fill: "#0055d4",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 1.58468,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.76396 -.64526 .50394 .86374 0 0)"
        />
        <rect
            width={161.055}
            height={4.841}
            x={656.776}
            y={1408.013}
            ry={1.337}
            style={{
                fill: "#0055d4",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 1.60129,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.76577 -.64311 .5061 .86248 0 0)"
        />
        <rect
            width={95.325}
            height={3.6}
            x={-129.972}
            y={868.452}
            ry={0.737}
            style={{
                fill: "#0055d4",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 0.903375,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.78072 -.62489 .46533 .88514 0 0)"
        />
        <rect
            width={69.81}
            height={3.787}
            x={137.86}
            y={993.83}
            ry={0.53}
            style={{
                fill: "#0055d4",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 0.649857,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.78318 -.6218 .46829 .88358 0 0)"
        />
        <rect
            width={94.316}
            height={5.429}
            x={11.503}
            y={1042.825}
            ry={0.682}
            style={{
                fill: "#0055d4",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 0.853069,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.77233 -.63522 .5687 .82255 0 0)"
        />
        <rect
            width={204.946}
            height={6.835}
            x={5203.123}
            y={-4417.178}
            ry={1.738}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 2.0515,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.8612 .50826 -.8918 .45244 0 0)"
        />
        <rect
            width={200.627}
            height={6.238}
            x={10036.373}
            y={5881.677}
            ry={1.586}
            style={{
                fill: "#0055d4",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 1.93906,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.85938 -.51134 .01772 .99984 0 0)"
        />
        <rect
            width={189.432}
            height={6.284}
            x={5051.713}
            y={-4528.69}
            ry={1.598}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 1.89111,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.8387 .5446 -.87318 .4874 0 0)"
        />
        <rect
            width={15943.754}
            height={5.535}
            x={11.2}
            y={748.541}
            ry={0}
            style={{
                opacity: 0.97,
                fill: "#0055d4",
                strokeWidth: 2.75044,
            }}
        />
        <g transform="translate(1.708 -36.389)">
            <rect
                width={224.84}
                height={45.649}
                x={14.649}
                y={735.5}
                ry={4.088}
                style={{
                    opacity: 1,
                    fill: "#999",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#000",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={85.619}
                y={765.081}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 16,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    textAnchor: "middle",
                    opacity: 1,
                    fill: "#030303",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            >
                <tspan
                    x={85.619}
                    y={765.081}
                    style={{
                        fontSize: 16,
                    }}
                >
                    {"Plataforma 6 y 7"}
                </tspan>
            </text>
        </g>
        <rect
            width={164.947}
            height={46.055}
            x={17.074}
            y={596.695}
            ry={4.124}
            style={{
                fill: "#999",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#000",
                strokeWidth: 2.49489,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
        />
        <text
            xmlSpace="preserve"
            x={88.587}
            y={627.841}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 16,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                textAlign: "center",
                textAnchor: "middle",
                fill: "#030303",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 2.9,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
        >
            <tspan
                x={88.587}
                y={627.841}
                style={{
                    fontSize: 16,
                }}
            >
                {"Plataforma 8 y 9"}
            </tspan>
        </text>
        <path
            d="M10.067 536.85h2.729v18.698h-2.729z"
            style={{
                opacity: 0.97,
                fill: "#0055d4",
                strokeWidth: 0.412833,
            }}
        />
        <rect
            width={413.419}
            height={5.535}
            x={12.409}
            y={543.736}
            ry={0}
            style={{
                opacity: 0.97,
                fill: "#0055d4",
                strokeWidth: 0.442897,
            }}
        />
        <g transform="translate(4.663 -241.194)">
            <rect
                width={224.84}
                height={45.649}
                x={14.649}
                y={735.5}
                ry={4.088}
                style={{
                    opacity: 1,
                    fill: "#999",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#000",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={97.543}
                y={765.762}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 16,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    textAnchor: "middle",
                    opacity: 1,
                    fill: "#030303",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            >
                <tspan
                    x={97.543}
                    y={765.762}
                    style={{
                        fontSize: 16,
                    }}
                >
                    {"Plataforma 10 y 11"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.54067 0 0 .9824 2788.511 -24.614)">
            <rect
                width={224.84}
                height={45.649}
                x={14.649}
                y={735.5}
                ry={4.088}
                style={{
                    opacity: 1,
                    fill: "#999",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#000",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={97.543}
                y={765.762}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 16,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    textAnchor: "middle",
                    opacity: 1,
                    fill: "#030303",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            >
                <tspan
                    x={97.543}
                    y={765.762}
                    style={{
                        fontSize: 16,
                    }}
                >
                    {"Plataforma 2 y 3"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.5407 0 0 .97364 2789.884 83.902)">
            <rect
                width={224.84}
                height={45.649}
                x={14.649}
                y={735.5}
                ry={4.088}
                style={{
                    opacity: 1,
                    fill: "#999",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#000",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={97.543}
                y={765.762}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 16,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    textAnchor: "middle",
                    opacity: 1,
                    fill: "#030303",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            >
                <tspan
                    x={97.543}
                    y={765.762}
                    style={{
                        fontSize: 16,
                    }}
                >
                    {"Plataforma 4"}
                </tspan>
            </text>
        </g>
        <g transform="translate(4.921 -341.405)">
            <rect
                width={224.84}
                height={45.649}
                x={14.649}
                y={735.5}
                ry={4.088}
                style={{
                    opacity: 1,
                    fill: "#999",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#000",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={97.543}
                y={767.125}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 16,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    textAnchor: "middle",
                    opacity: 1,
                    fill: "#030303",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            >
                <tspan
                    x={97.543}
                    y={767.125}
                    style={{
                        fontSize: 16,
                    }}
                >
                    {"Plataforma 12 y 13"}
                </tspan>
            </text>
        </g>
        <rect
            width={351.341}
            height={5.535}
            x={11.203}
            y={384.519}
            ry={0}
            style={{
                opacity: 0.97,
                fill: "#333",
                strokeWidth: 0.408292,
            }}
        />
        <path
            d="M10.088 377.618h2.96v18.698h-2.96z"
            style={{
                opacity: 0.97,
                fill: "#333",
                strokeWidth: 0.429912,
            }}
        />
        <rect
            width={356.284}
            height={5.535}
            x={12.256}
            y={342.522}
            ry={0}
            style={{
                opacity: 0.97,
                fill: "#333",
                strokeWidth: 0.411154,
            }}
        />
        <path
            d="M10.17 335.808h2.96v18.698h-2.96z"
            style={{
                opacity: 0.97,
                fill: "#333",
                strokeWidth: 0.429912,
            }}
        />
        <rect
            width={295.256}
            height={4.731}
            x={127.519}
            y={246.37}
            ry={0}
            style={{
                opacity: 0.97,
                fill: "#333",
                strokeWidth: 0.346032,
            }}
            transform="matrix(.99043 .138 -.1313 .99134 0 0)"
        />
        <g transform="matrix(1.37237 0 0 .73545 -.437 -235.78)">
            <rect
                width={224.84}
                height={45.649}
                x={14.649}
                y={735.5}
                ry={4.088}
                style={{
                    opacity: 1,
                    fill: "#999",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#000",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={81.531}
                y={763.037}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 16,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    textAnchor: "middle",
                    opacity: 1,
                    fill: "#030303",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            >
                <tspan
                    x={84.344}
                    y={763.037}
                    style={{
                        fontSize: 16,
                    }}
                >
                    {"Plataforma 14  "}
                </tspan>
            </text>
        </g>
        <rect
            width={10.343}
            height={21.613}
            x={328.087}
            y={-321.932}
            ry={4.469}
            style={{
                fill: "#333",
                fillRule: "evenodd",
                strokeWidth: 1.25257,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.71) skewX(-.001)"
        />
        <path
            d="M335.237-318.72a2.054 1.56 0 0 1-2.049 1.56 2.054 1.56 0 0 1-2.059-1.553 2.054 1.56 0 0 1 2.04-1.566 2.054 1.56 0 0 1 2.068 1.544l-2.054.015z"
            style={{
                fill: "url(#au)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.371944,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.71) skewX(-.001)"
        />
        <path
            d="M335.199-315.06a2.054 1.56 0 0 1-2.05 1.559 2.054 1.56 0 0 1-2.058-1.552 2.054 1.56 0 0 1 2.039-1.567 2.054 1.56 0 0 1 2.069 1.544l-2.054.015z"
            style={{
                fill: "url(#av)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.371944,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.71) skewX(-.001)"
        />
        <path
            d="M335.282-311.308a2.054 1.56 0 0 1-2.05 1.559 2.054 1.56 0 0 1-2.058-1.552 2.054 1.56 0 0 1 2.039-1.567 2.054 1.56 0 0 1 2.069 1.544l-2.054.015z"
            style={{
                fill: "url(#aw)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.371944,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.71) skewX(-.001)"
        />
        <text
            xmlSpace="preserve"
            x={271.527}
            y={-367.307}
            style={{
                fontSize: "4.8082px",
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.300512,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.00614 1.21345 -.82407 .00416 0 0)"
        >
            <tspan
                x={271.527}
                y={-367.307}
                style={{
                    fill: "#fff",
                    fillOpacity: 1,
                    stroke: "none",
                    strokeWidth: 0.300512,
                }}
            >
                {"8A"}
            </tspan>
        </text>
        <rect
            width={1.66}
            height={28.592}
            x={332.614}
            y={-300.6}
            ry={0}
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "url(#ax)",
                strokeWidth: 0.371944,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.71) skewX(-.001)"
        />
        <path
            d="M-328.522 291.827a6.316 5.56 0 0 1-3.16 4.816 6.316 5.56 0 0 1-6.318-.003 6.316 5.56 0 0 1-3.153-4.82"
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.403291,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(-90.5) skewX(.06)"
        />
        <path
            d="M332.391-294.81a1.506 1.092 0 0 1-1.502 1.092 1.506 1.092 0 0 1-1.51-1.087 1.506 1.092 0 0 1 1.496-1.098 1.506 1.092 0 0 1 1.516 1.082l-1.505.01z"
            style={{
                fill: "url(#ay)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.266531,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.71) skewX(-.001)"
        />
        <path
            d="M337.92-294.872a1.506 1.092 0 0 1-1.502 1.092 1.506 1.092 0 0 1-1.51-1.087 1.506 1.092 0 0 1 1.496-1.098 1.506 1.092 0 0 1 1.516 1.082l-1.505.01z"
            style={{
                fill: "url(#az)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.266531,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.71) skewX(-.001)"
        />
        <path
            d="M335.005-297.04a1.506 1.092 0 0 1-1.502 1.093 1.506 1.092 0 0 1-1.51-1.087 1.506 1.092 0 0 1 1.496-1.098 1.506 1.092 0 0 1 1.516 1.082l-1.505.01z"
            style={{
                fill: "url(#aA)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.266531,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.71) skewX(-.001)"
        />
        <path
            d="M335.42-290.92a2.054 1.56 0 0 1-2.049 1.559 2.054 1.56 0 0 1-2.059-1.552 2.054 1.56 0 0 1 2.04-1.567 2.054 1.56 0 0 1 2.068 1.545l-2.054.015z"
            style={{
                fill: "url(#aB)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.371944,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.71) skewX(-.001)"
        />
        <path
            d="M330.176-272.241h6.64v.348h-6.64z"
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.371944,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.71) skewX(-.001)"
        />
        <rect
            width={4.534}
            height={6.876}
            x={285.884}
            y={327.464}
            ry={0.172}
            style={{
                fill: "#c2c2c2",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.952244,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(.208) skewX(-.001)"
        />
        <text
            xmlSpace="preserve"
            x={339.241}
            y={273.943}
            style={{
                fontSize: "5.51149px",
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                fill: "#070707",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.344467,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.85326 .01532 -.0211 1.1716 0 0)"
        >
            <tspan
                x={339.241}
                y={273.943}
                style={{
                    strokeWidth: 0.344467,
                }}
            >
                {"68A"}
            </tspan>
        </text>
        <text
            xmlSpace="preserve"
            x={254.478}
            y={172.378}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: "21.3333px",
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                textAlign: "start",
                textAnchor: "start",
                opacity: 1,
                fill: "#030303",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 2.9,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
        />
        <text
            xmlSpace="preserve"
            x={326.359}
            y={121.278}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: "21.3333px",
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                textAlign: "start",
                textAnchor: "start",
                opacity: 1,
                fill: "#030303",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 2.9,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
        />
        <rect
            width={74.136}
            height={4.157}
            x={238.407}
            y={250.424}
            ry={2.079}
            style={{
                opacity: 1,
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 2.50642,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.7931 .60909 -.61936 .7851 0 0)"
        />
        <rect
            width={73.036}
            height={4.088}
            x={-206.109}
            y={326.602}
            ry={2.044}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 2.46708,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.79733 -.60355 .598 .8015 0 0)"
        />
        <rect
            width={74.136}
            height={4.157}
            x={14.984}
            y={3.757}
            ry={2.079}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 2.50642,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.7931 .60909 -.61936 .7851 0 0)"
        />
        <rect
            width={74.136}
            height={4.157}
            x={-28.322}
            y={48.813}
            ry={2.079}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 2.50642,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.79548 -.60598 .59557 .8033 0 0)"
        />
        <g transform="matrix(.99199 0 0 .97966 11564.011 863.29)">
            <rect
                width={74.136}
                height={4.157}
                x={14.984}
                y={3.757}
                ry={2.079}
                style={{
                    fill: "#333",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 2.50642,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(.7931 .60909 -.61936 .7851 0 0)"
            />
            <rect
                width={74.136}
                height={4.157}
                x={-28.322}
                y={48.813}
                ry={2.079}
                style={{
                    fill: "#333",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 2.50642,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(.79548 -.60598 .59557 .8033 0 0)"
            />
        </g>
        <g transform="matrix(.99169 0 0 .98945 26.337 431.648)">
            <rect
                width={74.136}
                height={4.157}
                x={14.984}
                y={3.757}
                ry={2.079}
                style={{
                    fill: "#333",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 2.50642,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(.7931 .60909 -.61936 .7851 0 0)"
            />
            <rect
                width={74.136}
                height={4.157}
                x={-28.322}
                y={48.813}
                ry={2.079}
                style={{
                    fill: "#333",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 2.50642,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(.79548 -.60598 .59557 .8033 0 0)"
            />
        </g>
        <g
            style={{
                fill: "#0055d4",
            }}
            transform="translate(248.349 736.482)"
        >
            <rect
                width={74.136}
                height={4.157}
                x={14.984}
                y={3.757}
                ry={2.079}
                style={{
                    fill: "#0055d4",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 2.50642,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(.7931 .60909 -.61936 .7851 0 0)"
            />
            <rect
                width={74.136}
                height={4.157}
                x={-28.322}
                y={48.813}
                ry={2.079}
                style={{
                    fill: "#0055d4",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 2.50642,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(.79548 -.60598 .59557 .8033 0 0)"
            />
        </g>
        <rect
            width={312.551}
            height={5.535}
            x={12.045}
            y={443.525}
            ry={0}
            style={{
                opacity: 0.97,
                fill: "#0055d4",
                strokeWidth: 0.385094,
            }}
        />
        <path
            d="M9.874 436.915h2.96v18.698h-2.96z"
            style={{
                opacity: 0.97,
                fill: "#0055d4",
                strokeWidth: 0.429912,
            }}
        />
        <rect
            width={296.602}
            height={5.535}
            x={11.278}
            y={485.522}
            ry={2.469}
            style={{
                opacity: 0.97,
                fill: "#0055d4",
                strokeWidth: 0.375141,
            }}
        />
        <rect
            width={322.825}
            height={5.418}
            x={-230.271}
            y={933.926}
            ry={2.709}
            style={{
                opacity: 1,
                fill: "#0055d4",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 3.24264,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.7693 -.63888 .50414 .86362 0 0)"
        />
        <rect
            width={669.874}
            height={5.249}
            x={339.089}
            y={613.322}
            ry={0.361}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 5.91314,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
        />
        <rect
            width={302.94}
            height={5.115}
            x={587.277}
            y={152.78}
            ry={2.558}
            style={{
                fill: "#0055d4",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 3.05212,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.73573 .67727 -.81695 .57671 0 0)"
        />
        <rect
            width={356.525}
            height={5.987}
            x={556.358}
            y={96.083}
            ry={2.993}
            style={{
                fill: "#0055d4",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 3.58214,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.72099 .69295 -.80498 .5933 0 0)"
        />
        <rect
            width={471.374}
            height={4.969}
            x={498.428}
            y={-42.048}
            ry={2.484}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 4.67751,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.6733 .73938 -.7649 .64415 0 0)"
        />
        <rect
            width={234.198}
            height={4.409}
            x={527.696}
            y={-13.161}
            ry={1.229}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 2.31642,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.66726 .74482 -.75968 .6503 0 0)"
        />
        <rect
            width={235.375}
            height={4.439}
            x={479.964}
            y={-82.738}
            ry={1.237}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 2.33015,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.67227 .7403 -.76402 .6452 0 0)"
        />
        <rect
            width={161.136}
            height={5.791}
            x={258.449}
            y={716.93}
            ry={0.361}
            style={{
                opacity: 1,
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 2.9,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
        />
        <rect
            width={100.268}
            height={5.791}
            x={415.736}
            y={444.935}
            ry={0.361}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 2.28761,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
        />
        <rect
            width={97.12}
            height={5.791}
            x={540.181}
            y={472.868}
            ry={0.361}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 2.25141,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
        />
        <rect
            width={99.241}
            height={5.791}
            x={547.061}
            y={539.192}
            ry={0.361}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 2.27587,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
        />
        <rect
            width={3.747}
            height={17.033}
            x={256.746}
            y={711.139}
            ry={0.361}
            style={{
                opacity: 1,
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 2.9,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
        />
        <rect
            width={3.747}
            height={16.693}
            x={418.563}
            y={711.139}
            ry={0.361}
            style={{
                opacity: 1,
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 2.9,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
        />
        <rect
            width={55.188}
            height={3.747}
            x={642.29}
            y={380.116}
            ry={0.361}
            style={{
                opacity: 1,
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 2.9,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(36.318)"
        />
        <rect
            width={51.03}
            height={3.489}
            x={493.225}
            y={355.964}
            ry={0.336}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 2.69095,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.79901 .60131 -.5832 .81233 0 0)"
        />
        <rect
            width={53.708}
            height={3.662}
            x={326.979}
            y={71.401}
            ry={0.353}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 2.82814,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.80173 .59768 -.58684 .8097 0 0)"
        />
        <rect
            width={403.101}
            height={5.535}
            x={11.596}
            y={585.732}
            ry={0}
            style={{
                opacity: 0.97,
                fill: "#0055d4",
                strokeWidth: 0.437334,
            }}
        />
        <rect
            width={52.389}
            height={3.572}
            x={-262.881}
            y={615.443}
            ry={0.344}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 2.75856,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.76208 -.64749 .63056 .77614 0 0)"
        />
        <rect
            width={55.738}
            height={3.72}
            x={-219.424}
            y={697.013}
            ry={0.359}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 2.90362,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.79782 -.6029 .67443 .73834 0 0)"
        />
        <rect
            width={155.923}
            height={6.386}
            x={5136.062}
            y={-4504.086}
            ry={1.314}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 1.55612,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.83567 .54923 -.87066 .4919 0 0)"
        />
        <rect
            width={95.556}
            height={5.519}
            x={11458.55}
            y={5919.375}
            ry={0.659}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 0.848055,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.88792 -.46 .02816 .9996 0 0)"
        />
        <rect
            width={72.628}
            height={5.255}
            x={7479.261}
            y={-5945.233}
            ry={0.547}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 0.671189,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.82808 .56061 -.79747 .60336 0 0)"
        />
        <rect
            width={67.268}
            height={4.832}
            x={7277.105}
            y={-5766.853}
            ry={0.503}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 0.619371,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.86543 .50104 -.8396 .54322 0 0)"
        />
        <rect
            width={67.268}
            height={4.832}
            x={7427.241}
            y={-5906.454}
            ry={0.503}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 0.619371,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.86543 .50104 -.8396 .54322 0 0)"
        />
        <rect
            width={65.421}
            height={8.103}
            x={6879.058}
            y={-5133.432}
            ry={0.487}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 0.602545,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.92048 .3908 -.90347 .42866 0 0)"
        />
        <rect
            width={72.628}
            height={5.255}
            x={7606.004}
            y={-5994.277}
            ry={0.547}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 0.671189,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.82808 .56061 -.79747 .60336 0 0)"
        />
        <rect
            width={78.005}
            height={1.795}
            x={7562.712}
            y={-5787.804}
            ry={0}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 0.671189,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(3.0119 1.64904 -2.90058 1.77477 -28677.624 -1451.901)"
        />
        <rect
            width={267.854}
            height={6.105}
            x={12458.548}
            y={8245.972}
            ry={0}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 2.29351,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.79424 -.6076 .1319 .99126 0 0)"
        />
        <rect
            width={267.519}
            height={5.76}
            x={7329.16}
            y={-5229.999}
            ry={0}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 2.29351,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.87714 .48024 -.853 .52192 0 0)"
        />
        <rect
            width={197.102}
            height={6.709}
            x={9660.738}
            y={-6694.582}
            ry={0.817}
            style={{
                fill: "#333",
                fillRule: "evenodd",
                strokeWidth: 2.85937,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.79764 .60313 -.61107 .79158 0 0)"
        />
        <rect
            width={15944.751}
            height={5.535}
            x={12.762}
            y={646.327}
            ry={0}
            style={{
                opacity: 0.97,
                fill: "#0055d4",
                fillOpacity: 1,
                strokeWidth: 2.75052,
            }}
        />
        <rect
            width={15943.004}
            height={5.535}
            x={12.733}
            y={688.324}
            ry={0}
            style={{
                opacity: 0.97,
                fill: "#0055d4",
                strokeWidth: 2.75037,
            }}
        />
        <path
            d="M10.063 682h2.96v18.698h-2.96z"
            style={{
                opacity: 0.97,
                fill: "#0055d4",
                strokeWidth: 0.429912,
            }}
        />
        <g
            style={{
                fill: "#0055d4",
            }}
            transform="matrix(.99292 0 0 .98921 229.613 634.09)"
        >
            <rect
                width={74.136}
                height={4.157}
                x={14.984}
                y={3.757}
                ry={2.079}
                style={{
                    fill: "#0055d4",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 2.50642,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(.7931 .60909 -.61936 .7851 0 0)"
            />
            <rect
                width={74.136}
                height={4.157}
                x={-28.322}
                y={48.813}
                ry={2.079}
                style={{
                    fill: "#0055d4",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 2.50642,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(.79548 -.60598 .59557 .8033 0 0)"
            />
        </g>
        <rect
            width={60.96}
            height={5.791}
            x={222.151}
            y={614.374}
            ry={0.361}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 1.7837,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
        />
        <rect
            width={4.073}
            height={16.693}
            x={282.464}
            y={608.582}
            ry={0.361}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 3.02331,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
        />
        <rect
            width={48.669}
            height={4.769}
            x={514.678}
            y={557.669}
            ry={1.363}
            style={{
                opacity: 1,
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 2.96683,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
        />
        <rect
            width={284.761}
            height={4.135}
            x={1037.701}
            y={-100.658}
            ry={0.585}
            style={{
                fill: "#0055d4",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 2.79078,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.68345 .73 -.73794 .67487 0 0)"
        />
        <rect
            width={193.073}
            height={4.222}
            x={1039.45}
            y={-66.63}
            ry={0.395}
            style={{
                fill: "#0055d4",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 1.90036,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.63612 .7716 -.6256 .78014 0 0)"
        />
        <rect
            width={140.331}
            height={4.722}
            x={-73.84}
            y={1290.301}
            ry={0.286}
            style={{
                fill: "#0055d4",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 1.36649,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.66085 -.75052 .7582 .65203 0 0)"
        />
        <path
            d="M1138.277 889.964h2.96v18.698h-2.96zM1138.65 843.964h2.96v18.698h-2.96z"
            style={{
                opacity: 0.97,
                fill: "#0055d4",
                strokeWidth: 0.429912,
            }}
        />
        <rect
            width={17.429}
            height={4.317}
            x={413.226}
            y={1124.92}
            ry={0.482}
            style={{
                opacity: 1,
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 2.81301,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.75601 -.65456 .61643 .7874 0 0)"
        />
        <rect
            width={18.055}
            height={4.429}
            x={364.037}
            y={1127.993}
            ry={0.495}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 2.9,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(-40.193)"
        />
        <rect
            width={402.448}
            height={5.535}
            x={742.748}
            y={585.597}
            ry={0}
            style={{
                opacity: 0.97,
                fill: "#333",
                strokeWidth: 0.43698,
            }}
        />
        <rect
            width={220.427}
            height={5.535}
            x={718.006}
            y={561.693}
            ry={0}
            style={{
                opacity: 0.97,
                fill: "#333",
                strokeWidth: 0.323399,
            }}
        />
        <path
            d="M1141.665 577.854h3.457v18.698h-3.457z"
            style={{
                opacity: 0.97,
                fill: "#333",
                strokeWidth: 0.464612,
            }}
        />
        <rect
            width={193.756}
            height={5.784}
            x={777.56}
            y={-142.305}
            ry={0.688}
            style={{
                opacity: 1,
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 4.03342,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.68325 .73019 -.74258 .66976 0 0)"
        />
        <rect
            width={161.055}
            height={4.841}
            x={1405.73}
            y={-401.744}
            ry={1.337}
            style={{
                fill: "#0055d4",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 1.60129,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.76483 .64423 -.76298 .64642 0 0)"
        />
        <rect
            width={161.055}
            height={4.841}
            x={1440.69}
            y={-370.117}
            ry={1.337}
            style={{
                fill: "#0055d4",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 1.60129,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.76483 .64423 -.76298 .64642 0 0)"
        />
        <text
            xmlSpace="preserve"
            x={1726.686}
            y={452.87}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 16,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                textAlign: "start",
                textAnchor: "start",
                opacity: 1,
                fill: "#0055d4",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 2.9,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
        />
        <text
            xmlSpace="preserve"
            x={3025.124}
            y={532.803}
            style={{
                fontSize: 16,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                fill: "#0055d4",
                fillRule: "evenodd",
                strokeWidth: 2.9,
                paintOrder: "stroke fill markers",
            }}
        />
        <g transform="matrix(.54067 0 0 .9824 3758.368 -23.726)">
            <rect
                width={224.84}
                height={45.649}
                x={14.649}
                y={735.5}
                ry={4.088}
                style={{
                    opacity: 1,
                    fill: "#999",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#000",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={97.543}
                y={765.762}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 16,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    textAnchor: "middle",
                    opacity: 1,
                    fill: "#030303",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            >
                <tspan
                    x={97.543}
                    y={765.762}
                    style={{
                        fontSize: 16,
                    }}
                >
                    {"Plataforma 2 y 3"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.54067 0 0 .9824 6474.864 -22.397)">
            <rect
                width={224.84}
                height={45.649}
                x={14.649}
                y={735.5}
                ry={4.088}
                style={{
                    opacity: 1,
                    fill: "#999",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#000",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={97.543}
                y={765.762}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 16,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    textAnchor: "middle",
                    opacity: 1,
                    fill: "#030303",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            >
                <tspan
                    x={97.543}
                    y={765.762}
                    style={{
                        fontSize: 16,
                    }}
                >
                    {"Plataforma 2 y 3"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.54067 0 0 .9824 9022.864 -24.055)">
            <rect
                width={224.84}
                height={45.649}
                x={14.649}
                y={735.5}
                ry={4.088}
                style={{
                    opacity: 1,
                    fill: "#999",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#000",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={97.543}
                y={765.762}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 16,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    textAnchor: "middle",
                    opacity: 1,
                    fill: "#030303",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            >
                <tspan
                    x={97.543}
                    y={765.762}
                    style={{
                        fontSize: 16,
                    }}
                >
                    {"Plataforma 2 y 3"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.54067 0 0 .9824 11204.864 -24.066)">
            <rect
                width={224.84}
                height={45.649}
                x={14.649}
                y={735.5}
                ry={4.088}
                style={{
                    opacity: 1,
                    fill: "#999",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#000",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={97.543}
                y={765.762}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 16,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    textAnchor: "middle",
                    opacity: 1,
                    fill: "#030303",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            >
                <tspan
                    x={97.543}
                    y={765.762}
                    style={{
                        fontSize: 16,
                    }}
                >
                    {"Plataforma 2 y 3"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.54067 0 0 .9824 12996.864 -23.133)">
            <rect
                width={224.84}
                height={45.649}
                x={14.649}
                y={735.5}
                ry={4.088}
                style={{
                    opacity: 1,
                    fill: "#999",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#000",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={97.543}
                y={765.762}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 16,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    textAnchor: "middle",
                    opacity: 1,
                    fill: "#030303",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            >
                <tspan
                    x={97.543}
                    y={765.762}
                    style={{
                        fontSize: 16,
                    }}
                >
                    {"Plataforma 2 y 3"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.54067 0 0 .9824 14992.864 -23.045)">
            <rect
                width={224.84}
                height={45.649}
                x={14.649}
                y={735.5}
                ry={4.088}
                style={{
                    opacity: 1,
                    fill: "#999",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#000",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={97.543}
                y={765.762}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 16,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    textAnchor: "middle",
                    opacity: 1,
                    fill: "#030303",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            >
                <tspan
                    x={97.543}
                    y={765.762}
                    style={{
                        fontSize: 16,
                    }}
                >
                    {"Plataforma 2 y 3"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.5407 0 0 .97364 3759.73 83.343)">
            <rect
                width={224.84}
                height={45.649}
                x={14.649}
                y={735.5}
                ry={4.088}
                style={{
                    opacity: 1,
                    fill: "#999",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#000",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={97.543}
                y={765.762}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 16,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    textAnchor: "middle",
                    opacity: 1,
                    fill: "#030303",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            >
                <tspan
                    x={97.543}
                    y={765.762}
                    style={{
                        fontSize: 16,
                    }}
                >
                    {"Plataforma 4"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.5407 0 0 .97364 6474.863 84.749)">
            <rect
                width={224.84}
                height={45.649}
                x={14.649}
                y={735.5}
                ry={4.088}
                style={{
                    opacity: 1,
                    fill: "#999",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#000",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={97.543}
                y={765.762}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 16,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    textAnchor: "middle",
                    opacity: 1,
                    fill: "#030303",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            >
                <tspan
                    x={97.543}
                    y={765.762}
                    style={{
                        fontSize: 16,
                    }}
                >
                    {"Plataforma 4"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.5407 0 0 .97364 9022.863 87.474)">
            <rect
                width={224.84}
                height={45.649}
                x={14.649}
                y={735.5}
                ry={4.088}
                style={{
                    opacity: 1,
                    fill: "#999",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#000",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={97.543}
                y={765.762}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 16,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    textAnchor: "middle",
                    opacity: 1,
                    fill: "#030303",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            >
                <tspan
                    x={97.543}
                    y={765.762}
                    style={{
                        fontSize: 16,
                    }}
                >
                    {"Plataforma 4"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.5407 0 0 .97364 11204.863 87.847)">
            <rect
                width={224.84}
                height={45.649}
                x={14.649}
                y={735.5}
                ry={4.088}
                style={{
                    opacity: 1,
                    fill: "#999",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#000",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={97.543}
                y={765.762}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 16,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    textAnchor: "middle",
                    opacity: 1,
                    fill: "#030303",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            >
                <tspan
                    x={97.543}
                    y={765.762}
                    style={{
                        fontSize: 16,
                    }}
                >
                    {"Plataforma 4"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.5407 0 0 .97364 12996.863 87.495)">
            <rect
                width={224.84}
                height={45.649}
                x={14.649}
                y={735.5}
                ry={4.088}
                style={{
                    opacity: 1,
                    fill: "#999",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#000",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={97.543}
                y={765.762}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 16,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    textAnchor: "middle",
                    opacity: 1,
                    fill: "#030303",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            >
                <tspan
                    x={97.543}
                    y={765.762}
                    style={{
                        fontSize: 16,
                    }}
                >
                    {"Plataforma 4"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.5407 0 0 .97364 14992.863 88.166)">
            <rect
                width={224.84}
                height={45.649}
                x={14.649}
                y={735.5}
                ry={4.088}
                style={{
                    opacity: 1,
                    fill: "#999",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#000",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={97.543}
                y={765.762}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 16,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    textAnchor: "middle",
                    opacity: 1,
                    fill: "#030303",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            >
                <tspan
                    x={97.543}
                    y={765.762}
                    style={{
                        fontSize: 16,
                    }}
                >
                    {"Plataforma 4"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.5407 0 0 .97364 3757.686 -120.726)">
            <rect
                width={224.84}
                height={45.649}
                x={14.649}
                y={735.5}
                ry={4.088}
                style={{
                    opacity: 1,
                    fill: "#999",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#000",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={97.543}
                y={765.762}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 16,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    textAnchor: "middle",
                    opacity: 1,
                    fill: "#030303",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            >
                <tspan
                    x={97.543}
                    y={765.762}
                    style={{
                        fontSize: 16,
                    }}
                >
                    {"Plataforma 1"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.5407 0 0 .97364 9180.074 -122.592)">
            <rect
                width={224.84}
                height={45.649}
                x={14.649}
                y={735.5}
                ry={4.088}
                style={{
                    opacity: 1,
                    fill: "#999",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#000",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={97.543}
                y={765.762}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 16,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    textAnchor: "middle",
                    opacity: 1,
                    fill: "#030303",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            >
                <tspan
                    x={97.543}
                    y={765.762}
                    style={{
                        fontSize: 16,
                    }}
                >
                    {"Plataforma 1"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.5407 0 0 .97364 12996.863 -122.526)">
            <rect
                width={224.84}
                height={45.649}
                x={14.649}
                y={735.5}
                ry={4.088}
                style={{
                    opacity: 1,
                    fill: "#999",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#000",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={97.543}
                y={765.762}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 16,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    textAnchor: "middle",
                    opacity: 1,
                    fill: "#030303",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            >
                <tspan
                    x={97.543}
                    y={765.762}
                    style={{
                        fontSize: 16,
                    }}
                >
                    {"Plataforma 1"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.5407 0 0 .97364 14992.863 -121.977)">
            <rect
                width={224.84}
                height={45.649}
                x={14.649}
                y={735.5}
                ry={4.088}
                style={{
                    opacity: 1,
                    fill: "#999",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#000",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={97.543}
                y={765.762}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 16,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    textAnchor: "middle",
                    opacity: 1,
                    fill: "#030303",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 2.9,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            >
                <tspan
                    x={97.543}
                    y={765.762}
                    style={{
                        fontSize: 16,
                    }}
                >
                    {"Plataforma 1"}
                </tspan>
            </text>
        </g>
        <g transform="translate(12.264 75.628)">
            <rect
                width={197.937}
                height={106.898}
                x={3710.28}
                y={381.056}
                ry={0}
                style={{
                    fill: "#999",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#000",
                    strokeWidth: 4.16382,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={5563.686}
                y={283.486}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: "20.5624px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    textAnchor: "middle",
                    fill: "#030303",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 3.72694,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(.68501 1.45983)"
            >
                <tspan
                    x={5563.686}
                    y={283.486}
                    style={{
                        fontSize: "20.5624px",
                        strokeWidth: 3.72694,
                    }}
                >
                    {"AVELLANEDA"}
                </tspan>
                <tspan
                    x={5563.686}
                    y={304.048}
                    style={{
                        fontSize: "20.5624px",
                        strokeWidth: 3.72694,
                    }}
                >
                    {"(ALL)"}
                </tspan>
                <tspan
                    x={5563.686}
                    y={324.611}
                    style={{
                        fontSize: "20.5624px",
                        strokeWidth: 3.72694,
                    }}
                >
                    {"KM. 3835"}
                </tspan>
            </text>
        </g>
        <g transform="translate(2737.01 73.73)">
            <rect
                width={197.937}
                height={106.898}
                x={3710.28}
                y={381.056}
                ry={0}
                style={{
                    fill: "#999",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#000",
                    strokeWidth: 4.16382,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={5563.686}
                y={283.486}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: "20.5624px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    textAnchor: "middle",
                    fill: "#030303",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 3.72694,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(.68501 1.45983)"
            >
                <tspan
                    x={5563.686}
                    y={283.486}
                    style={{
                        fontSize: "20.5624px",
                        strokeWidth: 3.72694,
                    }}
                >
                    {"GERLI"}
                </tspan>
                <tspan
                    x={5563.686}
                    y={304.048}
                    style={{
                        fontSize: "20.5624px",
                        strokeWidth: 3.72694,
                    }}
                >
                    {"(GL)"}
                </tspan>
                <tspan
                    x={5563.686}
                    y={324.611}
                    style={{
                        fontSize: "20.5624px",
                        strokeWidth: 3.72694,
                    }}
                >
                    {"KM. 6482"}
                </tspan>
            </text>
        </g>
        <g transform="translate(5291.802 75.202)">
            <rect
                width={197.937}
                height={106.898}
                x={3710.28}
                y={381.056}
                ry={0}
                style={{
                    fill: "#999",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#000",
                    strokeWidth: 4.16382,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={5563.686}
                y={283.486}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: "20.5624px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    textAnchor: "middle",
                    fill: "#030303",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 3.72694,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(.68501 1.45983)"
            >
                <tspan
                    x={5563.686}
                    y={283.486}
                    style={{
                        fontSize: "20.5624px",
                        strokeWidth: 3.72694,
                    }}
                >
                    {"LANUS"}
                </tspan>
                <tspan
                    x={5563.686}
                    y={304.048}
                    style={{
                        fontSize: "20.5624px",
                        strokeWidth: 3.72694,
                    }}
                >
                    {"(LS)"}
                </tspan>
                <tspan
                    x={5563.686}
                    y={324.611}
                    style={{
                        fontSize: "20.5624px",
                        strokeWidth: 3.72694,
                    }}
                >
                    {"KM. 9030"}
                </tspan>
            </text>
        </g>
        <g transform="translate(7461.824 -345.937)">
            <rect
                width={197.937}
                height={106.898}
                x={3710.28}
                y={381.056}
                ry={0}
                style={{
                    fill: "#999",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#000",
                    strokeWidth: 4.16382,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={5563.686}
                y={283.486}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: "20.5624px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    textAnchor: "middle",
                    fill: "#030303",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 3.72694,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(.68501 1.45983)"
            >
                <tspan
                    x={5563.686}
                    y={283.486}
                    style={{
                        fontSize: "20.5624px",
                        strokeWidth: 3.72694,
                    }}
                >
                    {"REMEDIOS DE ESCALADA"}
                </tspan>
                <tspan
                    x={5563.686}
                    y={304.048}
                    style={{
                        fontSize: "20.5624px",
                        strokeWidth: 3.72694,
                    }}
                >
                    {"(RE)"}
                </tspan>
                <tspan
                    x={5563.686}
                    y={324.611}
                    style={{
                        fontSize: "20.5624px",
                        strokeWidth: 3.72694,
                    }}
                >
                    {"KM. 11212"}
                </tspan>
            </text>
        </g>
        <g transform="translate(9252.285 75.565)">
            <rect
                width={197.937}
                height={106.898}
                x={3710.28}
                y={381.056}
                ry={0}
                style={{
                    fill: "#999",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#000",
                    strokeWidth: 4.16382,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={5563.686}
                y={283.486}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: "20.5624px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    textAnchor: "middle",
                    fill: "#030303",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 3.72694,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(.68501 1.45983)"
            >
                <tspan
                    x={5563.686}
                    y={283.486}
                    style={{
                        fontSize: "20.5624px",
                        strokeWidth: 3.72694,
                    }}
                >
                    {"BANFIELD"}
                </tspan>
                <tspan
                    x={5563.686}
                    y={304.048}
                    style={{
                        fontSize: "20.5624px",
                        strokeWidth: 3.72694,
                    }}
                >
                    {"(BF)"}
                </tspan>
                <tspan
                    x={5563.686}
                    y={324.611}
                    style={{
                        fontSize: "20.5624px",
                        strokeWidth: 3.72694,
                    }}
                >
                    {"KM. 13004"}
                </tspan>
            </text>
        </g>
        <g transform="translate(11253.122 81.542)">
            <rect
                width={197.937}
                height={106.898}
                x={3710.28}
                y={381.056}
                ry={0}
                style={{
                    fill: "#999",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#000",
                    strokeWidth: 4.16382,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={5563.686}
                y={283.486}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: "20.5624px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    textAnchor: "middle",
                    fill: "#030303",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 3.72694,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(.68501 1.45983)"
            >
                <tspan
                    x={5563.686}
                    y={283.486}
                    style={{
                        fontSize: "20.5624px",
                        strokeWidth: 3.72694,
                    }}
                >
                    {"LOMAS DE ZAMORA"}
                </tspan>
                <tspan
                    x={5563.686}
                    y={304.048}
                    style={{
                        fontSize: "20.5624px",
                        strokeWidth: 3.72694,
                    }}
                >
                    {"(ZA)"}
                </tspan>
                <tspan
                    x={5563.686}
                    y={324.611}
                    style={{
                        fontSize: "20.5624px",
                        strokeWidth: 3.72694,
                    }}
                >
                    {"KM. 14998"}
                </tspan>
            </text>
        </g>
        <text
            xmlSpace="preserve"
            x={1993.584}
            y={1071.739}
            style={{
                fontSize: 16,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                fill: "#d38d5f",
                fillRule: "evenodd",
                strokeWidth: 2.9,
                paintOrder: "stroke fill markers",
            }}
        />
        <g transform="translate(2867.497 242.168)">
            <ellipse
                cx={152}
                cy={908.268}
                rx={17.826}
                ry={16.26}
                style={{
                    opacity: 0.97,
                    fill: "#999",
                    strokeWidth: 0.95647,
                }}
            />
            <ellipse
                cx={152}
                cy={908.617}
                rx={13.484}
                ry={12.66}
                style={{
                    opacity: 0.97,
                    fill: "#fff",
                    strokeWidth: 1.09032,
                }}
            />
        </g>
        <text
            xmlSpace="preserve"
            x={950.459}
            y={1186.236}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 16,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                opacity: 0.97,
                fill: "#000",
            }}
            transform="translate(2047.37 -.399)"
        >
            <tspan x={950.459} y={1186.236}>
                {"3.000"}
            </tspan>
        </text>
        <text
            xmlSpace="preserve"
            x={3176.38}
            y={1178.708}
            style={{
                fontSize: 16,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                fill: "#d38d5f",
                fillRule: "evenodd",
                strokeWidth: 2.9,
                paintOrder: "stroke fill markers",
            }}
        />
        <g transform="translate(3867.497 241.992)">
            <ellipse
                cx={152}
                cy={908.268}
                rx={17.826}
                ry={16.26}
                style={{
                    opacity: 0.97,
                    fill: "#999",
                    strokeWidth: 0.95647,
                }}
            />
            <ellipse
                cx={152}
                cy={908.617}
                rx={13.484}
                ry={12.66}
                style={{
                    opacity: 0.97,
                    fill: "#fff",
                    strokeWidth: 1.09032,
                }}
            />
        </g>
        <text
            xmlSpace="preserve"
            x={950.459}
            y={1186.236}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 16,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                opacity: 0.97,
                fill: "#000",
            }}
            transform="translate(3047.37 -.575)"
        >
            <tspan x={950.459} y={1186.236}>
                {"4.000"}
            </tspan>
        </text>
        <g transform="translate(4869.068 243.137)">
            <ellipse
                cx={152}
                cy={908.268}
                rx={17.826}
                ry={16.26}
                style={{
                    opacity: 0.97,
                    fill: "#999",
                    strokeWidth: 0.95647,
                }}
            />
            <ellipse
                cx={152}
                cy={908.617}
                rx={13.484}
                ry={12.66}
                style={{
                    opacity: 0.97,
                    fill: "#fff",
                    strokeWidth: 1.09032,
                }}
            />
        </g>
        <text
            xmlSpace="preserve"
            x={950.459}
            y={1186.236}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 16,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                opacity: 0.97,
                fill: "#000",
            }}
            transform="translate(4048.94 .571)"
        >
            <tspan x={950.459} y={1186.236}>
                {"5.000"}
            </tspan>
        </text>
        <g transform="translate(5869.068 242.028)">
            <ellipse
                cx={152}
                cy={908.268}
                rx={17.826}
                ry={16.26}
                style={{
                    opacity: 0.97,
                    fill: "#999",
                    strokeWidth: 0.95647,
                }}
            />
            <ellipse
                cx={152}
                cy={908.617}
                rx={13.484}
                ry={12.66}
                style={{
                    opacity: 0.97,
                    fill: "#fff",
                    strokeWidth: 1.09032,
                }}
            />
        </g>
        <text
            xmlSpace="preserve"
            x={950.459}
            y={1186.236}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 16,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                opacity: 0.97,
                fill: "#000",
            }}
            transform="translate(5048.94 -.538)"
        >
            <tspan x={950.459} y={1186.236}>
                {"6.000"}
            </tspan>
        </text>
        <g transform="translate(6869.068 242.992)">
            <ellipse
                cx={152}
                cy={908.268}
                rx={17.826}
                ry={16.26}
                style={{
                    opacity: 0.97,
                    fill: "#999",
                    strokeWidth: 0.95647,
                }}
            />
            <ellipse
                cx={152}
                cy={908.617}
                rx={13.484}
                ry={12.66}
                style={{
                    opacity: 0.97,
                    fill: "#fff",
                    strokeWidth: 1.09032,
                }}
            />
        </g>
        <text
            xmlSpace="preserve"
            x={950.459}
            y={1186.236}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 16,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                opacity: 0.97,
                fill: "#000",
            }}
            transform="translate(6048.94 .425)"
        >
            <tspan x={950.459} y={1186.236}>
                {"7.000"}
            </tspan>
        </text>
        <text
            xmlSpace="preserve"
            x={3867.935}
            y={457.175}
            style={{
                fontSize: 16,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                fill: "#d38d5f",
                fillRule: "evenodd",
                strokeWidth: 2.9,
                paintOrder: "stroke fill markers",
            }}
        />
        <g transform="translate(10826.275 .45)">
            <g transform="translate(1033.725 -41.45)">
                <rect
                    width={47.693}
                    height={27.253}
                    x={868}
                    y={171}
                    ry={0}
                    style={{
                        opacity: 0.97,
                        fill: "#000",
                    }}
                />
                <path
                    d="M869.363 172.363h45.138v24.528h-45.138z"
                    style={{
                        opacity: 0.97,
                        fill: "#fff",
                        strokeWidth: 1.06703,
                    }}
                />
            </g>
            <text
                xmlSpace="preserve"
                x={10.586}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 24,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    whiteSpace: "pre",
                    shapeInside: "url(#aC)",
                    display: "inline",
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="translate(976.391 -1.168)"
            >
                <tspan x={936.23} y={152.437}>
                    <tspan
                        style={{
                            fontSize: "18.6667px",
                            textAlign: "center",
                            textAnchor: "middle",
                        }}
                    >
                        {"BN"}
                    </tspan>
                </tspan>
            </text>
            <path
                d="M876.605 175.016h30.66v1.703h-30.66z"
                style={{
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="translate(1033.725 -41.45)"
            />
            <rect
                width={38.542}
                height={927.318}
                x={1906.619}
                y={164.561}
                ry={10.498}
                style={{
                    opacity: 0.97,
                    fill: "#b3b3b3",
                    strokeWidth: 1.08868,
                }}
            />
            <text
                xmlSpace="preserve"
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 24,
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    textAlign: "center",
                    whiteSpace: "pre",
                    shapeInside: "url(#aD)",
                    display: "inline",
                    opacity: 0.97,
                    fill: "#000",
                }}
                transform="matrix(0 -.67333 .82598 0 1543.585 1331.222)"
            >
                <tspan x={1316.402} y={469.939}>
                    {"Km. 12,728 -  VIEYTES / RINCON "}
                </tspan>
            </text>
        </g>
        <g transform="translate(10869.068 243.473)">
            <ellipse
                cx={152}
                cy={908.268}
                rx={17.826}
                ry={16.26}
                style={{
                    opacity: 0.97,
                    fill: "#999",
                    strokeWidth: 0.95647,
                }}
            />
            <ellipse
                cx={152}
                cy={908.617}
                rx={13.484}
                ry={12.66}
                style={{
                    opacity: 0.97,
                    fill: "#fff",
                    strokeWidth: 1.09032,
                }}
            />
        </g>
        <text
            xmlSpace="preserve"
            x={950.459}
            y={1186.236}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 16,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                opacity: 0.97,
                fill: "#000",
            }}
            transform="translate(10048.94 .907)"
        >
            <tspan x={950.459} y={1186.236}>
                {"11.000"}
            </tspan>
        </text>
        <g transform="translate(11869.068 241.465)">
            <ellipse
                cx={152}
                cy={908.268}
                rx={17.826}
                ry={16.26}
                style={{
                    opacity: 0.97,
                    fill: "#999",
                    strokeWidth: 0.95647,
                }}
            />
            <ellipse
                cx={152}
                cy={908.617}
                rx={13.484}
                ry={12.66}
                style={{
                    opacity: 0.97,
                    fill: "#fff",
                    strokeWidth: 1.09032,
                }}
            />
        </g>
        <text
            xmlSpace="preserve"
            x={950.459}
            y={1186.236}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 16,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                opacity: 0.97,
                fill: "#000",
            }}
            transform="translate(11048.94 -1.101)"
        >
            <tspan x={950.459} y={1186.236}>
                {"12.000"}
            </tspan>
        </text>
        <g transform="translate(12869.068 242.773)">
            <ellipse
                cx={152}
                cy={908.268}
                rx={17.826}
                ry={16.26}
                style={{
                    opacity: 0.97,
                    fill: "#999",
                    strokeWidth: 0.95647,
                }}
            />
            <ellipse
                cx={152}
                cy={908.617}
                rx={13.484}
                ry={12.66}
                style={{
                    opacity: 0.97,
                    fill: "#fff",
                    strokeWidth: 1.09032,
                }}
            />
        </g>
        <text
            xmlSpace="preserve"
            x={950.459}
            y={1186.236}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 16,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                opacity: 0.97,
                fill: "#000",
            }}
            transform="translate(12048.94 .207)"
        >
            <tspan x={950.459} y={1186.236}>
                {"13.000"}
            </tspan>
        </text>
        <g transform="translate(13869.068 242.157)">
            <ellipse
                cx={152}
                cy={908.268}
                rx={17.826}
                ry={16.26}
                style={{
                    opacity: 0.97,
                    fill: "#999",
                    strokeWidth: 0.95647,
                }}
            />
            <ellipse
                cx={152}
                cy={908.617}
                rx={13.484}
                ry={12.66}
                style={{
                    opacity: 0.97,
                    fill: "#fff",
                    strokeWidth: 1.09032,
                }}
            />
        </g>
        <text
            xmlSpace="preserve"
            x={950.459}
            y={1186.236}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 16,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                opacity: 0.97,
                fill: "#000",
            }}
            transform="translate(13048.94 -.41)"
        >
            <tspan x={950.459} y={1186.236}>
                {"14.000"}
            </tspan>
        </text>
        <g transform="translate(14869.068 242.478)">
            <ellipse
                cx={152}
                cy={908.268}
                rx={17.826}
                ry={16.26}
                style={{
                    opacity: 0.97,
                    fill: "#999",
                    strokeWidth: 0.95647,
                }}
            />
            <ellipse
                cx={152}
                cy={908.617}
                rx={13.484}
                ry={12.66}
                style={{
                    opacity: 0.97,
                    fill: "#fff",
                    strokeWidth: 1.09032,
                }}
            />
        </g>
        <text
            xmlSpace="preserve"
            x={950.459}
            y={1186.236}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 16,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                opacity: 0.97,
                fill: "#000",
            }}
            transform="translate(14048.94 -.088)"
        >
            <tspan x={950.459} y={1186.236}>
                {"15.000"}
            </tspan>
        </text>
        <g transform="translate(15869.068 242.935)">
            <ellipse
                cx={152}
                cy={908.268}
                rx={17.826}
                ry={16.26}
                style={{
                    opacity: 0.97,
                    fill: "#999",
                    strokeWidth: 0.95647,
                }}
            />
            <ellipse
                cx={152}
                cy={908.617}
                rx={13.484}
                ry={12.66}
                style={{
                    opacity: 0.97,
                    fill: "#fff",
                    strokeWidth: 1.09032,
                }}
            />
        </g>
        <text
            xmlSpace="preserve"
            x={950.459}
            y={1186.236}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 16,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                opacity: 0.97,
                fill: "#000",
            }}
            transform="translate(15048.94 .368)"
        >
            <tspan x={950.459} y={1186.236}>
                {"16.000"}
            </tspan>
        </text>
        <g transform="translate(9869.068 242.992)">
            <ellipse
                cx={152}
                cy={908.268}
                rx={17.826}
                ry={16.26}
                style={{
                    opacity: 0.97,
                    fill: "#999",
                    strokeWidth: 0.95647,
                }}
            />
            <ellipse
                cx={152}
                cy={908.617}
                rx={13.484}
                ry={12.66}
                style={{
                    opacity: 0.97,
                    fill: "#fff",
                    strokeWidth: 1.09032,
                }}
            />
        </g>
        <text
            xmlSpace="preserve"
            x={950.459}
            y={1186.236}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 16,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                opacity: 0.97,
                fill: "#000",
            }}
            transform="translate(9048.94 .425)"
        >
            <tspan x={950.459} y={1186.236}>
                {"10.000"}
            </tspan>
        </text>
        <g transform="translate(8869.068 242.992)">
            <ellipse
                cx={152}
                cy={908.268}
                rx={17.826}
                ry={16.26}
                style={{
                    opacity: 0.97,
                    fill: "#999",
                    strokeWidth: 0.95647,
                }}
            />
            <ellipse
                cx={152}
                cy={908.617}
                rx={13.484}
                ry={12.66}
                style={{
                    opacity: 0.97,
                    fill: "#fff",
                    strokeWidth: 1.09032,
                }}
            />
        </g>
        <text
            xmlSpace="preserve"
            x={950.459}
            y={1186.236}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 16,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                opacity: 0.97,
                fill: "#000",
            }}
            transform="translate(8048.94 .425)"
        >
            <tspan x={950.459} y={1186.236}>
                {"9.000"}
            </tspan>
        </text>
        <g transform="translate(7869.068 242.992)">
            <ellipse
                cx={152}
                cy={908.268}
                rx={17.826}
                ry={16.26}
                style={{
                    opacity: 0.97,
                    fill: "#999",
                    strokeWidth: 0.95647,
                }}
            />
            <ellipse
                cx={152}
                cy={908.617}
                rx={13.484}
                ry={12.66}
                style={{
                    opacity: 0.97,
                    fill: "#fff",
                    strokeWidth: 1.09032,
                }}
            />
        </g>
        <text
            xmlSpace="preserve"
            x={950.459}
            y={1186.236}
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 16,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                opacity: 0.97,
                fill: "#000",
            }}
            transform="translate(7048.94 .425)"
        >
            <tspan x={950.459} y={1186.236}>
                {"8.000"}
            </tspan>
        </text>
        <rect
            width={161.055}
            height={4.841}
            x={3423.504}
            y={3302.823}
            ry={1.337}
            style={{
                fill: "#0055d4",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 1.60129,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.76577 -.64311 .5061 .86248 0 0)"
        />
        <rect
            width={158.974}
            height={4.744}
            x={3401.818}
            y={3321.402}
            ry={1.311}
            style={{
                fill: "#0055d4",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 1.57491,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.77262 -.63487 .51432 .8576 0 0)"
        />
        <rect
            width={215.772}
            height={6.172}
            x={4843.657}
            y={-1380.891}
            ry={1.705}
            style={{
                fill: "#06f",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 2.09283,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.9404 .34008 -.54823 .83633 0 0)"
        />
        <rect
            width={136.088}
            height={4.036}
            x={5178.372}
            y={-1227.005}
            ry={1.115}
            style={{
                fill: "#06f",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 1.34407,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.94875 .31603 -.4846 .87473 0 0)"
        />
        <rect
            width={129.683}
            height={6.524}
            x={5317.124}
            y={112.36}
            ry={1.802}
            style={{
                fill: "#06f",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 1.66807,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.99693 .07824 .0908 .99587 0 0)"
        />
        <rect
            width={161.055}
            height={4.841}
            x={4629.938}
            y={4270.967}
            ry={1.337}
            style={{
                fill: "#0055d4",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 1.60129,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.76577 -.64311 .5061 .86248 0 0)"
        />
        <rect
            width={161.055}
            height={4.841}
            x={4469.845}
            y={4270.902}
            ry={1.337}
            style={{
                fill: "#0055d4",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 1.60129,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.76577 -.64311 .5061 .86248 0 0)"
        />
        <rect
            width={161.055}
            height={4.841}
            x={4411.77}
            y={4270.903}
            ry={1.337}
            style={{
                fill: "#0055d4",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 1.60129,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.76577 -.64311 .5061 .86248 0 0)"
        />
        <path
            d="M5017.269-609.939h1046.959v5.519H5017.269z"
            style={{
                fill: "#06f",
                fillRule: "evenodd",
                strokeWidth: 2.95063,
                paintOrder: "stroke fill markers",
            }}
            transform="scale(1 -1)"
        />
        <rect
            width={2150.976}
            height={5.716}
            x={6063.966}
            y={-610.925}
            ry={1.789}
            style={{
                fill: "#333",
                fillRule: "evenodd",
                strokeWidth: 4.5906,
                paintOrder: "stroke fill markers",
            }}
            transform="scale(1 -1)"
        />
        <path
            d="M4997.493-851.232h543.985v5.519h-543.985z"
            style={{
                fill: "#06f",
                fillRule: "evenodd",
                strokeWidth: 2.12688,
                paintOrder: "stroke fill markers",
            }}
            transform="scale(1 -1)"
        />
        <path
            d="M5015.53 599.57h2.891v14.694h-2.891z"
            style={{
                fill: "#06f",
                fillRule: "evenodd",
                strokeWidth: 2.9,
                paintOrder: "stroke fill markers",
            }}
        />
        <rect
            width={301.831}
            height={68.133}
            x={5011.895}
            y={517.814}
            ry={1.802}
            style={{
                fill: "#b7bec8",
                fillRule: "evenodd",
                strokeWidth: 2.9,
                paintOrder: "stroke fill markers",
            }}
        />
        <rect
            width={132.179}
            height={54.507}
            x={11644.541}
            y={503.528}
            ry={1.442}
            style={{
                fill: "#b7bec8",
                fillRule: "evenodd",
                strokeWidth: 1.7165,
                paintOrder: "stroke fill markers",
            }}
        />
        <path
            d="M5017.353-571.964h502.834v4.796h-502.834z"
            style={{
                fill: "#06f",
                fillRule: "evenodd",
                strokeWidth: 1.90627,
                paintOrder: "stroke fill markers",
            }}
            transform="scale(1 -1)"
        />
        <path
            d="M5015.614 561.594h2.891v14.694h-2.891z"
            style={{
                fill: "#06f",
                fillRule: "evenodd",
                strokeWidth: 2.9,
                paintOrder: "stroke fill markers",
            }}
        />
        <path
            d="M5017.297-533.969h296.63v6.025h-296.63z"
            style={{
                fill: "#06f",
                fillRule: "evenodd",
                strokeWidth: 1.64099,
                paintOrder: "stroke fill markers",
            }}
            transform="scale(1 -1)"
        />
        <path
            d="M5017.401-498.499h295.725v5.519h-295.725z"
            style={{
                fill: "#06f",
                fillRule: "evenodd",
                strokeWidth: 1.56818,
                paintOrder: "stroke fill markers",
            }}
            transform="scale(1 -1)"
        />
        <path
            d="M5015 523.253h2.891v14.694H5015zM5015.385 488.451h2.891v14.694h-2.891z"
            style={{
                fill: "#06f",
                fillRule: "evenodd",
                strokeWidth: 2.9,
                paintOrder: "stroke fill markers",
            }}
        />
        <text
            xmlSpace="preserve"
            x={5078.325}
            y={556.309}
            style={{
                fontSize: 16,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                fill: "#b7bec8",
                fillRule: "evenodd",
                strokeWidth: 2.9,
                paintOrder: "stroke fill markers",
            }}
        >
            <tspan
                x={5078.325}
                y={556.309}
                style={{
                    fill: "#000",
                }}
            >
                {"DEPOSITO KILO 5"}
            </tspan>
        </text>
        <text
            xmlSpace="preserve"
            x={5096.38}
            y={486.473}
            style={{
                fontSize: 16,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                whiteSpace: "pre",
                inlineSize: 102.767,
                display: "inline",
                fill: "#000",
                fillRule: "evenodd",
                strokeWidth: 2.9,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.4589 0 0 .38148 2754.375 303.085)"
        >
            <tspan x={5096.38} y={486.473}>
                {"VIA LAVADO"}
            </tspan>
        </text>
        <rect
            width={68.942}
            height={4.945}
            x={11864.105}
            y={6525.513}
            ry={0.515}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 0.634337,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.86657 -.49905 .02202 .99976 0 0)"
        />
        <rect
            width={68.942}
            height={4.945}
            x={6909.327}
            y={-5285.552}
            ry={0.515}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 0.634337,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.87235 .48887 -.8475 .53078 0 0)"
        />
        <rect
            width={220.275}
            height={4.943}
            x={12260.102}
            y={7035.807}
            ry={1.056}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 1.26865,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.85138 -.52455 .02059 .99979 0 0)"
        />
        <rect
            width={235.254}
            height={6.025}
            x={12303.04}
            y={7094.688}
            ry={1.91}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 2.28316,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.84784 -.53025 .02028 .9998 0 0)"
        />
        <rect
            width={0.085}
            height={1.448}
            x={10339.239}
            y={569.281}
            rx={27.253}
            ry={1.448}
            style={{
                fill: "#333",
                fillRule: "evenodd",
                strokeWidth: 2.9,
                paintOrder: "stroke fill markers",
            }}
        />
        <rect
            width={1680.277}
            height={6.813}
            x={10214.044}
            y={603.263}
            ry={1.037}
            style={{
                fill: "#333",
                fillRule: "evenodd",
                strokeWidth: 7.02982,
                paintOrder: "stroke fill markers",
            }}
        />
        <rect
            width={361.789}
            height={5.451}
            x={10213.986}
            y={569.292}
            ry={0.83}
            style={{
                fill: "#333",
                fillRule: "evenodd",
                strokeWidth: 3.48591,
                paintOrder: "stroke fill markers",
            }}
        />
        <rect
            width={1066.225}
            height={5.451}
            x={10779.661}
            y={568.818}
            ry={0.83}
            style={{
                fill: "#333",
                fillRule: "evenodd",
                strokeWidth: 5.98429,
                paintOrder: "stroke fill markers",
            }}
        />
        <rect
            width={257.56}
            height={6.414}
            x={10808.711}
            y={540.198}
            ry={0.976}
            style={{
                fill: "#333",
                fillRule: "evenodd",
                strokeWidth: 3.19061,
                paintOrder: "stroke fill markers",
            }}
        />
        <rect
            width={201.45}
            height={5.451}
            x={10769.157}
            y={487.927}
            ry={0.83}
            style={{
                fill: "#333",
                fillRule: "evenodd",
                strokeWidth: 2.60119,
                paintOrder: "stroke fill markers",
            }}
        />
        <rect
            width={941.128}
            height={4.969}
            x={11042.275}
            y={875.133}
            ry={0.83}
            style={{
                fill: "#333",
                fillRule: "evenodd",
                strokeWidth: 5.08852,
                paintOrder: "stroke fill markers",
            }}
        />
        <rect
            width={801.163}
            height={5.451}
            x={11119.587}
            y={915.956}
            ry={0.83}
            style={{
                fill: "#333",
                fillRule: "evenodd",
                strokeWidth: 5.18739,
                paintOrder: "stroke fill markers",
            }}
        />
        <rect
            width={4.095}
            height={12.767}
            x={10211.726}
            y={565.123}
            ry={0.878}
            style={{
                fill: "#333",
                fillRule: "evenodd",
                strokeWidth: 2.9,
                paintOrder: "stroke fill markers",
            }}
        />
        <rect
            width={4.577}
            height={11.804}
            x={10211.244}
            y={600.052}
            ry={0.878}
            style={{
                fill: "#333",
                fillRule: "evenodd",
                strokeWidth: 2.9,
                paintOrder: "stroke fill markers",
            }}
        />
        <rect
            width={4.088}
            height={13.286}
            x={10776.664}
            y={565.167}
            ry={0.878}
            style={{
                fill: "#333",
                fillRule: "evenodd",
                strokeWidth: 2.9,
                paintOrder: "stroke fill markers",
            }}
        />
        <rect
            width={5.11}
            height={15.671}
            x={10804.939}
            y={534.847}
            ry={0.878}
            style={{
                fill: "#333",
                fillRule: "evenodd",
                strokeWidth: 2.9,
                paintOrder: "stroke fill markers",
            }}
        />
        <rect
            width={499.211}
            height={5.451}
            x={10886.752}
            y={511.424}
            ry={0.83}
            style={{
                fill: "#333",
                fillRule: "evenodd",
                strokeWidth: 4.09478,
                paintOrder: "stroke fill markers",
            }}
        />
        <rect
            width={5.11}
            height={15.671}
            x={10884.002}
            y={506.073}
            ry={0.878}
            style={{
                fill: "#333",
                fillRule: "evenodd",
                strokeWidth: 2.9,
                paintOrder: "stroke fill markers",
            }}
        />
        <rect
            width={78.259}
            height={4.647}
            x={12402.29}
            y={6473.359}
            ry={0.555}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 0.704189,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.88113 -.47287 .02718 .99963 0 0)"
        />
        <rect
            width={157.86}
            height={6.562}
            x={13097.657}
            y={6800.757}
            ry={1.184}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 1.45673,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.88096 -.4732 -.00617 .99998 0 0)"
        />
        <rect
            width={221.491}
            height={6.391}
            x={12993.363}
            y={6818.919}
            ry={3.196}
            style={{
                fill: "#0055d4",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 1.45229,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.88416 -.46718 -.00627 .99998 0 0)"
        />
        <rect
            width={220.751}
            height={6.452}
            x={13049.562}
            y={6966.3}
            ry={3.226}
            style={{
                fill: "#0055d4",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 1.45673,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.88096 -.4732 -.00617 .99998 0 0)"
        />
        <rect
            width={122.689}
            height={7.118}
            x={12713.634}
            y={6446.447}
            ry={0.85}
            style={{
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 1.09132,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.88684 -.46208 .028 .9996 0 0)"
        />
        <rect
            width={311.346}
            height={5.621}
            x={11193.641}
            y={544.216}
            ry={0.503}
            style={{
                fill: "#333",
                fillRule: "evenodd",
                strokeWidth: 2.26516,
                paintOrder: "stroke fill markers",
            }}
        />
        <rect
            width={96.837}
            height={5.3}
            x={10554.965}
            y={-4155.824}
            ry={0.503}
            style={{
                fill: "#333",
                fillRule: "evenodd",
                strokeWidth: 2.9,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(25.909)"
        />
        <rect
            width={97.513}
            height={5.393}
            x={10225.625}
            y={5327.69}
            ry={0.512}
            style={{
                fill: "#333",
                fillRule: "evenodd",
                strokeWidth: 2.93559,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.9186 -.3952 .38522 .92283 0 0)"
        />
        <rect
            width={632.942}
            height={5.781}
            x={11534.983}
            y={836.845}
            ry={0.503}
            style={{
                fill: "#333",
                fillRule: "evenodd",
                strokeWidth: 3.83563,
                paintOrder: "stroke fill markers",
            }}
        />
        <rect
            width={150.234}
            height={5.11}
            x={9566.571}
            y={7165.021}
            ry={0.83}
            style={{
                fill: "#333",
                fillRule: "evenodd",
                strokeWidth: 2.9,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(-32.43)"
        />
        <rect
            width={6.263}
            height={18.307}
            x={10016.072}
            y={5790.535}
            ry={0.85}
            style={{
                fill: "#333",
                fillRule: "evenodd",
                strokeWidth: 2.9,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(-27.515)"
        />
        <rect
            width={165.363}
            height={6.161}
            x={11635.146}
            y={528.204}
            ry={1.184}
            style={{
                fill: "#333",
                fillRule: "evenodd",
                strokeWidth: 3.06904,
                paintOrder: "stroke fill markers",
            }}
        />
        <rect
            width={220.077}
            height={6.428}
            x={7956.027}
            y={-5896.546}
            ry={3.214}
            style={{
                fill: "#0055d4",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 1.45183,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.87855 .47766 -.84488 .53495 0 0)"
        />
        <rect
            width={219.842}
            height={6.419}
            x={7987.565}
            y={-5837.705}
            ry={3.209}
            style={{
                fill: "#0055d4",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 1.44998,
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.88003 .47493 -.84667 .53212 0 0)"
        />
        <rect
            width={5.11}
            height={15.671}
            x={12165.564}
            y={831.909}
            ry={2.555}
            style={{
                fill: "#333",
                fillRule: "evenodd",
                strokeWidth: 2.9,
                paintOrder: "stroke fill markers",
            }}
        />
        <path
            d="M9.852 885.016h2.96v18.698h-2.96zM10.063 844.079h2.96v18.698h-2.96zM10.085 784.297h2.96v18.698h-2.96zM10.082 742.464h2.96v18.698h-2.96zM10.126 640.319h2.96v18.698h-2.96zM9.937 579.341h2.96v18.698h-2.96zM10.044 479h2.96v18.698h-2.96z"
            style={{
                opacity: 0.97,
                fill: "#0055d4",
                strokeWidth: 0.429912,
            }}
        />
        <path
            d="M130.871 236.976h2.96v18.698h-2.96z"
            style={{
                opacity: 0.97,
                fill: "#333",
                strokeWidth: 0.429912,
            }}
            transform="rotate(8.983)"
        />
        <path
            d="M328.275 51.585h2.96v18.698h-2.96z"
            style={{
                opacity: 0.97,
                fill: "#333",
                strokeWidth: 0.429912,
            }}
            transform="rotate(38.84)"
        />
        <rect
            width={10.871}
            height={22.678}
            x={451.545}
            y={23.468}
            ry={4.69}
            style={{
                fill: "#333",
                fillRule: "evenodd",
                strokeWidth: 1.31539,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(-.51)"
        />
        <path
            d="M459.061 26.838a2.159 1.636 0 0 1-2.154 1.636 2.159 1.636 0 0 1-2.164-1.628 2.159 1.636 0 0 1 2.144-1.644 2.159 1.636 0 0 1 2.174 1.62l-2.159.016z"
            style={{
                fill: "url(#aE)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.390598,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(-.51)"
        />
        <path
            d="M459.02 30.678a2.159 1.636 0 0 1-2.153 1.636 2.159 1.636 0 0 1-2.164-1.628 2.159 1.636 0 0 1 2.143-1.644 2.159 1.636 0 0 1 2.174 1.62l-2.158.016z"
            style={{
                fill: "url(#aF)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.390598,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(-.51)"
        />
        <path
            d="M459.098 38.362a2.159 1.636 0 0 1-2.154 1.636 2.159 1.636 0 0 1-2.164-1.629 2.159 1.636 0 0 1 2.143-1.644 2.159 1.636 0 0 1 2.175 1.62l-2.16.017z"
            style={{
                fill: "url(#aG)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.390598,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(-.51)"
        />
        <path
            d="M459.108 34.615a2.159 1.636 0 0 1-2.154 1.636 2.159 1.636 0 0 1-2.164-1.628 2.159 1.636 0 0 1 2.143-1.644 2.159 1.636 0 0 1 2.174 1.62l-2.158.016z"
            style={{
                fill: "url(#aH)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.390598,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(-.51)"
        />
        <text
            xmlSpace="preserve"
            x={373.016}
            y={53.02}
            style={{
                fontSize: "5.04933px",
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.315583,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(1.21443 -.0108 .00733 .82337 0 0)"
        >
            <tspan
                x={373.016}
                y={53.02}
                style={{
                    fill: "#fff",
                    fillOpacity: 1,
                    stroke: "none",
                    strokeWidth: 0.315583,
                }}
            >
                {"A6"}
            </tspan>
        </text>
        <rect
            width={1.745}
            height={30.001}
            x={456.304}
            y={45.851}
            ry={0}
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "url(#aI)",
                strokeWidth: 0.390598,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(-.51)"
        />
        <path
            d="M-450.294-55.444a6.638 5.835 0 0 1-3.32 5.053 6.638 5.835 0 0 1-6.64-.003 6.638 5.835 0 0 1-3.315-5.057"
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.423517,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(179.281) skewX(.062)"
        />
        <path
            d="M456.07 51.926a1.583 1.146 0 0 1-1.579 1.146 1.583 1.146 0 0 1-1.586-1.14 1.583 1.146 0 0 1 1.57-1.152 1.583 1.146 0 0 1 1.595 1.135l-1.583.01z"
            style={{
                fill: "url(#aJ)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.279898,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(-.51)"
        />
        <path
            d="M461.881 51.861a1.583 1.146 0 0 1-1.579 1.146 1.583 1.146 0 0 1-1.586-1.14 1.583 1.146 0 0 1 1.571-1.152 1.583 1.146 0 0 1 1.594 1.135l-1.583.011z"
            style={{
                fill: "url(#aK)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.279898,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(-.51)"
        />
        <path
            d="M458.817 49.587a1.583 1.146 0 0 1-1.579 1.146 1.583 1.146 0 0 1-1.586-1.14 1.583 1.146 0 0 1 1.571-1.152 1.583 1.146 0 0 1 1.594 1.135l-1.582.011z"
            style={{
                fill: "url(#aL)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.279898,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(-.51)"
        />
        <path
            d="M459.253 56.008a2.159 1.636 0 0 1-2.153 1.636 2.159 1.636 0 0 1-2.164-1.628 2.159 1.636 0 0 1 2.143-1.644 2.159 1.636 0 0 1 2.174 1.62l-2.159.016z"
            style={{
                fill: "url(#aM)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.390598,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(-.51)"
        />
        <path
            d="M453.742 75.608h6.978v.365h-6.978z"
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.390598,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(-.51)"
        />
        <rect
            width={9.102}
            height={17.293}
            x={699.773}
            y={-276.284}
            ry={3.576}
            style={{
                fill: "#333",
                fillRule: "evenodd",
                strokeWidth: 1.05102,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M706.065-273.714a1.807 1.248 0 0 1-1.803 1.248 1.807 1.248 0 0 1-1.811-1.242 1.807 1.248 0 0 1 1.794-1.253 1.807 1.248 0 0 1 1.82 1.235l-1.807.012z"
            style={{
                fill: "url(#aN)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.312095,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M706.032-270.786a1.807 1.248 0 0 1-1.803 1.248 1.807 1.248 0 0 1-1.812-1.242 1.807 1.248 0 0 1 1.794-1.253 1.807 1.248 0 0 1 1.82 1.235l-1.807.012z"
            style={{
                fill: "url(#aO)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.312095,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M706.105-267.783a1.807 1.248 0 0 1-1.804 1.247 1.807 1.248 0 0 1-1.811-1.241 1.807 1.248 0 0 1 1.794-1.254 1.807 1.248 0 0 1 1.82 1.236l-1.807.012z"
            style={{
                fill: "url(#aP)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.312095,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <text
            xmlSpace="preserve"
            x={550.864}
            y={-331.994}
            style={{
                fontSize: "4.0345px",
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.252156,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00244 1.27256 -.78582 .0011 0 0)"
        >
            <tspan
                x={550.864}
                y={-331.994}
                style={{
                    fill: "#fff",
                    fillOpacity: 1,
                    stroke: "none",
                    strokeWidth: 0.252156,
                }}
            >
                {"1A"}
            </tspan>
        </text>
        <rect
            width={1.461}
            height={22.877}
            x={703.757}
            y={-259.216}
            ry={0}
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "url(#aQ)",
                strokeWidth: 0.312095,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M-700.24 250.832a5.557 4.45 0 0 1-2.781 3.854 5.557 4.45 0 0 1-5.56-.003 5.557 4.45 0 0 1-2.774-3.856"
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.338399,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00141 -1 .99998 -.00659 0 0)"
        />
        <path
            d="M703.561-254.583a1.325.874 0 0 1-1.322.874 1.325.874 0 0 1-1.328-.87 1.325.874 0 0 1 1.316-.878 1.325.874 0 0 1 1.334.866l-1.325.008z"
            style={{
                fill: "url(#aR)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.223644,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M708.427-254.632a1.325.874 0 0 1-1.322.874 1.325.874 0 0 1-1.328-.87 1.325.874 0 0 1 1.315-.878 1.325.874 0 0 1 1.335.865l-1.325.008z"
            style={{
                fill: "url(#aS)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.223644,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M705.862-256.366a1.325.874 0 0 1-1.322.874 1.325.874 0 0 1-1.329-.87 1.325.874 0 0 1 1.316-.878 1.325.874 0 0 1 1.334.865l-1.325.008z"
            style={{
                fill: "url(#aT)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.223644,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M706.226-251.47a1.807 1.248 0 0 1-1.803 1.248 1.807 1.248 0 0 1-1.811-1.242 1.807 1.248 0 0 1 1.794-1.254 1.807 1.248 0 0 1 1.82 1.236l-1.807.012z"
            style={{
                fill: "url(#aU)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.312095,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M701.612-236.524h5.842v.279h-5.842z"
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.312095,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <rect
            width={9.102}
            height={17.293}
            x={631.551}
            y={-218.451}
            ry={3.576}
            style={{
                fill: "#333",
                fillRule: "evenodd",
                strokeWidth: 1.05102,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M637.843-215.881a1.807 1.248 0 0 1-1.803 1.248 1.807 1.248 0 0 1-1.812-1.242 1.807 1.248 0 0 1 1.795-1.254 1.807 1.248 0 0 1 1.82 1.236l-1.807.012z"
            style={{
                fill: "url(#aV)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.312095,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M637.81-212.953a1.807 1.248 0 0 1-1.804 1.247 1.807 1.248 0 0 1-1.812-1.241 1.807 1.248 0 0 1 1.795-1.254 1.807 1.248 0 0 1 1.82 1.236l-1.807.012z"
            style={{
                fill: "url(#aW)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.312095,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M637.882-209.95a1.807 1.248 0 0 1-1.803 1.247 1.807 1.248 0 0 1-1.812-1.242 1.807 1.248 0 0 1 1.795-1.254 1.807 1.248 0 0 1 1.82 1.236l-1.807.012z"
            style={{
                fill: "url(#aX)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.312095,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <text
            xmlSpace="preserve"
            x={497.254}
            y={-258.4}
            style={{
                fontSize: "4.0345px",
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.252156,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00244 1.27256 -.78582 .0011 0 0)"
        >
            <tspan
                x={497.254}
                y={-258.4}
                style={{
                    fill: "#fff",
                    fillOpacity: 1,
                    stroke: "none",
                    strokeWidth: 0.252156,
                }}
            >
                {"2A"}
            </tspan>
        </text>
        <rect
            width={1.461}
            height={22.877}
            x={635.535}
            y={-201.383}
            ry={0}
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "url(#aY)",
                strokeWidth: 0.312095,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M-631.72 193.226a5.557 4.45 0 0 1-2.78 3.854 5.557 4.45 0 0 1-5.56-.003 5.557 4.45 0 0 1-2.774-3.856"
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.338399,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00141 -1 .99998 -.00659 0 0)"
        />
        <path
            d="M635.339-196.75a1.325.874 0 0 1-1.322.873 1.325.874 0 0 1-1.328-.87 1.325.874 0 0 1 1.315-.877 1.325.874 0 0 1 1.335.865l-1.325.008z"
            style={{
                fill: "url(#aZ)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.223644,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M640.204-196.8a1.325.874 0 0 1-1.322.874 1.325.874 0 0 1-1.328-.87 1.325.874 0 0 1 1.315-.878 1.325.874 0 0 1 1.335.866l-1.325.008z"
            style={{
                fill: "url(#ba)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.223644,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M637.639-198.534a1.325.874 0 0 1-1.322.874 1.325.874 0 0 1-1.328-.87 1.325.874 0 0 1 1.315-.878 1.325.874 0 0 1 1.335.866l-1.325.008z"
            style={{
                fill: "url(#bb)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.223644,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M638.004-193.638a1.807 1.248 0 0 1-1.803 1.248 1.807 1.248 0 0 1-1.812-1.242 1.807 1.248 0 0 1 1.794-1.253 1.807 1.248 0 0 1 1.82 1.235l-1.806.012z"
            style={{
                fill: "url(#bc)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.312095,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M633.39-178.692h5.842v.279h-5.842z"
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.312095,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <rect
            width={9.102}
            height={17.293}
            x={597.635}
            y={-218.386}
            ry={3.576}
            style={{
                fill: "#333",
                fillRule: "evenodd",
                strokeWidth: 1.05102,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M603.927-215.816a1.807 1.248 0 0 1-1.803 1.247 1.807 1.248 0 0 1-1.812-1.241 1.807 1.248 0 0 1 1.794-1.254 1.807 1.248 0 0 1 1.82 1.236l-1.807.012z"
            style={{
                fill: "url(#bd)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.312095,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M603.893-212.888a1.807 1.248 0 0 1-1.803 1.247 1.807 1.248 0 0 1-1.812-1.241 1.807 1.248 0 0 1 1.794-1.254 1.807 1.248 0 0 1 1.82 1.236l-1.806.012z"
            style={{
                fill: "url(#be)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.312095,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M603.966-209.886a1.807 1.248 0 0 1-1.803 1.248 1.807 1.248 0 0 1-1.812-1.242 1.807 1.248 0 0 1 1.794-1.254 1.807 1.248 0 0 1 1.82 1.236l-1.807.012z"
            style={{
                fill: "url(#bf)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.312095,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <text
            xmlSpace="preserve"
            x={470.602}
            y={-258.317}
            style={{
                fontSize: "4.0345px",
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.252156,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00244 1.27256 -.78582 .0011 0 0)"
        >
            <tspan
                x={470.602}
                y={-258.317}
                style={{
                    fill: "#fff",
                    fillOpacity: 1,
                    stroke: "none",
                    strokeWidth: 0.252156,
                }}
            >
                {"3A"}
            </tspan>
        </text>
        <rect
            width={1.461}
            height={22.877}
            x={601.619}
            y={-201.318}
            ry={0}
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "url(#bg)",
                strokeWidth: 0.312095,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M-597.804 193.274a5.557 4.45 0 0 1-2.78 3.854 5.557 4.45 0 0 1-5.56-.003 5.557 4.45 0 0 1-2.774-3.856"
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.338399,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00141 -1 .99998 -.00659 0 0)"
        />
        <path
            d="M601.423-196.686a1.325.874 0 0 1-1.322.874 1.325.874 0 0 1-1.328-.87 1.325.874 0 0 1 1.315-.878 1.325.874 0 0 1 1.335.866l-1.325.008z"
            style={{
                fill: "url(#bh)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.223644,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M606.288-196.735a1.325.874 0 0 1-1.322.874 1.325.874 0 0 1-1.328-.87 1.325.874 0 0 1 1.315-.878 1.325.874 0 0 1 1.335.866l-1.325.008z"
            style={{
                fill: "url(#bi)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.223644,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M603.723-198.469a1.325.874 0 0 1-1.322.874 1.325.874 0 0 1-1.328-.87 1.325.874 0 0 1 1.315-.878 1.325.874 0 0 1 1.335.866l-1.325.008z"
            style={{
                fill: "url(#bj)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.223644,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M604.088-193.573a1.807 1.248 0 0 1-1.803 1.248 1.807 1.248 0 0 1-1.812-1.242 1.807 1.248 0 0 1 1.794-1.254 1.807 1.248 0 0 1 1.82 1.236l-1.807.012z"
            style={{
                fill: "url(#bk)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.312095,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M599.474-178.627h5.842v.279h-5.842z"
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.312095,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <rect
            width={10.871}
            height={22.678}
            x={500.309}
            y={24.356}
            ry={4.69}
            style={{
                fill: "#333",
                fillRule: "evenodd",
                strokeWidth: 1.31539,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(-.51)"
        />
        <path
            d="M507.824 27.726a2.159 1.636 0 0 1-2.153 1.636 2.159 1.636 0 0 1-2.164-1.628 2.159 1.636 0 0 1 2.143-1.644 2.159 1.636 0 0 1 2.174 1.62l-2.158.016z"
            style={{
                fill: "url(#bl)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.390598,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(-.51)"
        />
        <path
            d="M507.784 31.566a2.159 1.636 0 0 1-2.154 1.636 2.159 1.636 0 0 1-2.164-1.629 2.159 1.636 0 0 1 2.143-1.644 2.159 1.636 0 0 1 2.175 1.62l-2.159.017z"
            style={{
                fill: "url(#bm)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.390598,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(-.51)"
        />
        <path
            d="M507.861 39.25a2.159 1.636 0 0 1-2.154 1.636 2.159 1.636 0 0 1-2.164-1.629 2.159 1.636 0 0 1 2.144-1.644 2.159 1.636 0 0 1 2.174 1.62l-2.159.016z"
            style={{
                fill: "url(#bn)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.390598,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(-.51)"
        />
        <path
            d="M507.87 35.503a2.159 1.636 0 0 1-2.153 1.636 2.159 1.636 0 0 1-2.164-1.628 2.159 1.636 0 0 1 2.144-1.644 2.159 1.636 0 0 1 2.174 1.62l-2.159.016z"
            style={{
                fill: "url(#bo)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.390598,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(-.51)"
        />
        <text
            xmlSpace="preserve"
            x={413.168}
            y={54.099}
            style={{
                fontSize: "5.04933px",
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.315583,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(1.21443 -.0108 .00733 .82337 0 0)"
        >
            <tspan
                x={413.168}
                y={54.099}
                style={{
                    fill: "#fff",
                    fillOpacity: 1,
                    stroke: "none",
                    strokeWidth: 0.315583,
                }}
            >
                {"A6"}
            </tspan>
        </text>
        <rect
            width={1.745}
            height={30.001}
            x={505.067}
            y={46.739}
            ry={0}
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "url(#bp)",
                strokeWidth: 0.390598,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(-.51)"
        />
        <path
            d="M502.505 76.496h6.978v.365h-6.978z"
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.390598,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(-.51)"
        />
        <g transform="translate(-438.118 -374.307)">
            <rect
                width={10.871}
                height={22.678}
                x={914.263}
                y={401.772}
                ry={4.69}
                style={{
                    fill: "#333",
                    fillRule: "evenodd",
                    strokeWidth: 1.31539,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <path
                d="M921.716 405.963a2.159 1.636 0 0 1-2.153 1.636 2.159 1.636 0 0 1-2.164-1.628 2.159 1.636 0 0 1 2.143-1.644 2.159 1.636 0 0 1 2.174 1.62l-2.159.016z"
                style={{
                    fill: "url(#bq)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.390598,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <path
                d="M921.744 410.545a2.159 1.636 0 0 1-2.154 1.636 2.159 1.636 0 0 1-2.164-1.628 2.159 1.636 0 0 1 2.144-1.644 2.159 1.636 0 0 1 2.174 1.62l-2.159.016z"
                style={{
                    fill: "url(#br)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.390598,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <path
                d="M921.808 414.878a2.159 1.636 0 0 1-2.154 1.636 2.159 1.636 0 0 1-2.164-1.629 2.159 1.636 0 0 1 2.143-1.644 2.159 1.636 0 0 1 2.175 1.62l-2.16.017z"
                style={{
                    fill: "url(#bs)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.390598,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <text
                xmlSpace="preserve"
                x={754.017}
                y={512.462}
                style={{
                    fontSize: "5.04933px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    fill: "#333",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.315583,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(1.21443 -.0108 .00733 .82337 0 0)"
            >
                <tspan
                    x={754.017}
                    y={512.462}
                    style={{
                        fill: "#fff",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: 0.315583,
                    }}
                >
                    {"A6"}
                </tspan>
            </text>
            <rect
                width={1.745}
                height={30.001}
                x={919.022}
                y={424.155}
                ry={0}
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "url(#bt)",
                    strokeWidth: 0.390598,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
        </g>
        <path
            d="M916.459 453.912h6.978v.365h-6.978z"
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.390598,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(-.51 -42286.123 49051.342)"
        />
        <g transform="matrix(.75178 .0204 -.02713 .99963 134.2 -39.436)">
            <rect
                width={10.871}
                height={22.678}
                x={-1007.507}
                y={405.605}
                ry={4.69}
                style={{
                    fill: "#333",
                    fillRule: "evenodd",
                    strokeWidth: 1.31539,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-90.89)"
            />
            <path
                d="M-1000.054 409.796a2.159 1.636 0 0 1-2.153 1.636 2.159 1.636 0 0 1-2.164-1.628 2.159 1.636 0 0 1 2.143-1.644 2.159 1.636 0 0 1 2.174 1.62l-2.158.016z"
                style={{
                    fill: "url(#bu)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.390598,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-90.89)"
            />
            <path
                d="M-1000.026 414.378a2.159 1.636 0 0 1-2.154 1.636 2.159 1.636 0 0 1-2.164-1.628 2.159 1.636 0 0 1 2.144-1.644 2.159 1.636 0 0 1 2.174 1.62l-2.159.016z"
                style={{
                    fill: "url(#bv)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.390598,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-90.89)"
            />
            <path
                d="M-999.962 418.71a2.159 1.636 0 0 1-2.154 1.637 2.159 1.636 0 0 1-2.164-1.628 2.159 1.636 0 0 1 2.143-1.645 2.159 1.636 0 0 1 2.175 1.62l-2.159.017z"
                style={{
                    fill: "url(#bw)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.390598,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-90.89)"
            />
            <text
                xmlSpace="preserve"
                x={-1040.737}
                y={401.701}
                style={{
                    fontSize: "4.00817px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    fill: "#333",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.25051,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.02379 -.96394 1.03716 -.01016 0 0)"
            >
                <tspan
                    x={-1040.737}
                    y={401.701}
                    style={{
                        fill: "#fff",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: 0.25051,
                    }}
                >
                    {"31D"}
                </tspan>
            </text>
            <rect
                width={1.745}
                height={30.001}
                x={-1002.748}
                y={427.988}
                ry={0}
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "url(#bx)",
                    strokeWidth: 0.390598,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-90.89)"
            />
            <path
                d="M-1005.31 457.745h6.978v.365h-6.978z"
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.390598,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-90.89)"
            />
        </g>
        <g transform="matrix(.75178 .0204 -.02713 .99963 241.426 -226.46)">
            <rect
                width={10.871}
                height={22.678}
                x={-1007.507}
                y={405.605}
                ry={4.69}
                style={{
                    fill: "#333",
                    fillRule: "evenodd",
                    strokeWidth: 1.31539,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-90.89)"
            />
            <path
                d="M-1000.054 409.796a2.159 1.636 0 0 1-2.153 1.636 2.159 1.636 0 0 1-2.164-1.628 2.159 1.636 0 0 1 2.143-1.644 2.159 1.636 0 0 1 2.174 1.62l-2.158.016z"
                style={{
                    fill: "url(#by)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.390598,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-90.89)"
            />
            <path
                d="M-1000.026 414.378a2.159 1.636 0 0 1-2.154 1.636 2.159 1.636 0 0 1-2.164-1.628 2.159 1.636 0 0 1 2.144-1.644 2.159 1.636 0 0 1 2.174 1.62l-2.159.016z"
                style={{
                    fill: "url(#bz)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.390598,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-90.89)"
            />
            <path
                d="M-999.962 418.71a2.159 1.636 0 0 1-2.154 1.637 2.159 1.636 0 0 1-2.164-1.628 2.159 1.636 0 0 1 2.143-1.645 2.159 1.636 0 0 1 2.175 1.62l-2.159.017z"
                style={{
                    fill: "url(#bA)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.390598,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-90.89)"
            />
            <text
                xmlSpace="preserve"
                x={-1040.737}
                y={401.701}
                style={{
                    fontSize: "4.00817px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    fill: "#333",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.25051,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.02379 -.96394 1.03716 -.01016 0 0)"
            >
                <tspan
                    x={-1040.737}
                    y={401.701}
                    style={{
                        fill: "#fff",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: 0.25051,
                    }}
                >
                    {"32D"}
                </tspan>
            </text>
            <rect
                width={1.745}
                height={30.001}
                x={-1002.748}
                y={427.988}
                ry={0}
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "url(#bB)",
                    strokeWidth: 0.390598,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-90.89)"
            />
            <path
                d="M-1005.31 457.745h6.978v.365h-6.978z"
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.390598,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-90.89)"
            />
        </g>
        <g transform="matrix(-.7519 -.01528 .02031 -.9998 714.771 1966.385)">
            <rect
                width={10.871}
                height={22.678}
                x={-1007.507}
                y={405.605}
                ry={4.69}
                style={{
                    fill: "#333",
                    fillRule: "evenodd",
                    strokeWidth: 1.31539,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-90.89)"
            />
            <path
                d="M-1000.054 409.796a2.159 1.636 0 0 1-2.153 1.636 2.159 1.636 0 0 1-2.164-1.628 2.159 1.636 0 0 1 2.143-1.644 2.159 1.636 0 0 1 2.174 1.62l-2.158.016z"
                style={{
                    fill: "url(#bC)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.390598,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-90.89)"
            />
            <path
                d="M-1000.026 414.378a2.159 1.636 0 0 1-2.154 1.636 2.159 1.636 0 0 1-2.164-1.628 2.159 1.636 0 0 1 2.144-1.644 2.159 1.636 0 0 1 2.174 1.62l-2.159.016z"
                style={{
                    fill: "url(#bD)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.390598,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-90.89)"
            />
            <path
                d="M-999.962 418.71a2.159 1.636 0 0 1-2.154 1.637 2.159 1.636 0 0 1-2.164-1.628 2.159 1.636 0 0 1 2.143-1.645 2.159 1.636 0 0 1 2.175 1.62l-2.159.017z"
                style={{
                    fill: "url(#bE)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.390598,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-90.89)"
            />
            <text
                xmlSpace="preserve"
                x={-1040.737}
                y={401.701}
                style={{
                    fontSize: "4.00817px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    fill: "#333",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.25051,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.02379 -.96394 1.03716 -.01016 0 0)"
            >
                <tspan
                    x={-1040.737}
                    y={401.701}
                    style={{
                        fill: "#fff",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: 0.25051,
                    }}
                >
                    {"25A"}
                </tspan>
            </text>
            <rect
                width={1.745}
                height={30.001}
                x={-1002.748}
                y={427.988}
                ry={0}
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "url(#bF)",
                    strokeWidth: 0.390598,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-90.89)"
            />
            <path
                d="M-1005.31 457.745h6.978v.365h-6.978z"
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.390598,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-90.89)"
            />
        </g>
        <rect
            width={9.102}
            height={17.293}
            x={529.244}
            y={-278.042}
            ry={3.576}
            style={{
                fill: "#333",
                fillRule: "evenodd",
                strokeWidth: 1.05102,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M535.537-275.472a1.807 1.248 0 0 1-1.803 1.248 1.807 1.248 0 0 1-1.812-1.242 1.807 1.248 0 0 1 1.794-1.253 1.807 1.248 0 0 1 1.82 1.235l-1.807.012z"
            style={{
                fill: "url(#bG)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.312095,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M535.503-272.544a1.807 1.248 0 0 1-1.803 1.248 1.807 1.248 0 0 1-1.812-1.242 1.807 1.248 0 0 1 1.794-1.254 1.807 1.248 0 0 1 1.82 1.236l-1.807.012z"
            style={{
                fill: "url(#bH)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.312095,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M535.576-269.542a1.807 1.248 0 0 1-1.803 1.248 1.807 1.248 0 0 1-1.812-1.242 1.807 1.248 0 0 1 1.794-1.253 1.807 1.248 0 0 1 1.82 1.235l-1.807.012z"
            style={{
                fill: "url(#bI)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.312095,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <text
            xmlSpace="preserve"
            x={416.86}
            y={-334.232}
            style={{
                fontSize: "4.0345px",
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.252156,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00244 1.27256 -.78582 .0011 0 0)"
        >
            <tspan
                x={416.86}
                y={-334.232}
                style={{
                    fill: "#fff",
                    fillOpacity: 1,
                    stroke: "none",
                    strokeWidth: 0.252156,
                }}
            >
                {"4A"}
            </tspan>
        </text>
        <rect
            width={1.461}
            height={22.877}
            x={533.229}
            y={-260.974}
            ry={0}
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "url(#bJ)",
                strokeWidth: 0.312095,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M-529.725 253.158a5.557 4.45 0 0 1-2.78 3.854 5.557 4.45 0 0 1-5.56-.003 5.557 4.45 0 0 1-2.774-3.857"
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.338399,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00141 -1 .99998 -.00659 0 0)"
        />
        <path
            d="M533.032-256.341a1.325.874 0 0 1-1.321.874 1.325.874 0 0 1-1.329-.87 1.325.874 0 0 1 1.316-.878 1.325.874 0 0 1 1.334.865l-1.325.008z"
            style={{
                fill: "url(#bK)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.223644,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M537.898-256.39a1.325.874 0 0 1-1.322.874 1.325.874 0 0 1-1.328-.87 1.325.874 0 0 1 1.315-.878 1.325.874 0 0 1 1.335.865l-1.325.008z"
            style={{
                fill: "url(#bL)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.223644,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M535.333-258.124a1.325.874 0 0 1-1.322.874 1.325.874 0 0 1-1.328-.87 1.325.874 0 0 1 1.315-.878 1.325.874 0 0 1 1.335.865l-1.325.008z"
            style={{
                fill: "url(#bM)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.223644,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M535.698-253.228a1.807 1.248 0 0 1-1.803 1.247 1.807 1.248 0 0 1-1.812-1.241 1.807 1.248 0 0 1 1.794-1.254 1.807 1.248 0 0 1 1.82 1.236l-1.807.012z"
            style={{
                fill: "url(#bN)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.312095,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M531.083-238.282h5.842v.279h-5.842z"
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.312095,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <rect
            width={4.758}
            height={7.227}
            x={244.682}
            y={530.074}
            ry={0.181}
            style={{
                fill: "#c2c2c2",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 1,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
        />
        <rect
            width={9.102}
            height={17.293}
            x={494.585}
            y={-277.876}
            ry={3.576}
            style={{
                fill: "#333",
                fillRule: "evenodd",
                strokeWidth: 1.05102,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M500.877-275.306a1.807 1.248 0 0 1-1.803 1.248 1.807 1.248 0 0 1-1.812-1.242 1.807 1.248 0 0 1 1.795-1.254 1.807 1.248 0 0 1 1.82 1.236l-1.807.012z"
            style={{
                fill: "url(#bO)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.312095,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M500.843-272.378a1.807 1.248 0 0 1-1.803 1.248 1.807 1.248 0 0 1-1.812-1.242 1.807 1.248 0 0 1 1.795-1.254 1.807 1.248 0 0 1 1.82 1.236l-1.807.012z"
            style={{
                fill: "url(#bP)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.312095,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M500.916-269.376a1.807 1.248 0 0 1-1.803 1.248 1.807 1.248 0 0 1-1.812-1.242 1.807 1.248 0 0 1 1.795-1.254 1.807 1.248 0 0 1 1.82 1.236l-1.807.012z"
            style={{
                fill: "url(#bQ)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.312095,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <text
            xmlSpace="preserve"
            x={389.623}
            y={-334.021}
            style={{
                fontSize: "4.0345px",
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.252156,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00244 1.27256 -.78582 .0011 0 0)"
        >
            <tspan
                x={389.623}
                y={-334.021}
                style={{
                    fill: "#fff",
                    fillOpacity: 1,
                    stroke: "none",
                    strokeWidth: 0.252156,
                }}
            >
                {"5A"}
            </tspan>
        </text>
        <rect
            width={1.461}
            height={22.877}
            x={498.569}
            y={-260.808}
            ry={0}
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "url(#bR)",
                strokeWidth: 0.312095,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M-495.065 253.108a5.557 4.45 0 0 1-2.78 3.854 5.557 4.45 0 0 1-5.56-.003 5.557 4.45 0 0 1-2.775-3.857"
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.338399,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00141 -1 .99998 -.00659 0 0)"
        />
        <path
            d="M498.373-256.175a1.325.874 0 0 1-1.322.874 1.325.874 0 0 1-1.328-.87 1.325.874 0 0 1 1.315-.878 1.325.874 0 0 1 1.335.865l-1.325.008z"
            style={{
                fill: "url(#bS)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.223644,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M503.238-256.225a1.325.874 0 0 1-1.322.874 1.325.874 0 0 1-1.328-.87 1.325.874 0 0 1 1.316-.878 1.325.874 0 0 1 1.334.866l-1.325.008z"
            style={{
                fill: "url(#bT)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.223644,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M500.673-257.959a1.325.874 0 0 1-1.322.874 1.325.874 0 0 1-1.328-.87 1.325.874 0 0 1 1.315-.878 1.325.874 0 0 1 1.335.866l-1.325.008z"
            style={{
                fill: "url(#bU)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.223644,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M501.038-253.063a1.807 1.248 0 0 1-1.803 1.248 1.807 1.248 0 0 1-1.812-1.242 1.807 1.248 0 0 1 1.795-1.253 1.807 1.248 0 0 1 1.82 1.235l-1.807.012z"
            style={{
                fill: "url(#bV)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.312095,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <path
            d="M496.424-238.117h5.842v.279h-5.842z"
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.312095,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 0 0)"
        />
        <rect
            width={4.758}
            height={7.227}
            x={244.296}
            y={495.416}
            ry={0.181}
            style={{
                fill: "#c2c2c2",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 1,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
        />
        <rect
            width={4.758}
            height={7.227}
            x={183.651}
            y={598.349}
            ry={0.181}
            style={{
                fill: "#c2c2c2",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 1,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
        />
        <rect
            width={4.758}
            height={7.227}
            x={184.734}
            y={632.459}
            ry={0.181}
            style={{
                fill: "#c2c2c2",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 1,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
        />
        <rect
            width={4.758}
            height={7.227}
            x={241.951}
            y={700.396}
            ry={0.181}
            style={{
                fill: "#c2c2c2",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 1,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
        />
        <rect
            width={4.758}
            height={7.227}
            x={-60.352}
            y={454.024}
            ry={0.181}
            style={{
                fill: "#c2c2c2",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 1,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(-90.012)"
        />
        <text
            xmlSpace="preserve"
            x={517.436}
            y={47.421}
            style={{
                fontSize: "5.7879px",
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                opacity: 1,
                fill: "#070707",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.361743,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="scale(.8527 1.17276)"
        >
            <tspan
                x={517.436}
                y={47.421}
                style={{
                    strokeWidth: 0.361743,
                }}
            >
                {"61A"}
            </tspan>
        </text>
        <rect
            width={1.829}
            height={16.229}
            x={419.503}
            y={45.448}
            ry={0}
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "url(#bW)",
                strokeWidth: 0.294147,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.99999 -.0046 .01724 .99985 0 0)"
        />
        <path
            d="M-413.956-53.412a6.638 5.835 0 0 1-3.32 5.054 6.638 5.835 0 0 1-6.64-.003 6.638 5.835 0 0 1-3.315-5.058"
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.423517,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(179.281) skewX(.062)"
        />
        <path
            d="M419.722 50.026a1.583 1.146 0 0 1-1.578 1.146 1.583 1.146 0 0 1-1.587-1.14 1.583 1.146 0 0 1 1.571-1.152 1.583 1.146 0 0 1 1.594 1.135l-1.582.011z"
            style={{
                fill: "url(#bX)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.279898,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(-.51)"
        />
        <path
            d="M425.534 49.961a1.583 1.146 0 0 1-1.58 1.146 1.583 1.146 0 0 1-1.586-1.14 1.583 1.146 0 0 1 1.571-1.152 1.583 1.146 0 0 1 1.594 1.135l-1.582.011z"
            style={{
                fill: "url(#bY)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.279898,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(-.51)"
        />
        <path
            d="M422.47 47.687a1.583 1.146 0 0 1-1.58 1.147 1.583 1.146 0 0 1-1.585-1.141 1.583 1.146 0 0 1 1.57-1.152 1.583 1.146 0 0 1 1.595 1.135l-1.583.011z"
            style={{
                fill: "url(#bZ)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.279898,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(-.51)"
        />
        <path
            d="M417.483 63.721h6.978v.365h-6.978z"
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.390598,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(-.51)"
        />
        <rect
            width={4.758}
            height={7.227}
            x={-55.055}
            y={417.662}
            ry={0.181}
            style={{
                fill: "#c2c2c2",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 1,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(-90.012)"
        />
        <text
            xmlSpace="preserve"
            x={474.791}
            y={46.077}
            style={{
                fontSize: "5.7879px",
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                fill: "#070707",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.361743,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="scale(.8527 1.17276)"
        >
            <tspan
                x={474.791}
                y={46.077}
                style={{
                    strokeWidth: 0.361743,
                }}
            >
                {"61A"}
            </tspan>
        </text>
        <g transform="rotate(-89.417 608.979 422.222)">
            <rect
                width={1.829}
                height={16.229}
                x={419.503}
                y={45.448}
                ry={0}
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "url(#ca)",
                    strokeWidth: 0.294147,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(.99999 -.0046 .01724 .99985 0 0)"
            />
            <path
                d="M-413.956-53.412a6.638 5.835 0 0 1-3.32 5.054 6.638 5.835 0 0 1-6.64-.003 6.638 5.835 0 0 1-3.315-5.058"
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.423517,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(179.281) skewX(.062)"
            />
            <path
                d="M419.722 50.026a1.583 1.146 0 0 1-1.578 1.146 1.583 1.146 0 0 1-1.587-1.14 1.583 1.146 0 0 1 1.571-1.152 1.583 1.146 0 0 1 1.594 1.135l-1.582.011z"
                style={{
                    fill: "url(#cb)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.279898,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <path
                d="M425.534 49.961a1.583 1.146 0 0 1-1.58 1.146 1.583 1.146 0 0 1-1.586-1.14 1.583 1.146 0 0 1 1.571-1.152 1.583 1.146 0 0 1 1.594 1.135l-1.582.011z"
                style={{
                    fill: "url(#cc)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.279898,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <path
                d="M422.47 47.687a1.583 1.146 0 0 1-1.58 1.147 1.583 1.146 0 0 1-1.585-1.141 1.583 1.146 0 0 1 1.57-1.152 1.583 1.146 0 0 1 1.595 1.135l-1.583.011z"
                style={{
                    fill: "url(#cd)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.279898,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <path
                d="M417.483 63.721h6.978v.365h-6.978z"
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.390598,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <rect
                width={4.758}
                height={7.227}
                x={-55.055}
                y={417.662}
                ry={0.181}
                style={{
                    fill: "#c2c2c2",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-90.012)"
            />
        </g>
        <text
            xmlSpace="preserve"
            x={281.144}
            y={511.621}
            style={{
                fontSize: "5.7879px",
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                fill: "#070707",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.361743,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="scale(.8527 1.17276)"
        >
            <tspan
                x={281.144}
                y={511.621}
                style={{
                    strokeWidth: 0.361743,
                }}
            >
                {"58A"}
            </tspan>
        </text>
        <g transform="rotate(-89.417 716.525 418.452)">
            <rect
                width={1.829}
                height={16.229}
                x={419.503}
                y={45.448}
                ry={0}
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "url(#ce)",
                    strokeWidth: 0.294147,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(.99999 -.0046 .01724 .99985 0 0)"
            />
            <path
                d="M-413.956-53.412a6.638 5.835 0 0 1-3.32 5.054 6.638 5.835 0 0 1-6.64-.003 6.638 5.835 0 0 1-3.315-5.058"
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.423517,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(179.281) skewX(.062)"
            />
            <path
                d="M419.722 50.026a1.583 1.146 0 0 1-1.578 1.146 1.583 1.146 0 0 1-1.587-1.14 1.583 1.146 0 0 1 1.571-1.152 1.583 1.146 0 0 1 1.594 1.135l-1.582.011z"
                style={{
                    fill: "url(#cf)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.279898,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <path
                d="M425.534 49.961a1.583 1.146 0 0 1-1.58 1.146 1.583 1.146 0 0 1-1.586-1.14 1.583 1.146 0 0 1 1.571-1.152 1.583 1.146 0 0 1 1.594 1.135l-1.582.011z"
                style={{
                    fill: "url(#cg)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.279898,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <path
                d="M422.47 47.687a1.583 1.146 0 0 1-1.58 1.147 1.583 1.146 0 0 1-1.585-1.141 1.583 1.146 0 0 1 1.57-1.152 1.583 1.146 0 0 1 1.595 1.135l-1.583.011z"
                style={{
                    fill: "url(#ch)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.279898,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <path
                d="M417.483 63.721h6.978v.365h-6.978z"
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.390598,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <rect
                width={4.758}
                height={7.227}
                x={-55.055}
                y={417.662}
                ry={0.181}
                style={{
                    fill: "#c2c2c2",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-90.012)"
            />
        </g>
        <text
            xmlSpace="preserve"
            x={410.408}
            y={600.138}
            style={{
                fontSize: "5.7879px",
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                fill: "#070707",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.361743,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="scale(.8527 1.17276)"
        >
            <tspan
                x={410.408}
                y={600.138}
                style={{
                    strokeWidth: 0.361743,
                }}
            >
                {"59A"}
            </tspan>
        </text>
        <g transform="rotate(-89.417 741.555 450.525)">
            <rect
                width={1.829}
                height={16.229}
                x={419.503}
                y={45.448}
                ry={0}
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "url(#ci)",
                    strokeWidth: 0.294147,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(.99999 -.0046 .01724 .99985 0 0)"
            />
            <path
                d="M-413.956-53.412a6.638 5.835 0 0 1-3.32 5.054 6.638 5.835 0 0 1-6.64-.003 6.638 5.835 0 0 1-3.315-5.058"
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.423517,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(179.281) skewX(.062)"
            />
            <path
                d="M419.722 50.026a1.583 1.146 0 0 1-1.578 1.146 1.583 1.146 0 0 1-1.587-1.14 1.583 1.146 0 0 1 1.571-1.152 1.583 1.146 0 0 1 1.594 1.135l-1.582.011z"
                style={{
                    fill: "url(#cj)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.279898,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <path
                d="M425.534 49.961a1.583 1.146 0 0 1-1.58 1.146 1.583 1.146 0 0 1-1.586-1.14 1.583 1.146 0 0 1 1.571-1.152 1.583 1.146 0 0 1 1.594 1.135l-1.582.011z"
                style={{
                    fill: "url(#ck)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.279898,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <path
                d="M422.47 47.687a1.583 1.146 0 0 1-1.58 1.147 1.583 1.146 0 0 1-1.585-1.141 1.583 1.146 0 0 1 1.57-1.152 1.583 1.146 0 0 1 1.595 1.135l-1.583.011z"
                style={{
                    fill: "url(#cl)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.279898,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <path
                d="M417.483 63.721h6.978v.365h-6.978z"
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.390598,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <rect
                width={4.758}
                height={7.227}
                x={-55.055}
                y={417.662}
                ry={0.181}
                style={{
                    fill: "#c2c2c2",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-90.012)"
            />
        </g>
        <g transform="rotate(-89.417 929.846 359.004)">
            <rect
                width={1.829}
                height={16.229}
                x={419.503}
                y={45.448}
                ry={0}
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "url(#cm)",
                    strokeWidth: 0.294147,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(.99999 -.0046 .01724 .99985 0 0)"
            />
            <path
                d="M-413.956-53.412a6.638 5.835 0 0 1-3.32 5.054 6.638 5.835 0 0 1-6.64-.003 6.638 5.835 0 0 1-3.315-5.058"
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.423517,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(179.281) skewX(.062)"
            />
            <path
                d="M419.722 50.026a1.583 1.146 0 0 1-1.578 1.146 1.583 1.146 0 0 1-1.587-1.14 1.583 1.146 0 0 1 1.571-1.152 1.583 1.146 0 0 1 1.594 1.135l-1.582.011z"
                style={{
                    fill: "url(#cn)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.279898,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <path
                d="M425.534 49.961a1.583 1.146 0 0 1-1.58 1.146 1.583 1.146 0 0 1-1.586-1.14 1.583 1.146 0 0 1 1.571-1.152 1.583 1.146 0 0 1 1.594 1.135l-1.582.011z"
                style={{
                    fill: "url(#co)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.279898,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <path
                d="M422.47 47.687a1.583 1.146 0 0 1-1.58 1.147 1.583 1.146 0 0 1-1.585-1.141 1.583 1.146 0 0 1 1.57-1.152 1.583 1.146 0 0 1 1.595 1.135l-1.583.011z"
                style={{
                    fill: "url(#cp)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.279898,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <path
                d="M417.483 63.721h6.978v.365h-6.978z"
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.390598,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <rect
                width={4.758}
                height={7.227}
                x={-55.055}
                y={417.662}
                ry={0.181}
                style={{
                    fill: "#c2c2c2",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-90.012)"
            />
        </g>
        <text
            xmlSpace="preserve"
            x={401.851}
            y={648.55}
            style={{
                fontSize: "5.7879px",
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                fill: "#070707",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.361743,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="scale(.8527 1.17276)"
        >
            <tspan
                x={401.851}
                y={648.55}
                style={{
                    strokeWidth: 0.361743,
                }}
            >
                {"90A"}
            </tspan>
        </text>
        <text
            xmlSpace="preserve"
            x={724.859}
            y={746.807}
            style={{
                fontSize: "5.7879px",
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                fill: "#070707",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.361743,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="scale(.8527 1.17276)"
        >
            <tspan
                x={724.859}
                y={746.807}
                style={{
                    strokeWidth: 0.361743,
                }}
            >
                {"52A 129D"}
            </tspan>
        </text>
        <g transform="rotate(89.737 27.298 338.318)">
            <rect
                width={1.829}
                height={16.229}
                x={419.503}
                y={45.448}
                ry={0}
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "url(#cq)",
                    strokeWidth: 0.294147,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(.99999 -.0046 .01724 .99985 0 0)"
            />
            <path
                d="M-413.956-53.412a6.638 5.835 0 0 1-3.32 5.054 6.638 5.835 0 0 1-6.64-.003 6.638 5.835 0 0 1-3.315-5.058"
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.423517,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(179.281) skewX(.062)"
            />
            <path
                d="M419.722 50.026a1.583 1.146 0 0 1-1.578 1.146 1.583 1.146 0 0 1-1.587-1.14 1.583 1.146 0 0 1 1.571-1.152 1.583 1.146 0 0 1 1.594 1.135l-1.582.011z"
                style={{
                    fill: "url(#cr)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.279898,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <path
                d="M425.534 49.961a1.583 1.146 0 0 1-1.58 1.146 1.583 1.146 0 0 1-1.586-1.14 1.583 1.146 0 0 1 1.571-1.152 1.583 1.146 0 0 1 1.594 1.135l-1.582.011z"
                style={{
                    fill: "url(#cs)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.279898,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <path
                d="M422.47 47.687a1.583 1.146 0 0 1-1.58 1.147 1.583 1.146 0 0 1-1.585-1.141 1.583 1.146 0 0 1 1.57-1.152 1.583 1.146 0 0 1 1.595 1.135l-1.583.011z"
                style={{
                    fill: "url(#ct)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.279898,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <path
                d="M417.483 63.721h6.978v.365h-6.978z"
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.390598,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <rect
                width={4.758}
                height={7.227}
                x={-55.055}
                y={417.662}
                ry={0.181}
                style={{
                    fill: "#c2c2c2",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-90.012)"
            />
        </g>
        <text
            xmlSpace="preserve"
            x={381.778}
            y={622.082}
            style={{
                fontSize: "5.7879px",
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                fill: "#070707",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.361743,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="scale(.8527 1.17276)"
        >
            <tspan
                x={381.778}
                y={622.082}
                style={{
                    strokeWidth: 0.361743,
                }}
            >
                {"57A"}
            </tspan>
        </text>
        <text
            xmlSpace="preserve"
            x={282.989}
            y={596.408}
            style={{
                fontSize: "5.7879px",
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                fill: "#070707",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.361743,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="scale(.8527 1.17276)"
        >
            <tspan
                x={282.989}
                y={596.408}
                style={{
                    strokeWidth: 0.361743,
                }}
            >
                {"61A"}
            </tspan>
        </text>
        <path
            d="M736.387-253.119h5.842v.279h-5.842z"
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.312095,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 -13.214 .133)"
        />
        <g transform="translate(1.591 -.442)">
            <rect
                width={9.102}
                height={17.293}
                x={735.102}
                y={-278.34}
                ry={3.576}
                style={{
                    fill: "#333",
                    fillRule: "evenodd",
                    strokeWidth: 1.05102,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <path
                d="M741.394-275.77a1.807 1.248 0 0 1-1.803 1.248 1.807 1.248 0 0 1-1.812-1.242 1.807 1.248 0 0 1 1.795-1.253 1.807 1.248 0 0 1 1.82 1.235l-1.807.012z"
                style={{
                    fill: "url(#cu)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.312095,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <path
                d="M741.36-272.842a1.807 1.248 0 0 1-1.803 1.248 1.807 1.248 0 0 1-1.811-1.242 1.807 1.248 0 0 1 1.794-1.253 1.807 1.248 0 0 1 1.82 1.235l-1.807.012z"
                style={{
                    fill: "url(#cv)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.312095,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <path
                d="M741.425-266.982a1.807 1.248 0 0 1-1.803 1.247 1.807 1.248 0 0 1-1.812-1.241 1.807 1.248 0 0 1 1.795-1.254 1.807 1.248 0 0 1 1.82 1.236l-1.807.012z"
                style={{
                    fill: "url(#cw)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.312095,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <path
                d="M741.433-269.84a1.807 1.248 0 0 1-1.803 1.248 1.807 1.248 0 0 1-1.812-1.241 1.807 1.248 0 0 1 1.795-1.254 1.807 1.248 0 0 1 1.82 1.236l-1.807.012z"
                style={{
                    fill: "url(#cx)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.312095,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <text
                xmlSpace="preserve"
                x={854.766}
                y={-227.613}
                style={{
                    fontSize: "3.23426px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    fill: "#333",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.202141,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.0036 .86159 -1.16065 .00074 0 0)"
            >
                <tspan
                    x={854.766}
                    y={-227.613}
                    style={{
                        fill: "#fff",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: 0.202141,
                    }}
                >
                    {"16A"}
                </tspan>
            </text>
            <rect
                width={1.461}
                height={22.877}
                x={739.086}
                y={-261.272}
                ry={0}
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "url(#cy)",
                    strokeWidth: 0.312095,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <path
                d="M-735.58 252.77a5.557 4.45 0 0 1-2.78 3.855 5.557 4.45 0 0 1-5.559-.003 5.557 4.45 0 0 1-2.775-3.857"
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.338399,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00141 -1 .99998 -.00659 0 0)"
            />
            <path
                d="M738.89-256.639a1.325.874 0 0 1-1.322.874 1.325.874 0 0 1-1.328-.87 1.325.874 0 0 1 1.315-.878 1.325.874 0 0 1 1.335.866l-1.325.008z"
                style={{
                    fill: "url(#cz)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.223644,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <path
                d="M741.19-258.422a1.325.874 0 0 1-1.322.874 1.325.874 0 0 1-1.328-.87 1.325.874 0 0 1 1.316-.878 1.325.874 0 0 1 1.334.865l-1.325.008z"
                style={{
                    fill: "url(#cA)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.223644,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <path
                d="M741.555-253.526a1.807 1.248 0 0 1-1.803 1.248 1.807 1.248 0 0 1-1.812-1.242 1.807 1.248 0 0 1 1.795-1.254 1.807 1.248 0 0 1 1.82 1.236l-1.807.012z"
                style={{
                    fill: "url(#cB)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.312095,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <rect
                width={4.758}
                height={7.227}
                x={243.939}
                y={735.721}
                ry={0.181}
                style={{
                    fill: "#c2c2c2",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={285.321}
                y={626.53}
                style={{
                    fontSize: "5.7879px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.361743,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(.8527 1.17276)"
            >
                <tspan
                    x={285.321}
                    y={626.53}
                    style={{
                        strokeWidth: 0.361743,
                    }}
                >
                    {"96A 46A"}
                </tspan>
            </text>
        </g>
        <path
            d="M743.378-271.493a1.325.874 0 0 1-1.322.874 1.325.874 0 0 1-1.328-.87 1.325.874 0 0 1 1.316-.878 1.325.874 0 0 1 1.334.866l-1.325.008z"
            style={{
                fill: "url(#cC)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.223644,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 -13.214 .133)"
        />
        <text
            xmlSpace="preserve"
            x={215.612}
            y={538.227}
            style={{
                fontSize: "5.7879px",
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                fill: "#070707",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.361743,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="scale(.8527 1.17276)"
        >
            <tspan
                x={215.612}
                y={538.227}
                style={{
                    strokeWidth: 0.361743,
                }}
            >
                {"62A"}
            </tspan>
        </text>
        <text
            xmlSpace="preserve"
            x={517.436}
            y={47.421}
            style={{
                fontSize: "5.7879px",
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                opacity: 1,
                fill: "#070707",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.361743,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.8527 0 0 1.17276 -260.214 541.42)"
        >
            <tspan
                x={517.436}
                y={47.421}
                style={{
                    strokeWidth: 0.361743,
                }}
            >
                {"63A"}
            </tspan>
        </text>
        <text
            xmlSpace="preserve"
            x={288.53}
            y={449.872}
            style={{
                fontSize: "5.7879px",
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                fill: "#070707",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.361743,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="scale(.8527 1.17276)"
        >
            <tspan
                x={288.53}
                y={449.872}
                style={{
                    strokeWidth: 0.361743,
                }}
            >
                {"64A"}
            </tspan>
        </text>
        <text
            xmlSpace="preserve"
            x={517.436}
            y={47.421}
            style={{
                fontSize: "5.7879px",
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                opacity: 1,
                fill: "#070707",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.361743,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.8527 0 0 1.17276 -197.335 438.752)"
        >
            <tspan
                x={517.436}
                y={47.421}
                style={{
                    strokeWidth: 0.361743,
                }}
            >
                {"65A"}
            </tspan>
        </text>
        <rect
            width={10.343}
            height={21.613}
            x={428.181}
            y={-287.683}
            ry={4.469}
            style={{
                fill: "#333",
                fillRule: "evenodd",
                strokeWidth: 1.25257,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.71) skewX(-.001)"
        />
        <path
            d="M435.331-284.47a2.054 1.56 0 0 1-2.049 1.559 2.054 1.56 0 0 1-2.059-1.552 2.054 1.56 0 0 1 2.04-1.567 2.054 1.56 0 0 1 2.068 1.545l-2.054.015z"
            style={{
                fill: "url(#cD)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.371944,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.71) skewX(-.001)"
        />
        <path
            d="M435.293-280.811a2.054 1.56 0 0 1-2.05 1.56 2.054 1.56 0 0 1-2.058-1.553 2.054 1.56 0 0 1 2.039-1.567 2.054 1.56 0 0 1 2.069 1.545l-2.054.015z"
            style={{
                fill: "url(#cE)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.371944,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.71) skewX(-.001)"
        />
        <path
            d="M435.376-277.059a2.054 1.56 0 0 1-2.05 1.56 2.054 1.56 0 0 1-2.058-1.552 2.054 1.56 0 0 1 2.039-1.567 2.054 1.56 0 0 1 2.069 1.544l-2.054.015z"
            style={{
                fill: "url(#cF)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.371944,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.71) skewX(-.001)"
        />
        <text
            xmlSpace="preserve"
            x={354.012}
            y={-325.746}
            style={{
                fontSize: "4.8082px",
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.300512,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.00614 1.21345 -.82407 .00416 0 0)"
        >
            <tspan
                x={354.012}
                y={-325.746}
                style={{
                    fill: "#fff",
                    fillOpacity: 1,
                    stroke: "none",
                    strokeWidth: 0.300512,
                }}
            >
                {"6A"}
            </tspan>
        </text>
        <rect
            width={1.66}
            height={28.592}
            x={432.708}
            y={-266.351}
            ry={0}
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "url(#cG)",
                strokeWidth: 0.371944,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.71) skewX(-.001)"
        />
        <path
            d="M-428.453 257.211a6.316 5.56 0 0 1-3.16 4.817 6.316 5.56 0 0 1-6.318-.003 6.316 5.56 0 0 1-3.154-4.82"
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.403291,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(-90.5) skewX(.06)"
        />
        <path
            d="M432.485-260.561a1.506 1.092 0 0 1-1.502 1.092 1.506 1.092 0 0 1-1.51-1.087 1.506 1.092 0 0 1 1.496-1.097 1.506 1.092 0 0 1 1.516 1.081l-1.505.01z"
            style={{
                fill: "url(#cH)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.266531,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.71) skewX(-.001)"
        />
        <path
            d="M438.015-260.623a1.506 1.092 0 0 1-1.503 1.093 1.506 1.092 0 0 1-1.51-1.087 1.506 1.092 0 0 1 1.496-1.098 1.506 1.092 0 0 1 1.516 1.082l-1.505.01z"
            style={{
                fill: "url(#cI)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.266531,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.71) skewX(-.001)"
        />
        <path
            d="M435.1-262.79a1.506 1.092 0 0 1-1.503 1.092 1.506 1.092 0 0 1-1.51-1.087 1.506 1.092 0 0 1 1.496-1.097 1.506 1.092 0 0 1 1.516 1.082l-1.505.01z"
            style={{
                fill: "url(#cJ)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.266531,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.71) skewX(-.001)"
        />
        <path
            d="M435.514-256.67a2.054 1.56 0 0 1-2.049 1.559 2.054 1.56 0 0 1-2.059-1.552 2.054 1.56 0 0 1 2.04-1.567 2.054 1.56 0 0 1 2.068 1.544l-2.054.015z"
            style={{
                fill: "url(#cK)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.371944,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.71) skewX(-.001)"
        />
        <path
            d="M430.27-237.991h6.64v.348h-6.64z"
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.371944,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.71) skewX(-.001)"
        />
        <rect
            width={4.534}
            height={6.876}
            x={252.507}
            y={427.851}
            ry={0.172}
            style={{
                fill: "#c2c2c2",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.952244,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(.208) skewX(-.001)"
        />
        <text
            xmlSpace="preserve"
            x={301.824}
            y={360.013}
            style={{
                fontSize: "5.51149px",
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                fill: "#070707",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.344467,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.85326 .01532 -.0211 1.1716 0 0)"
        >
            <tspan
                x={301.824}
                y={360.013}
                style={{
                    strokeWidth: 0.344467,
                }}
            >
                {"66A"}
            </tspan>
        </text>
        <rect
            width={10.343}
            height={21.613}
            x={398.349}
            y={-288.927}
            ry={4.469}
            style={{
                fill: "#333",
                fillRule: "evenodd",
                strokeWidth: 1.25257,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.71) skewX(-.001)"
        />
        <path
            d="M405.5-285.715a2.054 1.56 0 0 1-2.049 1.559 2.054 1.56 0 0 1-2.059-1.552 2.054 1.56 0 0 1 2.04-1.567 2.054 1.56 0 0 1 2.068 1.545l-2.054.015z"
            style={{
                fill: "url(#cL)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.371944,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.71) skewX(-.001)"
        />
        <path
            d="M405.462-282.056a2.054 1.56 0 0 1-2.05 1.56 2.054 1.56 0 0 1-2.058-1.553 2.054 1.56 0 0 1 2.039-1.567 2.054 1.56 0 0 1 2.068 1.545l-2.054.015z"
            style={{
                fill: "url(#cM)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.371944,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.71) skewX(-.001)"
        />
        <path
            d="M405.544-278.304a2.054 1.56 0 0 1-2.049 1.56 2.054 1.56 0 0 1-2.059-1.552 2.054 1.56 0 0 1 2.04-1.567 2.054 1.56 0 0 1 2.068 1.544l-2.054.015z"
            style={{
                fill: "url(#cN)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.371944,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.71) skewX(-.001)"
        />
        <text
            xmlSpace="preserve"
            x={329.429}
            y={-327.257}
            style={{
                fontSize: "4.8082px",
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.300512,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.00614 1.21345 -.82407 .00416 0 0)"
        >
            <tspan
                x={329.429}
                y={-327.257}
                style={{
                    fill: "#fff",
                    fillOpacity: 1,
                    stroke: "none",
                    strokeWidth: 0.300512,
                }}
            >
                {"7A"}
            </tspan>
        </text>
        <rect
            width={1.66}
            height={28.592}
            x={402.877}
            y={-267.596}
            ry={0}
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "url(#cO)",
                strokeWidth: 0.371944,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.71) skewX(-.001)"
        />
        <path
            d="M-398.628 258.565a6.316 5.56 0 0 1-3.16 4.817 6.316 5.56 0 0 1-6.318-.003 6.316 5.56 0 0 1-3.153-4.82"
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.403291,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(-90.5) skewX(.06)"
        />
        <path
            d="M402.654-261.806a1.506 1.092 0 0 1-1.502 1.092 1.506 1.092 0 0 1-1.51-1.087 1.506 1.092 0 0 1 1.495-1.097 1.506 1.092 0 0 1 1.517 1.081l-1.506.01z"
            style={{
                fill: "url(#cP)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.266531,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.71) skewX(-.001)"
        />
        <path
            d="M408.183-261.868a1.506 1.092 0 0 1-1.502 1.093 1.506 1.092 0 0 1-1.51-1.087 1.506 1.092 0 0 1 1.496-1.098 1.506 1.092 0 0 1 1.516 1.082l-1.506.01z"
            style={{
                fill: "url(#cQ)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.266531,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.71) skewX(-.001)"
        />
        <path
            d="M405.268-264.035a1.506 1.092 0 0 1-1.502 1.092 1.506 1.092 0 0 1-1.51-1.087 1.506 1.092 0 0 1 1.496-1.097 1.506 1.092 0 0 1 1.516 1.082l-1.506.01z"
            style={{
                fill: "url(#cR)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.266531,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.71) skewX(-.001)"
        />
        <path
            d="M405.683-257.916a2.054 1.56 0 0 1-2.05 1.56 2.054 1.56 0 0 1-2.058-1.552 2.054 1.56 0 0 1 2.04-1.567 2.054 1.56 0 0 1 2.068 1.544l-2.054.015z"
            style={{
                fill: "url(#cS)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.371944,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.71) skewX(-.001)"
        />
        <path
            d="M400.439-239.236h6.64v.348h-6.64z"
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.371944,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.71) skewX(-.001)"
        />
        <rect
            width={4.534}
            height={6.876}
            x={253.492}
            y={398.01}
            ry={0.172}
            style={{
                fill: "#c2c2c2",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.952244,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(.208) skewX(-.001)"
        />
        <text
            xmlSpace="preserve"
            x={302.476}
            y={334.537}
            style={{
                fontSize: "5.51149px",
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                fill: "#070707",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.344467,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.85326 .01532 -.0211 1.1716 0 0)"
        >
            <tspan
                x={302.476}
                y={334.537}
                style={{
                    strokeWidth: 0.344467,
                }}
            >
                {"67A"}
            </tspan>
        </text>
        <rect
            width={10.949}
            height={20.531}
            x={310.342}
            y={-382.986}
            ry={4.246}
            style={{
                fill: "#333",
                fillRule: "evenodd",
                strokeWidth: 1.25604,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.74) skewX(.062)"
        />
        <path
            d="M317.911-379.935a2.174 1.481 0 0 1-2.169 1.482 2.174 1.481 0 0 1-2.18-1.475 2.174 1.481 0 0 1 2.16-1.488 2.174 1.481 0 0 1 2.19 1.467l-2.175.014z"
            style={{
                fill: "url(#cT)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.372975,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.74) skewX(.062)"
        />
        <path
            d="M317.87-376.459a2.174 1.481 0 0 1-2.168 1.482 2.174 1.481 0 0 1-2.18-1.474 2.174 1.481 0 0 1 2.159-1.489 2.174 1.481 0 0 1 2.19 1.467l-2.175.014z"
            style={{
                fill: "url(#cU)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.372975,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.74) skewX(.062)"
        />
        <path
            d="M317.958-372.894a2.174 1.481 0 0 1-2.169 1.481 2.174 1.481 0 0 1-2.18-1.474 2.174 1.481 0 0 1 2.16-1.488 2.174 1.481 0 0 1 2.19 1.467l-2.175.014z"
            style={{
                fill: "url(#cV)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.372975,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.74) skewX(.062)"
        />
        <text
            xmlSpace="preserve"
            x={243.435}
            y={-467.172}
            style={{
                fontSize: "4.82153px",
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                fill: "#333",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.301345,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.00582 1.28094 -.78066 .00439 0 0)"
        >
            <tspan
                x={243.435}
                y={-467.172}
                style={{
                    fill: "#fff",
                    fillOpacity: 1,
                    stroke: "none",
                    strokeWidth: 0.301345,
                }}
            >
                {"9A"}
            </tspan>
        </text>
        <rect
            width={1.757}
            height={27.161}
            x={315.135}
            y={-362.722}
            ry={0}
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "url(#cW)",
                strokeWidth: 0.372975,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.74) skewX(.062)"
        />
        <path
            d="M-311.208 354.511a6.685 5.282 0 0 1-3.345 4.576 6.685 5.282 0 0 1-6.687-.003 6.685 5.282 0 0 1-3.338-4.579"
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.40441,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(-90.448) skewX(.175)"
        />
        <path
            d="M314.899-357.222a1.594 1.038 0 0 1-1.59 1.038 1.594 1.038 0 0 1-1.598-1.033 1.594 1.038 0 0 1 1.582-1.043 1.594 1.038 0 0 1 1.606 1.028l-1.594.01z"
            style={{
                fill: "url(#cX)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.26727,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.74) skewX(.062)"
        />
        <path
            d="M320.752-357.28a1.594 1.038 0 0 1-1.59 1.037 1.594 1.038 0 0 1-1.598-1.032 1.594 1.038 0 0 1 1.582-1.043 1.594 1.038 0 0 1 1.606 1.028l-1.594.01z"
            style={{
                fill: "url(#cY)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.26727,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.74) skewX(.062)"
        />
        <path
            d="M317.666-359.34a1.594 1.038 0 0 1-1.59 1.038 1.594 1.038 0 0 1-1.598-1.032 1.594 1.038 0 0 1 1.583-1.043 1.594 1.038 0 0 1 1.605 1.028l-1.594.01z"
            style={{
                fill: "url(#cZ)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.26727,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.74) skewX(.062)"
        />
        <path
            d="M318.105-353.526a2.174 1.481 0 0 1-2.169 1.481 2.174 1.481 0 0 1-2.18-1.474 2.174 1.481 0 0 1 2.16-1.489 2.174 1.481 0 0 1 2.189 1.467l-2.174.015z"
            style={{
                fill: "url(#da)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.372975,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.74) skewX(.062)"
        />
        <path
            d="M312.554-335.782h7.028v.331h-7.028z"
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.372975,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(89.74) skewX(.062)"
        />
        <rect
            width={4.307}
            height={7.278}
            x={348.451}
            y={308.94}
            ry={0.182}
            style={{
                fill: "#c2c2c2",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.954884,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="rotate(.231) skewX(.044)"
        />
        <text
            xmlSpace="preserve"
            x={434.661}
            y={243.241}
            style={{
                fontSize: "5.52677px",
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                fill: "#070707",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.345422,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.80831 .01617 -.02 1.23674 0 0)"
        >
            <tspan
                x={434.661}
                y={243.241}
                style={{
                    strokeWidth: 0.345422,
                }}
            >
                {"69A"}
            </tspan>
        </text>
        <g transform="translate(143.543 -120.208)">
            <rect
                width={1.829}
                height={16.229}
                x={412.246}
                y={176.353}
                ry={0}
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "url(#db)",
                    strokeWidth: 0.294147,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(.99999 -.0046 .01724 .99985 0 0)"
            />
            <path
                d="M-407.172-184.258a6.638 5.835 0 0 1-3.321 5.054 6.638 5.835 0 0 1-6.64-.003 6.638 5.835 0 0 1-3.315-5.057"
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.423517,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(179.281) skewX(.062)"
            />
            <path
                d="M413.558 180.895a1.583 1.146 0 0 1-1.58 1.146 1.583 1.146 0 0 1-1.586-1.14 1.583 1.146 0 0 1 1.572-1.152 1.583 1.146 0 0 1 1.594 1.135l-1.583.011z"
                style={{
                    fill: "url(#dc)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.279898,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <path
                d="M419.369 180.83a1.583 1.146 0 0 1-1.579 1.147 1.583 1.146 0 0 1-1.586-1.14 1.583 1.146 0 0 1 1.57-1.152 1.583 1.146 0 0 1 1.595 1.135l-1.583.01z"
                style={{
                    fill: "url(#dd)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.279898,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <path
                d="M416.305 178.557a1.583 1.146 0 0 1-1.579 1.146 1.583 1.146 0 0 1-1.586-1.14 1.583 1.146 0 0 1 1.571-1.152 1.583 1.146 0 0 1 1.594 1.135l-1.583.01z"
                style={{
                    fill: "url(#de)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.279898,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <path
                d="M411.318 194.59h6.978v.365h-6.978z"
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.390598,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <rect
                width={4.758}
                height={7.227}
                x={-185.973}
                y={412.634}
                ry={0.181}
                style={{
                    fill: "#c2c2c2",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-90.012)"
            />
        </g>
        <text
            xmlSpace="preserve"
            x={637.267}
            y={55.21}
            style={{
                fontSize: "5.7879px",
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                fill: "#070707",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.361743,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="scale(.8527 1.17276)"
        >
            <tspan
                x={637.267}
                y={55.21}
                style={{
                    strokeWidth: 0.361743,
                }}
            >
                {"61A"}
            </tspan>
        </text>
        <g transform="rotate(129.553 386.446 239.295)">
            <rect
                width={1.829}
                height={16.229}
                x={412.246}
                y={176.353}
                ry={0}
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "url(#df)",
                    strokeWidth: 0.294147,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(.99999 -.0046 .01724 .99985 0 0)"
            />
            <path
                d="M-407.172-184.258a6.638 5.835 0 0 1-3.321 5.054 6.638 5.835 0 0 1-6.64-.003 6.638 5.835 0 0 1-3.315-5.057"
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.423517,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(179.281) skewX(.062)"
            />
            <path
                d="M413.558 180.895a1.583 1.146 0 0 1-1.58 1.146 1.583 1.146 0 0 1-1.586-1.14 1.583 1.146 0 0 1 1.572-1.152 1.583 1.146 0 0 1 1.594 1.135l-1.583.011z"
                style={{
                    fill: "url(#dg)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.279898,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <path
                d="M419.369 180.83a1.583 1.146 0 0 1-1.579 1.147 1.583 1.146 0 0 1-1.586-1.14 1.583 1.146 0 0 1 1.57-1.152 1.583 1.146 0 0 1 1.595 1.135l-1.583.01z"
                style={{
                    fill: "url(#dh)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.279898,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <path
                d="M416.305 178.557a1.583 1.146 0 0 1-1.579 1.146 1.583 1.146 0 0 1-1.586-1.14 1.583 1.146 0 0 1 1.571-1.152 1.583 1.146 0 0 1 1.594 1.135l-1.583.01z"
                style={{
                    fill: "url(#di)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.279898,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <path
                d="M411.318 194.59h6.978v.365h-6.978z"
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.390598,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <rect
                width={4.758}
                height={7.227}
                x={-185.973}
                y={412.634}
                ry={0.181}
                style={{
                    fill: "#c2c2c2",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-90.012)"
            />
        </g>
        <text
            xmlSpace="preserve"
            x={457.945}
            y={250.778}
            style={{
                fontSize: "5.7879px",
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                fill: "#070707",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.361743,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="scale(.8527 1.17276)"
        >
            <tspan
                x={457.945}
                y={250.778}
                style={{
                    strokeWidth: 0.361743,
                }}
            >
                {"71A"}
            </tspan>
        </text>
        <text
            xmlSpace="preserve"
            x={460.167}
            y={257.767}
            style={{
                fontSize: "5.7879px",
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                fill: "#070707",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.361743,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="scale(.8527 1.17276)"
        >
            <tspan
                x={460.167}
                y={257.767}
                style={{
                    strokeWidth: 0.361743,
                }}
            >
                {"72A"}
            </tspan>
        </text>
        <path
            d="M736.387-253.119h5.842v.279h-5.842z"
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.312095,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 -12.763 69.141)"
        />
        <g transform="translate(2.042 68.567)">
            <rect
                width={9.102}
                height={17.293}
                x={735.102}
                y={-278.34}
                ry={3.576}
                style={{
                    fill: "#333",
                    fillRule: "evenodd",
                    strokeWidth: 1.05102,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <path
                d="M741.394-275.77a1.807 1.248 0 0 1-1.803 1.248 1.807 1.248 0 0 1-1.812-1.242 1.807 1.248 0 0 1 1.795-1.253 1.807 1.248 0 0 1 1.82 1.235l-1.807.012z"
                style={{
                    fill: "url(#dj)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.312095,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <path
                d="M741.36-272.842a1.807 1.248 0 0 1-1.803 1.248 1.807 1.248 0 0 1-1.811-1.242 1.807 1.248 0 0 1 1.794-1.253 1.807 1.248 0 0 1 1.82 1.235l-1.807.012z"
                style={{
                    fill: "url(#dk)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.312095,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <path
                d="M741.425-266.982a1.807 1.248 0 0 1-1.803 1.247 1.807 1.248 0 0 1-1.812-1.241 1.807 1.248 0 0 1 1.795-1.254 1.807 1.248 0 0 1 1.82 1.236l-1.807.012z"
                style={{
                    fill: "url(#dl)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.312095,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <path
                d="M741.433-269.84a1.807 1.248 0 0 1-1.803 1.248 1.807 1.248 0 0 1-1.812-1.241 1.807 1.248 0 0 1 1.795-1.254 1.807 1.248 0 0 1 1.82 1.236l-1.807.012z"
                style={{
                    fill: "url(#dm)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.312095,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <text
                xmlSpace="preserve"
                x={854.766}
                y={-227.613}
                style={{
                    fontSize: "3.23426px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    fill: "#333",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.202141,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.0036 .86159 -1.16065 .00074 0 0)"
            >
                <tspan
                    x={854.766}
                    y={-227.613}
                    style={{
                        fill: "#fff",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: 0.202141,
                    }}
                >
                    {"17A"}
                </tspan>
            </text>
            <rect
                width={1.461}
                height={22.877}
                x={739.086}
                y={-261.272}
                ry={0}
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "url(#dn)",
                    strokeWidth: 0.312095,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <path
                d="M-735.58 252.77a5.557 4.45 0 0 1-2.78 3.855 5.557 4.45 0 0 1-5.559-.003 5.557 4.45 0 0 1-2.775-3.857"
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.338399,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00141 -1 .99998 -.00659 0 0)"
            />
            <path
                d="M738.89-256.639a1.325.874 0 0 1-1.322.874 1.325.874 0 0 1-1.328-.87 1.325.874 0 0 1 1.315-.878 1.325.874 0 0 1 1.335.866l-1.325.008z"
                style={{
                    fill: "url(#do)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.223644,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <path
                d="M741.19-258.422a1.325.874 0 0 1-1.322.874 1.325.874 0 0 1-1.328-.87 1.325.874 0 0 1 1.316-.878 1.325.874 0 0 1 1.334.865l-1.325.008z"
                style={{
                    fill: "url(#dp)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.223644,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <path
                d="M741.555-253.526a1.807 1.248 0 0 1-1.803 1.248 1.807 1.248 0 0 1-1.812-1.242 1.807 1.248 0 0 1 1.795-1.254 1.807 1.248 0 0 1 1.82 1.236l-1.807.012z"
                style={{
                    fill: "url(#dq)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.312095,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <rect
                width={4.758}
                height={7.227}
                x={243.939}
                y={735.721}
                ry={0.181}
                style={{
                    fill: "#c2c2c2",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={285.321}
                y={626.53}
                style={{
                    fontSize: "5.7879px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.361743,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(.8527 1.17276)"
            >
                <tspan
                    x={285.321}
                    y={626.53}
                    style={{
                        strokeWidth: 0.361743,
                    }}
                >
                    {"97A 47A"}
                </tspan>
            </text>
        </g>
        <path
            d="M743.378-271.493a1.325.874 0 0 1-1.322.874 1.325.874 0 0 1-1.328-.87 1.325.874 0 0 1 1.316-.878 1.325.874 0 0 1 1.334.866l-1.325.008z"
            style={{
                fill: "url(#dr)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.223644,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 -12.763 69.141)"
        />
        <path
            d="M736.387-253.119h5.842v.279h-5.842z"
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.312095,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 -12.888 100.641)"
        />
        <g transform="translate(1.917 100.067)">
            <rect
                width={9.102}
                height={17.293}
                x={735.102}
                y={-278.34}
                ry={3.576}
                style={{
                    fill: "#333",
                    fillRule: "evenodd",
                    strokeWidth: 1.05102,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <path
                d="M741.394-275.77a1.807 1.248 0 0 1-1.803 1.248 1.807 1.248 0 0 1-1.812-1.242 1.807 1.248 0 0 1 1.795-1.253 1.807 1.248 0 0 1 1.82 1.235l-1.807.012z"
                style={{
                    fill: "url(#ds)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.312095,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <path
                d="M741.36-272.842a1.807 1.248 0 0 1-1.803 1.248 1.807 1.248 0 0 1-1.811-1.242 1.807 1.248 0 0 1 1.794-1.253 1.807 1.248 0 0 1 1.82 1.235l-1.807.012z"
                style={{
                    fill: "url(#dt)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.312095,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <path
                d="M741.425-266.982a1.807 1.248 0 0 1-1.803 1.247 1.807 1.248 0 0 1-1.812-1.241 1.807 1.248 0 0 1 1.795-1.254 1.807 1.248 0 0 1 1.82 1.236l-1.807.012z"
                style={{
                    fill: "url(#du)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.312095,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <path
                d="M741.433-269.84a1.807 1.248 0 0 1-1.803 1.248 1.807 1.248 0 0 1-1.812-1.241 1.807 1.248 0 0 1 1.795-1.254 1.807 1.248 0 0 1 1.82 1.236l-1.807.012z"
                style={{
                    fill: "url(#dv)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.312095,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <text
                xmlSpace="preserve"
                x={854.766}
                y={-227.613}
                style={{
                    fontSize: "3.23426px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    fill: "#333",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.202141,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.0036 .86159 -1.16065 .00074 0 0)"
            >
                <tspan
                    x={854.766}
                    y={-227.613}
                    style={{
                        fill: "#fff",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: 0.202141,
                    }}
                >
                    {"18A"}
                </tspan>
            </text>
            <rect
                width={1.461}
                height={22.877}
                x={739.086}
                y={-261.272}
                ry={0}
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "url(#dw)",
                    strokeWidth: 0.312095,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <path
                d="M-735.58 252.77a5.557 4.45 0 0 1-2.78 3.855 5.557 4.45 0 0 1-5.559-.003 5.557 4.45 0 0 1-2.775-3.857"
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.338399,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00141 -1 .99998 -.00659 0 0)"
            />
            <path
                d="M738.89-256.639a1.325.874 0 0 1-1.322.874 1.325.874 0 0 1-1.328-.87 1.325.874 0 0 1 1.315-.878 1.325.874 0 0 1 1.335.866l-1.325.008z"
                style={{
                    fill: "url(#dx)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.223644,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <path
                d="M741.19-258.422a1.325.874 0 0 1-1.322.874 1.325.874 0 0 1-1.328-.87 1.325.874 0 0 1 1.316-.878 1.325.874 0 0 1 1.334.865l-1.325.008z"
                style={{
                    fill: "url(#dy)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.223644,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <path
                d="M741.555-253.526a1.807 1.248 0 0 1-1.803 1.248 1.807 1.248 0 0 1-1.812-1.242 1.807 1.248 0 0 1 1.795-1.254 1.807 1.248 0 0 1 1.82 1.236l-1.807.012z"
                style={{
                    fill: "url(#dz)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.312095,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <rect
                width={4.758}
                height={7.227}
                x={243.939}
                y={735.721}
                ry={0.181}
                style={{
                    fill: "#c2c2c2",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={285.321}
                y={626.53}
                style={{
                    fontSize: "5.7879px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.361743,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(.8527 1.17276)"
            >
                <tspan
                    x={285.321}
                    y={626.53}
                    style={{
                        strokeWidth: 0.361743,
                    }}
                >
                    {"98A 48A"}
                </tspan>
            </text>
        </g>
        <path
            d="M743.378-271.493a1.325.874 0 0 1-1.322.874 1.325.874 0 0 1-1.328-.87 1.325.874 0 0 1 1.316-.878 1.325.874 0 0 1 1.334.866l-1.325.008z"
            style={{
                fill: "url(#dA)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.223644,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 -12.888 100.641)"
        />
        <path
            d="M736.387-253.119h5.842v.279h-5.842z"
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.312095,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 -12.763 170.036)"
        />
        <g transform="translate(2.042 169.462)">
            <rect
                width={9.102}
                height={17.293}
                x={735.102}
                y={-278.34}
                ry={3.576}
                style={{
                    fill: "#333",
                    fillRule: "evenodd",
                    strokeWidth: 1.05102,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <path
                d="M741.394-275.77a1.807 1.248 0 0 1-1.803 1.248 1.807 1.248 0 0 1-1.812-1.242 1.807 1.248 0 0 1 1.795-1.253 1.807 1.248 0 0 1 1.82 1.235l-1.807.012z"
                style={{
                    fill: "url(#dB)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.312095,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <path
                d="M741.36-272.842a1.807 1.248 0 0 1-1.803 1.248 1.807 1.248 0 0 1-1.811-1.242 1.807 1.248 0 0 1 1.794-1.253 1.807 1.248 0 0 1 1.82 1.235l-1.807.012z"
                style={{
                    fill: "url(#dC)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.312095,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <path
                d="M741.425-266.982a1.807 1.248 0 0 1-1.803 1.247 1.807 1.248 0 0 1-1.812-1.241 1.807 1.248 0 0 1 1.795-1.254 1.807 1.248 0 0 1 1.82 1.236l-1.807.012z"
                style={{
                    fill: "url(#dD)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.312095,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <path
                d="M741.433-269.84a1.807 1.248 0 0 1-1.803 1.248 1.807 1.248 0 0 1-1.812-1.241 1.807 1.248 0 0 1 1.795-1.254 1.807 1.248 0 0 1 1.82 1.236l-1.807.012z"
                style={{
                    fill: "url(#dE)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.312095,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <text
                xmlSpace="preserve"
                x={854.766}
                y={-227.613}
                style={{
                    fontSize: "3.23426px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    fill: "#333",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.202141,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.0036 .86159 -1.16065 .00074 0 0)"
            >
                <tspan
                    x={854.766}
                    y={-227.613}
                    style={{
                        fill: "#fff",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: 0.202141,
                    }}
                >
                    {"19A"}
                </tspan>
            </text>
            <rect
                width={1.461}
                height={22.877}
                x={739.086}
                y={-261.272}
                ry={0}
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "url(#dF)",
                    strokeWidth: 0.312095,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <path
                d="M-735.58 252.77a5.557 4.45 0 0 1-2.78 3.855 5.557 4.45 0 0 1-5.559-.003 5.557 4.45 0 0 1-2.775-3.857"
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.338399,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00141 -1 .99998 -.00659 0 0)"
            />
            <path
                d="M738.89-256.639a1.325.874 0 0 1-1.322.874 1.325.874 0 0 1-1.328-.87 1.325.874 0 0 1 1.315-.878 1.325.874 0 0 1 1.335.866l-1.325.008z"
                style={{
                    fill: "url(#dG)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.223644,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <path
                d="M741.19-258.422a1.325.874 0 0 1-1.322.874 1.325.874 0 0 1-1.328-.87 1.325.874 0 0 1 1.316-.878 1.325.874 0 0 1 1.334.865l-1.325.008z"
                style={{
                    fill: "url(#dH)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.223644,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <path
                d="M741.555-253.526a1.807 1.248 0 0 1-1.803 1.248 1.807 1.248 0 0 1-1.812-1.242 1.807 1.248 0 0 1 1.795-1.254 1.807 1.248 0 0 1 1.82 1.236l-1.807.012z"
                style={{
                    fill: "url(#dI)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.312095,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <rect
                width={4.758}
                height={7.227}
                x={243.939}
                y={735.721}
                ry={0.181}
                style={{
                    fill: "#c2c2c2",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={285.321}
                y={626.53}
                style={{
                    fontSize: "5.7879px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.361743,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(.8527 1.17276)"
            >
                <tspan
                    x={285.321}
                    y={626.53}
                    style={{
                        strokeWidth: 0.361743,
                    }}
                >
                    {"99A 49A"}
                </tspan>
            </text>
        </g>
        <path
            d="M743.378-271.493a1.325.874 0 0 1-1.322.874 1.325.874 0 0 1-1.328-.87 1.325.874 0 0 1 1.316-.878 1.325.874 0 0 1 1.334.866l-1.325.008z"
            style={{
                fill: "url(#dJ)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.223644,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 -12.763 170.036)"
        />
        <path
            d="M736.387-253.119h5.842v.279h-5.842z"
            style={{
                fill: "#292929",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.312095,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 -11.513 231.536)"
        />
        <g transform="translate(3.292 230.962)">
            <rect
                width={9.102}
                height={17.293}
                x={735.102}
                y={-278.34}
                ry={3.576}
                style={{
                    fill: "#333",
                    fillRule: "evenodd",
                    strokeWidth: 1.05102,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <path
                d="M741.394-275.77a1.807 1.248 0 0 1-1.803 1.248 1.807 1.248 0 0 1-1.812-1.242 1.807 1.248 0 0 1 1.795-1.253 1.807 1.248 0 0 1 1.82 1.235l-1.807.012z"
                style={{
                    fill: "url(#dK)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.312095,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <path
                d="M741.36-272.842a1.807 1.248 0 0 1-1.803 1.248 1.807 1.248 0 0 1-1.811-1.242 1.807 1.248 0 0 1 1.794-1.253 1.807 1.248 0 0 1 1.82 1.235l-1.807.012z"
                style={{
                    fill: "url(#dL)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.312095,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <path
                d="M741.425-266.982a1.807 1.248 0 0 1-1.803 1.247 1.807 1.248 0 0 1-1.812-1.241 1.807 1.248 0 0 1 1.795-1.254 1.807 1.248 0 0 1 1.82 1.236l-1.807.012z"
                style={{
                    fill: "url(#dM)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.312095,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <path
                d="M741.433-269.84a1.807 1.248 0 0 1-1.803 1.248 1.807 1.248 0 0 1-1.812-1.241 1.807 1.248 0 0 1 1.795-1.254 1.807 1.248 0 0 1 1.82 1.236l-1.807.012z"
                style={{
                    fill: "url(#dN)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.312095,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <text
                xmlSpace="preserve"
                x={854.766}
                y={-227.613}
                style={{
                    fontSize: "3.23426px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    fill: "#333",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.202141,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.0036 .86159 -1.16065 .00074 0 0)"
            >
                <tspan
                    x={854.766}
                    y={-227.613}
                    style={{
                        fill: "#fff",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: 0.202141,
                    }}
                >
                    {"20A"}
                </tspan>
            </text>
            <rect
                width={1.461}
                height={22.877}
                x={739.086}
                y={-261.272}
                ry={0}
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "url(#dO)",
                    strokeWidth: 0.312095,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <path
                d="M-735.58 252.77a5.557 4.45 0 0 1-2.78 3.855 5.557 4.45 0 0 1-5.559-.003 5.557 4.45 0 0 1-2.775-3.857"
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.338399,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00141 -1 .99998 -.00659 0 0)"
            />
            <path
                d="M738.89-256.639a1.325.874 0 0 1-1.322.874 1.325.874 0 0 1-1.328-.87 1.325.874 0 0 1 1.315-.878 1.325.874 0 0 1 1.335.866l-1.325.008z"
                style={{
                    fill: "url(#dP)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.223644,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <path
                d="M741.19-258.422a1.325.874 0 0 1-1.322.874 1.325.874 0 0 1-1.328-.87 1.325.874 0 0 1 1.316-.878 1.325.874 0 0 1 1.334.865l-1.325.008z"
                style={{
                    fill: "url(#dQ)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.223644,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <path
                d="M741.555-253.526a1.807 1.248 0 0 1-1.803 1.248 1.807 1.248 0 0 1-1.812-1.242 1.807 1.248 0 0 1 1.795-1.254 1.807 1.248 0 0 1 1.82 1.236l-1.807.012z"
                style={{
                    fill: "url(#dR)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.312095,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(-.00191 1 -1 .0014 0 0)"
            />
            <rect
                width={4.758}
                height={7.227}
                x={243.939}
                y={735.721}
                ry={0.181}
                style={{
                    fill: "#c2c2c2",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={285.321}
                y={626.53}
                style={{
                    fontSize: "5.7879px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.361743,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(.8527 1.17276)"
            >
                <tspan
                    x={285.321}
                    y={626.53}
                    style={{
                        strokeWidth: 0.361743,
                    }}
                >
                    {"100A 50A"}
                </tspan>
            </text>
        </g>
        <path
            d="M743.378-271.493a1.325.874 0 0 1-1.322.874 1.325.874 0 0 1-1.328-.87 1.325.874 0 0 1 1.316-.878 1.325.874 0 0 1 1.334.866l-1.325.008z"
            style={{
                fill: "url(#dS)",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.223644,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(-.00191 1 -1 .0014 -11.513 231.536)"
        />
        <text
            xmlSpace="preserve"
            x={444.5}
            y={236.5}
            style={{
                fontSize: 16,
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                opacity: 1,
                fill: "#070707",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 1,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
        />
        <g transform="matrix(.39435 0 0 .45293 360.996 -44.812)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"330"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 -89.373 295.857)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"331"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 -88.822 325.066)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"332"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 -87.424 397.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"329"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 -87.424 426.534)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"330"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 103.076 892.034)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"256"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 175.326 832.909)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"256"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 199.45 890.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"255"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 447.888 702.52)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"253"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 507.239 702.514)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"251"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 554.95 731.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"251"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 589.95 806.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"267"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 642.012 837.055)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"267"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 606.95 790.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"250"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 543.95 743.994)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"250"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 662.95 689.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"220"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 590.537 643.58)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"220"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 663.95 644.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"219"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 576.122 688.358)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"219"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 115.7 846.909)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"255"}
                </tspan>
            </text>
        </g>
        <rect
            width={86.652}
            height={5.391}
            x={824.192}
            y={451.7}
            ry={0}
            style={{
                opacity: 1,
                fill: "#0055d4",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 1.07729,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="matrix(.73982 .6728 -.66199 .74952 0 0)"
        />
        <g transform="matrix(.28908 0 0 .28524 110.946 790.923)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"258"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 196.128 744.15)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"258"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 134.95 730.659)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"259"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 162.476 672.64)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"377"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 103.95 642.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"377"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 112.95 600.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"237"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 45.95 628.909)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"237"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 114.95 629.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"236"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 48.2 599.909)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"236"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 288.7 601.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"233"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 354.95 586.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"234"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 305.95 567.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"234"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 301.105 587.144)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"372"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 251.509 566.994)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"372"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 346.95 629.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"233"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 341.2 600.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"371"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 399.2 629.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"371"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 62.95 730.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"260"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 224.188 790.293)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"257"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 280.557 744.488)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"257"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 245.87 804.338)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"261"}
                </tspan>
            </text>
            <g transform="translate(514.732 4.94)">
                <rect
                    width={49.25}
                    height={19.625}
                    x={619.875}
                    y={184.875}
                    ry={0.181}
                    style={{
                        opacity: 1,
                        fill: "none",
                        fillOpacity: 1,
                        fillRule: "evenodd",
                        stroke: "#1c1818",
                        strokeWidth: 1,
                        strokeLinecap: "butt",
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                        paintOrder: "stroke fill markers",
                    }}
                />
                <text
                    xmlSpace="preserve"
                    x={620.225}
                    y={203.616}
                    style={{
                        fontSize: "19.3794px",
                        lineHeight: 1,
                        fontFamily: "sans-serif",
                        InkscapeFontSpecification: "sans-serif",
                        opacity: 1,
                        fill: "#070707",
                        fillOpacity: 1,
                        fillRule: "evenodd",
                        stroke: "#1c1818",
                        strokeWidth: 1.21122,
                        strokeLinecap: "butt",
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                        paintOrder: "stroke fill markers",
                    }}
                    transform="scale(1.01002 .99008)"
                >
                    <tspan
                        x={620.225}
                        y={203.616}
                        style={{
                            strokeWidth: 1.21122,
                        }}
                    >
                        {"254"}
                    </tspan>
                </text>
            </g>
            <g transform="translate(553.761 -52.338)">
                <rect
                    width={49.25}
                    height={19.625}
                    x={619.875}
                    y={184.875}
                    ry={0.181}
                    style={{
                        opacity: 1,
                        fill: "none",
                        fillOpacity: 1,
                        fillRule: "evenodd",
                        stroke: "#1c1818",
                        strokeWidth: 1,
                        strokeLinecap: "butt",
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                        paintOrder: "stroke fill markers",
                    }}
                />
                <text
                    xmlSpace="preserve"
                    x={620.225}
                    y={203.616}
                    style={{
                        fontSize: "19.3794px",
                        lineHeight: 1,
                        fontFamily: "sans-serif",
                        InkscapeFontSpecification: "sans-serif",
                        opacity: 1,
                        fill: "#070707",
                        fillOpacity: 1,
                        fillRule: "evenodd",
                        stroke: "#1c1818",
                        strokeWidth: 1.21122,
                        strokeLinecap: "butt",
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                        paintOrder: "stroke fill markers",
                    }}
                    transform="scale(1.01002 .99008)"
                >
                    <tspan
                        x={620.225}
                        y={203.616}
                        style={{
                            strokeWidth: 1.21122,
                        }}
                    >
                        {"252"}
                    </tspan>
                </text>
            </g>
            <g transform="translate(864.92 -209.267)">
                <rect
                    width={49.25}
                    height={19.625}
                    x={619.875}
                    y={184.875}
                    ry={0.181}
                    style={{
                        opacity: 1,
                        fill: "none",
                        fillOpacity: 1,
                        fillRule: "evenodd",
                        stroke: "#1c1818",
                        strokeWidth: 1,
                        strokeLinecap: "butt",
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                        paintOrder: "stroke fill markers",
                    }}
                />
                <text
                    xmlSpace="preserve"
                    x={620.225}
                    y={203.616}
                    style={{
                        fontSize: "19.3794px",
                        lineHeight: 1,
                        fontFamily: "sans-serif",
                        InkscapeFontSpecification: "sans-serif",
                        opacity: 1,
                        fill: "#070707",
                        fillOpacity: 1,
                        fillRule: "evenodd",
                        stroke: "#1c1818",
                        strokeWidth: 1.21122,
                        strokeLinecap: "butt",
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                        paintOrder: "stroke fill markers",
                    }}
                    transform="scale(1.01002 .99008)"
                >
                    <tspan
                        x={620.225}
                        y={203.616}
                        style={{
                            strokeWidth: 1.21122,
                        }}
                    >
                        {"252"}
                    </tspan>
                </text>
            </g>
        </g>
        <g transform="rotate(-89.417 1118.955 167.732)">
            <rect
                width={1.829}
                height={16.229}
                x={419.503}
                y={45.448}
                ry={0}
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "url(#dT)",
                    strokeWidth: 0.294147,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(.99999 -.0046 .01724 .99985 0 0)"
            />
            <path
                d="M-413.956-53.412a6.638 5.835 0 0 1-3.32 5.054 6.638 5.835 0 0 1-6.64-.003 6.638 5.835 0 0 1-3.315-5.058"
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.423517,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(179.281) skewX(.062)"
            />
            <path
                d="M419.722 50.026a1.583 1.146 0 0 1-1.578 1.146 1.583 1.146 0 0 1-1.587-1.14 1.583 1.146 0 0 1 1.571-1.152 1.583 1.146 0 0 1 1.594 1.135l-1.582.011z"
                style={{
                    fill: "url(#dU)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.279898,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <path
                d="M425.534 49.961a1.583 1.146 0 0 1-1.58 1.146 1.583 1.146 0 0 1-1.586-1.14 1.583 1.146 0 0 1 1.571-1.152 1.583 1.146 0 0 1 1.594 1.135l-1.582.011z"
                style={{
                    fill: "url(#dV)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.279898,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <path
                d="M422.47 47.687a1.583 1.146 0 0 1-1.58 1.147 1.583 1.146 0 0 1-1.585-1.141 1.583 1.146 0 0 1 1.57-1.152 1.583 1.146 0 0 1 1.595 1.135l-1.583.011z"
                style={{
                    fill: "url(#dW)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.279898,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <path
                d="M417.483 63.721h6.978v.365h-6.978z"
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.390598,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <rect
                width={4.758}
                height={7.227}
                x={-55.055}
                y={417.662}
                ry={0.181}
                style={{
                    fill: "#c2c2c2",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-90.012)"
            />
        </g>
        <g transform="rotate(-89.417 1126.77 57.505)">
            <rect
                width={1.829}
                height={16.229}
                x={419.503}
                y={45.448}
                ry={0}
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "url(#dX)",
                    strokeWidth: 0.294147,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(.99999 -.0046 .01724 .99985 0 0)"
            />
            <path
                d="M-413.956-53.412a6.638 5.835 0 0 1-3.32 5.054 6.638 5.835 0 0 1-6.64-.003 6.638 5.835 0 0 1-3.315-5.058"
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.423517,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(179.281) skewX(.062)"
            />
            <path
                d="M419.722 50.026a1.583 1.146 0 0 1-1.578 1.146 1.583 1.146 0 0 1-1.587-1.14 1.583 1.146 0 0 1 1.571-1.152 1.583 1.146 0 0 1 1.594 1.135l-1.582.011z"
                style={{
                    fill: "url(#dY)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.279898,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <path
                d="M425.534 49.961a1.583 1.146 0 0 1-1.58 1.146 1.583 1.146 0 0 1-1.586-1.14 1.583 1.146 0 0 1 1.571-1.152 1.583 1.146 0 0 1 1.594 1.135l-1.582.011z"
                style={{
                    fill: "url(#dZ)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.279898,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <path
                d="M422.47 47.687a1.583 1.146 0 0 1-1.58 1.147 1.583 1.146 0 0 1-1.585-1.141 1.583 1.146 0 0 1 1.57-1.152 1.583 1.146 0 0 1 1.595 1.135l-1.583.011z"
                style={{
                    fill: "url(#ea)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.279898,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <path
                d="M417.483 63.721h6.978v.365h-6.978z"
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.390598,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <rect
                width={4.758}
                height={7.227}
                x={-55.055}
                y={417.662}
                ry={0.181}
                style={{
                    fill: "#c2c2c2",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-90.012)"
            />
        </g>
        <text
            xmlSpace="preserve"
            x={1169.515}
            y={746.914}
            style={{
                fontSize: "5.7879px",
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                fill: "#070707",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.361743,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="scale(.8527 1.17276)"
        >
            <tspan
                x={1169.515}
                y={746.914}
                style={{
                    strokeWidth: 0.361743,
                }}
            >
                {"53D"}
            </tspan>
        </text>
        <g transform="rotate(-89.417 1140.816 193.588)">
            <rect
                width={1.829}
                height={16.229}
                x={419.503}
                y={45.448}
                ry={0}
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "url(#eb)",
                    strokeWidth: 0.294147,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="matrix(.99999 -.0046 .01724 .99985 0 0)"
            />
            <path
                d="M-413.956-53.412a6.638 5.835 0 0 1-3.32 5.054 6.638 5.835 0 0 1-6.64-.003 6.638 5.835 0 0 1-3.315-5.058"
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.423517,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(179.281) skewX(.062)"
            />
            <path
                d="M419.722 50.026a1.583 1.146 0 0 1-1.578 1.146 1.583 1.146 0 0 1-1.587-1.14 1.583 1.146 0 0 1 1.571-1.152 1.583 1.146 0 0 1 1.594 1.135l-1.582.011z"
                style={{
                    fill: "url(#ec)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.279898,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <path
                d="M425.534 49.961a1.583 1.146 0 0 1-1.58 1.146 1.583 1.146 0 0 1-1.586-1.14 1.583 1.146 0 0 1 1.571-1.152 1.583 1.146 0 0 1 1.594 1.135l-1.582.011z"
                style={{
                    fill: "url(#ed)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.279898,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <path
                d="M422.47 47.687a1.583 1.146 0 0 1-1.58 1.147 1.583 1.146 0 0 1-1.585-1.141 1.583 1.146 0 0 1 1.57-1.152 1.583 1.146 0 0 1 1.595 1.135l-1.583.011z"
                style={{
                    fill: "url(#ee)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.279898,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <path
                d="M417.483 63.721h6.978v.365h-6.978z"
                style={{
                    fill: "#292929",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 0.390598,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-.51)"
            />
            <rect
                width={4.758}
                height={7.227}
                x={-55.055}
                y={417.662}
                ry={0.181}
                style={{
                    fill: "#c2c2c2",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="rotate(-90.012)"
            />
        </g>
        <text
            xmlSpace="preserve"
            x={1163.742}
            y={787.076}
            style={{
                fontSize: "5.7879px",
                lineHeight: 1,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "sans-serif",
                fill: "#070707",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#1c1818",
                strokeWidth: 0.361743,
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "stroke fill markers",
            }}
            transform="scale(.8527 1.17276)"
        >
            <tspan
                x={1163.742}
                y={787.076}
                style={{
                    strokeWidth: 0.361743,
                }}
            >
                {"54D"}
            </tspan>
        </text>
        <g transform="matrix(.28908 0 0 .28524 798.088 837.44)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"263"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 740.83 804.055)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"263"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 735.95 837.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"264"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 789.336 803.67)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"264"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 779.012 789.298)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"215"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 845.076 744.034)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"215"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 854.7 730.784)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"214"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 906.076 702.909)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"214"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 750.95 789.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"216"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 684.658 744.47)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"216"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 698.597 730.348)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"218"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 646.012 701.974)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"218"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 263.95 554.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"373"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 222.128 540.227)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"238"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 175.95 498.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"238"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 188.895 484.171)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"239"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 237.2 498.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"232"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 324.95 400.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"231"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 280.95 383.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"230"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 269.95 399.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"231"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 234.072 385.762)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"230"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 321.45 552.659)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"229"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 369.95 512.159)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"227"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 369.355 478.762)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"227"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 453.719 493.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"226"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 394.95 427.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"226"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 405.012 412.702)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"244"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 538.719 501.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"243"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 603.95 501.659)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"243"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 562.45 525.659)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"242"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 622.95 525.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"241"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 585.2 567.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"242"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 531.95 553.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"225"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 518.95 567.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"222"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 562.95 587.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"222"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 538.95 586.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"221"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 601.2 628.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"221"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 419.95 567.159)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"224"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 465.95 586.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"224"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 502.95 629.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"223"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 652.45 628.909)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"217"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 712.95 600.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"217"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 633.95 538.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"240"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 656.7 514.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"240"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 777.45 525.159)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"213"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 796.95 554.159)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"212"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 860.95 586.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"207"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 847.95 600.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"206"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 901.2 628.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"206"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 1024.433 729.823)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"203"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 1089.95 702.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"203"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 1157.95 642.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"203"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 1188.95 599.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"202"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 1252.95 627.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"202"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 1323.95 689.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"202"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 1190.95 642.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"201"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 1292.95 731.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"201"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 1015.95 689.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"205"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 1086.95 629.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"205"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 1147.95 600.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"205"}
                </tspan>
            </text>
        </g>
        <g transform="matrix(.28908 0 0 .28524 1272.95 688.409)">
            <rect
                width={49.25}
                height={19.625}
                x={619.875}
                y={184.875}
                ry={0.181}
                style={{
                    opacity: 1,
                    fill: "none",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
            />
            <text
                xmlSpace="preserve"
                x={620.225}
                y={203.616}
                style={{
                    fontSize: "19.3794px",
                    lineHeight: 1,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "sans-serif",
                    opacity: 1,
                    fill: "#070707",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "#1c1818",
                    strokeWidth: 1.21122,
                    strokeLinecap: "butt",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke fill markers",
                }}
                transform="scale(1.01002 .99008)"
            >
                <tspan
                    x={620.225}
                    y={203.616}
                    style={{
                        strokeWidth: 1.21122,
                    }}
                >
                    {"201"}
                </tspan>
            </text>
        </g>
    </svg>
);
export default SvgComponent;
