import React, { Component } from 'react'
import { Button, Table, Spinner } from 'reactstrap'

class ClosedTransaction extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoading: true,
            errMess: null,
            closedOrder: []
        }
        this.setData = this.setData.bind(this)
    }
    
    setData = (info) => {

        var closedOrder = this.state.closedOrder
        if(info.errMess == null)
            closedOrder = info.closedTransaction_info
        this.setState({
            isLoading: info.isLoading,
            errMess: info.errMess,
            closedOrder: closedOrder
        })
    }

    fetchData = () => {
        this.props.fetchClosedTransaction()
        //this.setData(this.props.openTransaction_info)
    }

    componentDidMount = async () => {
        this.fetchData()
        //this.setData(this.props.closedTransaction_info)
    }

    render() {

        const state = this.state;
        const orderData = this.props.closedTransaction_info.closedTransaction_info;
        let size = orderData.length;
        //console.log('Total Closed Orders: ',size)
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
                </tr>
            )
        })

        return (
            <div className='container-fluid'>
                {
                    this.props.closedTransaction_info.isLoading ?
                    <Spinner color='success' style={{textAlign:'center'}} />:
                    this.props.closedTransaction_info.errMess == null ?
                    <div className='table-container'>
                    <Table hover responsive style={{maxHeight:'380px'}} >
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
                    </div> : this.props.closedTransaction_info.errMess.message=="Cannot read property 'json' of undefined" ? null:
                    <div style={{color:'red', textAlign:'center'}}><h2>{this.props.closedTransaction_info.errMess.message}</h2></div>
                }
                <div>
                <Button onClick={this.fetchData} color="danger" size='md' style={{margin:'5px'}}>Refresh</Button>{' '}
                </div>
            </div>
        )
    }
}

export default ClosedTransaction
