import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
// import IconButton from '@material-ui/core/IconButton';
// import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';
import AddIcon from '@mui/icons-material/Add';

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
    

    const CustomButton = styled(Button)({
        color: '#bdbdbd',
        border: '1px, solid',
        borderColor: '#bdbdbd',
        borderRadius: '4px',
        paddingLeft: '20px',
        paddingRight: '20px',
        '&:hover': {
            borderColor: '#000',
            color: '#000'
        },
      });

    return(
        <div class="add_topic">
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

            <CustomButton startIcon={<AddIcon />} onClick={handleSubmit}> ADD </CustomButton>
        </div>
    )
}

export default Add_topic;