import { Accordion, AccordionDetails, AccordionSummary, Box, IconButton, Typography } from "@mui/material"
import CustomButton from "../../../../../../components/Button/CustomButton"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import { Candidate } from "../../candidate";
import { useFieldArray, useFormContext } from "react-hook-form";
import MyTextField from "../../../../../../components/TextField/MyTextField";
import SelectForm from "../../../../../../components/SelectForm/SelectForm";
import SchoolIcon from '@mui/icons-material/School';
import DeleteIcon from '@mui/icons-material/Delete';
function FormEducations() {


    const methods = useFormContext<Candidate>()
    const { control, setValue, watch } = methods
    const { fields: education, append: appendEducation, remove: removeEducation } = useFieldArray<Candidate>({
        name: 'education',
        control: control,
    });
    const yearArray: number[] = Array.from({ length: 21 }, (_, index) => 2000 + index)
    const object = watch('education')
    const formEducation = ['Очная', 'Очно-заочная', 'Заочная', 'Дистанционная']
    const educationLevel = [
        'Основное общее',
        'Среднее общее', 'Среднее профессиональное',
        'Высшее — бакалавриат',
        'Высшее — специалитет, магистратура',
        'Высшее — подготовка кадров высшей квалификации.']

    const educationElement =
        education.map((field, index) => (
            <Accordion
                key={index}
                sx={{
                    width: '100%'
                }}>
                <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row-reverse', width: '100%' }}>
                        <IconButton onClick={() => removeEducation(index)}>
                            <DeleteIcon />
                        </IconButton>
                        <Typography variant={'h6'}>{object[index].institution}</Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                    }}>
                    <SelectForm array={educationLevel} label={'Уровень образования'} onChange={(e) => {
                        setValue(`education.${index}.levelEducation`, e.target.value)
                    }} />
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '20px'
                        }}>
                        <SelectForm value={object[index].formEducation} array={formEducation || ''} label={'Форма обучения'} onChange={(e) => {
                            setValue(`education.${index}.formEducation`, e.target.value)
                        }} />
                        <SelectForm value={object[index].yearEndEducation} array={yearArray || ''} label={'Год окончания'} onChange={(e) => {
                            setValue(`education.${index}.yearEndEducation`, e.target.value)
                        }} />
                    </Box>
                    <MyTextField label={'Название учебного заведения'} onChange={(e) => {
                        setValue(`education.${index}.institution`, e.target.value)
                    }} />
                    <MyTextField label={'Факультет'} onChange={(e) => {
                        setValue(`education.${index}.faculty`, e.target.value)
                    }} />
                    <MyTextField label={'Специальность'} onChange={(e) => {
                        setValue(`education.${index}.speciality`, e.target.value)
                    }} />
                </AccordionDetails>
            </Accordion >
        ))



    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                border: '2px solid #ccdbfd',
                borderRadius: '5px',
            }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', borderBottom: '2px solid #ccdbfd', padding: '10px 20px', gap: '20px' }}>
                <SchoolIcon sx={{ fontSize: '40px' }} />
                <Typography variant='h2'>Oбразование</Typography>
            </Box>

            <Box
                sx={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Box sx={{
                    display: 'flex',
                    gap: '20px',
                    flexDirection: 'column'
                }}>
                    {educationElement}
                </Box>
                <CustomButton innerText="Добавить образование" onClick={() => appendEducation({
                    institution: '',
                    levelEducation: '',
                    formEducation: '',
                    faculty: '',
                    speciality: '',
                    yearEndEducation: ''
                })} />
            </Box>
        </Box>
    )
}

export default FormEducations