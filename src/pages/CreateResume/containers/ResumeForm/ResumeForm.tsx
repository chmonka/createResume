import { Box, Button, Grid } from '@mui/material'
import CustomContainer from '../../../../components/Container/CustomContainer.tsx'
import { Candidate, defaultValueForm } from './candidate.ts'
import { FormProvider, useForm } from 'react-hook-form'
import FormMainInFormation from './Forms/FormMainInformation/FormMainInFormation.tsx'
import FormWorkExperience from './Forms/FormWorkExperience/FormWorkExperience.tsx'
import FormEducations from './Forms/FormEducations/FormEducations.tsx'
import FormLanguages from './Forms/FormLanguages/FormLanguages.tsx'
import FormCourses from './Forms/FormCourses/FormCourses.tsx'
import { useNavigate } from 'react-router-dom'


const ResumeForm = () => {
  const methods = useForm<Candidate>({ defaultValues: defaultValueForm, mode: 'onChange' })
  const {
    handleSubmit,
  } = methods

  const navigate = useNavigate()

  const onSubmit = (data: Candidate) => {
    navigate("/resumeviewform", { state: data });
    console.log(data)
  }

  return (
    <Box>
      <FormProvider {...methods}>
        <CustomContainer sx={{ position: 'relative' }}>
          <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '50%' }}>

              <form onSubmit={handleSubmit(onSubmit)}>
                <FormMainInFormation />
                <FormWorkExperience />
                <FormEducations />
                <FormCourses />
                <FormLanguages />
                <Button type="submit" variant="contained">Submit</Button>
              </form>
            </Box>
            <Box>

            </Box>
          </Grid>
        </CustomContainer>
      </FormProvider>
    </Box>
  )
}

export default ResumeForm
