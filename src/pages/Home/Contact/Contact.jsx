import { motion } from 'framer-motion';
import { zoomInAndOutVariants } from '~/animations/animations';

// icons
import { icons } from '~/constants/icons';
// images
import { images } from '~/constants/images';

// hooks
import { useScroll } from '~/hooks/useScroll';
const Contact = () => {
    const [element, controls] = useScroll();

    return (
        <section className=" md:mt-16 mt-8 relative md:px-0 px-6" id="contact" ref={element}>
            <motion.div
                variants={zoomInAndOutVariants}
                animate={controls}
                transition={{ duration: 0.4, type: 'tween' }}
                className="absolute md:w-2/5 lg:w-1/4 right-16 top-10 p-2 bg-white rounded-3xl shadow-lg md:block hidden"
            >
                <img src={images.IMG_INFO} className="rounded-2xl" />
                <div className="p-5 w-full ">
                    <div className="flex items-start">
                        <img src={icons.ICON_ADDRESS} className="w-10" />
                        <div className="ml-4">
                            <h1 className="text-primary-900 font-bold text-[18px]">Address</h1>
                            <p className="text-gray-500 text-[13px] ">Thuan An, Binh Duong</p>
                        </div>
                    </div>
                    <div className="flex items-start mt-6">
                        <img src={icons.ICON_EMAIL} className="w-10" />
                        <div className="ml-4">
                            <h1 className="text-primary-900 font-bold text-[18px]">Email</h1>
                            <p className="text-gray-500 text-[13px]">dokimphuong1999gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-start mt-6">
                        <img src={icons.ICON_PHONE} className="w-10" />
                        <div className="ml-4">
                            <h1 className="text-primary-900 font-bold text-[18px]">Telephone</h1>
                            <p className="text-gray-500 text-[13px]">+84 967 028 275</p>
                        </div>
                    </div>
                </div>
            </motion.div>
            <iframe
                className="md:h-[500px] h-[300px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.495908279454!2d106.69134261411754!3d10.925862759406789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d7094b7dff4f%3A0x90c4117cb176a6f7!2zQsOsbmggTmjDom0gMjIsIELDrG5oIE5ow6JtLCBUaHXhuq1uIEFuLCBCw6xuaCBExrDGoW5nLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1659857316199!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
            <motion.div
                variants={zoomInAndOutVariants}
                animate={controls}
                transition={{ duration: 0.3, type: 'tween' }}
                className="mt-10 mb-10 bg-gray-50 rounded-3xl shadow-lg md:hidden block"
            >
                <img src={images.IMG_INFO} className="rounded-tl-3xl rounded-tr-3xl" />
                <div className="p-5 w-full ">
                    <div className="flex items-start">
                        <img src={icons.ICON_ADDRESS} className="w-10" />
                        <div className="ml-4">
                            <h1 className="text-primary-900 font-bold text-[18px]">Address</h1>
                            <p className="text-gray-500 text-[12px]">Thuan An, Binh Duong</p>
                        </div>
                    </div>
                    <div className="flex items-start mt-6">
                        <img src={icons.ICON_EMAIL} className="w-10" />
                        <div className="ml-4">
                            <h1 className="text-primary-900 font-bold text-[18px]">Email</h1>
                            <p className="text-gray-500 text-[12px]">dokimphuong1999gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-start mt-6">
                        <img src={icons.ICON_PHONE} className="w-10" />
                        <div className="ml-4">
                            <h1 className="text-primary-900 font-bold text-[18px]">Telephone</h1>
                            <p className="text-gray-500 text-[12px]">+84 967 028 275</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
