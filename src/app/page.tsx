"use client"
import Image from "next/image";
import InputBox from "@/components/InputBox"
import useCurrencyInfo from "@/components/hooks/currencyinfo";
import { useState } from "react";

export default function Home() {
  const [amount, setAmount]=useState(0);
  const [from , setFrom]= useState("usd");
  const [to , setTo]= useState("pkr");
  const [convertedAmount, setConvertedAmount]= useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options =Object.keys(currencyInfo);
  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  console.log(currencyInfo,"i am from page");
  const convert =()=>{
    setConvertedAmount(amount * currencyInfo[to])
  } 

  return (
    <main className=" w-full flex h-screen flex-wrap items-center justify-between p-20" style={{backgroundImage:`url(https://images.pexels.com/photos/17260100/pexels-photo-17260100/free-photo-of-high-angle-view-of-a-person-riding-on-a-motor-scooter-in-heavy-rain.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)`}}>
      <div className=" w-full">
        <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 bg-white/30 backdrop-blur-sm" >
        <form onSubmit={(e)=>{e.preventDefault()}}>
          <div className="w-full mb-1">
            <InputBox
              label={"From"}
              amount= {amount}
              onAmountChange={(amount:any)=>setAmount(amount)}
              onCurrencyChange={(currency:any)=>{
               setFrom(currency)
              }}
              selectCurrency={from} 
              currencyOption={options}
            />
          </div>
          <div className="relative w-full h-0.5">
            <button type="button" onClick={swap} 
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5">
              swap
            </button>
          </div>
          <div className="w-full mb-1">
            <InputBox
              label={"To"}
              amount={convertedAmount}
              onCurrencyChange={(currency:any)=>{
               setTo(currency)
              }}
              selectCurrency={to} 
              currencyOption={options}
              amountDisable
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg "> 
            Convert {from.toUpperCase()} to {to.toUpperCase()} 
          </button>
        </form>
        </div> 
      </div>

    </main>
  );
}
