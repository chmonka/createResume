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
    const { register, control, watch } = methods
    const moneyArray: string[] = ['Руб', '$']
    const interestingArray: string[] = ['', 'Полная занятность', 'Частичная занятность', 'Проектная работа', 'Волонтёрство', 'Стажировка']
    const scheduleArray: string[] = ['', 'Полный день', 'Сменный график', 'Гибкий график', 'Удалённая работа', 'Вахтовый метод']
    const dayArray: number[] = Array.from({ length: 31 }, (_, index) => index + 1)
    const yearArray: number[] = Array.from({ length: 21 }, (_, index) => 2000 + index)
    const monthArray: number[] = Array.from({ length: 12 }, (_, index) => index + 1)

    const object = watch();
    console.log(object)

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
            <Controller
                control={control}
                name="desiredPosition"
                render={({ field: { onChange } }) => (<MyTextField label={'Желаемая должность'} onChange={onChange} />)} />
            <Controller
                control={control}
                name="middleName"
                render={({ field: { onChange } }) => (<MyTextField label={'Фамилия'} onChange={onChange} />)} />
            <Controller
                control={control}
                name="firstName"
                render={({ field: { onChange } }) => (<MyTextField label={'Имя'} onChange={onChange} />)} />
            <Controller
                control={control}
                name="lastName"
                render={({ field: { onChange } }) => (<MyTextField label={'Отчество'} onChange={onChange} />)} />
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
                            render={({ field: { onChange, value } }) => (<SelectForm label={'День'} value={value} onChange={onChange} array={moneyArray|| ['']} />)} />
                        <Controller
                            control={control}
                            name="citizenship"
                            render={({ field: { onChange } }) => (<MyTextField label={'Гражданство'} type={'string'} onChange={onChange} />)} />
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
                            render={({ field: { onChange, value } }) => (<SelectForm label={'Занятность'} onChange={onChange} value={value} array={interestingArray|| ['']} />)} />
                        <Controller
                            control={control}
                            name='schedule'
                            render={({ field: { onChange, value } }) => (<SelectForm label={'График работы'} onChange={onChange} value={value} array={scheduleArray|| ['']} />)} />
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}


export default FormMainInFormation
