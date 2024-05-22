import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material"
import CustomButton from "../../../../../../components/Button/CustomButton"
import { useFieldArray, useFormContext } from "react-hook-form"
import { Candidate } from "../../candidate"
import MyTextField from "../../../../../../components/TextField/MyTextField"
import SelectForm from "../../../../../../components/SelectForm/SelectForm"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

function FormWorkExperience() {

    const methods = useFormContext<Candidate>()
    const { control, setValue } = methods
    const yearArray: number[] = Array.from({ length: 21 }, (_, index) => 2000 + index)
    const monthArray: number[] = Array.from({ length: 12 }, (_, index) => index + 1)
    const { fields: jobs, append: appendJob } = useFieldArray<Candidate>({
        name: 'jobs',
        control: control,
    });

    const jobsWorkerElement =
        jobs.map((field, index) => (
            <Accordion
                key={index}
                sx={{
                    width: '100%'
                }}>
                <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
                    <Typography variant={'h6'}>

                    </Typography>
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
                        <MyTextField label={'Компания'} onChange={(e) => {
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
                            <SelectForm array={monthArray || ['']} label={'Месяц'} onChange={(e) => {
                                setValue(`jobs.${index}.monthStart`, e.target.value)
                            }} />
                            <SelectForm array={yearArray || ['']} label={'Год'} onChange={(e) => {
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
                            <SelectForm array={monthArray || ['']} label={'Месяц'} onChange={(e) => {
                                setValue(`jobs.${index}.monthEnd`, e.target.value)
                            }} />
                            <SelectForm array={yearArray || ['']} label={'Год'} onChange={(e) => {
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
                border: '2px solid #e1e5f2',
                borderRadius: '20px',
            }}>
            <Typography sx={{ borderBottom: '2px solid #e1e5f2', padding: '20px' }}>Опыт работы</Typography>
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