interface PdfViewerProps {
    fileUrl: string;
}
import pdfFile from "../images/esquemap-lineaRoca.pdf";
import SvgComponent from './SvgComponent';

const PdfViewer: React.FC<PdfViewerProps> = () => {

        

    return (
        <div className="App">
            <object
                data={pdfFile}
                type="application/pdf"
                width="100%"
                height="1200px"
            >
                
                <div style={{ width: "100%", height: "100%" }}>
                                <SvgComponent />
                            </div>
                    
            </object>
        </div>
    );
};

export default PdfViewer;
