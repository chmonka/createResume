import CustomContainer from '../Container/CustomContainer.tsx'
import { AppBar, Box, Grid, Toolbar, Typography } from '@mui/material'

function Header() {
  return (
    <Box sx={{ backgroundColor:'#220135', padding: '0', margin: '0' , boxShadow:'0px -5px 5px -5px rgba(255, 255, 255, 0.6) inset'}}>
      <CustomContainer>
        <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none', padding:0, margin:0}}>
          <Toolbar sx={{display:'flex', justifyContent:'space-between', padding:0, margin:0}}>
            <Typography variant="h6">
              Logo
            </Typography>
            <Grid>
              <Typography variant="h6" sx={{ color: '#000'}}>
              </Typography>
              <Typography variant="h6" sx={{ color: '#000' }}>
              </Typography>
            </Grid>
          </Toolbar>
        </AppBar>
      </CustomContainer>
    </Box>
  )
}

export default Header
