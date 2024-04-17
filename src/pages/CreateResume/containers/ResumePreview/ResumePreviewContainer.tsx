import { Box, Container, Typography } from "@mui/material"
import CustomContainer from "../../../../components/container/CustomContainer"


function ResumePreviewContainer() {
  return (
    <Container
      sx={{
        padding: "0px"
      }}
    >
      <CustomContainer>
        <Box sx={{
          padding: "0px"
        }}>
          <Box>
            <Box>
              <img src="" alt="" />
              <Typography
                variant="h2"
                fontSize="20px"
              >СМИРНОВ ДМИТРИЙ ВЛАДИМИРОВИЧ</Typography>
              <Typography
                variant="h3"
              >Возраст: 27лет</Typography>
              <Typography
                variant="h3"
              >Должность: ...</Typography>
              <Typography
                variant="h3"
              >Заработная плата: 120000 руб</Typography>
            </Box>
            <Box>
              <Typography></Typography>
            </Box>
          </Box>
          <Box>

          </Box>
        </Box>
        <Box>

        </Box>
      </CustomContainer>
    </Container>
  )
}

export default ResumePreviewContainer