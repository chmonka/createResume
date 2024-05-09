import { Accordion, Box, Grid, Typography } from '@mui/material'
import CustomContainer from '../../../../components/Container/CustomContainer.tsx'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import MyTextField from '../../../../components/TextField/MyTextField.tsx'
import MyDocument from '../../../../components/Document/MyDocument.tsx'
import { Candidate, defaultValueForm } from './candidate.ts'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import SelectForm from '../../../../components/SelectForm/SelectForm.tsx'
import CustomButton from '../../../../components/Button/CustomButton.tsx'
import { useState } from 'react'

const ResumeForm = () => {
  const methods = useForm<Candidate>({ defaultValues: defaultValueForm, mode: 'onChange' })
  const { register, control } = methods
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
  const socialArray: string[] = [' ', 'vk', 'telegram', 'instagram']
  const [accardion, setAccardion] = useState<Array<JSX.Element>>([])
  const [accardionWork, setAccardionWorker] = useState<Array<JSX.Element>>([])

  const [accardionEducation, setAccardionEducation] = useState<Array<JSX.Element>>([])


  const addAccardion = () => {
    setAccardion([...accardion,
    <Accordion>
      <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
        <Typography variant={'h6'}>Контакты</Typography>
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
          <SelectForm
            label={'Социальная сеть'}
            array={socialArray}
            {...register('socialIcon')}>
          </SelectForm>
          <MyTextField label={'Ссылка на профиль'} {...register('link')} />
        </Box>
      </AccordionDetails>
    </Accordion>,
    ])
  }

  const addAccardionWorker = () => {
    setAccardionWorker([...accardionWork,
    <Accordion
      sx={{
        width: '100%'
      }}
    >
      <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
        <Typography variant={'h6'}>
          Опыт работы
        </Typography>
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
          <MyTextField label={'Должность'} {...register('link')} />
          <MyTextField label={'Компания'} {...register('link')} />
        </Box>
        <Box>
          <Typography>Начало работы</Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '20px'
            }}
          >
            <MyTextField label={'Месяц'} {...register('link')} />
            <MyTextField label={'Год'} {...register('link')} />
          </Box>
        </Box>
        <Box>
          <Typography>Окончание работы</Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '20px'
            }}
          >
            <MyTextField label={'Месяц'} {...register('link')} />
            <MyTextField label={'Год'} {...register('link')} />
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>,
    ])
  }

  const addAccardionEducation = () => {
    setAccardionEducation([...accardionEducation,
    <Accordion
      sx={{
        width: '100%'
      }}
    >
      <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
        <Typography variant={'h6'}>Образование</Typography>
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
          <MyTextField label={'Учебное заведение'} {...register('link')} />
          <MyTextField label={'Уровень образования'} {...register('link')} />
        </Box>
        <Box>
          <Typography>Начало работы</Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '20px'
            }}>
            <Controller
              control={control}
              name="lastName"
              render={({ field: { onChange } }) => (<MyTextField label={'Факультет'} onChange={onChange} />)}>
            </Controller>

            <MyTextField label={'Специальность'} {...register('link')} />
          </Box>
        </Box>
        <Box>
          <Typography>Окончание работы</Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '20px'
            }}>
            <MyTextField label={'Год окончания'} {...register('link')} />
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion >,
    ])
  }


  return (
    <Box sx={{ paddingTop: '40px' }}>
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
                render={({ field: { onChange } }) => (<MyTextField label={'Желаемая должность'} onChange={onChange}/>)}>
              </Controller>
             
              <MyTextField label={'Фамилия'} {...register('middleName')} />
              <MyTextField label={'Имя'} {...register('firstName')} />
              <MyTextField label={'Отчество'} {...register('lastName')} />
              <Box>
                <Typography variant={'h6'}>Дата рождения</Typography>
              </Box>
              <Grid sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '20px',
              }}>
                <SelectForm
                  label={'День'}
                  {...register('day')}
                  array={dayArray} />
                <SelectForm
                  label={'месяц'}
                  {...register('month')}
                  array={monthArray} />
                <SelectForm
                  label={'День'}
                  {...register('year')}
                  array={yearArray} />
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
                    <MyTextField
                      label={'Желаемая зарплата'}
                      type={'number'}
                      inputProps={{ min: 0, step: 5000 }}
                      {...register('money')} />
                    <SelectForm
                      label={'День'}
                      {...register('currency')}
                      array={moneyArray} />
                    <MyTextField label={'Гражданство'} type={'string'}  {...register('citizenship')} />
                  </Grid>
                  <Grid
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      gap: '20px',
                    }}>
                    <SelectForm
                      label={'Занятность'}
                      array={interestingArray}
                      {...register('interesting')}
                    />
                    <SelectForm
                      label={'График работы'}
                      array={scheduleArray}
                      {...register('schedule')}
                    />
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
                      {accardion}
                    </Box>
                    <CustomButton innerText="Добавить социальную сеть" onClick={addAccardion} />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    border: '2px solid #e1e5f2',
                    borderRadius: '20px',
                  }}>
                  <Typography sx={{ borderBottom: '2px solid #e1e5f2', padding: '20px' }}>Опыт работы</Typography>
                  <Box
                    sx={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <Box sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '20px',
                    }}>
                      {accardionWork}
                    </Box>
                    <CustomButton onClick={addAccardionWorker} innerText="Добавить Опыт работы" />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    border: '2px solid #e1e5f2',
                    borderRadius: '20px',
                  }}>
                  <Typography sx={{ borderBottom: '2px solid #e1e5f2', padding: '20px' }}>Основное
                    образование</Typography>
                  <Box
                    sx={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <Box sx={{
                      display: 'flex',
                      gap: '20px',
                      flexDirection: 'column'
                    }}>
                      {accardionEducation}
                    </Box>
                    <CustomButton onClick={addAccardionEducation} innerText="Добавить образование"></CustomButton>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    border: '2px solid #e1e5f2',
                    borderRadius: '20px',
                  }}>
                  <Typography sx={{ borderBottom: '2px solid #e1e5f2', padding: '20px' }}>Курсы повышения
                    квалификации</Typography>
                  <Box
                    sx={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <Box sx={{
                      display: 'flex',
                      gap: '20px',
                    }}>
                    </Box>
                    <CustomButton innerText="Добавить Курс"></CustomButton>
                  </Box>
                </Box>
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
