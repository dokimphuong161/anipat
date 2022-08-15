import { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import PropTypes from 'prop-types';

// animations
import { menuMobileItemVariants } from '~/animations/animations';

const MenuMobileItem = ({ items }) => {
    const [openItem, setOpenItem] = useState(false);
    const handleToggleItem = () => {
        setOpenItem((prev) => !prev);
    };
    return (
        <motion.div className="py-[6px]" variants={menuMobileItemVariants}>
            {items.children ? (
                <>
                    <div className="flex items-center hover:text-primary-800 font-semibold" onClick={handleToggleItem}>
                        <span>{items.title}</span>
                        <MdOutlineKeyboardArrowDown
                            className={`transition ml-4 duration-300  ${openItem ? 'rotate-180' : ''}`}
                        />
                    </div>
                    <div className={`px-6 h-0 overflow-hidden border-b-0 ${openItem ? 'h-auto pt-[6px] ' : ''}`}>
                        {items.children.map((submenu, index) => (
                            <MenuMobileItem items={submenu} key={index} />
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <Link
                        to={items.path}
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="hover:text-primary-800 font-semibold"
                    >
                        {items.title}
                    </Link>
                </>
            )}
        </motion.div>
    );
};

MenuMobileItem.propTypes = {
    items: PropTypes.object.isRequired,
};

MenuMobileItem.defaultProps = {
    items: null,
};
export default MenuMobileItem;
