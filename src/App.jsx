import React,{useEffect,useContext} from 'react'
import { Route,Router, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Exchanges from './pages/Exchanges'
import Sidebar from './components/Sidebar'
import './Styles/styles.scss'
import SelectedCurrencyContext from './store/selectedCurrencyContext'
import currencyListContext from './store/currencyListContext'


const App = () => {

  const selectedCurrencyCTX =useContext(SelectedCurrencyContext);
  const currencyListCTX =useContext(currencyListContext);

  useEffect(() => {
    currencyListCTX.getCurrencyList();
    currencyListCTX.getExchanges();
    selectedCurrencyCTX.getHistory('bitcoin');
  },[])
    return (
    <div className='App'>
      <Sidebar/>
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/exchanges" element={<Exchanges/>} />
      </Routes>
    </div>
  )
}

export default App