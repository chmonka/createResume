import { Box, Grid } from '@mui/material'
import CustomContainer from '../../../../components/Container/CustomContainer.tsx'
import { Candidate, defaultValueForm } from './candidate.ts'
import { FormProvider, useForm } from 'react-hook-form'
import FormMainInFormation from './Forms/FormMainInformation/FormMainInFormation.tsx'
import FormWorkExperience from './Forms/FormWorkExperience/FormWorkExperience.tsx'
import FormEducations from './Forms/FormEducations/FormEducations.tsx'
import FormLanguages from './Forms/FormLanguages/FormLanguages.tsx'
import FormCourses from './Forms/FormCourses/FormCourses.tsx'
import { Link } from 'react-router-dom'
import MyDocument from '../../../../components/Document/MyDocument.tsx'

const ResumeForm = () => {
  const methods = useForm<Candidate>({ defaultValues: defaultValueForm, mode: 'onChange' })
  return (
    <Box >
      <FormProvider {...methods}>
        <CustomContainer sx={{ position: 'relative' }}>
          <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '50%' }}>
              <FormMainInFormation />
              <FormWorkExperience />
              <FormEducations />
              <FormCourses />
              <FormLanguages />
            </Box>
            <Box>
              <Link to={'/resumeviewform'}>
                <button type="button">Перейти</button>
              </Link>
            </Box>
          </Grid>
        </CustomContainer>
      </FormProvider>
    </Box>
  )
}

export default ResumeForm
