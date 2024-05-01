import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {FC} from "react";

interface ImyFormControlProps {
    inputLabel: string;
    value: string;
    handleChange: (event: SelectChangeEvent<string>) => void;
    array: string[]|number[];
}


const MyFormControl:FC<ImyFormControlProps> = ({inputLabel,handleChange,value,array}) => {
    return (
        <FormControl
            sx={{
                width: '100%'
            }}
        >
            <InputLabel id="demo-simple-select-label">{inputLabel}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                onChange={handleChange}
            >
                {array.map((item, index) => {
                    return (
                        <MenuItem key={index} value={item}>{item}</MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    );
};

export default MyFormControl;