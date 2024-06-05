import { Box, Typography } from "@mui/material"
import { useLocation } from "react-router-dom";


function FormViewSecond() {

    const { state } = useLocation();
    if (!state) {

        return  <Box sx={{display:'flex', alignItems:'center', justifyContent:'center' , width:'100%'}}>
        <Typography variant='body1'>Форма не заполнена</Typography>
    </Box>
    }
    return (
        <Box sx={{
            width: '100%',
            padding: '10px'
        }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: "10px" }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {state.jobs && state.jobs.length > 0 &&
                        <Typography variant='subtitle2'
                            sx={{
                                border: '1px solid #39393B',
                                padding: '5px'
                            }}>Опыт работы</Typography>
                    }

                    {state.jobs.map((item: { postJob: string, nameCompany: string, monthStart: string, yearStart: string, monthEnd: string, yearEnd: string }, index: number) => {
                        return (
                            <Box key={index}>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between'
                                    }}>
                                    <Typography variant='body2'>{`${item.monthStart} ${item.yearStart} - ${item.monthEnd} ${item.yearEnd}`} </Typography>
                                    <Typography variant='body1' sx={{ fontWeight: 'bold' }}>{item.nameCompany}</Typography>
                                    <Typography variant='body2'>{item.postJob}</Typography>
                                </Box>
                            </Box>
                        )
                    })}
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {state.education && state.education.length > 0 &&
                        <Typography variant='subtitle2'
                            sx={{
                                border: '1px solid #39393B',
                                padding: '5px'
                            }}>Образование</Typography>
                    }
                    {state.education.map((item: { institution: string, levelEducation: string, faculty: string, speciality: string, yearEndEducation: string }, index: number) => {
                        return (
                            <Box key={index}>
                                <Box >
                                    <Typography variant='body1' sx={{ fontWeight: 'bold' }}>{item.levelEducation}: {item.institution}</Typography>
                                    <Typography variant='body2'>Год окончания: {item.yearEndEducation}</Typography>
                                    <Typography variant='body2'>Факультет: {item.faculty}</Typography>
                                    <Typography variant='body2'>Специальность: {item.speciality}</Typography>
                                </Box>
                            </Box>
                        )
                    })}
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <Typography variant='subtitle2'
                        sx={{
                            border: '1px solid #39393B', padding: '5px',
                            width: '100%'
                        }}>Курсы</Typography>
                    {state.trainingCourses.map((item: { yearEnd: string, nameCompany: string, nameCourse: string }, index: number) => {
                        return (
                            <Box display={'flex'} flexDirection={'column'} gap={'10px'} key={index}>
                                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
                                    <Box sx={{ display: "flex", flexDirection: 'column' }} >
                                        <Typography variant='body1' sx={{ fontWeight: 'bold' }}>{item.nameCourse}</Typography>
                                        <Typography variant='body2'>{item.nameCompany}</Typography>
                                    </Box>
                                    <Typography>{item.yearEnd}</Typography>
                                </Box>
                            </Box>
                        )
                    })}
                </Box>
            </Box>
        </Box>
    )
}

export default FormViewSecond