import React from 'react';
import { COUNTER_DATA } from '~/constants/counterData';
import CounterItem from './CounterItem';

const Counter = () => {
    return (
        <section className="counter mb-8">
            <div className="container mx-auto grid grid-cols-2 gap-5">
                {COUNTER_DATA.map((item, index) => (
                    <CounterItem item={item} key={index} />
                ))}
            </div>
        </section>
    );
};

export default Counter;
