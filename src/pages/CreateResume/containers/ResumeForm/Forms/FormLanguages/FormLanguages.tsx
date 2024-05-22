import { Box, Typography } from "@mui/material"
import CustomButton from "../../../../../../components/Button/CustomButton"


function FormLanguages() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                border: '2px solid #e1e5f2',
                borderRadius: '20px',
            }}>
            <Typography sx={{ borderBottom: '2px solid #e1e5f2', padding: '20px' }}>Знание языков</Typography>
            <Box
                sx={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Box sx={{
                    display: 'flex',
                    gap: '20px',
                    flexDirection: 'column'
                }}>
                </Box>
                <CustomButton innerText="Добавить язык" onClick={() => {console.log(1)}}/>
            </Box>
        </Box>
    )
}

export default FormLanguages