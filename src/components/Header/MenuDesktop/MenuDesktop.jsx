import React from 'react';
import PropTypes from 'prop-types';
import { MENU_ITEMS } from '~/constants/menuItems';
import Button from '~/components/Button';
import MenuDesktopItem from './MenuDesktopItem';
import { MdPhoneInTalk } from 'react-icons/md';

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
                <Button
                    className="text-[14px] font-bold group hover:bg-black"
                    hasIcon
                    primary
                    small
                    leftIcon={<MdPhoneInTalk />}
                    href="https://www.youtube.com/watch?v=LPGQoWG7pno&t=698s"
                    target="_blank"
                >
                    +84 967028275
                </Button>
            </div>
        </div>
    );
};

MenuDesktop.propTypes = {};

export default MenuDesktop;
