import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
const Button = ({
    to,
    href,
    children,
    primary,
    secondary,
    info,
    shape,
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
        shape,
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

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    info: PropTypes.bool,
    shape: PropTypes.bool,
    highlight: PropTypes.bool,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    small: PropTypes.bool,
    hasIcon: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
