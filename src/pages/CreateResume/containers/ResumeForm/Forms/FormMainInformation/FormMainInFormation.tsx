import { Accordion, Box, Grid, Typography } from '@mui/material'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import { Controller, useFormContext } from 'react-hook-form'
import MyTextField from '../../../../../../components/TextField/MyTextField'
import SelectForm from '../../../../../../components/SelectForm/SelectForm'
import { Candidate } from '../../candidate'
import { DateField } from '@mui/x-date-pickers/DateField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import FormContacts from '../FormContacts/FormContacts'
const FormMainInFormation = () => {
    const methods = useFormContext<Candidate>()
    const { register, control, watch, setValue, setError, trigger, formState: { errors } } = methods
    const moneyArray: string[] = ['Руб', '$']
    const interestingArray: string[] = ['', 'Полная занятность', 'Частичная занятность', 'Проектная работа', 'Волонтёрство', 'Стажировка']
    const scheduleArray: string[] = ['', 'Полный день', 'Сменный график', 'Гибкий график', 'Удалённая работа', 'Вахтовый метод']
    const object = watch();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                border: '2px solid #e1e5f2',
                padding: '20px',
                borderRadius: '20px',
                gap: '20px',
            }}>
            <Typography>Основная информация</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                        <MyTextField
                            sx={{ width: '400px' }}
                            required
                            label={'Фамилия'}
                            {...register('middleName', {
                                required: "Заполните обязательное поле",
                            })}
                            error={!!errors.middleName}
                            helperText={errors.middleName ? errors.middleName.message : ""}
                            onChange={e => {
                                setValue('middleName', e.target.value.slice(0, 15).replace(/[^a-zA-Zа-яА-Я]/g, ''));
                                trigger('middleName');
                            }}
                        />
                        <MyTextField
                            required
                            sx={{ width: '400px' }}
                            label={'Имя'}
                            {...register('firstName', {
                                required: "Заполните обязательное поле",
                            })}
                            error={!!errors.firstName}
                            helperText={errors.firstName ? errors.firstName.message : ""}
                            onChange={e => {
                                setValue('firstName', e.target.value.slice(0, 15).replace(/[^a-zA-Zа-яА-Я]/g, ''));
                                trigger('firstName');
                            }}
                        />
                        <MyTextField
                            sx={{ width: '400px' }}
                            label={'Отчество'}
                            {...register('lastName')} />
                    </Box>
                    <Box sx={{ width: '200px', height: '200px', border: '1px solid black' }} />
                </Box>

                <Controller
                    control={control}
                    name="date"
                    render={({ field: { onChange, value } }) => (
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DateField', 'DateField']}>
                                <DateField
                                    label="Дата рождения"
                                    defaultValue={dayjs('2022-04-17')}
                                    format="MM-DD-YYYY"
                                    onChange={onChange} />
                            </DemoContainer>
                        </LocalizationProvider>
                    )} />

                <MyTextField sx={{ width: '400px' }} label={'Город'} {...register('city')}></MyTextField>
                <FormContacts></FormContacts>
            </Box>

            <MyTextField
                sx={{ width: '200px' }}
                required
                label={'Желаемая должность'}
                {...register('desiredPosition', {
                    required: "Заполните обязательное поле",
                    pattern: {
                        value: /[а-яё]+/,
                        message: "Используйте только кирилические буквы"
                    }
                })}
                error={!!errors.desiredPosition}
                helperText={errors.desiredPosition ? errors.desiredPosition.message : ""}
                onChange={e => {
                    setValue('desiredPosition', e.target.value.slice(0, 20).replace(/[^a-zA-Zа-яА-Я]/g, ''));
                    trigger('desiredPosition');
                }} />
            <Controller
                control={control}
                name='interesting'
                render={({ field: { onChange, value } }) => (<SelectForm label={'Занятность'} onChange={onChange} value={value} array={interestingArray || ['']} />)} />



            <Controller
                control={control}
                name="money"
                render={({ field: { onChange } }) => (<MyTextField label={'Желаемая зарплата'} type={'number'} inputProps={{ min: 0, step: 5000 }} onChange={onChange} />)} />

            {/* <Accordion>
                <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
                    <Typography variant={'h6'}>Дополнительная информация</Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                    }}>
                    <Grid
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '20px',
                        }}>
                       
                        <Controller
                            control={control}
                            name="currency"
                            render={({ field: { onChange, value } }) => (<SelectForm label={'Валюта'} value={value} onChange={onChange} array={moneyArray || ['']} />)} />


                        <MyTextField
                            label={'Гражданство'}
                            {...register('citizenship')}
                            error={!!errors.citizenship}
                            helperText={errors.citizenship ? errors.citizenship.message : ""}
                            onChange={e => {
                                setValue('citizenship', e.target.value.slice(0, 15).replace(/[^a-zA-Zа-яА-Я]/g, ''));
                                trigger('citizenship');
                            }} />
                    </Grid>
                    <Grid
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            gap: '20px',
                        }}>
                     
                        <Controller
                            control={control}
                            name='schedule'
                            render={({ field: { onChange, value } }) => (<SelectForm label={'График работы'} onChange={onChange} value={value} array={scheduleArray || ['']} />)} />
                    </Grid>
                </AccordionDetails>
            </Accordion> */}
        </Box >
    )
}


export default FormMainInFormation
