import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Buy_Market from './Buy_Market';
import Sell_Market from './Sell_Market';
import Buy_Stoploss from './Buy_Stoploss';
import Sell_Stoploss from './Sell_Stoploss';

const Example = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Market
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            StopLoss
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="6">
              <div >
                  <Buy_Market/>
              </div>
            </Col>
            <Col sm="6">
              <div>
                  <Sell_Market/>
              </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="6">
              <Buy_Stoploss/>
            </Col>
            <Col sm="6">
              <div>
              <Sell_Stoploss/>
              </div>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Example;