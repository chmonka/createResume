import {Accordion, Box, Grid, SelectChangeEvent, Typography} from '@mui/material'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import CustomContainer from '../../../../components/container/CustomContainer.tsx'
import {useState} from 'react'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import MyTextField from '../../../../components/TextField/MyTextField.tsx'
import MyFormControl from '../../../../components/FormControl/MyFormControl.tsx'

const ResumeForm = () => {
    const dayArray: number[] = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
        27, 28, 29, 30, 31,
    ]
    const monthArray: string[] = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]
    const yearArray: number[] = [
        2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015,
        2016, 2017, 2018, 2019, 2020,
    ]
    const moneyArray: string[] = ['Руб', '$']
    const theme = createTheme({
        palette: {
            primary: {
                main: '#FFFFFF',
            },
        },
    })
    const [day, setDay] = useState<string>('')
    const [year, setYear] = useState<string>('')
    const [month, setMonth] = useState<string>('')
    const [money, setMoney] = useState<string>('')

    const handleChangeDay = (event: SelectChangeEvent) => {
        setDay(event.target.value as string)
    }

    const handleChangeYear = (event: SelectChangeEvent) => {
        setYear(event.target.value as string)
    }

    const handleChangeMonth = (event: SelectChangeEvent) => {
        setMonth(event.target.value as string)
    }

    const handleChangeMoney = (event: SelectChangeEvent) => {
        setMoney(event.target.value as string)
    }

    interface Candidate {
        desiredPosition: string
        lastName: string
        firstName: string
        middleName: string
        dateOfBirth: string
        city: string
    }

    const newCandidate: Candidate = {
        desiredPosition: 'Software Engineer',
        lastName: year,
        firstName: 'John',
        middleName: 'A.',
        dateOfBirth: '1990-01-01',
        city: 'New York',
    }

    console.log(newCandidate)

    return (
        <ThemeProvider theme={theme}>
            <CustomContainer>
                <Grid
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                    }}
                >
                    <Grid
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                        }}
                    >
                        <MyTextField label={'Желаемая должность'}/>
                        <MyTextField label={'Фамилия'}/>
                        <MyTextField label={'Имя'}/>
                        <MyTextField label={'Отчество'}/>
                    </Grid>
                    <Grid
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Box>
                            <Typography>Дата рождения</Typography>
                        </Box>
                        <Grid
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                gap: '20px',
                            }}
                        >
                            <Grid
                            sx={{display: 'flex', flexDirection: 'row' , gap: '20px'}}>
                                <MyFormControl
                                    inputLabel={'день'}
                                    value={day}
                                    handleChange={handleChangeDay}
                                    array={dayArray}
                                ></MyFormControl>
                                <MyFormControl
                                    inputLabel={'месяц'}
                                    value={month}
                                    handleChange={handleChangeMonth}
                                    array={monthArray}
                                ></MyFormControl>
                                <MyFormControl
                                    inputLabel={'год'}
                                    value={year}
                                    handleChange={handleChangeYear}
                                    array={yearArray}
                                ></MyFormControl>
                            </Grid>
                            <Accordion
                                sx={{
                                    backgroundColor: 'transparent',
                                    border: '1px solid white',
                                    color: 'white',
                                }}
                            >
                                <AccordionSummary expandIcon={<ArrowDownwardIcon style={{color: 'white'}}/>}>
                                    Дополнительная информация
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            gap: '20px',
                                        }}
                                    >
                                        <MyTextField
                                            label={'Желаемая зарплата'}
                                            type={'number'}
                                            inputProps={{min: 0, step: 5000}}/>
                                        <MyFormControl
                                            value={money}
                                            handleChange={handleChangeMoney}
                                            array={moneyArray}
                                        />
                                        <MyTextField
                                            label={'Гражданство'}
                                            type={'string'}
                                        />
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>

                    </Grid>
                </Grid>
            </CustomContainer>
        </ThemeProvider>
    )
}

export default ResumeForm
