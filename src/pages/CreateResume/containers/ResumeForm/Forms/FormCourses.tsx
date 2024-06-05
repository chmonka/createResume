import { Accordion, AccordionDetails, AccordionSummary, Box, IconButton, Typography } from "@mui/material"
import CustomButton from "../../../../../components/Button/CustomButton"
import { useFieldArray, useFormContext } from "react-hook-form";
import { Candidate } from "../candidate";
import SelectForm from "../../../../../components/SelectForm/SelectForm";
import MyTextField from "../../../../../components/TextField/MyTextField";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import DeleteIcon from '@mui/icons-material/Delete';
function FormCourses() {
    const methods = useFormContext<Candidate>()
    const { control, setValue, watch } = methods
    const yearArray: number[] = Array.from({ length: 21 }, (_, index) => 2000 + index)
    const { fields: trainingCourses, append: appendCourses, remove: removeCourses } = useFieldArray<Candidate>({
        name: 'trainingCourses',
        control: control,
    });

    const object = watch('trainingCourses')

    const coursesElement = trainingCourses.map((field, index) => (
        <Accordion
            key={index}>
            <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row-reverse', width: '100%' }}>
                    <IconButton onClick={() => removeCourses(index)}>
                        <DeleteIcon />
                    </IconButton>
                    <Typography variant={'h6'}>{object[index].nameCourse}</Typography>
                </Box>
            </AccordionSummary>
            <AccordionDetails>
                <Box
                    sx={{ display: 'flex', gap: '20px', flexDirection: 'column' }}
                >
                    <MyTextField label={'Название'} onChange={(e) => {
                        setValue(`trainingCourses.${index}.nameCourse`, e.target.value)
                    }} />
                    <MyTextField label={'Название организации'} onChange={(e) => {
                        setValue(`trainingCourses.${index}.nameCompany`, e.target.value)
                    }} />
                    <SelectForm array={yearArray || []} value={object[index].yearEnd} label={'Год окончания'} onChange={(e) => {
                        setValue(`trainingCourses.${index}.yearEnd`, e.target.value)
                    }} />
                </Box>
            </AccordionDetails>
        </Accordion>
    ))

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                border: '2px solid #e1e5f2',
                borderRadius: '5px',
            }}>

            <Box sx={{ width: '100%', borderBottom: '2px solid #ccdbfd'}}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding:'20px 10px', gap: '20px' }}>
                    <AutoGraphIcon sx={{ fontSize: '40px' }} />
                    <Typography variant='h2'>Курсы повышения квалификации</Typography>
                </Box>
            </Box>
            <Box
                sx={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Box sx={{
                    display: 'flex',
                    gap: '20px',
                    flexDirection: 'column'
                }}>
                    {coursesElement}
                </Box>
                <CustomButton innerText="Добавить Курс" onClick={() => appendCourses({
                    yearEnd: '',
                    nameCompany: '',
                    nameCourse: '',
                })} />
            </Box>
        </Box>
    )
}

export default FormCourses