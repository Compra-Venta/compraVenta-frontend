import React, {useState} from 'react'
import { Nav, NavItem, NavLink, TabContent, TabPane, Button } from 'reactstrap';
import Account from './Account'
import Personal_Info from './Personal_Info'
import ProfileNav from './ProfileNav'
import Wallet from './Wallet'
import ChangePassword from './ChangePassword'
import Footer from '../Footer'
import OpenTransaction from './OpenTransaction';
import ClosedTransaction from './ClosedTransaction';


function Profile(props) {
    const [activeTab, setActiveTab] = useState('1');

    const resetAccount = async () => {
        await props.resetAccount()
    }

    return (
        <>
        <div><ProfileNav/></div>
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
                <Account/>
                <div>
                <Button onClick={() => resetAccount()} color="danger" size='md' style={{marginLeft:'30px'}}>Reset Account Details</Button>{' '}
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
                        Open Transactions
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={activeTab == '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                        Closed Transactions
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
                <Button color="danger" size='md' style={{marginLeft:'30px'}}>Trade More Coins</Button>{' '}
                </div>
            </div>
            <Footer/>
        </div>
        </>
    )
}

export default Profile


