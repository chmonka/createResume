import { Box, Grid, Typography } from "@mui/material"
import Accordionlist from "../../../../components/Accordion/AccardionList.tsx";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import {useEffect, useState} from "react";

function ResumePreviewContainer() {

    const [editingItem, setEditingItem] = useState<number>();
    // const [selectedItem: number setSelectedItem] = useState<number | null>(null);

    function handleBlock(index: number) {
        setEditingItem(index);
    }

    useEffect(() => {
        console.log(editingItem);
    })



    const items: Array<{ title: string, icon?: JSX.Element, content: string[] }> = [
        {
            title: 'Контакты',
            icon: <LocalPhoneIcon style={{color:'white'}} />,
            content: [
                '+79536563765',
                'smirno@mail.ru',
                'SmimovDima'
            ]
        },
        {
            title: 'Знание языков',
            icon: undefined,
            content: [
                'Русский язык',
                'Английский',
                'Немецкий'
            ]
        },
        {
            title: 'Навыки',
            icon: undefined,
            content: [
                'Публичные выступления',
                'Деловая переписка',
                'Ведение переговоров'
            ]
        }
    ];


    return (
        <Grid
            sx={{
                padding: "0px"
            }}
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

                            <Accordionlist
                                handleBlock={handleBlock}
                                items={items}/>

                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column"
                        }}
                    >
                        <Accordionlist
                            handleBlock={handleBlock}
                            items={items}/>
                    </Box>
                </Box>
        </Grid>
    )
}

export default ResumePreviewContainer