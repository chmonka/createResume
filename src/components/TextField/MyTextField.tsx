import {TextField} from "@mui/material";
import {FC} from "react";


interface  IMyTextField{
    label:string;
}

const MyTextField : FC<IMyTextField>  = ({label}) => {
    return (
        <TextField
            label={label}
            sx={{
                flex: 1,
                margin: '0 0 0 0',
                color: 'white'
            }}
            inputProps={{style: {fontFamily: 'Arial', color: 'black'}}}
        />
    );
};

export default MyTextField;