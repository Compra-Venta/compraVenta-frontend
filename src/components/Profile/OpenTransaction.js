import React, { Component } from 'react';
import { Button, Table } from 'reactstrap'

class OpenTransaction extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            //  symbol: 'BTCUSDT',
             openOrder: [
                 {
                    orderID: 'OrderID',
                    ba: 'BTC',
                    qa: 'USDT',
                    price: 55555,
                    amount: 0.003,
                    side: 'BUY',
                    type: 'M',
                    date: '2021-04-21',
                    time: '11:23'
                 }, {
                    orderID: 'OrderID',
                    ba: 'BTC',
                    qa: 'USDT',
                    price: 55555,
                    amount: 0.003,
                    side: 'BUY',
                    type: 'M',
                    date: '2021-04-21',
                    time: '11:23'
                 }, {
                    orderID: 'OrderID',
                    ba: 'BTC',
                    qa: 'USDT',
                    price: 55555,
                    amount: 0.003,
                    side: 'BUY',
                    type: 'M',
                    date: '2021-04-21',
                    time: '11:23'
                 }, {
                    orderID: 'OrderID',
                    ba: 'BTC',
                    qa: 'USDT',
                    price: 55555,
                    amount: 0.003,
                    side: 'BUY',
                    type: 'M',
                    date: '2021-04-21',
                    time: '11:23'
                 }, {
                    orderID: 'OrderID',
                    ba: 'BTC',
                    qa: 'USDT',
                    price: 55555,
                    amount: 0.003,
                    side: 'Sell',
                    type: 'M',
                    date: '2021-04-21',
                    time: '11:23'
                 }, {
                    orderID: 'OrderID',
                    ba: 'BTC',
                    qa: 'USDT',
                    price: 55555,
                    amount: 0.003,
                    side: 'BUY',
                    type: 'M',
                    date: '2021-04-21',
                    time: '11:23'
                 }, {
                    orderID: 'OrjnjncjnderID',
                    ba: 'BTC',
                    qa: 'USDT',
                    price: 55555,
                    amount: 0.003,
                    side: 'BUY',
                    type: 'M',
                    date: '2021-04-21',
                    time: '11:23'
                 }, {
                    orderID: 'Or46r6knkjvID',
                    ba: 'BTC',
                    qa: 'USDT',
                    price: 55555,
                    amount: 0.003,
                    side: 'BUY',
                    type: 'M',
                    date: '2021-04-21',
                    time: '11:23'
                 },{
                    orderID: 'OrderID',
                    ba: 'BTC',
                    qa: 'USDT',
                    price: 55555,
                    amount: 0.003,
                    side: 'BUY',
                    type: 'M',
                    date: '2021-04-21',
                    time: '11:23'
                 },
             ]
        }
        this.cancelOrder = this.cancelOrder.bind(this);
    }

    cancelOrder = (orderId, size) =>{
        alert(orderId)
        var orderData = this.state.openOrder;
        orderData.pop(size)
        // console.log(orderData)
    }
    
    render() {

        const orderData = this.state.openOrder;
        let size = orderData.length;
        console.log('Total Open Orders: ',size)
        const orderTable = orderData.map(order => {
            return(
                <tr>
                    <th scope='row'>{size--}</th>
                    <td>{order.ba + order.qa}</td>
                    <td>{order.price}</td>
                    <td>{order.amount}</td>
                    <td style={{color:order.side=='BUY'? 'red':'green'}}>{order.side}</td>
                    <td>{order.type}</td>
                    <td>{order.date}</td>
                    <td>{order.time}</td>
                    <td><Button onClick={() => this.cancelOrder(order.orderID,size)} color='danger' size='sm'>Cancel</Button></td>
                </tr>
            )
        })

        return (
            <div className='container-fluid'>
                <div>
                <Button color="danger" size='md' style={{marginRight:'30px'}}>Refresh</Button>{' '}
                </div>
                <div className='table-container'>
                <Table hover responsive >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>CoinPair</th>
                            <th>Price</th>
                            <th>Amount</th>
                            <th>Side</th>
                            <th>Type</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderTable}
                    </tbody>
                </Table>
                </div>
            </div>
        )
    }
}

export default OpenTransaction
