import CustomContainer from "../../../components/container/CustomContainer"
import ResumePreviewContainer from "./ResumePreview/ResumePreviewContainer"
import {Grid} from "@mui/material";

function ResumePreview() {
    return (
        <CustomContainer>
            <Grid
                sx={{
                    display: "flex",
                }}
            >
                <ResumePreviewContainer></ResumePreviewContainer>
            </Grid>
        </CustomContainer>
    )
}

export default ResumePreview