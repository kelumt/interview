import React from 'react'
import Button from '@material-ui/core/Button';

class ButtonPanel extends React.Component {

    render() {


        const buttonStyle = { minWidth: '60px', width: '60px', height: '60px', margin: '5px' };
        const goButtonStyle = { minWidth: '60px', width: '130px', height: '60px', margin: '5px' };
        const labelStyle = { fontSize: '20px', lineHeight: buttonStyle.height };

        const style = Object.assign({}, buttonStyle);
        const goSTyle = Object.assign({}, goButtonStyle);

        const label = '1';
        const text = '1';

        const primary = false;


        return (
            <div className="input-buttons">
                <Button variant="contained" label={label} style={style} labelStyle={labelStyle} value="1" onClick={this.props.onNumberBtnClick}>{text}</Button>
                <Button variant="contained" label={label} style={style} labelStyle={labelStyle} value="2" onClick={this.props.onNumberBtnClick}>2</Button>
                <Button variant="contained" label={label} style={style} labelStyle={labelStyle} value="3" onClick={this.props.onNumberBtnClick}>3</Button>
                <Button variant="contained" label={label} style={style} labelStyle={labelStyle} value="+" onClick={this.props.onOperatorBtnClick}>+</Button>
                <Button variant="contained" label={label} style={style} labelStyle={labelStyle} value="4" onClick={this.props.onNumberBtnClick}>4</Button>
                <Button variant="contained" label={label} style={style} labelStyle={labelStyle} value="5" onClick={this.props.onNumberBtnClick}>5</Button>
                <Button variant="contained" label={label} style={style} labelStyle={labelStyle} value="6" onClick={this.props.onNumberBtnClick}>6</Button>
                <Button variant="contained" label={label} style={style} labelStyle={labelStyle} value="-" onClick={this.props.onOperatorBtnClick}>-</Button>
                <Button variant="contained" label={label} style={style} labelStyle={labelStyle} value="7" onClick={this.props.onNumberBtnClick}>7</Button>
                <Button variant="contained" label={label} style={style} labelStyle={labelStyle} value="8" onClick={this.props.onNumberBtnClick}>8</Button>
                <Button variant="contained" label={label} style={style} labelStyle={labelStyle} value="9" onClick={this.props.onNumberBtnClick}>9</Button>
                <Button variant="contained" label={label} style={style} labelStyle={labelStyle} value="*" onClick={this.props.onOperatorBtnClick}>*</Button>
                <Button variant="contained" label={label} style={style} labelStyle={labelStyle} value="9" onClick={this.props.onNumberBtnClick}>0</Button>
                <Button variant="contained" label={label} style={style} labelStyle={labelStyle} value="(" onClick={this.props.onOperatorBtnClick}>(</Button>
                <Button variant="contained" label={label} style={style} labelStyle={labelStyle} value=")" onClick={this.props.onOperatorBtnClick}>)</Button>
                <Button variant="contained" label={label} style={style} labelStyle={labelStyle} value="/" onClick={this.props.onOperatorBtnClick}>/</Button>
                <Button variant="contained" label={label} style={style} labelStyle={labelStyle} value="C" onClick={this.props.onClearBtnClick}>C</Button>
                <Button variant="contained" label={label} style={style} labelStyle={labelStyle} value="<" onClick={this.props.onDeleteBtnClick}>&lt;</Button>
                <Button variant="contained" color="primary" label={label} style={goSTyle} labelStyle={labelStyle} value="GO" onClick={this.props.onGoBtnClick}>Go</Button>
            </div>
        )
    }

}

export default ButtonPanel;