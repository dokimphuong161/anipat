import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Button from '~/components/Button';
import InputField from '~/components/FormControls/InputField';
import SelectField from '~/components/FormControls/SelectField';
import { PETTYPE_DATA, SERVICE_DATA } from '~/constants/selectData';

const BookingForm = (props) => {
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
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            },
        );
    };

    return (
        <form ref={formRef} onSubmit={form.handleSubmit(sendMail)} className="mt-10">
            <InputField placeholder="Username" name="username" form={form} />
            <SelectField values={PETTYPE_DATA} name="pettype" form={form} />
            <SelectField values={SERVICE_DATA} name="service" form={form} />
            <InputField type="date" name="birthday" form={form} />
            <InputField placeholder="Email" name="email" form={form} />

            <Button type="submit" primary shape className="md:mt-10 mt-8 w-full">
                Send mail to book
            </Button>
        </form>
    );
};

BookingForm.propTypes = {
    onSubmit: PropTypes.func,
};

export default BookingForm;
