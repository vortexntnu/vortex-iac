import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import IconButton from '@material-ui/core/IconButton';
import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';
import Add from '@material-ui/icons/Add';

import './add_topic.css'

function Add_topic(props) {
    const [options, setOptions] = useState([]);
    const [value, setValue] = useState('');
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        setOptions(["hei", "hopp", "ja", "nei"]);
    }, [options])

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(value)
    }

    const sizeLarge = useSizedIconButtonStyles({ 
        padding: 16, 
        childSize: 32 
    });

    return(
        <div class="">
            <Autocomplete
                value={value}
                onChange={(event, newValue) => { setValue(newValue); }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => { setInputValue(newInputValue); }}
                id="controllable-states-demo"
                options={options}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Topics" />}
            />

            <IconButton classes={sizeLarge}>
                <Add />
            </IconButton>
        </div>
    )
}

export default Add_topic;