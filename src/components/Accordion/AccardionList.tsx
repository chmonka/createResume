import {Accordion, Box, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import List from '@mui/material/List';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {FC} from "react";


interface IAccordionProps {
    handleBlock: (index: number) => void
    handleListItem: (index: number) => void;
    items: Array<{ title: string; icon?: JSX.Element; content: string[] }>;
}

const Accordionlist: FC<IAccordionProps> = ({items, handleBlock,handleListItem }) => {
    return (
        <Box sx={{flexDirection: 'column', display: 'flex', gap: '20px'}}>
            {items.map((elem, index) => (
                <Accordion key={index} onClick={() => handleBlock(index)}
                           sx={{backgroundColor: 'transparent', border: '1px solid white', color: 'white'}}>
                    <AccordionSummary expandIcon={<ArrowDownwardIcon style={{color: 'white'}}/>}>
                        {elem.title}
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            {elem.content.map((item, index) => (
                                <ListItem key={index} >
                                    <ListItemIcon sx={{color: 'white',}}>{elem.icon}</ListItemIcon>
                                    <ListItemText sx={{color: 'white',border: '1px solid white'}} onClick={()=>{
                                        // console.log(1)
                                        handleListItem(index)}} primary={item}/>
                                </ListItem>
                            ))}
                        </List>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
};

export default Accordionlist