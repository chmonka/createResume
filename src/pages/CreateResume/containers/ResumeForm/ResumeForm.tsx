


import { Accordion, Box, Grid, SelectChangeEvent, TextField, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CustomContainer from '../../../../components/container/CustomContainer.tsx'
import { ChangeEvent, useState } from 'react'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import MyTextField from '../../../../components/TextField/MyTextField.tsx'
import MyFormControl from '../../../../components/FormControl/MyFormControl.tsx'
import { PDFViewer } from '@react-18-pdf/renderer'
import { convertToPdf } from 'react-to-pdf-ts'
import MyDocument from '../../../../components/Document/MyDocument.tsx'


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
    const [currency, setСurrency] = useState<string>('')
    const [desiredPosition, setDesiredPosition] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [middleName, setMiddleName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [city, setCity] = useState<string>('')

    const [money, setMoney] = useState<number>(0)


    //Select
    const handleChangeDay = (event: SelectChangeEvent) => {
        setDay(event.target.value as string)
    }

    const handleChangeYear = (event: SelectChangeEvent) => {
        setYear(event.target.value as string)
    }

    const handleChangeMonth = (event: SelectChangeEvent) => {
        setMonth(event.target.value as string)
    }

    const handleСurrency = (event: SelectChangeEvent) => {
        setСurrency(event.target.value as string)
    }

    //TextField
    const handleChangeDesiredPosition = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setDesiredPosition(event.target.value as string)
    }

    const handleName = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setName(event.target.value as string)
    }

    const handleMiddleName = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setMiddleName(event.target.value as string)
    }

    const handleLastName = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setLastName(event.target.value as string)
    }

    const handleCity = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCity(event.target.value as string)
    }

    const handleMoney = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let value = Number(event.target.value)
        setMoney(value)
    }




    interface Candidate {
        desiredPosition: string
        lastName: string
        firstName: string
        middleName: string
        dateOfBirth: string
        city: string
        money: number
        currency: string
    }

    const newCandidate: Candidate = {
        desiredPosition: desiredPosition,
        lastName: lastName,
        firstName: name,
        middleName: middleName,
        dateOfBirth: `${year}-${month}-${day}`,
        city: city,
        money: money,
        currency: currency,
    }

    console.log(newCandidate)

    return (
        <ThemeProvider theme={theme}>
            <CustomContainer
                display={"flex"}
                flexDirection={"row"}
            >
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
                        <MyTextField label={'Желаемая должность'} handleChange={handleChangeDesiredPosition} />
                        <MyTextField label={'Фамилия'} handleChange={handleMiddleName} />
                        <MyTextField label={'Имя'} handleChange={handleName} />
                        <MyTextField label={'Отчество'} handleChange={handleLastName} />
                    </Grid>
                    <Grid
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Box>
                            <Typography sx={{ color: 'white' }}>Дата рождения</Typography>
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
                                sx={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
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
                            <Grid>
                                <MyTextField label={'Город'} handleChange={handleCity}>

                                </MyTextField>
                            </Grid>
                            <Accordion
                                sx={{
                                    backgroundColor: 'transparent',
                                    border: '1px solid white',
                                    color: 'white',
                                }}
                            >
                                <AccordionSummary expandIcon={<ArrowDownwardIcon style={{ color: 'white' }} />}>
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
                                            inputProps={{ min: 0, step: 5000 }}
                                            handleChange={handleMoney}
                                        />
                                        <MyFormControl
                                            value={currency}
                                            handleChange={handleСurrency}
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
                <Box>

                    <MyDocument></MyDocument>
                    <Typography color={'white'}>{newCandidate.firstName}</Typography>
                    <Typography color={'white'}>{newCandidate.middleName}</Typography>
                    <Typography color={'white'}>{newCandidate.lastName}</Typography>
                    <Typography color={'white'}>{newCandidate.city}</Typography>
                    <Typography color={'white'}>{newCandidate.desiredPosition}</Typography>
                    <Typography color={'white'}>{newCandidate.dateOfBirth}</Typography>
                    <Typography color={'white'}>{newCandidate.money} {newCandidate.currency}</Typography>
                </Box>
            </CustomContainer>
        </ThemeProvider>
    )
}

export default ResumeForm
