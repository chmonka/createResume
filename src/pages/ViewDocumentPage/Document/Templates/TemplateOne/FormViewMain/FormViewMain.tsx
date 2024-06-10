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
        return <Typography variant='body1'>{state}</Typography>;
    }

    console.log(state)

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#0567e3',
            justifyContent: 'flex-start',
            width: '300px',
            maxWidth: '100%',
            gap: '20px'
        }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px' }}>
                {state.photoProfile !== '' &&
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box sx={{ width: '100px', height: '100px', backgroundColor: 'white', borderRadius: '20px' }}>
                            <img src={state.photoProfile} style={{ width: '100%', height: '100%', borderRadius: '20px' }} />
                        </Box>
                    </Box>
                }
                <Typography variant="body2" sx={{ color: "#FFFFFF" }}>{state.middleName.toUpperCase()} {state.firstName.toUpperCase()} {state.lastName.toUpperCase()}</Typography>
                <Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
                    {state.desiredPosition && <Typography variant="body2" sx={{ color: "#FFFFFF" }}>Должность: {state.desiredPosition}</Typography>}
                    {state.year && <Typography variant="body2" sx={{ color: "#FFFFFF" }}>Возраст: {date - state.year}</Typography>}
                    {state.interesting && <Typography variant="body2" sx={{ color: "#FFFFFF" }}>Занятость: {state.interesting}</Typography>}
                    {state.money !== 0 && <Typography variant="body2" sx={{ color: "#FFFFFF" }}>Желаемая зарплата: {state.money} рублей</Typography>}
                </Box>
                {state.city && (
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <PlaceIcon sx={{ color: 'white', fontSize: '15px' }} />
                        <Typography variant="body2" sx={{ color: 'white' }}>{state.city}</Typography>
                    </Box>
                )}
            </Box>
            <Box sx={{ padding: '10px' }}>
                {state.socials && state.socials.length > 0 &&
                    <Typography variant="subtitle2"
                        sx={{
                            color: '#FFFFFF',
                            fontWeight: 'bold'
                        }}>Контакты:</Typography>
                }

                {state.socials && state.socials.length > 0 && state.socials.map((item: { name: string, link: string }, index: number) => {
                    return (
                        <Box key={index}>
                            <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                                <Typography variant="body2" sx={{ color: '#FFFFFF' }}>{item.name}</Typography>
                                <Typography variant="body2" sx={{ color: '#FFFFFF' }}>{item.link}</Typography>
                            </Box>
                        </Box>
                    )
                })}

            </Box>
            <Box sx={{ padding: '10px' }}>
                {state.languages && state.languages.length > 0 && (
                    <Typography variant="subtitle2"
                        sx={{
                            color: '#FFFFFF',
                            fontWeight: 'bold'
                        }}>Знание языков:</Typography>
                )}
                <Box>
                    {state.languages && state.languages.length > 0 && state.languages.map((item: { nameLanguage: string, levelLanguage: string }, index: number) => {
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
                            <Box>
                                <Box key={index} >
                                    <Box display={"flex"} alignItems={'center'} justifyContent={'space-between'}>
                                        <Typography variant="body1" sx={{ color: '#FFFFFF' }}>{item.nameLanguage}</Typography>
                                        <StyledRating
                                            name="read-only"
                                            defaultValue={levelLangValue != undefined ? levelLangValue : 0}
                                            precision={0.5}
                                            icon={<CircleIcon style={{ fontSize: 10 }} />}
                                            emptyIcon={<CircleOutlinedIcon style={{ fontSize: 10 }} />} />
                                    </Box>
                                    <Typography variant="body2" sx={{ fontSize: '10px', color: '#FFFFFF' }}>{item.levelLanguage}</Typography>
                                </Box>
                            </Box>
                        )
                    })}
                </Box>
            </Box>
        </Box >

    )
}

export default FormViewMain