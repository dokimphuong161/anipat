import { MENU_ITEMS } from '~/constants/menuItems';
import { MdClose } from 'react-icons/md';
import MenuMobileItem from './MenuMobileItem';
import Button from '~/components/Button';

const MenuMobile = ({ open, onClose }) => {
    return (
        <>
            <div className={`overlay md:hidden ${open ? 'block' : 'hidden'}`}></div>
            <div
                className={`z-50 md:hidden bg-white fixed w-3/4 h-full top-0 py-20 pl-5 duration-500 ${
                    open ? 'right-0' : 'right-[-100%]'
                }`}
            >
                <MdClose onClick={onClose} className="absolute top-4 right-4 text-3xl" />
                <nav>
                    {MENU_ITEMS.map((menu, index) => (
                        <MenuMobileItem items={menu} key={index} />
                    ))}
                </nav>
                <div className="flex mt-4">
                    <Button secondary small href="https://www.youtube.com/watch?v=LPGQoWG7pno&t=698s" target="_blank">
                        Sign up
                    </Button>
                    <Button primary small href="https://www.youtube.com/watch?v=LPGQoWG7pno&t=698s" target="_blank">
                        Register
                    </Button>
                </div>
            </div>
        </>
    );
};

MenuMobile.propTypes = {};

export default MenuMobile;
