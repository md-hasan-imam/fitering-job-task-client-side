import React from 'react';


const OrderRow = ({ order, index, refetch }) => {

    const { firstName, lastName, customerId, orders } = order;

    return (
        <tr className='text-center'>
            <th>{index + 1}</th>
            <td>{firstName} {lastName}</td>
            <td><p className='text-sm'>{customerId}</p></td>
            <td>
                {
                    orders.map(order =><p className='text-sm'>{order.orderID}
                    </p>)
                }
            </td>
            <td>
                {
                    orders.map(order =><p className='text-sm'>{order.amount}
                    </p>)
                }
            </td>
            <td>
                {
                    orders.map(order =><p className='text-sm'>{ (order.date).substr(0, 10)}
                    </p>)
                }
            </td>
        </tr>
    );
};

export default OrderRow;