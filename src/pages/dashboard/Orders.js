import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';

import OrderSearchResult from './OrderSearchResult';


const Orders = () => {

    const [searchedText, setSearchedText] = useState('');
    const [date, setDate] = useState('');

    console.log(date);


    const { data:orders, isLoading } = useQuery(['orders',searchedText, date ],()=>fetch(`http://localhost:5000/orders?searchedText=${searchedText}&date=${date}`).then(res => res.json()));


    return (
        <div>
            <div className='flex flex-col justify-center items-center h-[150px]'>
                <h2 className='text-3xl font-semibold text-primary'>Find Orders</h2>
            </div>
            <div className='mb-5'>
                <h3 className='inline m-5 '>Filter by</h3>
                <input type="text" onChange={(e)=>setSearchedText(e.target.value)} value={searchedText} placeholder="Name" className="input focus:outline-none input-bordered  w-full max-w-xs bordered mr-10" />
                <input type="date" onChange={(e)=>setDate(e.target.value)} placeholder="date" className="input focus:outline-none input-bordered  w-full max-w-xs bordered" />
            </div>
            <OrderSearchResult 
            orders={orders}
            isLoading={isLoading}
            ></OrderSearchResult>
        </div>
    );
};

export default Orders;