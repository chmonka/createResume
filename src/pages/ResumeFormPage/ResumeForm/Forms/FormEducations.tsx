import { Accordion, AccordionDetails, AccordionSummary, Box, IconButton, Typography } from "@mui/material"
import CustomButton from "../../../../components/Button/CustomButton"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import { Candidate } from "../candidate";
import { useFieldArray, useFormContext } from "react-hook-form";
import MyTextField from "../../../../components/TextField/MyTextField";
import SelectForm from "../../../../components/SelectForm/SelectForm";
import SchoolIcon from '@mui/icons-material/School';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from "react";
function FormEducations() {


    const methods = useFormContext<Candidate>()
    const { control, setValue, watch, register, formState: { errors } } = methods
    const { fields: education, append: appendEducation, remove: removeEducation } = useFieldArray<Candidate>({
        name: 'education',
        control: control,
    });

    const [disabledButton, setDisabled] = useState(false)
    useEffect(() => {
        setDisabled(education.length >= 2);
    }, [education.length]);


    const yearArray: number[] = Array.from({ length: 30 }, (_, index) => 2000 + index)
    const object = watch('education')
    const formEducation = ['Очная', 'Очно-заочная', 'Заочная', 'Дистанционная']
    const educationLevel = [
        'Основное общее',
        'Среднее общее', 'Среднее профессиональное',
        'Высшее']

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
                    <SelectForm value={object[index].levelEducation} array={educationLevel || ''} label={'Уровень образования'}
                        {...register(`education.${index}.levelEducation`)} />
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '20px'
                        }}>
                        <SelectForm value={object[index].formEducation} array={formEducation || ''} label={'Форма обучения'}
                            {...register(`education.${index}.formEducation`)} />
                        <SelectForm value={object[index].yearEndEducation} array={yearArray || ''} label={'Год окончания'}
                            {...register(`education.${index}.yearEndEducation`)} />
                    </Box>
                    <MyTextField label={'Название учебного заведения'}
                        {...register(`education.${index}.institution`, {
                            maxLength: {
                                value: 30,
                                message: "Название должно содержать не более 30 символов"
                            },
                        })}
                        error={!!errors.education?.[index]?.institution}
                        helperText={errors.education?.[index]?.institution?.message || ""} />
                    <MyTextField label={'Факультет'}
                        {...register(`education.${index}.faculty`, {
                            maxLength: {
                                value: 30,
                                message: "Факультет должнен содержать не более 30 символов"
                            },
                        })}
                        error={!!errors.education?.[index]?.faculty}
                        helperText={errors.education?.[index]?.faculty?.message || ""} />
                    <MyTextField label={'Специальность'}
                        {...register(`education.${index}.speciality`, {
                            maxLength: {
                                value: 30,
                                message: "Специальность должнен содержать не более 30 символов"
                            },
                        })}
                        error={!!errors.education?.[index]?.speciality}
                        helperText={errors.education?.[index]?.speciality?.message || ""} />
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
            <Box sx={{ width: '100%', borderBottom: '2px solid #ccdbfd' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '20px 10px', gap: '20px' }}>
                    <SchoolIcon sx={{ fontSize: '40px' }} />
                    <Typography variant='h2'>Oбразование</Typography>
                </Box>
            </Box>

            <Box sx={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Box sx={{
                    display: 'flex',
                    gap: '20px',
                    flexDirection: 'column'
                }}>
                    {educationElement}
                </Box>
                <CustomButton  disabled={disabledButton} innerText="Добавить образование" onClick={() => appendEducation({
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