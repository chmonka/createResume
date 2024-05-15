import { Accordion, Box, Grid, Typography } from '@mui/material'
import CustomContainer from '../../../../components/Container/CustomContainer.tsx'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import MyTextField from '../../../../components/TextField/MyTextField.tsx'
import MyDocument from '../../../../components/Document/MyDocument.tsx'
import { Candidate, defaultValueForm } from './candidate.ts'
import { Controller, FormProvider, useFieldArray, useForm } from 'react-hook-form'
import SelectForm from '../../../../components/SelectForm/SelectForm.tsx'
import CustomButton from '../../../../components/Button/CustomButton.tsx'
import { useState } from 'react'

const ResumeForm = () => {
  const methods = useForm<Candidate>({ defaultValues: defaultValueForm, mode: 'onChange' })
  const { register, control } = methods

  const { fields, append, remove } = useFieldArray<Candidate>({
    control,
    name: "socialIcon"
  });


  const moneyArray: string[] = ['Руб', '$']
  const dayArray: number[] = Array.from({ length: 31 }, (_, index) => index + 1)
  const yearArray: number[] = Array.from({ length: 21 }, (_, index) => 2000 + index)
  const monthArray: number[] = Array.from({ length: 12 }, (_, index) => index + 1)
  const interestingArray: string[] = ['', 'Полная занятность', 'Частичная занятность', 'Проектная работа', 'Волонтёрство', 'Стажировка']
  const scheduleArray: string[] = ['', 'Полный день', 'Сменный график', 'Гибкий график', 'Удалённая работа', 'Вахтовый метод']
  const socialArray: string[] = [' ', 'vk', 'telegram', 'instagram']
  const [accardion, setAccardion] = useState<Array<JSX.Element>>([])
  const [accardionWork, setAccardionWorker] = useState<Array<JSX.Element>>([])
  const [accardionEducation, setAccardionEducation] = useState<Array<JSX.Element>>([])

  const addAccardionSocial = () => {
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
          <Controller
            control={control}
            name="socialIcon"
            render={({ field: {onChange} }) => (<SelectForm label={'Социальная сеть'} onChange={onChange} array={socialArray} />)} />
          <Controller
            control={control}
            name="link"
            render={({ field: { onChange } }) => (<MyTextField label={'Ссылка'} onChange={onChange} />)} />
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
          <Controller
            control={control}
            name="postJob"
            render={({ field: { onChange } }) => (<MyTextField label={'Должность'} onChange={onChange} />)} />
          <Controller
            control={control}
            name="nameCompany"
            render={({ field: { onChange } }) => (<MyTextField label={'Компания'} onChange={onChange} />)} />
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
              name="monthStartWorking"
              render={({ field: { onChange } }) => (<MyTextField label={'Месяц'} onChange={onChange} />)} />
            <Controller
              control={control}
              name="yearStartWorking"
              render={({ field: { onChange } }) => (<MyTextField label={'Год'} onChange={onChange} />)} />
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
            <Controller
              control={control}
              name="monthEndWorking"
              render={({ field: { onChange } }) => (<MyTextField label={'Месяц'} onChange={onChange} />)} />
            <Controller
              control={control}
              name="yearEndWorking"
              render={({ field: { onChange } }) => (<MyTextField label={'Год'} onChange={onChange} />)} />
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
          <Controller
            control={control}
            name="institution"
            render={({ field: { onChange } }) => (<MyTextField label={'Учебное заведение'} onChange={onChange} />)} />
          <Controller
            control={control}
            name="levelEducation"
            render={({ field: { onChange } }) => (<MyTextField label={'Уровень образования'} onChange={onChange} />)} />
        </Box>
        <Box>
          <Typography>Начало учёбы</Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '20px'
            }}>
            <Controller
              control={control}
              name="faculty"
              render={({ field: { onChange } }) => (<MyTextField label={'Факультет'} onChange={onChange} />)} />
            <Controller
              control={control}
              name="speciality"
              render={({ field: { onChange } }) => (<MyTextField label={'Специальность'} onChange={onChange} />)} />
          </Box>
        </Box>
        <Box>
          <Typography>Окончание учёбы</Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '20px'
            }}>
            <Controller
              control={control}
              name="yearEndEducation"
              render={({ field: { onChange } }) => (<MyTextField label={'Год окончания'} onChange={onChange} />)} />
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion >
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
                      render={({ field: { onChange, value } }) => (<SelectForm label={'День'} value={value} onChange={onChange} array={moneyArray} />)} />
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
                      render={({ field: { onChange, value } }) => (<SelectForm label={'Занятность'} onChange={onChange} value={value} array={interestingArray} />)} />
                    <Controller
                      control={control}
                      name='schedule'
                      render={({ field: { onChange, value } }) => (<SelectForm label={'График работы'} onChange={onChange} value={value} array={scheduleArray} />)} />
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
                    <CustomButton innerText="Добавить социальную сеть" onClick={addAccardionSocial} />
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
