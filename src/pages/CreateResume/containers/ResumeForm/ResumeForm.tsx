import { Box, Grid } from '@mui/material'
import CustomContainer from '../../../../components/Container/CustomContainer.tsx'
import MyDocument from '../../../../components/Document/MyDocument.tsx'
import { Candidate, defaultValueForm } from './candidate.ts'
import { FormProvider, useForm } from 'react-hook-form'
import FormMainInFormation from './Forms/FormMainInformation/FormMainInFormation.tsx'
import FormContacts from './Forms/FormContacts/FormContacts.tsx'
import FormWorkExperience from './Forms/FormWorkExperience/FormWorkExperience.tsx'
import FormEducations from './Forms/FormEducations/FormEducations.tsx'
import FormLanguages from './Forms/FormLanguages/FormLanguages.tsx'
import FormCourses from './Forms/FormCourses/FormCourses.tsx'
import CustomButton from '../../../../components/Button/CustomButton.tsx'

const ResumeForm = () => {
  const methods = useForm<Candidate>({ defaultValues: defaultValueForm, mode: 'onChange' })
  return (
    <Box >
      <FormProvider {...methods}>
        <CustomContainer sx={{position:'relative'}}>
          <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems:'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap:'20px', width:'50%'}}>
              <FormMainInFormation />
              <FormWorkExperience />
              <FormEducations />
              <FormCourses />
              <FormLanguages />
            </Box>
          </Grid>
        </CustomContainer>
      </FormProvider>
    </Box>
  )
}

export default ResumeForm
