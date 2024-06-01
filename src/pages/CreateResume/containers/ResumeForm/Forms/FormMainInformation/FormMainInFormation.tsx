import { Box, Button, Typography } from '@mui/material'
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
                <Box sx={(theme) => ({
                    [theme.breakpoints.up('xs')]: { gap: '20px', flexDirection: 'column-reverse', alignItems: 'flex-start' },
                    [theme.breakpoints.up('xl')]: { gap: '20px', flexDirection: 'row' },
                    display: 'flex',
                    justifyContent: 'space-between'
                })}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '45px', width: '100%' }}>
                        <MyTextField
                            required
                            label={'Фамилия'}
                            {...register('middleName', {
                                required: "Заполните обязательное поле",
                                maxLength: {
                                    value: 15,
                                    message: "Фамилия должна содержать не более 15 символов"
                                },
                                pattern: {
                                    value: /^[a-zA-Zа-яА-Я\s]*$/,
                                    message: "Фамилия может содержать только буквы и пробелы"
                                }
                            })}
                            error={!!errors.middleName}
                            helperText={errors.middleName ? errors.middleName.message : ""}
                        />
                        <MyTextField
                            required
                            label={'Имя'}
                            {...register('firstName', {
                                required: "Заполните обязательное поле",
                                maxLength: {
                                    value: 15,
                                    message: "Имя должно содержать не более 15 символов"
                                },
                                pattern: {
                                    value: /^[a-zA-Zа-яА-Я\s]*$/,
                                    message: "Имя может содержать только буквы и пробелы"
                                }
                            })}
                            error={!!errors.firstName}
                            helperText={errors.firstName ? errors.firstName.message : ""}
                        />
                        <MyTextField
                            label={'Отчество'}
                            {...register('lastName', {
                                maxLength: {
                                    value: 15,
                                    message: "Отчество должно содержать не более 15 символов"
                                },
                            })}
                            error={!!errors.lastName}
                            helperText={errors.lastName ? errors.lastName.message : ""} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                        <Box
                            sx={{
                                width: '200px',
                                maxHeight: '100%',
                                maxWidth: '100%',
                                height: '200px',
                                border: '1px solid black',
                                borderRadius: '100px',
                                position: 'relative',
                            }}>
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
                    rules={{
                        required: 'Дата рождения является обязательным полем',
                    }}
                    render={({ field: { onChange, value } }) => (
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DateField', 'DateField']}>
                                <DateField
                                    label="Дата рождения"
                                    format="MM-DD-YYYY"
                                    onChange={onChange}
                                />
                            </DemoContainer >
                        </LocalizationProvider >
                    )} />
                <MyTextField label={'Город'} {...register('city')}></MyTextField>
                <FormContacts />
            </Box>
            <MyTextField
                required
                label={'Желаемая должность'}
                {...register('desiredPosition', {
                    required: "Заполните обязательное поле",
                    maxLength: {
                        value: 20,
                        message: "Должность должно содержать не более 15 символов"
                    },
                    pattern: {
                        value: /^[a-zA-Zа-яА-Я\s]*$/,
                        message: "Должность может содержать только буквы и пробелы"
                    }
                })}
                error={!!errors.desiredPosition}
                helperText={errors.desiredPosition ? errors.desiredPosition.message : ""} />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap:'20px'
                }}>
                <Controller
                    control={control}
                    name='interesting'
                    render={({ field: { onChange, value } }) => (<SelectForm label={'Занятность'} onChange={onChange} value={value} array={interestingArray || ['']} />)} />
                <Controller
                    control={control}
                    name="money"
                    render={({ field: { onChange } }) => (<MyTextField label={'Желаемая зарплата, Руб'} type={'number'} inputProps={{ min: 0, step: 5000 }} onChange={onChange} />)} />
            </Box>
        </Box >
    )
}


export default FormMainInFormation
