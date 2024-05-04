import { Accordion, Box, Grid, Typography } from '@mui/material'
import CustomContainer from '../../../../components/Container/CustomContainer.tsx'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import MyTextField from '../../../../components/TextField/MyTextField.tsx'
import MyDocument from '../../../../components/Document/MyDocument.tsx'
import { Candidate, defaultValueForm } from './candidate.ts'
import { useForm } from 'react-hook-form'

const ResumeForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    getFieldState,
    watch,
    formState: { errors },
  } = useForm<Candidate>({ defaultValues: defaultValueForm })

  console.log(watch())

  const moneyArray: string[] = ['Руб', '$']
  const dayArray: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
    27, 28, 29, 30, 31,
  ]
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
  const yearArray: number[] = [
    2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015,
    2016, 2017, 2018, 2019, 2020,
  ]

  return (
    <Box sx={{ backgroundColor: '#190028', paddingTop: '40px' }}>
      <CustomContainer display={'flex'} flexDirection={'row'}>
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
              <Grid sx={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                {/*<SelectForm*/}
                {/*  label={'День'}*/}
                {/*  onChange={handleChangeDay}*/}
                {/*  array={dayArray}*/}
                {/*></SelectForm>*/}
              </Grid>
              <Grid>
                <MyTextField label={'Город'}></MyTextField>
              </Grid>
              <Accordion
                sx={{
                  backgroundColor: 'transparent',
                  border: '1px solid white',
                  color: 'white',
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
                    {/*<MyTextField*/}
                    {/*  label={'Желаемая зарплата'}*/}
                    {/*  type={'number'}*/}
                    {/*  inputProps={{ min: 0, step: 5000 }}*/}
                    {/*  onChange={handleMoney}*/}
                    {/*/>*/}
                    {/*<MyFormControl*/}
                    {/*  value={currency}*/}
                    {/*  handleChange={handleСurrency}*/}
                    {/*  array={moneyArray}*/}
                    {/*/>*/}
                    <MyTextField label={'Гражданство'} type={'string'} />
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Grid>
        <Box></Box>
        <MyDocument></MyDocument>
      </CustomContainer>
    </Box>
  )
}

export default ResumeForm
