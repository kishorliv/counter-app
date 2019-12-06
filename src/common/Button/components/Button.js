import React, { Fragment } from 'react';

const Button = (props) => {
    const { buttonText, action } = props;

    return (
        <Fragment>
            <button onClick={action}>{buttonText}</button>
        </Fragment>
    );
};

export {Button};
