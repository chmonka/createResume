import { Box, Button,Typography } from '@mui/material'
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
import { ChangeEvent, useState } from 'react'


const FormMainInFormation = () => {
    const methods = useFormContext<Candidate>()
    const { register, control, handleSubmit, watch, setValue, setError, trigger, formState: { errors } } = methods
    const moneyArray: string[] = ['Руб', '$']
    const interestingArray: string[] = ['', 'Полная занятность', 'Частичная занятность', 'Проектная работа', 'Волонтёрство', 'Стажировка']
    const scheduleArray: string[] = ['', 'Полный день', 'Сменный график', 'Гибкий график', 'Удалённая работа', 'Вахтовый метод']
    const object = watch();
    const [file, setFile] = useState<string | null>(null);

    function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files.length > 0) {
            setFile(URL.createObjectURL(e.target.files[0]));
            setValue('photoProfile', URL.createObjectURL(e.target.files[0]))
        }
    }
 


    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                border: '2px solid #e1e5f2',
                padding: '20px',
                borderRadius: '5px',
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
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                        <Box
                            sx={{
                                width: '200px',
                                height: '200px',
                                border: '1px solid black',
                                borderRadius: '100px',
                                position: 'relative',
                            }}
                        >
                            <input
                                accept="image/ * "
                                id="contained-button-file"
                                type="file"
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                            />
                            {file && <img src={file} alt="Uploaded file" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '100px' }} />}
                        </Box>

                        <label htmlFor="contained-button-file">
                            <Button variant="contained" component="span">
                                Загрузить фото
                            </Button>
                        </label>
                    </Box>
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

                <MyTextField label={'Город'} {...register('city')}></MyTextField>
                <FormContacts></FormContacts>
            </Box>

            <MyTextField
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
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <Controller
                    control={control}
                    name='interesting'
                    render={({ field: { onChange, value } }) => (<SelectForm sx={{ width: '320px' }} label={'Занятность'} onChange={onChange} value={value} array={interestingArray || ['']} />)} />
                <Controller
                    control={control}
                    name="money"
                    render={({ field: { onChange } }) => (<MyTextField sx={{ width: '320px' }} label={'Желаемая зарплата, Руб'} type={'number'} inputProps={{ min: 0, step: 5000 }} onChange={onChange} />)} />
            </Box>
        </Box >
    )
}


export default FormMainInFormation
