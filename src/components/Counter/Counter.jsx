// hooks
import useGetData from '~/hooks/useGetData';

// components
import CounterItem from './CounterItem';

// hooks

const Counter = (animateCustom) => {
    // Get counter data
    const { data } = useGetData('counterData');
    return (
        <section className="counter mb-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
                {data.map((item, index) => (
                    <CounterItem item={item} key={index} animateCustom={animateCustom} />
                ))}
            </div>
        </section>
    );
};

export default Counter;
