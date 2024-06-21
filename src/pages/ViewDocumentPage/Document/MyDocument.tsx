import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import { useEffect, useRef, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import TemplateOne from './Templates/TemplateOne/TemplateOne'
import TemplateSecond from './Templates/TemplateSecond/TemplateSecond'
import TemplateThree from './Templates/TemplateThree/TemplateThree'
import CustomButton from '../../../components/Button/CustomButton'
import CustomContainer from '../../../components/Container/CustomContainer'

const MyDocument = () => {

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
                pdf.addImage(imgData, 'PNG', 0, 0, imgWidth * ratio + 5, imgHeight * ratio);
                pdf.save('resume.pdf')
            })
        } else {
            console.error('PDF ref is null')
        }
    }



    const navigate = useNavigate()
    const [template, setTemplate] = useState(() => <TemplateOne />)

    function setTemplateFirst() {
        setTemplate(<TemplateOne/>)
    }

    function setTemplateSecond() {
        setTemplate(<TemplateSecond/>)
    }

    function setTemplateThree() {
        setTemplate(<TemplateThree/>)
    }

    const backToPageForm = () => {
        navigate('/resumeform')
    }

    return (
        <CustomContainer>
            <Box sx={{
                display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'row'
            }}>
                <Box>
                    <Box sx={{ display: 'flex', gap: '20px' }}>
                        <CustomButton innerText="Назад" onClick={backToPageForm} sx={{ padding: '7px' }} />
                        <CustomButton innerText="Скачать PDF" onClick={downloadPDF} sx={{ padding: '7px' }} />
                    </Box>
                    <Box sx={{ display: 'flex', gap: '20px', flexDirection: 'column', paddingTop: '20px' }}>
                        <Typography variant='h2'>Шаблоны документа</Typography>
                        <Box sx={{ display: 'flex', gap: '10px' }}>
                            <Box onClick={setTemplateFirst}
                                sx={{
                                    cursor: 'pointer',
                                    width: '260px',
                                    height: '350px',
                                    border: '1px solid black',
                                    borderRadius: '10px',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}>
                                <img src='src/pages/ViewDocumentPage/Document/Templates/Img/themeOne.jpg'
                                    style={{ width: '100%', height: '100%', borderRadius: '10px', }} />
                            </Box>
                            <Box onClick={setTemplateSecond} sx={{
                                cursor: 'pointer',
                                width: '260px',
                                height: '350px',
                                border: '1px solid black',
                                borderRadius: '10px',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}>
                                <img src='src/pages/ViewDocumentPage/Document/Templates/Img/themeTwo.jpg'
                                    style={{ width: '100%', height: '100%', borderRadius: '10px', }} />
                            </Box>
                            <Box onClick={setTemplateThree} sx={{
                                cursor: 'pointer',
                                width: '260px',
                                height: '350px',
                                border: '1px solid black',
                                borderRadius: '10px',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}>
                                <img src='src/pages/ViewDocumentPage/Document/Templates/Img/themeThree.jpg'
                                    style={{ width: '100%', height: '100%', borderRadius: '10px', }} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '568px',
                        height: '100vh',
                        border: '1px solid #023e8a',
                        borderRadius: '5px',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        position: 'sticky',
                        top: 0
                    }}>

                        <Box sx={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Box sx={{
                                width: '500px',
                                height: '720px'
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
                                        {template}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </CustomContainer >
    )
}

export default MyDocument