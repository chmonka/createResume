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
  const { register, control, setValue, watch } = methods

  const { fields: socials, append: appendSocial, remove: removeSocial } = useFieldArray<Candidate>({
    name: 'socials',
    control: control,
  });

  const { fields: jobs, append: appendJob, remove: removeJob } = useFieldArray<Candidate>({
    name: 'jobs',
    control: control,
  });

  const { fields: education, append: appendEducation, remove: removeEducation } = useFieldArray<Candidate>({
    name: 'education',
    control: control,
  });



  const social = watch('socials')
  const jobsValue = watch('jobs')
  const educationArray = watch('education')
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

  const socialsElement =
    socials.map((field, index) => (
      <Accordion
        key={index}
      >
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
            <SelectForm value={social[index].icon} label={'Социальная сеть'} onChange={(e) => {
              setValue(`socials.${index}.icon`, e.target.value)
            }} array={socialArray} />
            <MyTextField label={'Ссылка'} onChange={(e) => {
              setValue(`socials.${index}.link`, e.target.value)
            }} />
          </Box>
        </AccordionDetails>
      </Accordion>
    ))
  const jobsWorkerElement =
    jobs.map((field, index) => (
      <Accordion
        key={index}
        sx={{
          width: '100%'
        }}>
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
            <MyTextField label={'Должность'} onChange={(e) => {
              setValue(`jobs.${index}.postJob`, e.target.value)
            }} />
            <MyTextField label={'Компания'} onChange={(e) => {
              setValue(`jobs.${index}.nameCompany`, e.target.value)
            }} />
          </Box>
          <Box>
            <Typography>Начало работы</Typography>
            <Box
              sx={{
                display: 'flex',
                gap: '20px'
              }}>
              <SelectForm array={monthArray} label={'Месяц'} onChange={(e) => {
                setValue(`jobs.${index}.monthStart`, e.target.value)
              }} />
              <SelectForm array={yearArray} label={'Год'} onChange={(e) => {
                setValue(`jobs.${index}.yearStart`, e.target.value)
              }} />
            </Box>
          </Box>
          <Box>
            <Typography>Окончание работы</Typography>
            <Box
              sx={{
                display: 'flex',
                gap: '20px'
              }}>
              <SelectForm array={monthArray} label={'Месяц'} onChange={(e) => {
                setValue(`jobs.${index}.monthEnd`, e.target.value)
              }} />
              <SelectForm array={yearArray} label={'Год'} onChange={(e) => {
                setValue(`jobs.${index}.yearEnd`, e.target.value)
              }} />
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
    ))

  const educationElement =
    education.map((field, index) => (
      <Accordion
        key={index}
        sx={{
          width: '100%'
        }}>
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
            <MyTextField label={'Учебное заведение'} onChange={(e) => {
              setValue(`education.${index}.institution`, e.target.value)
            }} />
            <MyTextField label={'Уровень образования'} onChange={(e) => {
              setValue(`education.${index}.levelEducation`, e.target.value)
            }} />
          </Box>
          <Box>
            <Typography>Начало учёбы</Typography>
            <Box
              sx={{
                display: 'flex',
                gap: '20px'
              }}>
              <MyTextField label={'Факультет'}   onChange={(e) => {
                setValue(`education.${index}.faculty`, e.target.value)
              }} />
              <MyTextField label={'Специальность'} onChange={(e) => {
                setValue(`education.${index}.speciality`, e.target.value)
              }} />
            </Box>
          </Box>
          <Box>
            <Typography>Окончание учёбы</Typography>
            <Box
              sx={{
                display: 'flex',
                gap: '20px'
              }}>
              <SelectForm value={''} array={dayArray || ''} label={'Год окончания'} onChange={(e) => {
                setValue(`education.${index}.yearEndEducation`, e.target.value)
              }} />
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion >
    ))

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
                      {socialsElement}
                    </Box>
                    <CustomButton innerText="Добавить социальную сеть" onClick={() => { appendSocial({ icon: '', link: '' }) }} />
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
                      {jobsWorkerElement}
                    </Box>
                    <CustomButton innerText="Добавить Опыт работы" onClick={() => {
                      appendJob({
                        postJob: '',
                        nameCompany: '',
                        monthStart: '',
                        yearStart: '',
                        monthEnd: '',
                        yearEnd: ''
                      })
                    }} />
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
                      {educationElement}
                    </Box>
                    <CustomButton innerText="Добавить образование" onClick={() => appendEducation({
                      institution: '',
                      levelEducation: '',
                      faculty: '',
                      speciality: '',
                      yearEndEducation: ''
                    })}></CustomButton>
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
                      <SelectForm array={yearArray} label={'Год окончания'} ></SelectForm>
                      <MyTextField label={'Название'}></MyTextField>
                      <MyTextField label={'Название организации'}></MyTextField>
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
