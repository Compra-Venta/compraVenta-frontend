import React, {useState} from 'react'
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { LightweightChart } from './Chart';

export default function ChartTab(props) {
    const [activeTab, setActiveTab] = useState('1');
    
  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink className={activeTab == '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
            5m
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={activeTab == '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
            15m
          </NavLink>
        </NavItem>
      </Nav>
      
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
            <div className='row' style={{overflow:'auto',display:'grid'}}>
                <LightweightChart interval={`${5}m`} coinpair={`${props.coinpair}`}  />
            </div>
        </TabPane>
        <TabPane tabId="2">
            <div className='row' style={{overflow:'auto',display:'grid'}}>
                <LightweightChart interval={`${15}m`} coinpair={`${props.coinpair}`}  />
            </div>
        </TabPane>
      </TabContent>
      
    </div>
  )
}


