import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material"
import CustomButton from "../../../../../../components/Button/CustomButton"
import { useFieldArray, useFormContext } from "react-hook-form";
import { Candidate } from "../../candidate";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import MyTextField from "../../../../../../components/TextField/MyTextField";
import SelectForm from "../../../../../../components/SelectForm/SelectForm";



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

    const languagesElement = languages.map((field, index) => (
        <Accordion key={index}>
            <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
                <Typography variant={'h6'}>
                    {object[index].nameLanguage}
                </Typography>
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


    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                border: '2px solid #e1e5f2',
                borderRadius: '20px',
            }}>
            <Typography sx={{ borderBottom: '2px solid #e1e5f2', padding: '20px' }}>Знание языков</Typography>
            <Box
                sx={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Box sx={{
                    display: 'flex',
                    gap: '20px',
                    flexDirection: 'column'
                }}>
                </Box>
                {languagesElement}
                <CustomButton innerText="Добавить язык" onClick={() => {
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