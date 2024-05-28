import { BaseSelectProps, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { forwardRef } from 'react'

type ISelectForm = BaseSelectProps<string> & {
  array: any[]
}

const SelectForm = forwardRef<HTMLSelectElement, ISelectForm>(
  ({label, array, ...props }, ref) => {
    return (
      <FormControl>
        <InputLabel style={{ color: '#000',background:'#FFFFFF' }}>{label}</InputLabel>
        <Select
          variant="outlined"
          {...props}
          ref={ref}
          sx={{
            width: '150px',
 
            fontSize:'12px',
           
          }}
        >
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
