import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material"
import CustomButton from "../../../../../../components/Button/CustomButton"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import { Candidate } from "../../candidate";
import { useFieldArray, useFormContext } from "react-hook-form";
import MyTextField from "../../../../../../components/TextField/MyTextField";
import SelectForm from "../../../../../../components/SelectForm/SelectForm";


function FormEducations() {


    const methods = useFormContext<Candidate>()
    const { control, setValue } = methods
    const { fields: education, append: appendEducation, remove: removeEducation } = useFieldArray<Candidate>({
        name: 'education',
        control: control,
    });
    const yearArray: number[] = Array.from({ length: 21 }, (_, index) => 2000 + index)

    const educationElement =
        education.map((field, index) => (
            <Accordion
                key={index}
                sx={{
                    width: '100%'
                }}>
                <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
                    <Typography variant={'h6'}>Образование</Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                    }}>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '20px'
                        }}>
                        <MyTextField label={'Учебное заведение'} onChange={(e) => {
                            setValue(`education.${index}.institution`, e.target.value)
                        }} />
                        <MyTextField label={'Уровень образования'} onChange={(e) => {
                            setValue(`education.${index}.levelEducation`, e.target.value)
                        }} />
                    </Box>
                    <Box>
                        <Typography>Начало учёбы</Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: '20px'
                            }}>
                            <MyTextField label={'Факультет'} onChange={(e) => {
                                setValue(`education.${index}.faculty`, e.target.value)
                            }} />
                            <MyTextField label={'Специальность'} onChange={(e) => {
                                setValue(`education.${index}.speciality`, e.target.value)
                            }} />
                        </Box>
                    </Box>
                    <Box>
                        <Typography>Окончание учёбы</Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: '20px'
                            }}>
                            <SelectForm value={''} array={yearArray || ''} label={'Год окончания'} onChange={(e) => {
                                setValue(`education.${index}.yearEndEducation`, e.target.value)
                            }} />
                        </Box>
                    </Box>
                </AccordionDetails>
            </Accordion >
        ))



    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                border: '2px solid #e1e5f2',
                borderRadius: '20px',
            }}>
            <Typography sx={{ borderBottom: '2px solid #e1e5f2', padding: '20px' }}>Основное
                образование</Typography>
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
                    faculty: '',
                    speciality: '',
                    yearEndEducation: ''
                })} />
            </Box>
        </Box>
    )
}

export default FormEducations