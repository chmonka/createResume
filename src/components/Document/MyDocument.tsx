import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import { useRef } from 'react'
import { Box, Typography } from '@mui/material'
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
        border: '1px solid black',
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
              paddingTop: '10px',
            }}>
            <Box
              sx={{
                paddingLeft: '10px',

              }}>
              <Typography
                sx={{
                  backgroundColor: '#0567e3',
                  padding: '10px',
                  color: '#FFFFFF',
                }}>Контакты:</Typography>
              <Box>
                <Typography sx={{ color: 'white' }}>{object.email} {object.phoneNumber}</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                padding: '10px',
              }}>
              <Typography sx={{ color: 'white' }}>Гражданство:</Typography>
              <Box>
                <Typography sx={{ color: 'white' }}>{object.citizenship}</Typography>
              </Box>
            </Box>
            <Box sx={{
              padding: '10px',
            }}>
              <Typography sx={{ color: 'white' }}>Желаемая зарплата:</Typography>
              <Box>
                <Typography sx={{ color: 'white' }}>{object.money} {object.currency}</Typography>
              </Box>
            </Box>
            <Box sx={{
              padding: '10px',
            }}>
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
  )
}

export default MyDocument
