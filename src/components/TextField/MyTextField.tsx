import {TextField} from '@mui/material'
import {FC} from 'react'

interface IMyTextField {
    label: string
    type?: string
    inputProps?: object
}

const MyTextField: FC<IMyTextField> = ({label, type, inputProps}) => {
    return (
        <TextField
            sx={{width: '100%'}}
            label={label}
            type={type}
            inputProps={inputProps}
        />
    )
}

export default MyTextField
