import React from 'react';
import Loading from '../shared/Loading';
import OrderRow from './OrderRow';

const OrderSearchResult = ({isLoading, orders}) => {

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className=''>
            <div className="">
                <table className="table w-full text-center">
                    <thead >
                        <tr>
                            <th></th>
                            <th className='text-lg'>Full Name</th>
                            <th className='text-lg'>Customer Id</th>
                            <th className='text-lg'>Order Id</th>
                            <th className='text-lg'>Amount</th>
                            <th className='text-lg'>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- map over single row  --> */}
                        {
                            isLoading ? <Loading></Loading>
                                :
                                orders.map((order, index) =>
                                    <OrderRow
                                        key={index}
                                        order={order}
                                        index={index}
                                    >
                                    </OrderRow>)

                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderSearchResult;