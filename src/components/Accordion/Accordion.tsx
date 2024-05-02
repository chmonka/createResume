
import { Accordion, Box, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import List from '@mui/material/List';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';




interface IAccordionProps {
    items: Array<{ title: string; icon: string; content: string[] }>;
}


function Accardion({ items }: IAccordionProps) {
    console.log(items);

    return (
        <Box>
            {items.map((elem, index: number) => {
                console.log(elem);

                return <Accordion
                    key={index}
                    sx={{
                        backgroundColor: "transparent",
                        color: "white"
                    }}
                >
                    <AccordionSummary
                        color="white"
                        expandIcon={<ArrowDownwardIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        {elem.title}
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            {elem.content.map(item => {
                                return <ListItem >
                                    <ListItemIcon sx={{
                                        color: 'white'
                                    }}><LocalPhoneIcon /></ListItemIcon>
                                    <ListItemText primary={item} />
                                </ListItem>
                            })}

                        </List>
                    </AccordionDetails>
                </Accordion>
            })}
        </Box>
    )
}

export default Accardion