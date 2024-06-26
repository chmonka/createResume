import { Box, Grid, Typography } from '@mui/material'
import { Candidate, defaultValueForm } from './candidate.ts'
import { FormProvider, useForm } from 'react-hook-form'
import FormMainInFormation from './Forms/FormMainInFormation.tsx'
import FormWorkExperience from './Forms/FormWorkExperience.tsx'
import FormLanguages from './Forms/FormLanguages.tsx'
import { useNavigate } from 'react-router-dom'
import FormCourses from './Forms/FormCourses.tsx'
import FormEducations from './Forms/FormEducations.tsx'
import CustomButton from '../../../components/Button/CustomButton.tsx'
import CustomContainer from '../../../components/Container/CustomContainer.tsx'


const ResumeForm = () => {
  const methods = useForm<Candidate>({ defaultValues: defaultValueForm, mode: 'onChange' })
  const {
    handleSubmit,
  } = methods
  const navigate = useNavigate()
  const onSubmit = (data: Candidate) => {
    navigate("/resumeviewform", { state: data });
  }
  return (
    <Box>
      <FormProvider {...methods}>
        <CustomContainer sx={{ position: 'relative' }} >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', margin: '20px 0' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '50%' }}>
                <FormMainInFormation />
                <FormWorkExperience />
                <FormEducations />
                <FormCourses />
                <FormLanguages />
              </Box>
              <Box sx={{ position: "sticky", top: "0", display: 'flex', flexDirection: 'column', width: '30%', margin: "0 20px" }}>
                <Box sx={{ display: 'flex', padding: '20px 0' }}>
                  <Typography>Заполните обязательные поля чтобы сформировать резюме</Typography>
                </Box>
                <CustomButton type="submit" innerText='Сформировать резюме' />
              </Box>
            </Grid>
          </form>
        </CustomContainer>
      </FormProvider>
    </Box>
  )
}

export default ResumeForm
