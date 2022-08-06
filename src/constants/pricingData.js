import PriceImg1 from '~/assets/images/blog/blog-1.png';
import PriceImg2 from '~/assets/images/blog/blog-2.png';
import PriceImg3 from '~/assets/images/blog/blog-3.png';
export const PRICING_DATA = [
    {
        id: 1,
        image: PriceImg1,
        package: 'Regular Session',
        pricing: 99,
        unit: 'Per Session',
        listService: [
            { name: 'Pet Shower', visible: true },
            { name: 'Fitness Checkup', visible: true },
            { name: 'Pet Grooming', visible: true },
            { name: 'Hair And Nail Cut', visible: true },
            { name: 'Control Hair Falling', visible: false },
            { name: 'Brush & Blow Dry', visible: false },
            { name: 'Pet Park And Games', visible: false },
        ],
    },
    {
        id: 2,
        image: PriceImg2,
        package: 'Exclusive Session',
        pricing: 130,
        unit: 'Per Session',
        listService: [
            { name: 'Pet Shower', visible: true },
            { name: 'Fitness Checkup', visible: true },
            { name: 'Pet Grooming', visible: true },
            { name: 'Hair And Nail Cut', visible: true },
            { name: 'Control Hair Falling', visible: true },
            { name: 'Brush & Blow Dry', visible: false },
            { name: 'Pet Park And Games', visible: false },
        ],
    },
    {
        id: 3,
        image: PriceImg3,
        package: 'Premium Session',
        pricing: 150,
        unit: 'Per Session',
        listService: [
            { name: 'Pet Shower', visible: true },
            { name: 'Fitness Checkup', visible: true },
            { name: 'Pet Grooming', visible: true },
            { name: 'Hair And Nail Cut', visible: true },
            { name: 'Control Hair Falling', visible: true },
            { name: 'Brush & Blow Dry', visible: true },
            { name: 'Pet Park And Games', visible: true },
        ],
    },
];
