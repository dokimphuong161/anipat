import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

const InputField = (props) => {
    const { form, name, placeholder, type } = props;
    const {
        formState: { errors },
    } = form;
    const hasError = errors[name];
    return (
        <>
            <Controller
                name={name}
                placeholder={placeholder}
                control={form.control}
                render={({ field: { onChange, onBlur, value, name } }) => (
                    <input
                        className="input-field bg-pink-50 w-full py-2 xl:py-3 px-7 shadow-inner rounded-full placeholder:text-gray-500 placeholder:font-medium"
                        name={name}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        placeholder={placeholder}
                        type={type}
                    />
                )}
            />
            {!!hasError ? (
                <p className="text-[14px] ml-4 mt-1 text-primary-900">{errors[name]?.message}</p>
            ) : (
                <p className="h-16px"></p>
            )}
        </>
    );
};

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    disable: PropTypes.bool,
    label: PropTypes.string,
};

export default InputField;
