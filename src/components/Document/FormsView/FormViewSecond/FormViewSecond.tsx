import { Box, Typography } from "@mui/material"
import { useFormContext } from "react-hook-form"


function FormViewSecond() {

    const { watch } = useFormContext()
    const object = watch()
    return (
        <Box sx={{
            justifyContent: 'center',
            width: '100%',
            padding: '20px'
        }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: "20px" }}>
                <Box>
                    <Typography variant='h6' sx={{ border: '1px solid #0567e3', padding: '10px' }}>Опыт работы</Typography>
                    {object.jobs.map((item: { postJob: string, nameCompany: string, monthStart: string, yearStart: string, monthEnd: string, yearEnd: string }, index: number) => {
                        return (
                            <Box key={index}>
                                <Typography>{`${item.monthStart} ${item.yearStart} - ${item.monthEnd} ${item.yearEnd}`} </Typography>
                                <Typography>Организация: {item.nameCompany}</Typography>
                                <Typography>Должность: {item.postJob}</Typography>
                            </Box>
                        )
                    })}
                </Box>
                <Box>
                    <Typography variant='h6' sx={{ border: '1px solid #0567e3', padding: '10px' }}>Образование</Typography>
                    {object.education.map((item: { institution: string, levelEducation: string, faculty: string, speciality: string, yearEndEducation: string }, index: number) => {
                        return (
                            <Box key={index}>
                                <Typography>Год окончания: {item.yearEndEducation}</Typography>
                                <Typography>{item.levelEducation}:{item.institution}</Typography>
                                <Typography>Факультет: {item.faculty}</Typography>
                                <Typography>Специальность: {item.speciality}</Typography>
                            </Box>)
                    })}

                </Box>
                <Box>
                    <Typography variant='h6' sx={{ border: '1px solid #0567e3', padding: '10px' }}>Курсы</Typography>
                    {object.trainingCourses.map((item: { yearEnd: string, nameCompany: string, nameCourse: string }, index: number) => {
                        return (
                            <Box key={index}>
                                <Typography>Год окончания: {item.yearEnd}</Typography>
                                <Typography>Название:{item.nameCourse}</Typography>
                                <Typography>Организация: {item.nameCompany}</Typography>
                            </Box>
                        )
                    })}
                </Box>
            </Box>
        </Box>
    )
}

export default FormViewSecond