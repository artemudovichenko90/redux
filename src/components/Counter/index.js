import React from 'react';
import { connect } from 'react-redux';
import * as counterCreators from './../../actions/counterCreators';

function Counter(props) {
  const { count, step, dispatch, incrementAction, decrementAction, setStepAction } = props;

  const handlerStep = ({ target: { value } }) => {
    setStepAction(Number(value))
  };
  return (
    <div>
      <h2>count:{count}</h2>
      <button onClick={incrementAction}>+</button>
      <button onClick={decrementAction}>-</button>
      <input type='number' value={step} onChange={handlerStep} />
    </div>
  );
}


const mapStateToProps = ({counter}) => counter;
const mapDispatchToProps = (dispatch) => ({
  incrementAction: () => dispatch(counterCreators.increment()),
  decrementAction: () => dispatch(counterCreators.decrement()),
  setStepAction: (newStep) => dispatch(counterCreators.setStep(newStep)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
