import { Box, Rating, Typography, styled } from "@mui/material"
import PlaceIcon from '@mui/icons-material/Place'
import { useFormContext } from "react-hook-form"
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';
function FormViewMain() {
    const date = new Date().getFullYear()
    const { watch } = useFormContext()
    const object = watch()

    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#FFFFFF',
        },
        '& .MuiRating-iconHover': {
            color: '#FFFFFF',
        },
    });

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#0567e3',
            justifyContent: 'flex-start',
            padding: '10px',
            width: '300px',
            maxWidth: '100%'

        }}>
            <Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ width: '100px', height: '100px', backgroundColor: 'white', borderRadius: '20px' }}></Box>
                </Box>
                <Typography sx={{ color: 'white', fontSize: '12px' }} variant="h6">{object.middleName.toUpperCase()} {object.firstName.toUpperCase()} {object.lastName.toUpperCase()}</Typography>
                <Box>
                    <Typography sx={{ color: 'white', fontSize: '12px' }} variant="h6">Должность: {object.desiredPosition}</Typography>
                    <Typography sx={{ color: 'white', fontSize: '12px' }} variant="h6">Возраст: {date - object.year}</Typography>
                    <Typography sx={{ color: 'white', fontSize: '12px' }} variant="h6">Зароботная плата: {object.money} {object.currency}</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <PlaceIcon sx={{ color: 'white' }} />
                    <Typography sx={{ color: 'white', fontSize: '12px' }}>{object.city}</Typography>
                </Box>
            </Box>
            <Box>
                <Typography
                    sx={{
                        backgroundColor: '#0567e3',
                        color: '#FFFFFF',
                        fontSize: '12px',
                        fontWeight: 'bold'
                    }}>Контакты:</Typography>
                {object.socials.map((item: { icon: string, link: string }, index: number) => {
                    return (<Box display={"flex"} flexDirection={"row"} gap={"20px"} key={index}>
                        <Typography sx={{ fontSize: '12px', color: '#FFFFFF' }}>{item.icon}</Typography>
                        <Typography sx={{ fontSize: '12px', color: '#FFFFFF' }}>{item.link}</Typography>
                    </Box>)
                })}
            </Box>
            <Box display={"flex"} flexDirection={'column'} gap={'10px'}>
                <Typography
                    sx={{
                        backgroundColor: '#0567e3',
                        color: '#FFFFFF',
                        fontSize: '12px',
                        fontWeight: 'bold'
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
                    const levelLangValue = levelLang[item.levelLanguage as keyof typeof levelLang]
                    return (
                        <Box key={index} >
                            <Box display={"flex"} alignItems={'center'} justifyContent={'space-between'}>
                                <Typography component="legend" sx={{ fontSize: '12px', color: '#FFFFFF' }}>{item.nameLanguage}</Typography>
                                <StyledRating
                                    name="read-only"
                                    defaultValue={levelLangValue != undefined ? levelLangValue : 0}
                                    precision={0.5}
                                    icon={<CircleIcon style={{ fontSize: 10 }} />}
                                    emptyIcon={<CircleOutlinedIcon style={{ fontSize: 10 }} />} />
                            </Box>
                            <Typography component="legend" sx={{ fontSize: '10px', color: '#FFFFFF' }}>{item.levelLanguage}</Typography>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}

export default FormViewMain