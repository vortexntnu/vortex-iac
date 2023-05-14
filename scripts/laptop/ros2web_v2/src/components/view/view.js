import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import './view.css';

function View(props) {
    return (
        <div className="view">
            <article className="feed">
                <canvas></canvas>
            </article>
            <article className="title">
                <h3>{props.title}</h3>
            </article>
            <article className="remove_btn">
                <IconButton 
                    aria-label="delete"
                    sx={{
                        padding: '0px',
                        transform: 'translate(-1px, -4px)'
                    }}
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