import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

class Buttons extends React.Component {
    render() {
        return (
            <div>
                <button type="button"  className="btn btn-primary"
                        onClick={ this.props.onIncrement }>
                        +
                </button>
                <button type="button"
                        onClick={ this.props.onDecrement }>
                        -
                </button>
                <Button bsStyle="primary">Primary</Button>
            </div>
        )
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(increment()),
        onDecrement: () => dispatch(decrement())
    }
}

 // 여기선 mapStateToProps가 필요 없으니 undefined
 // 대신 inc와 dec에 대한 action을 전달
Buttons = connect(undefined, mapDispatchToProps)(Buttons);

export default Buttons;
