import { Box, Rating, Typography } from "@mui/material"
import PlaceIcon from '@mui/icons-material/Place'
import { useFormContext } from "react-hook-form"

function FormViewMain() {
    const date = new Date().getFullYear()
    const { watch } = useFormContext()
    const object = watch()
    return (
        <Box sx={{
            backgroundColor: '#0567e3',
            justifyContent: 'center',
            width: '100%',
            padding: '20px'
        }}>
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
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <PlaceIcon sx={{ color: 'white' }} />
                    <Typography sx={{ color: 'white' }}>{object.city}</Typography>
                </Box>
            </Box>
            <Box>
                <Typography
                    sx={{
                        backgroundColor: '#0567e3',
                        color: '#FFFFFF',
                    }}>Контакты:</Typography>
                {object.socials.map((item: { icon: string, link: string }, index: number) => {
                    return (<Box display={"flex"} flexDirection={"row"} gap={"20px"} key={index}>
                        <Typography color={'white'}>{item.icon}</Typography>
                        <Typography color={'white'}>{item.link}</Typography>
                    </Box>)
                })}
            </Box>
            <Box>
                <Typography
                    sx={{
                        backgroundColor: '#0567e3',
                        color: '#FFFFFF',
                    }}>Знание языков:</Typography>
                {object.languages.map((item: { nameLanguage: string, levelLanguage: string }, index:number) => {
                    let value = 0
                    if(item.levelLanguage === 'A1-начальный'){
                        value = 0
                    }if(item.levelLanguage === 'A2-элементарный'){
                        value = 1
                    }
                    return (<Box display={"flex"} flexDirection={"row"} gap={"20px"} key={index} >
                        <Typography component="legend">{item.nameLanguage}</Typography>
                        <Rating name="read-only" readOnly value={value} />
                    </Box>)
                })}

            </Box>
        </Box>
    )
}

export default FormViewMain