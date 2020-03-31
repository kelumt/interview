import React from 'react'

import TextField from '@material-ui/core/TextField';

class DisplayPanel extends React.Component {

    render(){
        return (
            <div id="calc-right-column">
                <div className="input-field">
                    <TextField id="standard-basic" label="Expression" InputProps={{readOnly: true,}} value={this.props.expression} />
                </div>

                <TextField id="standard-basic" label="Answer" InputProps={{readOnly: true,}} value={this.props.answer}/>

            </div>
        )
    }
}

export default DisplayPanel;