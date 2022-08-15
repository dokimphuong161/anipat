import { motion, useCycle } from 'framer-motion';
import { useEffect, useRef } from 'react';

import { RiMenu4Line } from 'react-icons/ri';

// components
import MenuDesktop from './MenuDesktop/MenuDesktop';
import MenuMobile from './MenuMobile/MenuMobile';

// constants
import { images } from '~/constants/images';

// animation
import { bannerInfoVariants, headerVariants } from '~/animations/animations';

const Header = () => {
    // Handle to open menu mobile using Framer Motion
    const [isOpen, toggleOpen] = useCycle(false, true);
    console.log({ isOpen });

    const handleToggleMenu = () => {
        toggleOpen();
    };

    //Handle header fade when scroll down/scroll up
    const headerRef = useRef(null);
    useEffect(() => {
        const fixedHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('scrolled');
                if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                    headerRef.current.classList.add('awake');
                } else {
                    headerRef.current.classList.remove('awake');
                }
            } else {
                headerRef.current.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', fixedHeader);
        return () => {
            window.removeEventListener('scroll', fixedHeader);
        };
    }, []);
    return (
        <motion.header
            variants={headerVariants}
            transition={{ delay: 0.3, duration: 0.6, type: 'tween' }}
            ref={headerRef}
            className="fixed z-50 bg-white shadow-md w-full py-3 md:bg-transparent md:shadow-none lg:py-0 "
        >
            <div className="container mx-auto md:flex md:items-center">
                <div className="flex md:flex-row-reverse gap-x-4 justify-between items-center md:w-auto w-full md:px-0 px">
                    <img alt="No image" src={images.IMG_LOGO} className="md:w-40 w-32" />
                    <div className="lg:hidden block" onClick={handleToggleMenu}>
                        <RiMenu4Line className="text-3xl text-gray-700" />
                    </div>
                </div>
                {/* Menu for desktop */}
                <MenuDesktop />

                {/* Menu for mobile */}
                <MenuMobile isOpen={isOpen} onClose={handleToggleMenu} />
            </div>
        </motion.header>
    );
};

export default Header;
