import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdfFile from "../../Assets/amanda-havens-resume.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const calculateScale = () => {
    const aspectRatio = 0.75; // Assuming 4:3 aspect ratio for the PDF
    const pageWidth = width > 786 ? 786 : width; // Limit width for smaller screens
    const pageHeight = pageWidth * aspectRatio;
    const scale = pageWidth / 800; // Adjust this scale factor as needed

    return { width: pageWidth, height: pageHeight, scale };
  };

  const { width: pageWidth, height: pageHeight, scale } = calculateScale();

  return (
    <div>
      <Container fluid className="resume-section">
      <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document
            file={pdfFile}
            className="d-flex justify-content-center"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page
              pageNumber={1}
              width={pageWidth}
              height={pageHeight}
              scale={scale}
            />
          </Document>
        </Row>
            <AiOutlineDownload />
      </Container>
    </div>
  );
}

export default ResumeNew;