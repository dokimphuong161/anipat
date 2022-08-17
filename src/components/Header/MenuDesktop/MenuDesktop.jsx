import { useEffect, useState } from 'react';
import { MdPhoneInTalk } from 'react-icons/md';

// data
import { menuItems } from '~/data/initData';

//  components
import MenuDesktopItem from './MenuDesktopItem';
import Button from '~/components/Button';

const MenuDesktop = () => {
    // Get menu items data
    const [menus, setMenus] = useState([]);
    useEffect(() => {
        if (!!menuItems) {
            setMenus(menuItems);
        } else {
            console.log('Not data');
        }
    }, []);
    return (
        <div className="flex justify-between items-center ml-8 flex-1">
            <nav>
                <ul className="lg:flex hidden menus">
                    {menus.map((menu, index) => {
                        const depthLevel = 0;
                        return <MenuDesktopItem items={menu} key={index} depthLevel={depthLevel} />;
                    })}
                </ul>
            </nav>
            <div className="flex">
                <Button
                    className="text-[14px] font-bold group hover:bg-black md:flex hidden"
                    hasIcon
                    primary
                    small
                    leftIcon={<MdPhoneInTalk />}
                    href="https://github.com/dokimphuong161"
                    target="_blank"
                >
                    +84 967028275
                </Button>
            </div>
        </div>
    );
};

export default MenuDesktop;
