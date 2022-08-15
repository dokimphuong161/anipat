// Common
export const hideAndShowVariants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
    },
};

export const fadeToLeftVariants = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    show: {
        x: 0,
        opacity: 1,
    },
};

export const fadeToRightVariants = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    show: {
        x: 0,
        opacity: 1,
    },
};

export const fadeUpVariants = {
    hidden: {
        y: 50,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
    },
};

export const zoomInAndOutVariants = {
    hidden: {
        opacity: 0,
        scale: 0,
    },
    show: {
        opacity: 1,
        scale: 1,
    },
};

// Menu Mobile animations
export const toggleOverlayVariants = {
    open: {
        opacity: 1,
        visibility: 'visible',
        transition: {
            duration: 0.2,
        },
    },
    closed: {
        opacity: 0,
        visibility: 'hidden',
        transition: {
            duration: 0.2,
            delay: 0.2,
        },
    },
};
export const toggleMenuMobileVariants = {
    open: {
        clipPath: `circle(1000px at 100% 0)`,
        transition: {
            duration: 0.2,
        },
    },
    closed: {
        clipPath: `circle(0px at 100% 0)`,
        transition: {
            duration: 0.1,
            delay: 0.2,
        },
    },
};
export const menuItemVariants = {
    open: {
        transition: { staggerChildren: 0.04, delayChildren: 0.1 },
    },
    closed: {
        transition: { staggerChildren: 0.02, staggerDirection: -1 },
    },
};
export const menuMobileItemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: [0.6, 0.05, -0.1, 0.6],
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            duration: 0.4,
            ease: [0.6, 0.05, -0.1, 0.6],
        },
    },
};

// Header animation
export const headerVariants = {
    hidden: { y: -100 },
    show: {
        y: 0,
    },
};

export const bannerRatingVariants = {
    hidden: {
        opacity: 0,
        scale: 0.5,
    },
    show: {
        opacity: 1,
        scale: 1,
    },
};
