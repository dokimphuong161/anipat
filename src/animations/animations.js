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

export const iconsYoyoVariants = {
    hidden: {
        scale: 0.5,
    },
    show: {
        scale: 1,
        transition: {
            yoyo: Infinity,
        },
    },
};

// Menu Mobile animations
export const toggleOverlayVariants = {
    open: {
        opacity: 1,
        visibility: 'visible',
        transition: {
            duration: 0.4,
        },
    },
    closed: {
        opacity: 0,
        visibility: 'hidden',
        transition: {
            duration: 0.4,
            delay: 0.4,
        },
    },
};
export const toggleMenuMobileVariants = {
    open: {
        clipPath: `circle(1000px at 100% 0)`,
        transition: {
            duration: 0.4,
        },
    },
    closed: {
        clipPath: `circle(0px at 100% 0)`,
        transition: {
            duration: 0.2,
            delay: 0.4,
        },
    },
};
export const menuItemVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};
export const menuMobileItemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.6, 0.05, -0.1, 0.9],
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            duration: 0.8,
            ease: [0.6, 0.05, -0.1, 0.9],
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

// Service animation

export const serviceStaggerVariants = {
    show: {
        transition: { staggerChildren: 1, delayChildren: 0.3 },
    },
    hidden: {
        transition: { staggerChildren: 1, staggerDirection: -1 },
    },
};
