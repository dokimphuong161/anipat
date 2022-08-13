import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

// hooks
import useGetData from '~/hooks/useGetData';

// components
import Button from '~/components/Button';
import InputField from '~/components/FormControls/InputField';
import SelectField from '~/components/FormControls/SelectField';
import { pettypeSelect, serviceSelect } from '~/data/initData';

const BookingForm = () => {
    const formRef = useRef(null);
    const schema = yup.object().shape({
        username: yup
            .string()
            .required('Please enter username')
            .test('should has at least two word', 'Please enter at least two words', (value) => {
                return value.split(' ').length >= 2;
            }),
        pettype: yup.string().required('Pet type is require'),
        service: yup.string().required('Service type is require'),
        birthday: yup.string().required('Birthday is require'),
        email: yup.string().required('Email is require').email('Please enter a valid email address'),
    });

    const form = useForm({
        defaultValues: {
            username: '',
            pettype: '',
            service: '',
            birthday: '',
            email: '',
        },
        resolver: yupResolver(schema),
    });

    const sendMail = () => {
        emailjs.sendForm('service_ly9of9h', 'template_jhyw0wq', formRef.current, 'wkcR3OMF6IOiQke6y').then(
            (result) => {
                alert('Booking successfully!');
            },
            (error) => {
                console.log(error.text);
            },
        );
        form.reset();
    };

    return (
        <form ref={formRef} onSubmit={form.handleSubmit(sendMail)} className="mt-5">
            <InputField placeholder="Username" name="username" form={form} />
            <SelectField values={pettypeSelect} name="pettype" form={form} />
            <SelectField values={serviceSelect} name="service" form={form} />
            <InputField type="date" name="birthday" form={form} />
            <InputField placeholder="Email" name="email" form={form} />

            <Button type="submit" primary shape className="lg:mt-10 mt-6 py-2 px-3 xl:py-4 w-full">
                Send mail to book
            </Button>
        </form>
    );
};

export default BookingForm;
