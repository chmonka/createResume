import {Box, Grid } from '@mui/material'
import CustomContainer from '../../../../components/Container/CustomContainer.tsx'
import MyDocument from '../../../../components/Document/MyDocument.tsx'
import { Candidate, defaultValueForm } from './candidate.ts'
import { FormProvider, useForm } from 'react-hook-form'
import FormMainInFormation from './Forms/FormMainInformation/FormMainInFormation.tsx'
import FormContacts from './Forms/FormContacts/FormContacts.tsx'
import FormWorkExperience from './Forms/FormWorkExperience/FormWorkExperience.tsx'
import FormEducations from './Forms/FormEducations/FormEducations.tsx'
import FormLanguages from './Forms/FormLanguages/FormLanguages.tsx'

const ResumeForm = () => {
  const methods = useForm<Candidate>({ defaultValues: defaultValueForm, mode: 'onChange' })

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
            <FormMainInFormation />
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
                <FormContacts />
                <FormWorkExperience/>
                <FormEducations/>
                <FormLanguages/>
              </Grid>
            </Grid>
          </Grid>
          <MyDocument/>
        </CustomContainer>
      </FormProvider>
    </Box>
  )
}

export default ResumeForm
