import { MdClose, MdPhoneInTalk } from 'react-icons/md';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// data
import { menuItems } from '~/data/initData';

// components
import MenuMobileItem from './MenuMobileItem';
import Button from '~/components/Button';

const MenuMobile = ({ open, onClose }) => {
    // Get menu items data
    const [menus, setMenus] = useState([]);
    useEffect(() => {
        if (!!menuItems) {
            setMenus(menuItems);
        } else {
            console.log('Data is empty');
        }
    }, []);

    return (
        <>
            <div className={`overlay lg:hidden ${open ? 'block' : 'hidden'}`}></div>
            <div
                className={`z-50 fixed overflow-scroll scrollbar-hide top-0 py-16 pl-6 bg-white sm:w-1/2 md:w-2/5 w-3/4 h-full  duration-500 lg:hidden ${
                    open ? 'right-0' : 'right-[-100%]'
                }`}
            >
                <MdClose onClick={onClose} className="absolute top-4 right-4 text-3xl text-gray-700" />
                <nav>
                    {menus.map((menu, index) => (
                        <MenuMobileItem items={menu} key={index} />
                    ))}
                </nav>
                <div className="flex mt-4">
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
        </>
    );
};

MenuMobile.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

MenuMobile.defaultProps = {
    open: false,
    onClose: null,
};

export default MenuMobile;
