import ADD_TOPIC from '../add_topic/add_topic';

import './navbar.css'

function Navbar(props) {
    return(
        <div className="bar">
            <div className="header">
                <h1>{props.header}</h1>
            </div>
            <div className="content">
                <ADD_TOPIC addView={props.addView} ros={props.ros} />
            </div>
        </div>
    )
}

export default Navbar;