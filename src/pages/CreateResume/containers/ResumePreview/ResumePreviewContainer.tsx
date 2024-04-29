import { Box, Grid, Typography } from "@mui/material"
import CustomContainer from "../../../../components/container/CustomContainer"
import Accardion from "../../../../components/Accordion/Accardion";
import { useState } from "react";

function ResumePreviewContainer() {

    // const items = [];

    const [items, setItems] = useState<Array<{ title: string, icon: string, content: string[] }>>([
        {
            title: 'Контакты',
            icon: 'icon-1',
            content: [
                'Item 1',
                'Item 2',
                'Item 3'
            ]
        },
        {
            title: 'Accordion 2',
            icon: 'icon-2',
            content: [
                'Item 4',
                'Item 5',
                'Item 6'
            ]
        },
        {
            title: 'Accordion 3',
            icon: 'icon-3',
            content: [
                'Item 7',
                'Item 8',
                'Item 9'
            ]
        }
    ]
    )

    console.log(items);


    return (
        <Grid
            sx={{
                padding: "0px"
            }}
        >
            <CustomContainer
                flexDirection={"column"}
            >
                <Box sx={{
                    display: "flex",
                    padding: "0px",
                    border: "1px solid white"
                }}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "50px"
                        }}
                    >
                        <Box>
                            <img src="" alt="" />
                            <Grid>
                                <Typography
                                    variant="h2"
                                    fontSize="20px"
                                    color="white"
                                >СМИРНОВ ДМИТРИЙ ВЛАДИМИРОВИЧ</Typography>
                                <Typography
                                    variant="h3"
                                    fontSize="20px"
                                    color="white"
                                >Возраст: 27лет</Typography>
                                <Typography
                                    variant="h3"
                                    fontSize="20px"
                                    color="white"
                                >Должность: ...</Typography>
                                <Typography
                                    variant="h3"
                                    fontSize="20px"
                                    color="white"
                                >Заработная плата: 120000 руб</Typography>
                            </Grid>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px"
                            }}
                        >

                            <Accardion
                                items={items}
                            >

                            </Accardion>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: '100%',
                            display: "flex",
                            flexDirection: "column"
                        }}
                    >
                        <Accardion items={items}/>
                    </Box>
                </Box>
            </CustomContainer>
        </Grid>
    )
}

export default ResumePreviewContainer