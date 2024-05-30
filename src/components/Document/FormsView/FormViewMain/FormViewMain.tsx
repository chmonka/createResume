import { Box, Rating, Typography, styled } from "@mui/material"
import PlaceIcon from '@mui/icons-material/Place'
import { useFormContext } from "react-hook-form"
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import { useLocation } from "react-router-dom";
function FormViewMain() {
    const date = new Date().getFullYear()
    const { state } = useLocation();


    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#FFFFFF',
        },
        '& .MuiRating-iconHover': {
            color: '#FFFFFF',
        },
    });
    if (!state) {
        return  <Typography variant='body1'>{state}</Typography>;
    }

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
                <Typography sx={{ color: 'white', fontSize: '12px' }} variant="h6">{state.middleName.toUpperCase()} {state.firstName.toUpperCase()} {state.lastName.toUpperCase()}</Typography>
                <Box>
                    <Typography sx={{ color: 'white', fontSize: '12px' }} variant="h6">Должность: {state.desiredPosition}</Typography>
                    <Typography sx={{ color: 'white', fontSize: '12px' }} variant="h6">Возраст: {date - state.year}</Typography>
                    <Typography sx={{ color: 'white', fontSize: '12px' }} variant="h6">Зароботная плата: {state.money} {state.currency}</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <PlaceIcon sx={{ color: 'white' }} />
                    <Typography sx={{ color: 'white', fontSize: '12px' }}>{state.city}</Typography>
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
                {state.socials.map((item: { icon: string, link: string }, index: number) => {
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
                {state.languages.map((item: { nameLanguage: string, levelLanguage: string }, index: number) => {
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