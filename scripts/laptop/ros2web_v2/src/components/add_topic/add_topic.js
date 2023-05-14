import React, { useState, useEffect } from 'react';
import ROSLIB from 'roslib';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import './add_topic.css'

function Add_topic(props) {
    useEffect(() => {
        const topicsClient = new ROSLIB.Service({
            ros : props.ros,
            name : '/rosapi/topics',
            serviceType : 'rosapi/Topics'
        });

        const request = new ROSLIB.ServiceRequest();
        const topicOptions = topicsClient.callService(request, (result) => {
            // console.log(result.topics)
            return(result.topics)
        });
        console.log(topicOptions)
    }, [])
    
    const [options, setOptions] = useState([]);
    const [value, setValue] = useState('');
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(value)
        props.addView(value)
    }

    return(
        <div className="add_topic">
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

            <Button 
                startIcon={<AddIcon />}
                sx={{
                    color: '#000',
                    border: '1px solid',
                    borderColor: '#bdbdbd',
                    borderRadius: '4px',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    '&:hover': {
                        borderColor: '#000',
                        backgroundColor: 'rgba(0,0,0,.03)'
                    },
                }}
                onClick={handleSubmit}
            > 
                ADD
            </Button>
        </div>
    )
}

export default Add_topic;