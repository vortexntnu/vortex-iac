import React, { useState, useEffect } from 'react'
import ROSLIB from 'roslib'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'

import './add_topic.css'

function Add_topic(props) {
    const [options, setOptions] = useState([])
    const [value, setValue] = useState('')
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        const topicsClient = new ROSLIB.Service({
            ros : props.ros,
            name : '/rosapi/topics',
            serviceType : 'rosapi/Topics'
        })

        const request = new ROSLIB.ServiceRequest()
        topicsClient.callService(request, (result) => {
            result.types.map((val, key) => {
                if (val == 'sensor_msgs/CompressedImage' || val == 'sensor_msgs/Image') {
                    if (!options.includes(result.topics[key])) {
                        setOptions(oldOptions => [...oldOptions, {'topic': result.topics[key], 'type': val}])
                    }
                }
            })
        })
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addView(value)
    }

    return(
        <div className="add_topic">
            <Autocomplete
                value={value}
                onChange={(event, newValue) => { setValue(newValue) }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => { setInputValue(newInputValue) }}
                id="controllable-states-demo"
                options={options}
                groupBy={(option) => option.firstLetter}
                getOptionLabel={(option) => option.topic ? option.topic : ""}
                sx={{ 
                    width: 300,
                    transition: '.3s',
                }}
                renderInput={(params) => <TextField {...params} label="Topics" placeholder="Topic" />}
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
                    transition: '.3s',
                    '&:hover': {
                        borderColor: '#000',
                        backgroundColor: 'rgba(0,0,0,.03)'
                    },
                }}
                onClick={ handleSubmit }
            > 
                ADD
            </Button>
        </div>
    )
}

export default Add_topic;