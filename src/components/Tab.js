import React, { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import Buy_Market from './Trade/Buy_Market';
import Buy_Stoploss from './Trade/Buy_Stoploss';
import Sell_Market from './Trade/Sell_Market';
import Sell_Stoploss from './Trade/Sell_Stoploss';

export default function MyTabs(props) {
  const [activeTab, setActiveTab] = useState('1');
  return (
    <div className='w-100'>
      <Nav tabs>
        <NavItem>
          <NavLink className={activeTab == '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
            Market
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={activeTab == '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
            Stop
          </NavLink>
        </NavItem>
      </Nav>
      
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Buy_Market 
                        qa={props.qa} ba={props.ba} qp={props.qp} bp={props.bp} 
                        placeMarketOrder={props.placeMarketOrder} marketOrder={props.marketOrder}/>
                    </div>
                    <div className="col-6">
                        <Sell_Market 
                        qa={props.qa} ba={props.ba} qp={props.qp} bp={props.bp}
                        placeMarketOrder={props.placeMarketOrder} marketOrder={props.marketOrder}/>
                    </div>
                </div>
            </div>
        </TabPane>
        <TabPane tabId="2">
        <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <Buy_Stoploss 
                        qa={props.qa} ba={props.ba} qp={props.qp} bp={props.bp}
                        placeStopOrder={props.placeStopOrder} stopOrder={props.stopOrder} />
                    </div>
                    <div className="col-6">
                        <Sell_Stoploss 
                        qa={props.qa} ba={props.ba} qp={props.qp} bp={props.bp}
                        placeStopOrder={props.placeStopOrder} stopOrder={props.stopOrder} />
                    </div>
                </div>
            </div>
        </TabPane>
      </TabContent>
      
    </div>
  );
}