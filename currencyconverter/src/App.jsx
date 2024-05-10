  import { useState  , useEffect} from 'react'
import {InputBox} from './components'
import useCurrencyinfo from './hooks/useCurrencyinfo'
import './App.css'



function App() {
  const [amountfrom, setamountfrom] = useState(0);
  const [amountto, setamountto] = useState(0);
  const [currency, setcurrency] = useState("");
  const [from , setfrom ] = useState("inr");
  const [to , setto ] = useState("usd");
  const [change1 , setchange1 ] = useState(1);
  const [change2 , setchange2 ] = useState(1);

  
  
  const currencyInfo = useCurrencyinfo(from); // this is the custom hook we made 
  const options = Object.keys(currencyInfo);
 
  useEffect(() => {
    // Calculate the exchange rate when either 'from' or 'to' changes
    setchange1(currencyInfo[to])
    setchange2(1/currencyInfo[to])
    console.log(amountto)
  }, [to, currencyInfo]);
   // Include 'to' and 'currencyInfo' in the dependency array
    console.log(change1); // Log the exchange rate
    console.log(change2); // Log the exchange rate
    // console.log(amountfrom);
    // console.log(amountto);
  // Calculate the inverse exchange rate synchronously outside of useEffect;

  
  return (
    <>  
        <InputBox 
        label = "from" 
        amount={amountfrom}
        amount2={amountto}
        convert={setamountto}
        selectcurrency={from}
        change = {change1}
        change2 = {change2}
        onAmountChange={setamountfrom}
        onCurrencyChange={setfrom}
        currencyoption={options}
        amountdisable={false} 
        currencydisable={false}

        />

        <InputBox 
        label = "to" 
        amount={amountto}
        amount2={amountfrom}
        convert={setamountfrom}
        selectcurrency={to}
        change2 = {change1}
        change= {change2}
        onAmountChange={setamountto} 
        onCurrencyChange={setto}
        currencyoption={options}
        amountdisable={false} 
        currencydisable={false}

        />
    </>
  )
}

export default App
