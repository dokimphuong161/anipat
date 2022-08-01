import VeterinaryIcon from '~/assets/images/icons/ambulance.svg';
import DogIcon from '~/assets/images/icons/dog.svg';
import PetIcon from '~/assets/images/icons/pet-grooming.svg';
import VetIcon from '~/assets/images/icons/pet-theraphy.svg';
import ShopIcon from '~/assets/images/icons/pet-shop.svg';
import FoodIcon from '~/assets/images/icons/cat-food.svg';
export const SERVICE_ITEMS = [
    {
        id: 1,
        title: 'Full diagnostics',
        description: 'We can help you get safe and simple diagnostic tests done for your beloved dogs and cats. ',
        icon: VeterinaryIcon,
        bgColor: 'bg-orange-100',
    },
    {
        id: 2,
        title: 'Dog Training',
        description: 'Get started on the puppy training basics with this guide on crate training, potty training',
        icon: DogIcon,
        bgColor: 'bg-sky-100',
    },
    {
        id: 3,
        title: 'Pet Spa and Grooming',
        description:
            'We understands that your pets are part of your family and we want to care for them like you would.',
        icon: PetIcon,
        bgColor: 'bg-yellow-100',
    },
    {
        id: 4,
        title: 'Pet Veterinary ',
        description:
            'We provide affordable veterinary care to ensure your pet is healthy year-round for life out here.',
        icon: VetIcon,
        bgColor: 'bg-lime-100',
    },
    {
        id: 5,
        title: 'Pet Selling',
        description: 'Buying and selling pets can be tough and end up costing you more money than it should. ',
        icon: ShopIcon,
        bgColor: 'bg-yellow-100',
    },
    {
        id: 6,
        title: 'Pet Foods',
        description:
            'Our pets find a way into our hearts in so many ways. Our dogs and cats are beloved members of the family',
        icon: FoodIcon,
        bgColor: 'bg-orange-100',
    },
];
