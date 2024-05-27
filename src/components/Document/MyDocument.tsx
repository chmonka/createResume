import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import { useRef, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { useFormContext } from 'react-hook-form'
import FormViewMain from './FormsView/FormViewMain/FormViewMain'
import FormViewSecond from './FormsView/FormViewSecond/FormViewSecond'


const MyDocument = () => {
  const { watch } = useFormContext()
  const object = watch()

  const date = new Date().getFullYear()
  const pdfRef = useRef(null)
  const downloadPDF = () => {
    const input = pdfRef.current
    if (input) {
      html2canvas(input, {
        scale: 2, 
        useCORS: true,
        allowTaint: true,
        logging: true,
      }).then(canvas => {
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF('portrait', 'px', 'a4')
        pdf.addImage(imgData, 'SVG', 0, 0, 450, 630)
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
      width: '700px',
      height: '800px',
      maxHeight: '100%',
      border: '1px solid #023e8a',
      borderRadius: '20px',
      justifyContent: 'center',
      alignItems: 'center',
      position:'sticky',
      top:0
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '600px',
        height: '700px',
        border: '1px solid #023e8a',
      }}>
        <Box
          ref={pdfRef}
          sx={{
            display: 'flex',
            width: '100%',
            height: '100%',
          }}>
          <Box sx={{
            display: 'flex',
            width: '40%',
          }}>
            <FormViewMain />
          </Box>
          <Box sx={{
            display: 'flex',
            width: '60%',
          }}>
            <FormViewSecond />
          </Box>
        </Box>
      </Box>
      <button onClick={downloadPDF} style={{ fontSize: '10px' }}>
        Download
      </button>
    </Box >
  )
}

export default MyDocument
