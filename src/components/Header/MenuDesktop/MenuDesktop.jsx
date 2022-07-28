import React from 'react';
import PropTypes from 'prop-types';
import { MENU_ITEMS } from '~/constants/menuItems';
import Button from '~/components/Button';
import MenuDesktopItem from './MenuDesktopItem';

const MenuDesktop = (props) => {
    return (
        <div className="md:flex justify-between items-center hidden ml-8 flex-1">
            <nav>
                <ul className="flex menus">
                    {MENU_ITEMS.map((menu, index) => {
                        const depthLevel = 0;
                        return <MenuDesktopItem items={menu} key={index} depthLevel={depthLevel} />;
                    })}
                </ul>
            </nav>
            <div className="flex">
                <Button secondary small href="https://www.youtube.com/watch?v=LPGQoWG7pno&t=698s" target="_blank">
                    Sign up
                </Button>
                <Button primary small href="https://www.youtube.com/watch?v=LPGQoWG7pno&t=698s" target="_blank">
                    Register
                </Button>
            </div>
        </div>
    );
};

MenuDesktop.propTypes = {};

export default MenuDesktop;
