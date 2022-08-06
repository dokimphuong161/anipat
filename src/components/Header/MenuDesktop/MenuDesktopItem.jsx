import { useEffect, useRef, useState } from 'react';
import { RiArrowDownSLine, RiArrowRightSLine } from 'react-icons/ri';
import { Link } from 'react-scroll';
import Dropdown from './Dropdown';
import PropTypes from 'prop-types';

const MenuDesktopItem = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);

    // Close dropdown
    const ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener('mousedown', handler);
        document.addEventListener('touchstart', handler);
        return () => {
            document.removeEventListener('mousedown', handler);
            document.removeEventListener('touchstart', handler);
        };
    }, [dropdown]);

    //Mouse to open and close dropdown
    const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(true);
    };
    const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
    };
    return (
        <li className="menu-items relative" ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {items.children ? (
                <>
                    <button
                        type="button"
                        aria-haspopup="menu"
                        className="border-none cursor-pointer w-full text-left flex items-center justify-between"
                        onClick={() => setDropdown((prev) => !prev)}
                    >
                        {items.title}
                        {''}
                        {depthLevel > 0 ? <RiArrowRightSLine /> : <RiArrowDownSLine />}
                    </button>
                    <Dropdown dropdown={dropdown} submenus={items.children} depthLevel={depthLevel} />
                </>
            ) : (
                <>
                    <Link
                        activeClass="active"
                        to={items.path}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="block text-left"
                    >
                        {items.title}
                    </Link>
                </>
            )}
        </li>
    );
};

MenuDesktopItem.propTypes = {
    items: PropTypes.object.isRequired,
    depthLevel: PropTypes.number.isRequired,
};

export default MenuDesktopItem;
