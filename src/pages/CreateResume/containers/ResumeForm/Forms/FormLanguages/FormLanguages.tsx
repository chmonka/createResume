import { Accordion, AccordionDetails, AccordionSummary, Box, IconButton, Typography } from "@mui/material"
import CustomButton from "../../../../../../components/Button/CustomButton"
import { useFieldArray, useFormContext } from "react-hook-form";
import { Candidate } from "../../candidate";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import SelectForm from "../../../../../../components/SelectForm/SelectForm";
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from "react";
import LanguageIcon from '@mui/icons-material/Language';

function FormLanguages() {

    const methods = useFormContext<Candidate>()
    const { control, setValue, watch } = methods
    const { fields: languages, append: appendLanguages, remove: removeLanguages } = useFieldArray<Candidate>({
        name: 'languages',
        control: control,
    });
    const arrayLevelLanguages = ['A1-начальный', 'A2-элементарный', 'B1-пороговый', 'B2-промежуточный', 'C1-продвинутый', 'C2-совершенный']
    const foreignLanguages = ["Испанский", "Французский", "Немецкий", "Японский", "Русский", "Китайский", "Арабский", "Португальский", "Итальянский", "Корейский"]
    const object = watch('languages')
    const [disabledButton, setDisabled] = useState(false)
    const languagesElement = languages.map((field, index) => (
        <Accordion key={index}>
            <AccordionSummary expandIcon={<ArrowDownwardIcon />} >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row-reverse', width: '100%' }}>
                    <IconButton onClick={() => removeLanguages(index)}>
                        <DeleteIcon />
                    </IconButton>
                    <Typography variant={'h6'}>
                        {object[index].nameLanguage}
                    </Typography>
                </Box>
            </AccordionSummary>
            <AccordionDetails>
                <Box
                    sx={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                    <SelectForm array={foreignLanguages || ''} value={object[index].nameLanguage} label={'Язык'} onChange={(e) => {
                        setValue(`languages.${index}.nameLanguage`, e.target.value)
                    }} />
                    <SelectForm array={arrayLevelLanguages || ''} value={object[index].levelLanguage} label={'Уровень'} onChange={(e) => {
                        setValue(`languages.${index}.levelLanguage`, e.target.value)
                    }} />
                </Box>
            </AccordionDetails>
        </Accordion>
    ))
    useEffect(() => {
        setDisabled(languages.length >= 3);
    }, [languages.length]);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                border: '2px solid #ccdbfd',
                borderRadius: '5px',
            }}>  
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', borderBottom: '2px solid #e1e5f2', padding: '10px 20px', gap: '20px' }}>
                <LanguageIcon sx={{ fontSize: '40px' }} />
                <Typography variant='h2'>Знание языков</Typography>
            </Box>
            <Box
                sx={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Box sx={{
                    display: 'flex',
                    gap: '20px',
                    flexDirection: 'column'
                }}>
                </Box>
                {languagesElement}
                <CustomButton
                    disabled={disabledButton}
                    innerText="Добавить язык" onClick={() => {
                        appendLanguages({
                            nameLanguage: '',
                            levelLanguage: ''
                        })
                    }} />
            </Box>
        </Box>
    )
}

export default FormLanguages