
import { useFieldArray, useFormContext } from 'react-hook-form'
import CustomButton from '../../../../../../components/Button/CustomButton'
import MyTextField from '../../../../../../components/TextField/MyTextField'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import { Candidate } from '../../candidate'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import SelectForm from '../../../../../../components/SelectForm/SelectForm'
import { useState } from 'react'

function FormContacts() {
    const socialArray: string[] = [' ', 'vk', 'telegram', 'instagram']
    const methods = useFormContext<Candidate>()
    const { register, control, watch, setValue, formState: { errors } } = methods
    const { fields: socials, append: appendSocial, remove: removeSocial } = useFieldArray<Candidate>({
        name: 'socials',
        control: control,
    });
    const social = watch('socials')
    const object = watch()

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
                        gap: '20px',
                        justifyContent:'space-between'
                    }}>
                    <SelectForm value={social[index].icon} sx={{width:'300px', maxWidth:'100%'}} label={'Социальная сеть'} onChange={(e) => {
                        setValue(`socials.${index}.icon`, e.target.value)
                    }} array={socialArray} />
                    <MyTextField label={'Ссылка'} sx={{width:'300px', maxWidth:'100%'}} onChange={(e) => {
                        setValue(`socials.${index}.link`, e.target.value)
                    }} />
                </Box>
            </AccordionDetails>
        </Accordion>
    ))
    
    return (
        <Box>
            <Typography sx={{  padding: '20px' }}>Контакты</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <Box sx={{
                    display: 'flex',
                    gap: '20px',
                }}>
                    <MyTextField
                    
                        required
                        label={'Электронная почта'}
                        {...register('email', {
                            required: 'Заполните обязательное поле',
                            pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
                        })}
                        error={!!errors.email}
                        helperText={errors.email ? errors.email.message : ""}
                    />
                    <MyTextField
                        required
                        label={'Номер телефона'}
                        {...register('phoneNumber', {
                            required: 'Заполните обязательное поле',
                            pattern: {
                                value: /^[0-9]+$/,
                                message: "Используйте только цифры"
                            }
                        })}
                        error={!!errors.phoneNumber}
                        helperText={errors.phoneNumber ? errors.phoneNumber.message : ""}
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                    }}>
                    {socialsElement}
                </Box>
                <CustomButton  innerText="Добавить социальную сеть" onClick={() => { appendSocial({ icon: '', link: '' }) }} />
            </Box>
        </Box>
    )
}

export default FormContacts