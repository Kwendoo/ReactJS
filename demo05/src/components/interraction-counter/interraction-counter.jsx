import PropTypes from 'prop-types';

const InterractionCounter = (props) => {

    const {step, onIncrement, onDecrement} = props;

    return (
        <div>
            <button onClick={() => onDecrement(step)}>-{step}</button>
            <button onClick={() => onIncrement(step)}>+{step}</button>
        </div>
    );

};

InterractionCounter.defaultProps = {
    step : 1,
    onIncrement : () => {},
    onDecrement : () => {}
};

InterractionCounter.propTypes = {
    step : PropTypes.number,
    onIncrement : PropTypes.func,
    onDecrement : PropTypes.func
};

export default InterractionCounter;