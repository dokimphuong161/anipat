// Import images and icons
import { HomeIcon, SpaIcon, CatIcon } from '~/constants/svgIcons';
import { icons } from '~/constants/icons';
import { images } from '~/constants/images';

// Menu data
export const menuItems = [
    { title: 'Home', path: 'home' },
    {
        title: 'About',
        path: 'about',
        children: [
            { title: 'About us', path: 'about' },
            { title: 'Testimonials', path: 'testimonials' },
            { title: 'Activitives', path: 'activitives' },
            { title: 'Blog', path: 'blog' },
            { title: 'Gallery', path: 'gallery' },
            {
                title: 'Comming',
                children: [{ title: 'Coming one' }, { title: 'Coming two' }, { title: 'Coming three' }],
            },
        ],
    },
    { title: 'Service', path: 'service' },
    { title: 'Pricing', path: 'pricing' },
    { title: 'Booking', path: 'booking' },
    { title: 'Contact', path: 'contact' },
];
// Footer data
export const footerLinks = [
    {
        heading: 'Useful links',
        links: ['New Products', 'Best Seller', 'Bundle & Sale', 'Online Gift Card', 'Discount', 'Pet Store Locator'],
    },
    {
        heading: 'My account',
        links: ['My Profile', 'My Order History', 'My Wish List', 'Order Tracking', 'Shipping Info', 'Shopping Cart'],
    },
    {
        heading: 'Company',
        links: ['About Us', 'Careers', 'Blog', 'Affilicate', 'Contact Us', 'Gift Cards'],
    },
];

// Init data
export const initData = {
    bannerSlider: [
        {
            id: 'banner-slider-1',
            icon: HomeIcon,
            title: 'Dog Boarding',
            description: 'Short term and long term pet board. Luxury dog kennels, exercise.',
        },
        {
            id: 'banner-slider-2',
            icon: SpaIcon,
            title: 'Cat Boarding',
            description: 'Your pets will also be exposed to plenty of human interaction, time outside.',
        },
        {
            id: 'banner-slider-3',
            icon: CatIcon,
            title: 'Pet Spa',
            description: 'We have a variety of quality shampoos as well as medicated shampoo.',
        },
    ],
    aboutData: [
        {
            id: 'about-1',
            title: 'Well-trained staff',
            content: 'Staff learn proper handling, signs, and symptoms of illness, dog expressions, and body language.',
            icon: icons.ICON_STAFF,
        },
        {
            id: 'about-2',
            title: 'Meticulous about meds',
            content: 'Snacks are available throughout the day and fresh water is constantly available.',
            icon: icons.ICON_FOOD,
        },
        {
            id: 'about-3',
            title: 'What to bring',
            content: 'If your dog has separation anxiety we encourage you to bring something that smells like home.',
            icon: icons.ICON_PRIZE,
        },
    ],
    serviceData: [
        {
            id: 'service-1',
            title: 'Full diagnostics',
            description: 'We can help you get safe and simple diagnostic tests done for your beloved dogs and cats. ',
            icon: icons.ICON_VETERINARY,
            bgColor: 'bg-orange-100',
        },
        {
            id: 'service-2',
            title: 'Dog Training',
            description: 'Get started on the puppy training basics with this guide on crate training, potty training',
            icon: icons.ICON_DOG,
            bgColor: 'bg-sky-100',
        },
        {
            id: 'service-3',
            title: 'Pet Grooming',
            description:
                'We understands that your pets are part of your family and we want to care for them like you would.',
            icon: icons.ICON_PET,
            bgColor: 'bg-yellow-100',
        },
        {
            id: 'service-4',
            title: 'Pet Veterinary ',
            description:
                'We provide affordable veterinary care to ensure your pet is healthy year-round for life out here.',
            icon: icons.ICON_VET,
            bgColor: 'bg-lime-100',
        },
        {
            id: 'service-5',
            title: 'Pet Selling',
            description: 'Buying and selling pets can be tough and end up costing you more money than it should. ',
            icon: icons.ICON_SHOP,
            bgColor: 'bg-yellow-100',
        },
        {
            id: 'service-6',
            title: 'Pet Foods',
            description:
                'Our pets find a way into our hearts in so many ways. Our dogs and cats are beloved members of the family',
            icon: icons.ICON_CAT_FOOD,
            bgColor: 'bg-orange-100',
        },
    ],
    testimonialsData: [
        {
            id: 'testi-1',
            image: images.IMG_PERSON1,
            customer: 'Mandy AMF',
            job: 'Teacher',
            rating: 3,
            review: ' I know for a fact my bun is happier here. My bunny would come home stressed from our old vet, he would hide and it would take him about a day to recover after dropping him off. I thought this was completely normal. However, since we switched vets, my bun has experienced 0 post vet stress, and actually happily eats hay on the car rides home. This is a change. Very happy.',
        },
        {
            id: 'testi-2',
            image: images.IMG_PERSON2,
            customer: 'Pratik Deshpande',
            job: 'Barber',
            rating: 3.5,
            review: ' All staff members are very caring, friendly, compassionate and professional. They have always fit me in when there was an emergency. Their care and knowledge of exotic pets is the best. They all follow up on all their cases. I have been taking my guinea pigs and rabbits there for at least 15 years and have  always been satisfied.',
        },
        {
            id: 'testi-3',
            image: images.IMG_PERSON3,
            customer: 'Maryann Perrini',
            job: 'Beautician',
            rating: 4.5,
            review: ' Everyone here seems to be very helpful and always very happy and jolly to see my pup! My dog probably didn’t even feel he got the shots! Dr and the staff were very helpful in answering all my questions very patiently',
        },
        {
            id: 'testi-4',
            image: images.IMG_PERSON2,
            customer: 'Brandi Wentz',
            job: 'Student',
            rating: 5,
            review: ' I was able to get my puppy in the same week, which was not possible any where else. Your staff has an obvious love for animals and is very kind and informative. Artemis eagerly awaits the peanut butter treats, and your distraction methods help keep her calm. Thank you!',
        },
        {
            id: 'testi-5',
            image: images.IMG_PERSON5,
            customer: 'Zakiya Milton',
            job: 'Student',
            rating: 4,
            review: ' I have three ferrets, two who are both bandit patterned. The vets, vet techs, and reception take great care to ensure they know who is who. They are always kind when working with my pets and listen to how to make the experience easier on everyone to get through the exams and vaccines. I love this office and staff!',
        },
    ],
    pricingData: [
        {
            id: 'pricing-1',
            image: images.IMG_PRICING_ITEM1,
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
            id: 'pricing-2',
            image: images.IMG_PRICING_ITEM2,
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
            id: 'pricing-3',
            image: images.IMG_PRICING_ITEM3,
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
    ],
    counterData: [
        {
            image: images.IMG_ACT_COUNT1,
            endNumber: 1500,
            title: 'Pet borded',
        },
        {
            image: images.IMG_ACT_COUNT2,
            endNumber: 250,
            title: 'Event done',
        },
        {
            image: images.IMG_ACT_COUNT3,
            endNumber: 800,
            title: 'Happly clients',
        },
        {
            image: images.IMG_ACT_COUNT4,
            endNumber: 750,
            title: 'Project done',
        },
    ],
    blogData: [
        {
            id: 'blog_1',
            image: images.IMG_BLOG1,
            date: { day: '10', month: 'Jul' },
            author: 'Matthew Bershadker',
            comment: 2,
            category: 'Grooming',
            title: 'Tips and tricks: Puppy’s First Grooming',
            content:
                'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI. Completely synergize resource taxing relationships via premier niche markets professionally cultivate.',
            bgPrimary: 'bg-sky-200',
        },
        {
            id: 'blog_2',
            image: images.IMG_BLOG2,
            date: { day: '12', month: 'Mar' },
            author: ' Sandra McRoberts',
            comment: 1,
            category: 'Cats',
            title: 'Cat Health – Keeping Them Purr-fect',
            content:
                'Holistically pontificate installed base portals after maintainable products. Phosfluorescently engage worldwide methodologies with technology. Dramatically engage top-line web services vis-a-vis for better cutting-edge deliverables.&nbsp;Proactively envisioned multimedia based expertise and cross-media growth.',
            bgPrimary: 'bg-lime-100',
        },
        {
            id: 'blog_3',
            image: images.IMG_BLOG3,
            date: { day: '09', month: 'Oct' },
            author: 'Kortney Igoe',
            comment: 3,
            category: 'Dogs',
            title: '14 Foods You Can Share with Your Dog',
            content:
                'Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.',
            bgPrimary: 'bg-yellow-100',
        },
        {
            id: 'blog_4',
            image: images.IMG_BLOG4,
            date: { day: '01', month: 'Sep' },
            author: ' Christopher Tuma',
            comment: 3,
            category: 'Dogs',
            title: 'Keeping Your Pet Active Year-Round',
            content:
                'Dynamically reinvent market-driven opportunities and ubiquitous interfaces. Energistically fabricate an array of niche markets through products. Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate e-business applications through revolutionary catalysts for change. Seamlessly underwhelm optimal testing.',
            bgPrimary: 'bg-sky-200',
        },
        {
            id: 'blog_5',
            image: images.IMG_BLOG5,
            date: { day: '09', month: 'Oct' },
            author: 'Jessica F. Roebuck',
            comment: 6,
            category: 'Dogs',
            title: 'Keep Pets Parasite-Free For Their Health',
            content:
                'Professionally fashion wireless leadership rather than prospective experiences. Energistically myocardinate clicks-and-mortar testing procedures. Interactively coordinate proactive e-commerce via process-centric “outside the box” thinking. Completely pursue scalable customer service through sustainable potentialities dynamically innovate',
            bgPrimary: 'bg-lime-100',
        },
        {
            id: 'blog_6',
            image: images.IMG_BLOG6,
            date: { day: '09', month: 'Oct' },
            author: 'Lauren Olavessen',
            comment: 4,
            category: 'Cats',
            title: 'Can Cats Stay Home During Vacation?',
            content:
                'Quickly coordinate e-business applications through revolutionary catalysts for change. Seamlessly underwhelm optimal testing procedures processes. Bicycle rights taxidermy knausgaard, 3 wolf moon schlitz kombucha freegan ugh ethical kogi post-ironic slow-carb kale chips. Jean shorts woke craft beer tacos hexagon meh shabby chic austin.',
            bgPrimary: 'bg-yellow-100',
        },
    ],
    brandsData: [
        images.IMG_BRAND1,
        images.IMG_BRAND2,
        images.IMG_BRAND3,
        images.IMG_BRAND4,
        images.IMG_BRAND5,
        images.IMG_BRAND6,
        images.IMG_BRAND7,
    ],
};

export const pettypeSelect = [
    { value: '', option: 'Select your pet' },
    { value: 'Dog', option: 'Dog' },
    { value: 'Cat', option: 'Cat' },
    { value: 'Hamster', option: 'Hamster' },
];

export const serviceSelect = [
    { value: '', option: 'Select your service' },
    { value: 'Pet grooming', option: 'Pet grooming' },
    { value: 'Healthy meals', option: 'Healthy meals' },
    { value: 'Veterinary care', option: 'Veterinary care' },
    { value: 'Pets activities', option: 'Pets activities' },
];
