import {useEffect, useState} from "react"


function useCurrencyInfo(currency:any){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        // console.log(data, "i am from usecurrencey 1"); 
    }, [currency])
    // console.log(data, "i am from usecurrencey 2");
    return data
}

export default useCurrencyInfo;