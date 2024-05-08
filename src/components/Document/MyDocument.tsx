import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import { useRef } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { useFormContext } from 'react-hook-form'
import PlaceIcon from '@mui/icons-material/Place'

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
        pdf.addImage(imgData, 'SVG', 0, 0, 600, 900)
        pdf.save('shipping_label.pdf')
      })
    } else {
      console.error('PDF ref is null')
    }
  }

  return (
    <Box sx={{
      display: 'flex',
      maxWidth: '100%',
      flexDirection: 'column',
      width: '800px',
      height: '1000px',
      maxHeight: '100%',
      border: '1px solid black',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '700px',
        height: '900px',
        border: '1px solid black'
      }}>
        <Box
          ref={pdfRef}
          sx={{
            display: 'flex',
            width: '100%',
            height: '100%',
          }}>
          <Box
            sx={{
              width: '40%',
              background: '#023e8a',
            }}>
            <Box
              sx={{
                paddingLeft:'10px'
              }}
            >
              <Typography sx={{ color: '023e8a',
                backgroundColor:'white',
              
               }}>Контакты:</Typography>
              <Box>
                <Typography sx={{ color: 'white' }}>{object.citizenship}</Typography>
              </Box>
            </Box>
            <Box>
              <Typography sx={{ color: 'white' }}>Гражданство:</Typography>
              <Box>
                <Typography sx={{ color: 'white' }}>{object.citizenship}</Typography>
              </Box>
            </Box>
            <Box>
              <Typography sx={{ color: 'white' }}>Желаемая зарплата:</Typography>
              <Box>
                <Typography sx={{ color: 'white' }}>{object.money} {object.currency}</Typography>
              </Box>
            </Box>
            <Box>
              <Typography sx={{ color: 'white' }}>Занятность:</Typography>
              <Box>
                <Typography sx={{ color: 'white' }}>{object.interesting} {object.schedule}</Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: '60%',
              padding: '10px',
            }}>
            <Box>
              <Typography
                variant="h6">{object.middleName.toUpperCase()} {object.firstName.toUpperCase()} {object.lastName.toUpperCase()}</Typography>
              <Typography variant="h6">{object.desiredPosition}</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <PlaceIcon />
                <Typography>{object.city}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>


      </Box>
      <button onClick={downloadPDF} style={{ fontSize: '10px' }}>
        Download
      </button>
    </Box>


    /* <Grid
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        minWidth: '600px',
        minHeight: '800px',
        maxWidth: '600px',
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
          sx={{
            backgroundColor: '#023e8a',
            height: '800px', width: '40%'
          }}>
 

        </Box>
        <Box
          sx={{
            backgroundColor: 'red',
            width: '100%',
            height: '800px',
          }}
        >
          <Typography>{object.money} {object.currency}</Typography>
        </Box>
      </Grid>

    </Grid>
    <button onClick={downloadPDF} style={{ fontSize: '10px' }}>
      Download
    </button> */

    /*  <Box
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

                </Box>
              </Grid>
            </Box>
          </Grid>
        </Box>
        <Box>
  
        </Box>*/
  )
}

export default MyDocument
