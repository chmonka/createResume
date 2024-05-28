import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import { useRef } from 'react'
import { Box } from '@mui/material'
import { useFormContext } from 'react-hook-form'
import FormViewMain from './FormsView/FormViewMain/FormViewMain'
import FormViewSecond from './FormsView/FormViewSecond/FormViewSecond'
import CustomButton from '../Button/CustomButton'

const MyDocument = () => {
  const { watch } = useFormContext()
  const pdfRef = useRef(null)

  const downloadPDF = () => {
    const input = pdfRef.current
    if (input) {
      html2canvas(input, {
        scale: 3,
        useCORS: true,
        allowTaint: true,
        logging: true,
      }).then(canvas => {
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth * ratio + 5, imgHeight * ratio );
        pdf.save('resume.pdf')
      })
    } else {
      console.error('PDF ref is null')
    }
  }

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '768px',
      height:'100vh',
      border: '1px solid #023e8a',
      borderRadius: '5px',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      position: 'sticky',
      top: 0
    }}>
      <Box sx={{
        display: 'flex',
        padding: '10px 24px',
        height: '54px',
        width: '100%',
        borderBottom: '1px solid black'
      }}>
        <CustomButton innerText="Download" onClick={downloadPDF} sx={{ padding: '20px' }} />
      </Box>
      <Box sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Box sx={{
          width: '500px',
          height:'720px'
        }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              border: '1px solid #023e8a',
            }}>
            <Box ref={pdfRef} 
              sx={{
                display: 'flex',
                width: '100%',
                height: '100%',
                flexDirection: 'row'
              }}>
              <FormViewMain />
              <FormViewSecond />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default MyDocument