import { useEffect, useState } from 'react';

// init data
import { initData } from '~/data/initData';

const useGetData = (key) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const dataInitResult = initData[`${key}`];
        if (!!dataInitResult) {
            setData(dataInitResult);
        } else {
            console.log('Data is empty');
        }
    }, []);
    return { data };
};

export default useGetData;
