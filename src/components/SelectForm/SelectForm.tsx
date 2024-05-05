import { BaseSelectProps, MenuItem, Select } from '@mui/material'
import { FC } from 'react'

type ISelectForm = BaseSelectProps<string> & {
  array: string[] | number[]
}


const SelectForm: FC<ISelectForm> = ({ array, ...props }) => {
  return (
    <Select {...props}
      sx={{
        width: '100%',
      }}
    >
      {array.map((item, index) => {
        return (
          <MenuItem key={index} value={item}>
            {item}
          </MenuItem>
        )
      })}
    </Select>
  )
}

export default SelectForm
