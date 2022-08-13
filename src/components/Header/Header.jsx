import { useEffect, useRef, useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { RiMenu4Line } from 'react-icons/ri';

// components
import MenuDesktop from './MenuDesktop/MenuDesktop';
import MenuMobile from './MenuMobile/MenuMobile';

// constants
import { images } from '~/constants/images';

const Header = () => {
    // Handle to open menu mobile
    const [openMenu, setOpenMenu] = useState(false);
    const handleMenuMobile = () => {
        setOpenMenu((prev) => !prev);
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
        <header
            ref={headerRef}
            className="fixed z-50 bg-white shadow-sm w-full py-3 md:bg-transparent md:shadow-none lg:py-0 "
        >
            <div className="container mx-auto md:flex md:items-center">
                <div className="flex md:flex-row-reverse gap-x-4 justify-between items-center md:w-auto w-full md:px-0 px">
                    <img alt="No image" src={images.IMG_LOGO} className="md:w-40 w-32" />
                    <div className="lg:hidden block" onClick={handleMenuMobile}>
                        <RiMenu4Line className="text-3xl text-gray-700" />
                    </div>
                </div>
                {/* Menu for desktop */}
                <MenuDesktop />

                {/* Menu for mobile */}
                <MenuMobile open={openMenu} onClose={handleMenuMobile} />
            </div>
        </header>
    );
};

export default Header;
