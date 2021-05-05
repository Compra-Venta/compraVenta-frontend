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
        this.setData = this.setData.bind(this);
        this.fetchData = this.fetchData.bind(this);
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

    cancelOrder = async (orderId) =>{
        
        await this.props.cancelOrder(orderId);
        this.fetchData()
        //window.location.reload()

    }

    fetchData = () => {
        this.props.fetchOpenTransaction()
        //this.setData(this.props.openTransaction_info)
    }

    componentDidMount = () => {
        this.fetchData()
    }
    
    render() {

        const state = this.state;
        const orderData = this.props.openTransaction_info.openTransaction_info;
        let size = orderData.length;
        //console.log('Total Open Orders: ',size)
        const orderTable = orderData.map(order => {
            return(
                <tr>
                <th scope='row'>{size--}</th>
                <td>{order.base + order.quote}</td>
                <td>{order.price}</td>
                <td>{order.b_amount}</td>
                <td style={{color:order.side=='SELL'? 'red':'green'}}>{order.side}</td>
                <td>{order.order_type}</td>
                <td>{order.date}</td>
                <td>{order.time}</td>
                <td><Button onClick={() => this.cancelOrder(order.order_id)} color='danger' size='sm'>Cancel</Button></td>
                </tr>
            )
        })

        return (
            <div className='container-fluid'>
                {
                    this.props.openTransaction_info.isLoading ?
                    <Spinner color='success' style={{textAlign:'center'}} />:
                    this.props.openTransaction_info.errMess == null ?
                    <div className='table-container'>
                    <Table hover responsive >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>CoinPair</th>
                                <th>Stop Price</th>
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
                    </div> : this.props.openTransaction_info.errMess.message=="Cannot read property 'json' of undefined" ? null:
                    <div style={{color:'red', textAlign:'center'}}><h2>{this.props.openTransaction_info.errMess.message}</h2></div>
                }
                <div>
                <Button onClick={this.fetchData} color="danger" size='md' style={{margin:'5px'}}>Refresh</Button>{' '}
                </div>
            </div>
        )
    }
}

export default OpenTransaction
