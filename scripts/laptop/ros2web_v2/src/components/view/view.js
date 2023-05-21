import React, { useEffect, useRef } from 'react';
import { IconButton, containerClasses } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ROSLIB from 'roslib'

import './view.css';

function View(props) {
    const Canvas = params => {
        const canvasRef = useRef(null)
    
        useEffect(() => {
            const canvas = canvasRef.current
            const context = canvas.getContext('2d') 

            const topic = new ROSLIB.Topic({
                ros: props.ros,
                name: props.topic,
                messageType: props.type,
            })

            topic.subscribe((msg) => {
                var img = new Image()
                img.onload = () => context.drawImage(img, 0, 0, context.canvas.width, context.canvas.height)
                img.src = "data:image/jpeg;base64," + msg.data;
            })    
        }, [])

        return <canvas ref={canvasRef} {...props} />
    }

    
    
    const handleSubmit = (event) => {
        event.preventDefault()
        props.removeFunction(props.topic)
    }

    return (
        <div className="view">
            <article className="feed">
                <Canvas />
            </article>
            <article className="title">
                <h3>{props.topic}</h3>
            </article>
            <article className="remove_btn">
                <IconButton 
                    aria-label="delete"
                    sx={{
                        padding: '0px',
                        transform: 'translate(-1px, -4px)'
                    }}
                    onClick={ handleSubmit }
                >
                    <DeleteIcon
                        color="error"
                        sx={{
                            fontSize: '18px',
                            '&:hover': {
                                color: '#b71c1c'
                            }
                        }} 
                    />
                </IconButton>
            </article>
        </div>
    );
}

export default View;