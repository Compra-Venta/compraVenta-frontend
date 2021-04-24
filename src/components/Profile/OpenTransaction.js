import React, { Component } from 'react';
import { Button, Table, Spinner } from 'reactstrap'

class OpenTransaction extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoading: true,
            errMess: null,
            openOrder: []
        }
        this.cancelOrder = this.cancelOrder.bind(this);
        this.setData = this.setData.bind(this)
    }

    setData = (info) => {

        var openOrder = this.state.openOrder
        if(info.errMess == null)
            openOrder = info.openTransaction_info
        this.setState({
            isLoading: info.isLoading,
            errMess: info.errMess,
            openOrder: openOrder
        })
    }

    cancelOrder = (orderId, size) =>{
        alert(orderId)
        var orderData = this.state.openOrder;
        orderData.pop(size)
        // console.log(orderData)
    }

    componentDidMount = async () => {
        await this.props.fetchOpenTransaction()
        this.setData(this.props.openTransaction_info)
    }
    
    render() {

        const state = this.state;
        const orderData = state.openOrder;
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
                {
                    state.isLoading ?
                    <Spinner color='success' style={{textAlign:'center'}} />:
                    state.errMess == null ?
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
                    </div> :
                    <div style={{color:'red', textAlign:'center'}}><h2>{state.errMess.message}</h2></div>
                }
                <div>
                <Button color="danger" size='md' style={{margin:'5px'}}>Refresh</Button>{' '}
                </div>
            </div>
        )
    }
}

export default OpenTransaction
