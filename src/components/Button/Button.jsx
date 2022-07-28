import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Button = ({ to, href, onClick, children, primary, secondary, info, highlight, small = false, ...resProps }) => {
    const props = { onClick, ...resProps };

    let Comp = 'button';

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const btnClasses = classNames('btn', { primary, secondary, info, highlight, small });

    return (
        <Comp className={btnClasses} {...props}>
            <span>{children}</span>
        </Comp>
    );
};

Button.propTypes = {};

export default Button;
