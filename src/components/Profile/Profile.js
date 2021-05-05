import React, {useState} from 'react'
import { Nav, NavItem, NavLink, TabContent, TabPane, Button, Modal, ModalHeader, ModalBody, ModalFooter, Spinner } from 'reactstrap';
import Personal_Info from './Personal_Info'
import ProfileNav from './ProfileNav'
import Wallet from './Wallet'
import ChangePassword from './ChangePassword'
import Footer from '../Footer'
import OpenTransaction from './OpenTransaction';
import ClosedTransaction from './ClosedTransaction';
import { connect } from "react-redux";
import { logoutUser, changePassword, fetchProfile, fetchWallet, fetchOpenTransaction, fetchClosedTransaction, cancelOrder, resetAccount} from "../../redux/actionCreaters";

const mapDispatchToProps = (dispatch) => ({
    
    logoutUser: () => dispatch(logoutUser()),
    changePassword: (info) => dispatch(changePassword(info)),
    fetchProfile: () => dispatch(fetchProfile()),
    fetchWallet: () => dispatch(fetchWallet()),
    fetchOpenTransaction: () => dispatch(fetchOpenTransaction()),
    fetchClosedTransaction: () => dispatch(fetchClosedTransaction()),
    cancelOrder: (orderId) => dispatch(cancelOrder(orderId)),
    resetAccount: () => dispatch(resetAccount())

})

const mapStateToProps = (state) => {
    return {
        
        auth: state.auth,
        changePassword_status: state.changePassword_status,
        profile: state.profile,
        wallet: state.wallet,
        openTransaction_info: state.openTransaction_info,
        closedTransaction_info: state.closedTransaction_info,

    }
}

function Profile(props) {
    const [activeTab, setActiveTab] = useState('1');
    const [modal, setModal] = useState(false);
    const [hasSubmit, setSubmit] = useState(false)
    const toggle = () =>{ 
        setModal(!modal);
      };

    const resetAccount = async () => {
        setSubmit(true)
        await props.resetAccount()
        toggle()
        setSubmit(false)
    }

    return (
        <>
        <div><ProfileNav logoutUser={props.logoutUser}/></div>
        <div className='container-fluid'>
            <div className="row" style={{padding:'30px'}}><h2>Profile</h2></div>
            <div className='row' style={{marginLeft:'40px'}}>
               <div className='col-12' style={{display:'inline-block'}}>
                <h3>Personal Info</h3>
                <hr/>
                </div>
                
                <Personal_Info fetchProfile={props.fetchProfile} profile={props.profile}/>
                <ChangePassword changePassword={props.changePassword} changePassword_status={props.changePassword_status}/>
            </div>
           
            <div className="row" style={{marginLeft:'40px',padding:'20px',paddingLeft:'0px',marginTop:'40px'}}>
            <div className='col-12'>
               <h3>Account</h3>
                <hr/>
                </div>
                <div>
                <Button onClick={toggle} color="danger" size='md' style={{marginLeft:'30px'}}>Reset Account Details</Button>{' '}
                    <Modal isOpen={modal} toggle={toggle} style={{fontSize:'160%',fontFamily:'Roboto', textAlign:'center'}} >
                        <ModalHeader toggle={toggle}>
                            Reset Account
                        </ModalHeader>
                        <ModalBody >
                              {
                                  ! hasSubmit ?
                                  <span >
                                  All Account Details will be Deleted!
                                  </span> :
                                  <Spinner grow color='success' />
                              }
                        </ModalBody>
                        <ModalFooter className='col'>
                        <Button color='danger' block onClick={() => resetAccount()} >Yes, Reset my Account</Button>
                        </ModalFooter>
                    </Modal>
                
                </div>
            </div>

            <div className="row" style={{marginLeft:'40px',padding:'20px',paddingLeft:'0px',marginTop:'40px'}}>
            <div className='col-12'>
               <h3>Transactions</h3>
                <hr/>
                </div>
                <div style={{width:'90%'}}>
                <Nav tabs>
                    <NavItem>
                        <NavLink className={activeTab == '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                        Closed Transactions
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={activeTab == '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                        Open Transactions
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <div className='row'>
                            <ClosedTransaction fetchClosedTransaction={props.fetchClosedTransaction} closedTransaction_info={props.closedTransaction_info}/>
                        </div>
                    </TabPane>
                    <TabPane tabId="2">
                        <div className='row'>
                            <OpenTransaction fetchOpenTransaction={props.fetchOpenTransaction} openTransaction_info={props.openTransaction_info} cancelOrder={props.cancelOrder}/>
                        </div>
                     </TabPane>
                </TabContent>
                </div>
            </div>

            <div className="row" style={{marginLeft:'40px',padding:'20px',paddingLeft:'0px',marginTop:'40px'}}>
            <div className='col-12'>
               <h3>Wallet</h3>
                <hr/>
                </div>
                <Wallet fetchWallet={props.fetchWallet} wallet={props.wallet} />
                <div>
                <Button color="success" size='md' style={{marginLeft:'30px'}}><a style={{color:'white'}} href='/dashboard'>Trade More Coins</a></Button>{' '}
                </div>
            </div>
           
        </div>
        <Footer/>
        </>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);


