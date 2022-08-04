import { useEffect, useRef, useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import Pawsitive from '~/assets/images/pawsitive.png';
import MenuDesktop from './MenuDesktop/MenuDesktop';
import MenuMobile from './MenuMobile/MenuMobile';
const Header = () => {
    //Toggle menu
    const [openMenu, setOpenMenu] = useState(false);

    const handleMenuMobile = () => {
        setOpenMenu((prev) => !prev);
    };

    //Menu effect when scroll
    const headerRef = useRef();
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
            className="z-50 md:bg-transparent bg-white md:shadow-none shadow-sm fixed md:py-0 py-3 w-full"
        >
            <div className="container mx-auto flex items-center">
                <div className="md:w-auto w-full flex justify-between items-center px-4 md:px-0">
                    <img src={Pawsitive} className="md:w-40 w-32" />
                    <div className="md:hidden block" onClick={handleMenuMobile}>
                        <BiMenuAltRight className="text-3xl" />
                    </div>
                </div>
                {/* Menu Desktop */}
                <MenuDesktop />

                {/* Menu Mobile */}
                <MenuMobile open={openMenu} onClose={handleMenuMobile} />
            </div>
        </header>
    );
};

export default Header;
