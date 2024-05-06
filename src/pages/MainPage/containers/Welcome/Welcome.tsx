import CustomButton from '../../../../components/Button/CustomButton.js'
import { Link } from 'react-router-dom'
import { Box, Grid, Typography } from '@mui/material'
import CustomContainer from '../../../../components/Container/CustomContainer.js'

function Welcome() {
  return (
    <Box>
      <CustomContainer>
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '100px',
            gap: '40px',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant='subtitle2' fontSize={'20px'}>
              Создание вашего резюме
            </Typography>
            <Typography variant='subtitle2' fontSize={'20px'}>
              Займет всего несколько минут вашего времени
            </Typography>
          </Box>
          <Link to='/createResume'>
            <CustomButton innerText={'Сделать резюме'} />
          </Link>
        </Grid>
      </CustomContainer>
    </Box>
  )
}
export default Welcome
