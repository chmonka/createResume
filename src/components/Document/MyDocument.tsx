import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import { useRef, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { useFormContext } from 'react-hook-form'
import PlaceIcon from '@mui/icons-material/Place'

const MyDocument = () => {
  const { watch } = useFormContext()
  const object = watch()
  console.log(object)

  const date = new Date().getFullYear()
  const pdfRef = useRef(null)
  const downloadPDF = () => {
    const input = pdfRef.current
    if (input) {
      html2canvas(input).then(canvas => {
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF('portrait', 'pt', 'a4')
        pdf.addImage(imgData, 'SVG', 0, 0, 600, 850)
        pdf.save('shipping_label.pdf')
      })
    } else {
      console.error('PDF ref is null')
    }
  }

  console.log(object.socials)

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
              padding: '10px'
            }}>
            <Box>
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Box sx={{ width: '150px', height: '150px', backgroundColor: 'white', borderRadius: '20px' }}></Box>
                </Box>
                <Typography sx={{ color: 'white' }} variant="h6">{object.middleName.toUpperCase()} {object.firstName.toUpperCase()} {object.lastName.toUpperCase()}</Typography>
                <Box>
                  <Typography sx={{ color: 'white' }} variant="h6">Должность: {object.desiredPosition}</Typography>
                  <Typography sx={{ color: 'white' }} variant="h6">Возраст: {date - object.year}</Typography>
                  <Typography sx={{ color: 'white' }} variant="h6">Зароботная плата: {object.money} {object.currency}</Typography>
                </Box>
                <Box>
                  <PlaceIcon sx={{ color: 'white' }} />
                  <Typography>{object.city}</Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  backgroundColor: '#0567e3',
                  padding: '10px',
                  color: '#FFFFFF',
                }}>Контакты:</Typography>
              {object.socials.map((item: { icon: string, link: string }, index: number) => {
                return (<Box display={"flex"} flexDirection={"row"} gap={"20px"}>
                  <Typography color={'white'}>{item.icon}</Typography>
                  <Typography color={'white'}>{item.link}</Typography>
                </Box>)})}
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
          <Box>
            <Box>
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>

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
