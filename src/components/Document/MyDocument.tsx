import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import { useRef } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
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
        const pdfHeight = pdf.internal.pageSize.getWidth()
        pdf.addImage(imgData, "SVG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("shipping_label.pdf");
      });
    } else {
      console.error('PDF ref is null');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }} >
      <Box sx={{
        position: 'relative', display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
        alignContent: 'center',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        backgroundColor:'#FFFFFF'
      }}>
        <Grid ref={pdfRef} sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection:'column',
          width: '100%',
          height: '100%',
          minWidth: '795px',
          minHeight: '1000px',
          maxWidth: '795px',
          maxHeight: '1000px',
          borderRadius: '4px',
          background: 'var(--white)',
          boxShadow: '0 0 32px var(--blue3_07)',
          overflow: 'hidden'
        }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ color: '#000' }}>Контакты</Typography>
            <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
              <LocalPhoneIcon />
              <Typography sx={{ color: '#000' }}>Контакты</Typography>
            </Grid>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ color: '#000' }}>Контакты</Typography>
            <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
              <LocalPhoneIcon />
              <Typography sx={{ color: '#000' }}>Контакты</Typography>
            </Grid>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ color: '#000' }}>Контакты</Typography>
            <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
              <LocalPhoneIcon />
              <Typography sx={{ color: '#000' }}>Контакты</Typography>
            </Grid>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ color: '#000' }}>Контакты</Typography>
            <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
              <LocalPhoneIcon />
              <Typography sx={{ color: '#000' }}>Контакты</Typography>
            </Grid>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ color: '#000' }}>Контакты</Typography>
            <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
              <LocalPhoneIcon />
              <Typography sx={{ color: '#000' }}>Контакты</Typography>
            </Grid>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ color: '#000' }}>Контакты</Typography>
            <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
              <LocalPhoneIcon />
              <Typography sx={{ color: '#000' }}>Контакты</Typography>
            </Grid>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ color: '#000' }}>Контакты</Typography>
            <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
              <LocalPhoneIcon />
              <Typography sx={{ color: '#000' }}>Контакты</Typography>
            </Grid>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ color: '#000' }}>Контакты</Typography>
            <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
              <LocalPhoneIcon />
              <Typography sx={{ color: '#000' }}>Контакты</Typography>
            </Grid>
          </Box>
          
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ color: '#000' }}>Контакты</Typography>
            <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
              <LocalPhoneIcon />
              <Typography sx={{ color: '#000' }}>Контакты</Typography>
            </Grid>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ color: '#000' }}>Контакты</Typography>
            <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
              <LocalPhoneIcon />
              <Typography sx={{ color: '#000' }}>Контакты</Typography>
            </Grid>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ color: '#000' }}>Контакты</Typography>
            <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
              <LocalPhoneIcon />
              <Typography sx={{ color: '#000' }}>Контакты</Typography>
            </Grid>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ color: '#000' }}>Контакты</Typography>
            <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
              <LocalPhoneIcon />
              <Typography sx={{ color: '#000' }}>Контакты</Typography>
            </Grid>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ color: '#000' }}>Контакты</Typography>
            <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
              <LocalPhoneIcon />
              <Typography sx={{ color: '#000' }}>Контакты</Typography>
            </Grid>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ color: '#000' }}>Контакты</Typography>
            <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
              <LocalPhoneIcon />
              <Typography sx={{ color: '#000' }}>Контакты</Typography>
            </Grid>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ color: '#000' }}>Контакты</Typography>
            <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
              <LocalPhoneIcon />
              <Typography sx={{ color: '#000' }}>Контакты</Typography>
            </Grid>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ color: '#000' }}>Контакты</Typography>
            <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
              <LocalPhoneIcon />
              <Typography sx={{ color: '#000' }}>Контакты</Typography>
            </Grid>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ color: '#000' }}>Контакты</Typography>
            <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
              <LocalPhoneIcon />
              <Typography sx={{ color: '#000' }}>Контакты</Typography>
            </Grid>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ color: '#000' }}>Контакты</Typography>
            <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
              <LocalPhoneIcon />
              <Typography sx={{ color: '#000' }}>Контакты</Typography>
            </Grid>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ color: '#000' }}>Контакты</Typography>
            <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
              <LocalPhoneIcon />
              <Typography sx={{ color: '#000' }}>Контакты</Typography>
            </Grid>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ color: '#000' }}>Контакты</Typography>
            <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
              <LocalPhoneIcon />
              <Typography sx={{ color: '#000' }}>Контакты</Typography>
            </Grid>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ color: '#000' }}>Контакты</Typography>
            <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
              <LocalPhoneIcon />
              <Typography sx={{ color: '#000' }}>Контакты</Typography>
            </Grid>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ color: '#000' }}>Контакты</Typography>
            <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
              <LocalPhoneIcon />
              <Typography sx={{ color: '#000' }}>Контакты</Typography>
            </Grid>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ color: '#000' }}>Контакты</Typography>
            <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
              <LocalPhoneIcon />
              <Typography sx={{ color: '#000' }}>Контакты</Typography>
            </Grid>
          </Box> 
        </Grid>
      </Box>

      <Box>
        <button onClick={downloadPDF} style={{ fontSize: '10px' }}>Download</button>
      </Box>
    </Box >
  );
};

export default MyDocument;



