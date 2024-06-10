import { Accordion, AccordionDetails, AccordionSummary, Box, IconButton, Typography } from "@mui/material"
import CustomButton from "../../../../components/Button/CustomButton"
import { useFieldArray, useFormContext } from "react-hook-form"
import { Candidate } from "../candidate"
import MyTextField from "../../../../components/TextField/MyTextField"
import SelectForm from "../../../../components/SelectForm/SelectForm"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import WorkOutline from "@mui/icons-material/WorkOutline"
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from "react"

function FormWorkExperience() {

    const methods = useFormContext<Candidate>()
    const { control, setValue, watch, register, formState: { errors } } = methods
    const yearArray: number[] = Array.from({ length: 30 }, (_, index) => 2000 + index)
    const monthArray = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
    ];
    const { fields: jobs, append: appendJob, remove: removeJob } = useFieldArray<Candidate>({
        name: 'jobs',
        control: control,
    });
    const object = watch("jobs")
    const [disabledButton, setDisabled] = useState(false)
    useEffect(() => {
        setDisabled(jobs.length >= 2);
    }, [jobs.length]);


    const jobsWorkerElement =
        jobs.map((field, index) => (
            <Accordion
                key={index}
                sx={{
                    width: '100%'
                }}>
                <AccordionSummary expandIcon={<ArrowDownwardIcon />} sx={{ display: 'flex' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row-reverse', width: '100%' }}>
                        <IconButton onClick={() => removeJob(index)}>
                            <DeleteIcon />
                        </IconButton>
                        <Typography variant={'h6'}>
                            {object[index].postJob}
                        </Typography>
                    </Box>
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

                        <MyTextField
                            label={'Должность'}
                            {...register(`jobs.${index}.postJob`, {
                                maxLength: {
                                    value: 20,
                                    message: "Должность должно содержать не более 20 символов"
                                },
                            })}
                            error={!!errors.jobs?.[index]?.postJob}
                            helperText={errors.jobs?.[index]?.postJob?.message || ""} />
                        <MyTextField label={'Название компании'}
                            {...register(`jobs.${index}.nameCompany`, {
                                maxLength: {
                                    value: 20,
                                    message: "Название компании должно содержать не более 20 символов"
                                },
                            })}
                            error={!!errors.desiredPosition}
                            helperText={errors.desiredPosition ? errors.desiredPosition.message : ""} />
                    </Box>
                    <Box>
                        <Typography>Начало работы</Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                paddingTop: '20px',
                                gap: '20px'
                            }}>
                            <SelectForm array={monthArray || []} value={object[index].monthStart}
                                label={'Месяц'}
                                {...register(`jobs.${index}.monthStart`)} />
                            <SelectForm array={yearArray || []} value={object[index].yearStart}
                                label={'Год'}
                                {...register(`jobs.${index}.yearStart`)} />
                        </Box>
                    </Box>
                    <Box>
                        <Typography>Окончание работы</Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                paddingTop: '20px',
                                gap: '20px'
                            }}>
                            <SelectForm array={monthArray || []} label={'Месяц'} value={object[index].monthEnd}
                                {...register(`jobs.${index}.monthEnd`)} />
                            <SelectForm array={yearArray || []} value={object[index].yearEnd} label={'Год'}
                                {...register(`jobs.${index}.yearEnd`)} />
                        </Box>
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
                border: '2px solid #ccdbfd',
                borderRadius: '5px',
            }}>
            <Box sx={{ width: '100%', borderBottom: '2px solid #ccdbfd' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '20px 10px', gap: '20px' }}>
                    <WorkOutline sx={{ fontSize: '40px' }} />
                    <Typography variant='h2'>Опыт работы</Typography>
                </Box>
            </Box>
            <Box
                sx={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                }}>
                    {jobsWorkerElement}
                </Box>
                <CustomButton disabled={disabledButton} innerText="Добавить Опыт работы" onClick={() => {
                    appendJob({
                        postJob: '',
                        nameCompany: '',
                        monthStart: '',
                        yearStart: '',
                        monthEnd: '',
                        yearEnd: ''
                    })
                }} />
            </Box>
        </Box>
    )
}

export default FormWorkExperience