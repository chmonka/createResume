import { BaseSelectProps, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { forwardRef } from 'react'

type ISelectForm = BaseSelectProps<string> & {
  array: any[]
}

const SelectForm = forwardRef<HTMLSelectElement, ISelectForm>(
  ({ label, array, ...props }, ref) => {
    return (
      <FormControl sx={{ width: '100%' }}>
        <InputLabel style={{ color: '#000', background: '#FFFFFF' }}>{label}</InputLabel>
        <Select

          variant="outlined"
          {...props}
          ref={ref}>
          {array.map((item, index) => {
            return (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    )
  }
)

export default SelectForm
