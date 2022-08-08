import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { HiOutlinePlusSm } from 'react-icons/hi';
import { GrFormSubtract } from 'react-icons/gr';

const Accordion = ({ items }) => {
    const [active, setActive] = useState(true);
    const [selected, setSelected] = useState(null);
    const itemActive = items[0];

    const toggleAccordion = (index) => {
        if (selected === index) {
            return setSelected(null);
        }
        setSelected(index);
        setActive(false);
    };

    return (
        <div className="accordion">
            {items.map((item, index) => (
                <div
                    className={`accordion-item border border-transparent py-3 px-5 rounded-xl transition-all duration-500 bg-white hover:bg-white hover:border-dashed hover:border-primary-900 ${
                        selected === index || (active && item.id === itemActive.id)
                            ? 'border border-primary-900 border-dashed'
                            : ''
                    }`}
                >
                    <div
                        className="accordion-title flex justify-between items-center"
                        onClick={() => toggleAccordion(index)}
                    >
                        <div className="flex items-center ">
                            <img src={item.icon} className="w-9 mr-4" />
                            <p className="uppercase text-[14px] font-bold">{item.title}</p>
                        </div>
                        <span className="border p-2 rounded-full">
                            {selected === index || (active && item.id === itemActive.id) ? (
                                <GrFormSubtract />
                            ) : (
                                <HiOutlinePlusSm />
                            )}
                        </span>
                    </div>
                    <div
                        className={`accordion-content ${
                            selected === index || (active && item.id === itemActive.id)
                                ? 'max-h-[9999px] block'
                                : 'max-h-0 hidden'
                        }`}
                    >
                        <p className="pt-1 pb-2 pl-14 pr-10">{item.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

Accordion.propTypes = {
    items: PropTypes.array.isRequired,
};

export default Accordion;
