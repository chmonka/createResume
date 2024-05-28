import { Accordion, Box, Grid, Typography } from '@mui/material'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import { Controller, useFormContext } from 'react-hook-form'
import MyTextField from '../../../../../../components/TextField/MyTextField'
import SelectForm from '../../../../../../components/SelectForm/SelectForm'
import { Candidate } from '../../candidate'

const FormMainInFormation = () => {
    const methods = useFormContext<Candidate>()
    const { register, control, watch, setValue, setError, trigger, formState: { errors } } = methods
    const moneyArray: string[] = ['Руб', '$']
    const interestingArray: string[] = ['', 'Полная занятность', 'Частичная занятность', 'Проектная работа', 'Волонтёрство', 'Стажировка']
    const scheduleArray: string[] = ['', 'Полный день', 'Сменный график', 'Гибкий график', 'Удалённая работа', 'Вахтовый метод']
    const dayArray: number[] = Array.from({ length: 31 }, (_, index) => index + 1)
    const yearArray: number[] = Array.from({ length: 21 }, (_, index) => 2000 + index)
    const monthArray: number[] = Array.from({ length: 12 }, (_, index) => index + 1)
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
            <MyTextField
                required
                label={'Фамилия'}
                {...register('middleName', {
                    required: "Заполните обязательное поле",
                })}
                error={!!errors.middleName}
                helperText={errors.middleName ? errors.middleName.message : ""}
                onChange={e => {
                    setValue('middleName', e.target.value.slice(0, 14).replace(/[^a-zA-Zа-яА-Я]/g, ''));
                    trigger('middleName');
                }}
            />


            <MyTextField
                required
                label={'Имя'}
                {...register('firstName', {
                    required: "Заполните обязательное поле",
                    pattern: {
                        value: /[а-яё]+/,
                        message: "Используйте только кирилические буквы"
                    }
                })}
                error={!!errors.firstName}
                helperText={errors.firstName ? errors.firstName.message : ""}
            />
            <MyTextField
                label={'Отчество'}
                {...register('lastName')} />
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
                helperText={errors.desiredPosition ? errors.desiredPosition.message : ""} />
            <Box>
                <Typography variant={'h6'}>Дата рождения</Typography>
            </Box>
            <Grid sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '20px',
            }}>
                <Controller
                    control={control}
                    name="day"
                    render={({ field: { onChange, value } }) => (<SelectForm label={'День'} onChange={onChange} value={value} array={dayArray || ''} />)} />
                <Controller
                    control={control}
                    name="month"
                    render={({ field: { onChange, value } }) => (<SelectForm label={'Месяц'} onChange={onChange} value={value} array={monthArray || ''} />)} />
                <Controller
                    control={control}
                    name="year"
                    render={({ field: { onChange, value } }) => (<SelectForm label={'Год'} onChange={onChange} value={value} array={yearArray || ''} />)} />
            </Grid>
            <Grid>
                <MyTextField label={'Город'} {...register('city')}></MyTextField>
            </Grid>
            <Accordion>
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
                            name="money"
                            render={({ field: { onChange } }) => (<MyTextField label={'Желаемая зарплата'} type={'number'} inputProps={{ min: 0, step: 5000 }} onChange={onChange} />)} />
                        <Controller
                            control={control}
                            name="currency"
                            render={({ field: { onChange, value } }) => (<SelectForm label={'День'} value={value} onChange={onChange} array={moneyArray || ['']} />)} />
                        <Controller
                            control={control}
                            name="citizenship"
                            rules={{
                                required: 'Гражданство обязательно',
                                pattern: {
                                    value: /^[а-яА-Я\s]*$/,
                                    message: 'Введите гражданство на кириллице'
                                },
                                maxLength: {
                                    value: 50,
                                    message: 'Гражданство не должно превышать 50 символов'
                                }
                            }}
                            render={({ field: { onChange, onBlur } }) => (
                                <MyTextField
                                    required
                                    label={'Гражданство'}
                                    type={'text'}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                />
                            )}
                        />
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
                            name='interesting'
                            render={({ field: { onChange, value } }) => (<SelectForm label={'Занятность'} onChange={onChange} value={value} array={interestingArray || ['']} />)} />
                        <Controller
                            control={control}
                            name='schedule'
                            render={({ field: { onChange, value } }) => (<SelectForm label={'График работы'} onChange={onChange} value={value} array={scheduleArray || ['']} />)} />
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}


export default FormMainInFormation
