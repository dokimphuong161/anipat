import React, { useEffect, useState } from 'react';
import Button from '../Button';
import { MdKeyboardArrowUp } from 'react-icons/md';
const GoToTop = () => {
    const [isVisible, setVisible] = useState(false);

    const toggleVisible = () => {
        if (window.pageYOffset > 400) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        return () => {
            window.removeEventListener('scroll', toggleVisible);
        };
    }, []);
    return (
        <div className="fixed bottom-5 right-5">
            <Button
                primary
                className={`text-2xl p-3 ${isVisible ? 'animate-fadeIn' : 'animate-fadeOut'}`}
                onClick={scrollToTop}
            >
                <MdKeyboardArrowUp />
            </Button>
        </div>
    );
};

export default GoToTop;
