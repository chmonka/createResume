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
import FormMainInFormation from './Forms/FormMainInformation/FormMainInFormation.tsx'

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

  const { fields: trainingCourses, append: appendCourses, remove: removeCourses } = useFieldArray<Candidate>({
    name: 'trainingCourses',
    control: control,
  });

  const social = watch('socials')
  const socialArray: string[] = [' ', 'vk', 'telegram', 'instagram']
  const moneyArray: string[] = ['Руб', '$']
  const interestingArray: string[] = ['', 'Полная занятность', 'Частичная занятность', 'Проектная работа', 'Волонтёрство', 'Стажировка']
  const scheduleArray: string[] = ['', 'Полный день', 'Сменный график', 'Гибкий график', 'Удалённая работа', 'Вахтовый метод']
  const dayArray: number[] = Array.from({ length: 31 }, (_, index) => index + 1)
  const yearArray: number[] = Array.from({ length: 21 }, (_, index) => 2000 + index)
  const monthArray: number[] = Array.from({ length: 12 }, (_, index) => index + 1)

  const socialsElement =
    socials.map((field, index) => (
      <Accordion
        key={index}>
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
              <MyTextField label={'Факультет'} onChange={(e) => {
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

  const coursesElement =
    trainingCourses.map((field, index) => (
      <Accordion
        key={index}>
        <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
          <Typography variant={'h6'}>Курсы</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <SelectForm array={dayArray || ''} value={''} label={'Год окончания'} onChange={(e) => {
              setValue(`trainingCourses.${index}.yearEnd`, e.target.value)
            }} />
            <MyTextField label={'Название'} onChange={(e) => {
              setValue(`trainingCourses.${index}.nameCourse`, e.target.value)
            }} />
            <MyTextField label={'Название организации'} onChange={(e) => {
              setValue(`trainingCourses.${index}.nameCompany`, e.target.value)
            }} />
          </Box>
        </AccordionDetails>
      </Accordion>
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
           <FormMainInFormation/>
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
                    })} />
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
                      flexDirection: 'column'
                    }}>
                      {coursesElement}
                    </Box>
                    <CustomButton innerText="Добавить Курс" onClick={() => appendCourses({
                      yearEnd: '',
                      nameCompany: '',
                      nameCourse: '',
                    })} />
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
                  <Typography sx={{ borderBottom: '2px solid #e1e5f2', padding: '20px' }}>Знание языков</Typography>
                  <Box
                    sx={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <Box sx={{
                      display: 'flex',
                      gap: '20px',
                      flexDirection: 'column'
                    }}>
                      {coursesElement}
                    </Box>
                    <CustomButton innerText="Добавить язык" onClick={() => appendCourses({
                      yearEnd: '',
                      nameCompany: '',
                      nameCourse: '',
                    })} />
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
