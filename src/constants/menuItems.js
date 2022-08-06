export const MENU_ITEMS = [
    { title: 'Home', path: 'home' },
    {
        title: 'Dropdown',
        children: [
            { title: 'Testimonials' },
            {
                title: 'Menu Two',
                children: [{ title: 'Submenu One' }, { title: 'Submenu Two' }, { title: 'Submenu Three' }],
            },
            { title: 'Menu Three' },
        ],
    },
    { title: 'Service', path: 'service' },
    { title: 'About', path: 'about' },
    { title: 'Pricing', path: 'pricing' },
    { title: 'Contact', path: 'contact' },
];
