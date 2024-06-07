
import { useFieldArray, useFormContext } from 'react-hook-form'
import CustomButton from '../../../../components/Button/CustomButton'
import MyTextField from '../../../../components/TextField/MyTextField'
import { Accordion, AccordionDetails, AccordionSummary, Box, FormControl, IconButton, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import { Candidate } from '../candidate'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import DeleteIcon from '@mui/icons-material/Delete';
import SelectForm from '../../../../components/SelectForm/SelectForm'
import iconByLinkName from '../../../../img/socials'
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
    console.log(object)
    const socialsElement = socials.map((field, index) => (
        <Accordion
            key={index}
            sx={{ width: '100%' }}>
            <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row-reverse', width: '100%' }}>
                    <IconButton onClick={() => removeSocial(index)}>
                        <DeleteIcon />
                    </IconButton>
                    <Typography variant={'h6'}>{social[index].name}</Typography>
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
                        gap: '20px',
                        justifyContent: 'space-between'
                    }}>
                    <FormControl fullWidth>
                        <InputLabel>Сеть</InputLabel>
                        <Select 
                            {...register(`socials.${index}.name`)}>
                            {Object.entries(iconByLinkName).map(([key, value]) => {
                                return <MenuItem value={key} sx={{display:'flex', flexDirection:'row'}}>
                                    <img src={value} width={'20px'} />
                                </MenuItem>
                            })}
                        </Select>
                    </FormControl>

                    {/* <SelectForm value={social[index].icon} label={'Социальная сеть'} onChange={(e) => {
                        setValue(`socials.${index}.icon`, e.target.value)
                    }} array={socialArray} /> */}
                    <MyTextField label={'Ссылка'}
                        {...register(`socials.${index}.link`, {
                            pattern: {
                                value: /(http|https):\/\/[a-zA-Z0-9\-\.]+\.(com|ru|org|net|gov|edu|info|biz|uk|us|de|jp)(\/\S*)?$/,
                                message: "Ссылка не валидна"
                            }
                        })}
                        error={!!errors.socials?.[index]?.link}
                        helperText={errors.socials?.[index]?.link?.message || ""} />
                </Box>
            </AccordionDetails>
        </Accordion>
    ))

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Typography variant='h2'>Контакты</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <Box sx={{
                    display: 'flex',
                    gap: '20px'
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
                <CustomButton innerText="Добавить социальную сеть" onClick={() => { appendSocial({ name: '', link: '' }) }} />
            </Box>
        </Box>
    )
}

export default FormContacts