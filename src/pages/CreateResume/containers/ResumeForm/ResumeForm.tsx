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
import CustomButton from '../../../../components/Button/CustomButton.tsx'
import { useState } from 'react'

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
  const interestingArray: string[] = ['', 'Полная занятность', 'Частичная занятность', 'Проектная работа', 'Волонтёрство', 'Стажировка']
  const scheduleArray: string[] = ['', 'Полный день', 'Сменный график', 'Гибкий график', 'Удалённая работа', 'Вахтовый метод']

  const [accardion, setAccardion] = useState<Array<JSX.Element>>([])


  const addAccardion = () => {
    setAccardion([...accardion,
    <Accordion>
      <AccordionSummary expandIcon={<ArrowDownwardIcon style={{ color: 'white' }} />}>
        Дополнительная информация
      </AccordionSummary>
    </Accordion>
    ])
  }


  return (
    <Box sx={{ backgroundColor: '#190028', paddingTop: '40px' }}>
      <FormProvider {...methods}>
        <CustomContainer display={'flex'} flexDirection={'row'} justifyContent={'space-between'} gap={'20px'}>
          <Grid
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}>
            <Box
              sx={{
                display:'flex',
                flexDirection:'column',
                border: '1px solid white',
                padding: '20px',
                borderRadius: '20px',
                gap: '20px'
              }}>
              <MyTextField label={'Желаемая должность'} {...register('desiredPosition')} />
              <MyTextField label={'Фамилия'} {...register('middleName')} />
              <MyTextField label={'Имя'} {...register('firstName')} />
              <MyTextField label={'Отчество'} {...register('lastName')} />
              <Box>
                <Typography sx={{ color: 'white' }}>Дата рождения</Typography>
              </Box>
              <Grid sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '20px'
              }}>
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
                  border: '2px solid white',
                  borderRadius: '10px',
                  color: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <AccordionSummary expandIcon={<ArrowDownwardIcon style={{ color: 'white' }} />}>
                  Дополнительная информация
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px'
                  }}
                >
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
                    <MyTextField label={'Гражданство'} type={'string'}  {...register('citizenship')} />
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
            </Box>
            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}>
              <Grid
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '20px',
                }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    border: '2px solid white',
                    borderRadius: '20px'
                  }}
                >
                  <Typography sx={{ borderBottom: '2px solid white', padding: '20px' }}>Контакты</Typography>
                  <Box
                    sx={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}
                  >
                    <Box sx={{
                      display: 'flex',
                      gap: '20px'

                    }}>
                      <MyTextField
                        label={'Электронная почта'}
                        {...register('email')}
                      />
                      <MyTextField
                        label={'Номер телефона'}
                        {...register('phoneNumber')}
                      />
                    </Box>
                    <Box>
                      {accardion}
                    </Box>
                    <CustomButton innerText='Добавить социальную сеть' onClick={addAccardion} ></CustomButton>
                  </Box>

                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    border: '2px solid white',
                    borderRadius: '20px'
                  }}>
                  <Typography sx={{ borderBottom: '2px solid white', padding: '20px' }}>Опыт работы</Typography>
                  <Box
                    sx={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}
                  >
                    <Box sx={{
                      display: 'flex',
                      gap: '20px'
                    }}>

                    </Box>
                    <CustomButton innerText='Добавить Опыт работы' ></CustomButton>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    border: '2px solid white',
                    borderRadius: '20px'
                  }}>
                  <Typography sx={{ borderBottom: '2px solid white', padding: '20px' }}>Основное образование</Typography>
                  <Box
                    sx={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}
                  >
                    <Box sx={{
                      display: 'flex',
                      gap: '20px'
                    }}>

                    </Box>
                    <CustomButton innerText='Добавить образование' ></CustomButton>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    border: '2px solid white',
                    borderRadius: '20px'
                  }}>
                  <Typography sx={{ borderBottom: '2px solid white', padding: '20px' }}>Курсы повышения квалификации</Typography>
                  <Box
                    sx={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}
                  >
                    <Box sx={{
                      display: 'flex',
                      gap: '20px'
                    }}>

                    </Box>
                    <CustomButton innerText='Добавить Курс' ></CustomButton>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <MyDocument></MyDocument>
        </CustomContainer>
      </FormProvider>
    </Box >
  )
}

export default ResumeForm
