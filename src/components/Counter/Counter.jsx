// hooks
import useGetData from '~/hooks/useGetData';

// components
import CounterItem from './CounterItem';

const Counter = () => {
    // Get counter data
    const { data } = useGetData('counterData');
    return (
        <section className="counter mb-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
                {data.map((item, index) => (
                    <CounterItem item={item} key={index} />
                ))}
            </div>
        </section>
    );
};

export default Counter;
