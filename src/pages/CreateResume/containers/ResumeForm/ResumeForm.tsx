import { Accordion, Box, Grid, Typography } from '@mui/material'
import CustomContainer from '../../../../components/Container/CustomContainer.tsx'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import MyTextField from '../../../../components/TextField/MyTextField.tsx'
import MyDocument from '../../../../components/Document/MyDocument.tsx'
import { Candidate, defaultValueForm } from './candidate.ts'
import { FormProvider, useForm } from 'react-hook-form'
import SelectForm from '../../../../components/SelectForm/SelectForm.tsx'

const ResumeForm = () => {
  const methods = useForm<Candidate>({ defaultValues: defaultValueForm, mode: 'onChange' })
  const { register } = methods
  const moneyArray: string[] = ['Руб', '$']
  const dayArray: number[] = Array.from({ length: 31 }, (_, index) => index + 1)
  const yearArray: number[] = Array.from({ length: 21 }, (_, index) => 2000 + index)
  const monthArray: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const interestingArray: string[] = ['','Полная занятность','Частичная занятность','Проектная работа','Волонтёрство','Стажировка']
  const scheduleArray: string []=['','Полный день','Сменный график','Гибкий график','Удалённая работа','Вахтовый метод']

  return (
    <Box sx={{ backgroundColor: '#190028', paddingTop: '40px' }}>
      <FormProvider {...methods}>
        <CustomContainer display={'flex'} flexDirection={'row'} justifyContent={'space-between'} gap={'20px'}>
          <Grid
            sx={{
              display: 'flex',
              flexDirection: 'column',

              gap: '20px',
            }}
          >
            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
                <MyTextField label={'Желаемая должность'} {...register('desiredPosition')} />
                <MyTextField label={'Фамилия'} {...register('middleName')} />
                <MyTextField label={'Имя'} {...register('firstName')} />
                <MyTextField label={'Отчество'} {...register('lastName')} />
            </Grid>
            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box>
                <Typography sx={{ color: 'white' }}>Дата рождения</Typography>
              </Box>
              <Grid
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '20px',
                }}
              >
                <Grid sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '20px' }}>
                  <SelectForm
                    label={'День'}
                    {...register('date')}
                    array={dayArray}
                  ></SelectForm>
                  <SelectForm
                    label={'месяц'}
                    {...register('month')}
                    array={monthArray}
                  ></SelectForm>
                  <SelectForm
                    label={'День'}
                    {...register('year')}
                    array={yearArray}
                  ></SelectForm>
                </Grid>
                <Grid>
                  <MyTextField label={'Город'} {...register('city')}></MyTextField>
                </Grid>
                <Accordion
                  sx={{
                    backgroundColor: 'transparent',
                    border: '1px solid white',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <AccordionSummary expandIcon={<ArrowDownwardIcon style={{ color: 'white' }} />}>
                    Дополнительная информация
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '20px',
                      }}
                    >
                      <MyTextField
                        label={'Желаемая зарплата'}
                        type={'number'}
                        inputProps={{ min: 0, step: 5000 }}
                        {...register('money')}
                      />
                      <SelectForm
                        label={'День'}
                        {...register('currency')}
                        array={moneyArray}
                      ></SelectForm>
                      <MyTextField label={'Гражданство'} type={'string'}  {...register('citizenship')}/>
                    </Grid>
                    <Grid
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        gap: '20px',
                      }}
                    >
                      <SelectForm
                        label={'Занятность'}
                        array={interestingArray}
                      >
                      </SelectForm>
                      <SelectForm
                        label={'График работы'}
                        array={scheduleArray}
                      >
                      </SelectForm>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
          </Grid>
          <MyDocument></MyDocument>
        </CustomContainer>
      </FormProvider>
    </Box>
  )
}

export default ResumeForm
