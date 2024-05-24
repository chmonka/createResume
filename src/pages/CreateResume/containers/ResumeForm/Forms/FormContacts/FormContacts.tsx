
import { useFieldArray, useFormContext } from 'react-hook-form'
import CustomButton from '../../../../../../components/Button/CustomButton'
import MyTextField from '../../../../../../components/TextField/MyTextField'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import { Candidate } from '../../candidate'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import SelectForm from '../../../../../../components/SelectForm/SelectForm'

function FormContacts() {
    const socialArray: string[] = [' ', 'vk', 'telegram', 'instagram']
    const methods = useFormContext<Candidate>()
    const { register, control, watch, setValue } = methods
    const { fields: socials, append: appendSocial, remove: removeSocial } = useFieldArray<Candidate>({
        name: 'socials',
        control: control,
    });
    const social = watch('socials')

    const socialsElement = socials.map((field, index) => (
        <Accordion
            key={index}>
            <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
                <Typography variant={'h6'}>{social[index].icon}</Typography>
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
                    <SelectForm value={social[index].icon} label={'Социальная сеть'} onChange={(e) => {
                        setValue(`socials.${index}.icon`, e.target.value)
                    }} array={socialArray} />
                    <MyTextField label={'Ссылка'} onChange={(e) => {
                        setValue(`socials.${index}.link`, e.target.value)
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
                borderRadius: '20px',
            }}>
            <Typography sx={{ borderBottom: '2px solid #e1e5f2', padding: '20px' }}>Контакты</Typography>
            <Box sx={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Box sx={{
                    display: 'flex',
                    gap: '20px',
                }}>
                    <MyTextField
                        label={'Электронная почта'}
                        {...register('email')}
                    />
                    <MyTextField
                        label={'Номер телефона'}
                        {...register('phoneNumber')} />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                    }}>
                    {socialsElement}
                </Box>
                <CustomButton innerText="Добавить социальную сеть" onClick={() => { appendSocial({ icon: '', link: '' }) }} />
            </Box>
        </Box>
    )
}

export default FormContacts