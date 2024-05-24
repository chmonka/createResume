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
                {object.languages.map((item: { nameLanguage: string, levelLanguage: string }, index: number) => {
                    const levelLang = {
                        'A1-начальный': 0,
                        'A2-элементарный': 1,
                        'B1-пороговый': 2,
                        'B2-промежуточный': 3,
                        'C1-продвинутый': 4,
                        'C2-совершенный': 5
                    }
                    const levelLangValue= levelLang[item.levelLanguage as keyof typeof levelLang]
                    return (<Box display={"flex"} flexDirection={"row"} gap={"20px"} key={index} >
                        <Typography component="legend">{item.nameLanguage}</Typography>
                        <Rating name="read-only" readOnly value={levelLangValue !=undefined? levelLangValue : 0} />
                    </Box>)
                })}
            </Box>
        </Box>
    )
}

export default FormViewMain