export const MENU_ITEMS = [
    { title: 'Home' },
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
    { title: 'Service' },
    { title: 'About' },
    { title: 'Pricing' },
    { title: 'Contact' },
];
