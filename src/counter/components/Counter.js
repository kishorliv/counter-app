import React from 'react';
import { Button } from '../../common/Button/components/Button';


const Counter = (props) => {
    const { count, actionIncrement, actionDecrement } = props;

    return(
        <div>
            <h1>Count: {count}</h1>
            <Button buttonText={"Increment"} action={actionIncrement} />
            <Button buttonText={"Decrement"} action={actionDecrement} />
        </div>
    );
};

export  { Counter };
