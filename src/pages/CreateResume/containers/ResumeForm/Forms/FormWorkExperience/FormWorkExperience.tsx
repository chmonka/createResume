import { Accordion, AccordionDetails, AccordionSummary, Box, IconButton, Typography } from "@mui/material"
import CustomButton from "../../../../../../components/Button/CustomButton"
import { useFieldArray, useFormContext } from "react-hook-form"
import { Candidate } from "../../candidate"
import MyTextField from "../../../../../../components/TextField/MyTextField"
import SelectForm from "../../../../../../components/SelectForm/SelectForm"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import WorkOutline from "@mui/icons-material/WorkOutline"
import DeleteIcon from '@mui/icons-material/Delete';

function FormWorkExperience() {

    const methods = useFormContext<Candidate>()
    const { control, setValue, watch } = methods
    const yearArray: number[] = Array.from({ length: 21 }, (_, index) => 2000 + index)
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

    const jobsWorkerElement =
        jobs.map((field, index) => (
            <Accordion
                key={index}
                sx={{
                    width: '100%'
                }}>
                <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
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
                        <MyTextField label={'Должность'} onChange={(e) => {
                            setValue(`jobs.${index}.postJob`, e.target.value)
                        }} />
                        <MyTextField label={'Название компании'} onChange={(e) => {
                            setValue(`jobs.${index}.nameCompany`, e.target.value)
                        }} />
                    </Box>
                    <Box>
                        <Typography>Начало работы</Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: '20px'
                            }}>
                            <SelectForm array={monthArray || []} value={object[index].monthStart} label={'Месяц'} onChange={(e) => {
                                setValue(`jobs.${index}.monthStart`, e.target.value)
                            }} />
                            <SelectForm array={yearArray || []} value={object[index].yearStart} label={'Год'} onChange={(e) => {
                                setValue(`jobs.${index}.yearStart`, e.target.value)
                            }} />
                        </Box>
                    </Box>
                    <Box>
                        <Typography>Окончание работы</Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: '20px'
                            }}>
                            <SelectForm array={monthArray || []} label={'Месяц'} value={object[index].monthEnd} onChange={(e) => {
                                setValue(`jobs.${index}.monthEnd`, e.target.value)
                            }} />
                            <SelectForm array={yearArray || []} value={object[index].yearEnd} label={'Год'} onChange={(e) => {
                                setValue(`jobs.${index}.yearEnd`, e.target.value)
                            }} />
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
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', borderBottom: '2px solid #ccdbfd', padding: '10px 20px', gap: '20px' }}>
                <WorkOutline sx={{ fontSize: '40px' }} />
                <Typography variant='h2'>Опыт работы</Typography>
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
                <CustomButton innerText="Добавить Опыт работы" onClick={() => {
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