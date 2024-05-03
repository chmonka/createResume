import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import { useRef } from 'react'
import { Box, Grid, Typography } from '@mui/material'

const MyDocument = () => {
  const pdfRef = useRef(null);

  const downloadPDF = () => {
    const input = pdfRef.current;
    if (input) {
      html2canvas(input, {
        width: 1000,
        height: 1000,
      }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF("portrait", "pt", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =  pdf.internal.pageSize.getWidth()
        pdf.addImage(imgData, "SVG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("shipping_label.pdf");
      });
    } else {
      console.error('PDF ref is null');
    }
  };

  return (
    <Box sx={{ display: 'flex'}}>
      <Grid  ref={pdfRef}>
        <Box sx={{ display: 'flex' }}>
            <Typography>Контакты</Typography>

        </Box>
      </Grid>
      <Box>
        <button onClick={downloadPDF} style={{ fontSize: '10px' }}>Download</button>
      </Box>
    </Box>
  );
};

export default MyDocument;



