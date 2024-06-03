import { Box, Typography } from "@mui/material"
import { useFormContext } from "react-hook-form"
import { useLocation } from "react-router-dom";


function FormViewSecond() {

    const { state } = useLocation();
    if (!state) {
        return <Typography variant='body1'>State is null</Typography>;
    }
    return (
        <Box sx={{
            justifyContent: 'center',
            width: '100%',
            padding: '10px'
        }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: "10px" }}>

                {state.jobs.map((item: { postJob: string, nameCompany: string, monthStart: string, yearStart: string, monthEnd: string, yearEnd: string }, index: number) => {
                    return (
                        <Box>
                            <Typography variant='subtitle2' sx={{ border: '1px solid #0567e3', padding: '5px' }}>Опыт работы</Typography>
                            <Box key={index}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row-reverse',
                                    justifyContent: 'space-between'
                                }}>
                                <Typography sx={{ fontSize: '12px' }} >{`${item.monthStart} ${item.yearStart} - ${item.monthEnd} ${item.yearEnd}`} </Typography>
                                <Box>
                                    <Typography sx={{ fontSize: '12px' }}>Организация: {item.nameCompany}</Typography>
                                    <Typography sx={{ fontSize: '12px' }}>Должность: {item.postJob}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    )
                })}
                {state.education.map((item: { institution: string, levelEducation: string, faculty: string, speciality: string, yearEndEducation: string }, index: number) => {
                    return (
                        <Box>
                            <Typography variant='subtitle2' sx={{ border: '1px solid #0567e3', padding: '5px' }}>Образование</Typography>
                            <Box key={index}>
                                <Typography sx={{ fontSize: '12px' }}>Год окончания: {item.yearEndEducation}</Typography>
                                <Typography sx={{ fontSize: '12px' }}>{item.levelEducation}: {item.institution}</Typography>
                                <Typography sx={{ fontSize: '12px' }}>Факультет: {item.faculty}</Typography>
                                <Typography sx={{ fontSize: '12px' }}>Специальность: {item.speciality}</Typography>
                            </Box>
                        </Box>
                    )
                })}
                {state.trainingCourses.map((item: { yearEnd: string, nameCompany: string, nameCourse: string }, index: number) => {
                    return (
                        <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
                            <Typography variant='subtitle2'
                                sx={{
                                    border: '1px solid #0567e3', padding: '5px',
                                    width: '100%'
                                }}>Курсы</Typography>
                            <Box key={index} sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
                                <Box sx={{ display: "flex", flexDirection: 'column' }} >
                                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold' }}>{item.nameCourse}</Typography>
                                    <Typography sx={{ fontSize: '12px' }}>{item.nameCompany}</Typography>
                                </Box>
                                <Typography sx={{ fontSize: '12px', }}>{item.yearEnd}</Typography>
                            </Box>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}

export default FormViewSecond