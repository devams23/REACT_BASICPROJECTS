import { useState , useEffect } from "react";

function useCurrencyinfo(currency) {
    const [data , setdata] = useState({});
    useEffect(()=>{
        fetch(`https://2024-03-06.currency-api.pages.dev/v1/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res=> setdata(res[currency])))
    } , [currency])
    return data;
}
export default useCurrencyinfo;