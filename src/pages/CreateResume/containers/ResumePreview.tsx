import CustomContainer from '../../../components/container/CustomContainer'
import { Grid } from '@mui/material'
import ResumeForm from './ResumeForm/ResumeForm.tsx'

function ResumePreview() {
  return (
    <CustomContainer>
      <Grid
        sx={{
          display: 'flex',
        }}
      >
        <ResumeForm></ResumeForm>
      </Grid>
    </CustomContainer>
  )
}

export default ResumePreview
