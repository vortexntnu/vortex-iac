import ADD_TOPIC from '../add_topic/add_topic';

import './navbar.css'

function Navbar(props) {
    return(
        <div class="bar">
            <div class="header">
                <h1>{props.header}</h1>
            </div>
            <div class="content">
                <ADD_TOPIC />
            </div>
        </div>
    )
}

export default Navbar;