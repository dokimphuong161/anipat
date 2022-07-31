import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Button = ({
    to,
    href,
    children,
    primary,
    secondary,
    info,
    highlight,
    leftIcon,
    rightIcon,
    small = false,
    hasIcon,
    className,
    onClick,
    ...resProps
}) => {
    const props = { onClick, ...resProps };

    let Comp = 'button';

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const btnClasses = classNames('btn', {
        primary,
        secondary,
        info,
        highlight,
        small,
        hasIcon,
        [className]: className,
    });

    return (
        <Comp className={btnClasses} {...props}>
            {leftIcon && <span className="icon">{leftIcon}</span>}
            <span className="title">{children}</span>
            {rightIcon && <span className="icon">{rightIcon}</span>}
        </Comp>
    );
};

Button.propTypes = {};

export default Button;
