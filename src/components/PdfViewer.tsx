interface PdfViewerProps {
    fileUrl: string;
}
import pdfFile from "../assets/Croquis Velocidades LGR.pdf";

const PdfViewer: React.FC<PdfViewerProps> = () => {
    return (
        <div className="App">
            <object
                data={pdfFile}
                type="application/pdf"
                width="100%"
                height="950"
            >
                <p>
                    Alternative text - include a link{" "}
                    <a href="http://africau.edu/images/default/sample.pdf">
                        to the PDF!
                    </a>
                </p>
            </object>
        </div>
    );
};

export default PdfViewer;
