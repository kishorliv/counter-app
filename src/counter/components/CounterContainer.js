import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Counter } from './Counter';
import { increment, decrement } from '../actions';


class CounterContainer extends Component{

    handleIncrement = () => {
        this.props.increment();
    };

    handleDecrement = () => {
        this.props.decrement();
    };

    render(){
        const { count } = this.props;

        return(
            <Counter count={count} actionIncrement={this.handleIncrement} actionDecrement={this.handleDecrement} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    };
};

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement())
    };
};

const res = connect(
    mapStateToProps, 
    mapDispatchToProps
)(CounterContainer);

export { res };
