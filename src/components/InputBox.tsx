import React, {useId} from 'react'
interface inputlabel{
  label:string,
  amount:number, 
  onAmountChange?:any, 
  onCurrencyChange:any,
  currencyOption:string[],
  selectCurrency:string,
  amountDisable?:boolean,
  currencyDisable?:boolean, 
  className?:string,
}

function InputBox(
  {label, 
  amount, 
  onAmountChange, 
  onCurrencyChange,
  currencyOption=[],
  selectCurrency,
  amountDisable=false,
  currencyDisable=false, 
  className=""}:inputlabel) {
    const amountInputId= useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className='w-1/2'>
        <label htmlFor={amountInputId} className='text-black mb-2 inline-block'>{label}</label>
        <input 
          id={amountInputId}
          type="number" 
          value={amount} 
          placeholder='Amount' 
          disabled={amountDisable}
          onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))} 
          className='text-black outline-none w-full bg-transparent py-1.5'
        /> 
      </div>
      <div className='w=1/2 flex flex-wrap justify-end text-right'>
        <p className='text-black mb-2 w-full'>Currency type</p>
        <select 
        value={selectCurrency}
        onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)} 
        disabled={currencyDisable}
        className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none text-black'>
          {
            currencyOption.map((currency)=>(
              <option key={currency} value={currency}>{currency}</option>

            ))
          }
        </select>

      </div>
      
    </div>
  )
}

export default InputBox
