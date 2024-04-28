import {Accordion, Box, Grid, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material"
import List from '@mui/material/List';
import CustomContainer from "../../../../components/container/CustomContainer"
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function ResumePreviewContainer() {
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
                            <img src="" alt=""/>
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
                            <Accordion
                                sx={{
                                    backgroundColor: "transparent",
                                    color: "white"
                                }}
                            >
                                <AccordionSummary
                                    color="white"
                                    expandIcon={<ArrowDownwardIcon/>}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    Контакты
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List>
                                        <ListItem>
                                            <ListItemIcon sx={{
                                                color: 'white'
                                            }}><LocalPhoneIcon/></ListItemIcon>
                                            <ListItemText primary={`+79536563765`}/>
                                        </ListItem>
                                    </List>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <List>
                                        <ListItem>
                                            <ListItemIcon sx={{
                                                color: 'white'
                                            }}><LocalPhoneIcon/></ListItemIcon>
                                            <ListItemText primary={`smimov-dima@mail.ru`}/>
                                        </ListItem>
                                    </List>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <List>
                                        <ListItem>
                                            <ListItemIcon sx={{
                                                padding: '0px',
                                                color: 'white'
                                            }}><LocalPhoneIcon/></ListItemIcon>
                                            <ListItemText primary={`SmirnovDima`}/>
                                        </ListItem>
                                    </List>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion
                                sx={{
                                    backgroundColor: "transparent",
                                    color: "white"
                                }}
                            >
                                <AccordionSummary
                                    color="white"
                                    expandIcon={<ArrowDownwardIcon/>}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    Знание языков
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List>
                                        <ListItem>
                                            <ListItemIcon sx={{
                                                color: 'white'
                                            }}><LocalPhoneIcon/></ListItemIcon>
                                            <ListItemText primary={`+79536563765`}/>
                                        </ListItem>
                                    </List>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <List>
                                        <ListItem>
                                            <ListItemIcon sx={{
                                                color: 'white'
                                            }}><LocalPhoneIcon/></ListItemIcon>
                                            <ListItemText primary={`smimov-dima@mail.ru`}/>
                                        </ListItem>
                                    </List>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <List>
                                        <ListItem>
                                            <ListItemIcon sx={{
                                                padding: '0px',
                                                color: 'white'
                                            }}><LocalPhoneIcon/></ListItemIcon>
                                            <ListItemText primary={`SmirnovDima`}/>
                                        </ListItem>
                                    </List>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion
                                sx={{
                                    backgroundColor: "transparent",
                                    color: "white"
                                }}
                            >
                                <AccordionSummary
                                    color="white"
                                    expandIcon={<ArrowDownwardIcon/>}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    Навыки
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List>
                                        <ListItem>
                                            <ListItemIcon sx={{
                                                color: 'white'
                                            }}><LocalPhoneIcon/></ListItemIcon>
                                            <ListItemText primary={`+79536563765`}/>
                                        </ListItem>
                                    </List>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <List>
                                        <ListItem>
                                            <ListItemIcon sx={{
                                                color: 'white'
                                            }}><LocalPhoneIcon/></ListItemIcon>
                                            <ListItemText primary={`smimov-dima@mail.ru`}/>
                                        </ListItem>
                                    </List>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <List>
                                        <ListItem>
                                            <ListItemIcon sx={{
                                                padding: '0px',
                                                color: 'white'
                                            }}><LocalPhoneIcon/></ListItemIcon>
                                            <ListItemText primary={`SmirnovDima`}/>
                                        </ListItem>
                                    </List>
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: '100%',
                            display: "flex",
                            flexDirection: "column"
                        }}
                    >
                        <Accordion
                            sx={{
                                backgroundColor: "transparent",
                                color: "white"
                            }}
                        >
                            <AccordionSummary
                                color="white"
                                expandIcon={<ArrowDownwardIcon/>}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                Контакты
                            </AccordionSummary>
                            <AccordionDetails>
                                <List>
                                    <ListItem>
                                        <ListItemIcon sx={{
                                            color: 'white'
                                        }}><LocalPhoneIcon/></ListItemIcon>
                                        <ListItemText primary={`+79536563765`}/>
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                            <AccordionDetails>
                                <List>
                                    <ListItem>
                                        <ListItemIcon sx={{
                                            color: 'white'
                                        }}><LocalPhoneIcon/></ListItemIcon>
                                        <ListItemText primary={`smimov-dima@mail.ru`}/>
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                            <AccordionDetails>
                                <List>
                                    <ListItem>
                                        <ListItemIcon sx={{
                                            padding: '0px',
                                            color: 'white'
                                        }}><LocalPhoneIcon/></ListItemIcon>
                                        <ListItemText primary={`SmirnovDima`}/>
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            sx={{
                                backgroundColor: "transparent",
                                color: "white"
                            }}
                        >
                            <AccordionSummary
                                color="white"
                                expandIcon={<ArrowDownwardIcon/>}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                Знание языков
                            </AccordionSummary>
                            <AccordionDetails>
                                <List>
                                    <ListItem>
                                        <ListItemIcon sx={{
                                            color: 'white'
                                        }}><LocalPhoneIcon/></ListItemIcon>
                                        <ListItemText primary={`+79536563765`}/>
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                            <AccordionDetails>
                                <List>
                                    <ListItem>
                                        <ListItemIcon sx={{
                                            color: 'white'
                                        }}><LocalPhoneIcon/></ListItemIcon>
                                        <ListItemText primary={`smimov-dima@mail.ru`}/>
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                            <AccordionDetails>
                                <List>
                                    <ListItem>
                                        <ListItemIcon sx={{
                                            padding: '0px',
                                            color: 'white'
                                        }}><LocalPhoneIcon/></ListItemIcon>
                                        <ListItemText primary={`SmirnovDima`}/>
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            sx={{
                                backgroundColor: "transparent",
                                color: "white"
                            }}
                        >
                            <AccordionSummary
                                color="white"
                                expandIcon={<ArrowDownwardIcon/>}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                Навыки
                            </AccordionSummary>
                            <AccordionDetails>
                                <List>
                                    <ListItem>
                                        <ListItemIcon sx={{
                                            color: 'white'
                                        }}><LocalPhoneIcon/></ListItemIcon>
                                        <ListItemText primary={`+79536563765`}/>
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                            <AccordionDetails>
                                <List>
                                    <ListItem>
                                        <ListItemIcon sx={{
                                            color: 'white'
                                        }}><LocalPhoneIcon/></ListItemIcon>
                                        <ListItemText primary={`smimov-dima@mail.ru`}/>
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                            <AccordionDetails>
                                <List>
                                    <ListItem>
                                        <ListItemIcon sx={{
                                            padding: '0px',
                                            color: 'white'
                                        }}><LocalPhoneIcon/></ListItemIcon>
                                        <ListItemText primary={`SmirnovDima`}/>
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Box>
            </CustomContainer>
        </Grid>
    )
}

export default ResumePreviewContainer