import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import { useRef } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { useFormContext } from 'react-hook-form'

const MyDocument = () => {
  const { watch } = useFormContext()
  const object = watch()
  const date = new Date().getFullYear()

  console.log(date)


  const pdfRef = useRef(null)
  const downloadPDF = () => {
    const input = pdfRef.current
    if (input) {
      html2canvas(input).then(canvas => {
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF('portrait', 'pt', 'a4')
        // const pdfWidth = pdf.internal.pageSize.getWidth()
        // const pdfHeight = pdf.internal.pageSize.getWidth()
        pdf.addImage(imgData, 'SVG', 0, 0, 600, 50)
        pdf.save('shipping_label.pdf')
      })
    } else {
      console.error('PDF ref is null')
    }
  }

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
      border: '1px solid black',
      alignItems: 'center',
      minWidth: '795px',
      minHeight: '900px',
      maxWidth: '795px',
      maxHeight: '1000px',
      justifyContent: 'center',
      borderRadius: '4px',
    }}>
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          minWidth: '595px',
          minHeight: '800px',
          maxWidth: '595px',
          maxHeight: '800px',
          border: '1px solid black',
          borderRadius: '4px',
        }}>
        <Grid
          ref={pdfRef}
          sx={{
            display: 'flex',
          }}>
          <Box
            sx={{backgroundColor: '#023e8a',
              minHeight: '800px',
              maxHeight: '800px', width: '100%'}}>
            <Typography>Желаемая зарплата:</Typography>
            <Box>
              <Typography>{object.money} {object.currency}</Typography>
            </Box>

          </Box>
        </Grid>

      </Grid>
      <button onClick={downloadPDF} style={{ fontSize: '10px' }}>
        Download
      </button>

      {/*  <Box
        sx={{}}
      >
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            minWidth: '795px',
            minHeight: '1000px',
            maxWidth: '795px',
            maxHeight: '1000px',
            borderRadius: '4px',
            boxShadow: '0 0 32px white',
            overflow: 'hidden',
          }}>
          <Box
            sx={{
              textAlign: 'left',
              position: 'relative',
              margin: 'auto',
              width: '795px',
            }}>
            <Grid
              ref={pdfRef}
              sx={{
                width: '210mm',
                height: '297mm',
                // maxHeight: '297mm',
                display: 'flex',
              }}>
              <Box
                sx={{
                  padding: '20px',
                  height: '100%',
                  width: '40%',
                  position: 'relative',
                  backgroundColor: '#023e8a',
                }}>
                <Box>
                  <Typography>Желаемая зарплата:</Typography>
                  <Box>
                    <Typography>{object.money} {object.currency}</Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography>Гражданство:</Typography>
                  <Box>
                    <Typography>{object.citizenship}</Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  backgroundColor: '#03045e',
                  height: '100%',
                  width: '60%',
                  position: 'relative',
                  padding: '20px',
                }}
              >
                <Box>
                  <Typography
                    variant="h6">{object.middleName.toUpperCase()} {object.firstName.toUpperCase()} {object.lastName.toUpperCase()}</Typography>
                  <Typography variant="h6">{object.desiredPosition}</Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <PlaceIcon sx={{ color: 'rgba(255, 255, 255, 1)' }} />
                    <Typography>{object.city}</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Box>
      <Box>

      </Box>*/}
    </Box>
  )
}

export default MyDocument
