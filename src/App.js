import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Overview from './pages/Overview';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import Team from './pages/Team';
import AdminSbreq from './components/sendBalanceRequest/AdminSbreq';
import AgentSbreq from "./components/sendBalanceRequest/AgentSbreq";
import CustomerSbreq from "./components/sendBalanceRequest/CustomerSbreq";
import DeliverSbreq from "./components/sendBalanceRequest/DeliverSbreq";
import SellerSbreq from "./components/sendBalanceRequest/SellerSbreq";
import BalanceReqList from "./components/sendBalanceRequest/BalanceReqList";
import WithdrawrqList from './components/withdrawRqbalance/WithdrawrqList';
import AgentWbReq from './components/withdrawRqbalance/AgentWbReq';
import SellerWbReq from './components/withdrawRqbalance/SellerWbReq';
import CustomerWbReq from './components/withdrawRqbalance/CustomerWbReq';
import DeliverWbReq from './components/withdrawRqbalance/DeliverWbReq';
import Login from './components/Rimo/Login';

function App() {
  return (
    <>

      <Router>
        <Sidebar />
        <BalanceReqList/>

        <Switch>
          <Route path='/overview' exact component={Overview} />
          <Route path='/reports' exact component={Reports} />
          <Route path='/reports/reports1' exact component={ReportsOne} />
          <Route path='/reports/reports2' exact component={ReportsTwo} />
          <Route path='/reports/reports3' exact component={ReportsThree} />
          <Route path='/team' exact component={Team} />
          <Route path='/admin' exact component={AdminSbreq} />
          <Route path='/agent' exact component={AgentSbreq} />
          <Route path='/customer' exact component={CustomerSbreq} />
          <Route path='/Seller' exact component={SellerSbreq} />
          <Route path='/Deliver' exact component={DeliverSbreq} />
        </Switch>
        
      </Router>
      <Router>
        <WithdrawrqList/>
        <Switch>
          <Route path='/withdraw-agent' exact component={AgentWbReq} />
          <Route path='/withdraw-customer' exact component={CustomerWbReq} />
          <Route path='/withdraw-Seller' exact component={SellerWbReq} />
          <Route path='/withdraw-Deliver' exact component={DeliverWbReq} />
        </Switch>
      </Router>


    </>
  );
}

export default App;
