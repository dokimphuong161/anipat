import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

const SelectField = (props) => {
    const { form, name, values } = props;
    const {
        formState: { errors },
    } = form;
    const hasError = errors[name];
    // console.log(errors, formState);
    return (
        <>
            <Controller
                name={name}
                control={form.control}
                render={({ field: { onChange, name } }) => (
                    <select
                        onChange={onChange}
                        name={name}
                        className="input-field bg-pink-50 w-full py-3 shadow-inner px-7 rounded-full text-gray-500"
                    >
                        {values.map((item, index) => (
                            <option key={index} value={item.value}>
                                {item.option}
                            </option>
                        ))}
                    </select>
                )}
            />
            {!!hasError ? <p className="text-[14px] ml-4 mt-1 text-primary-900">{errors[name]?.message}</p> : <p></p>}
        </>
    );
};

SelectField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    disable: PropTypes.bool,
    label: PropTypes.string,
};

export default SelectField;
