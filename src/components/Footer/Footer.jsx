import { useEffect, useState } from 'react';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BsFacebook, BsPhoneVibrate, BsPinterest } from 'react-icons/bs';
import { MdOutlinePhoneInTalk } from 'react-icons/md';
import { TbMailForward } from 'react-icons/tb';
import { motion } from 'framer-motion';

// images
import { images } from '~/constants/images';

// data
import { footerLinks } from '~/data/initData';

// hooks
import { useScroll } from '~/hooks/useScroll';
import { fadeUpVariants, zoomInAndOutVariants } from '~/animations/animations';

const Footer = () => {
    // Hook useScroll
    const [element, controls] = useScroll();

    const [footerLink, setFooterLink] = useState([]);
    useEffect(() => {
        if (!!footerLinks) {
            setFooterLink(footerLinks);
        } else {
            console.log('Data is empty');
        }
    }, []);
    const date = new Date();
    return (
        <footer className="border-t border-dashed md:pt-20 pt-8 relative" ref={element}>
            <motion.div
                variants={fadeUpVariants}
                animate={controls}
                transition={{ delay: 0.03, duration: 0.4, type: 'tween' }}
                className="absolute -bottom-8 left-0 -z-10 md:block hidden"
            >
                <img src={images.IMG_SHAPE_DOG1} className="w-32" />
            </motion.div>
            <motion.div
                variants={fadeUpVariants}
                animate={controls}
                transition={{ delay: 0.03, duration: 0.4, type: 'tween' }}
                className="absolute md:block hidden right-0 bottom-0 -z-10 md:block hidden"
            >
                <img src={images.IMG_SHAPE_DOG2} className="w-24" />
            </motion.div>
            <div className="container mx-auto">
                <motion.div
                    variants={fadeUpVariants}
                    animate={controls}
                    transition={{ delay: 0.03, duration: 0.3, type: 'tween' }}
                    className="grid md:grid-cols-4 grid-cols-1 pb-10"
                >
                    <div className="footer-info md:pr-10 pr-0 md:mb-0 mb-4 flex flex-col md:items-start items-center">
                        <img src={images.IMG_LOGO} className="w-36" />
                        <p className="text-[14px] leading-[24px] mt-4 text-gray-600 md:text-left text-center">
                            We are committed to providing the highest-quality products that you can trust.
                        </p>
                        <div className="flex items-center mt-5">
                            <span className="text-[25px]">
                                <MdOutlinePhoneInTalk />
                            </span>
                            <p className="ml-3 font-bold text-[14px]">Hotline Order</p>
                        </div>
                        <p className="text-[20px] text-primary-600 font-bold mt-2">+84 967 028 275</p>
                        <ul className="flex mt-6">
                            <li className="footer-social">
                                <a href="#">
                                    <BsFacebook />
                                </a>
                            </li>
                            <li className="footer-social">
                                <a href="#">
                                    <AiOutlineTwitter />
                                </a>
                            </li>
                            <li className="footer-social">
                                <a href="#">
                                    <AiOutlineInstagram />
                                </a>
                            </li>
                            <li className="footer-social">
                                <a href="#">
                                    <BsPinterest />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="grid col-span-2 grid-cols-3">
                        {footerLink.map((item, index) => (
                            <div key={index} className="md:mt-0 mt-4 md:text-left text-center">
                                <h3 className="uppercase text-[14px] font-bold">{item.heading}</h3>
                                <ul className="mt-4">
                                    {item.links.map((link, index) => (
                                        <li
                                            key={index}
                                            className="text-[14px] py-2 font-medium text-gray-600 hover:text-primary-900"
                                        >
                                            <a href="#">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="footer-contact flex flex-col md:mt-0 mt-4 md:items-start items-center">
                        <h3 className="text-[14px] font-bold">NEWSLETTER</h3>
                        <p className="mt-4 text-[14px] text-gray-600 md:text-left text-center">
                            Subscrible & get <span className="text-primary-900 leading-[24px]">10%</span> discount. Get
                            E-mail updates about <span className="text-primary-900">our latest shop.</span>
                        </p>
                        <div className="bg-gray-100 rounded-full mt-6 flex justify-between items-center w-full">
                            <input
                                placeholder="Enter your email..."
                                className="bg-transparent py-3 px-6 text-[14px] text-gray-600 font-medium"
                            />
                            <div className="p-2 mr-1  bg-primary-600 rounded-full text-white">
                                <TbMailForward />
                            </div>
                        </div>
                        <div className="flex items-center mt-5">
                            <span className="text-[25px]">
                                <BsPhoneVibrate />
                            </span>
                            <p className="ml-3 font-bold text-[14px]">Download Our App</p>
                        </div>
                        <div className="flex mt-4">
                            <img src={images.IMG_APP_STORE} />
                            <img src={images.IMG_GOOGLE_PLAY} className="ml-2" />
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    variants={zoomInAndOutVariants}
                    animate={controls}
                    transition={{ delay: 0.03, duration: 0.4, type: 'tween' }}
                    className="flex md:flex-row flex-col items-center justify-between md:py-6 py-4 md:px-8 px-0 border-t border-dashed"
                >
                    <p className="text-[12px] md:text-left text-center">
                        Copyright © {date.getFullYear()} Pawsitive. Redesign by{' '}
                        <span className="text-primary-900">Do Kim Phuong.</span> All rights reserved.
                    </p>
                    <img className="md:mt-0 mt-4 w-auto md:h-auto h-5" src={images.IMG_PAYMENT} />
                </motion.div>
            </div>
        </footer>
    );
};

Footer.propTypes = {};

export default Footer;
