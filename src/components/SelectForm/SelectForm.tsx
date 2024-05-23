import { BaseSelectProps, MenuItem, Select } from '@mui/material'
import { forwardRef } from 'react'

type ISelectForm = BaseSelectProps<string> & {
 array: any[]
}

const SelectForm = forwardRef<HTMLSelectElement, ISelectForm>(
  ({ array, ...props }, ref) => {
    return (
      <Select
        variant="outlined"
        {...props}
        ref={ref}
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
)

export default SelectForm
