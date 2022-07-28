import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MenuDesktopItem from './MenuDesktopItem';

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
    depthLevel = depthLevel + 1;
    const dropdownClasses = classNames('dropdown', { block: dropdown }, { 'dropdown-submenu': depthLevel > 1 });
    return (
        <ul className={dropdownClasses}>
            {submenus.map((submenu, index) => (
                <MenuDesktopItem items={submenu} key={index} depthLevel={depthLevel} />
            ))}
        </ul>
    );
};

Dropdown.propTypes = {};

export default Dropdown;
