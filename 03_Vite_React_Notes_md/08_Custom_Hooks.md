# 8. CUSTOM HOOKS
## PROJECT :  CURRENCY CONVERTER
### App.jsx

```jsx
import { useState } from "react";
import InputBox from "./component/InputBox";
import useCurrencyInfo from "./customHook/useCurrencyInfo"


function App() {
    const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState("usd")
    const [to, setTo] = useState("inr")
    const [convertedAmout, setConvertedAmount] = useState(0)

    const [selectedFromCurrency, setSelectedFromCurrency] = useState(from);
    const [selectedToCurrency, setSelectedToCurrency] = useState(to);

    const currencyInfo = useCurrencyInfo(from)
    const option = Object.keys(currencyInfo)

    const swap = () => {
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setAmount(convertedAmout)

        // Update the selected currencies when swapping
        setSelectedFromCurrency(to);
        setSelectedToCurrency(from);

    }
    
    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to])
    }

     // Define a function to reset the form fields to their initial values
  const resetForm = () => {
    setAmount(0);
    setSelectedFromCurrency("usd");
    setSelectedToCurrency("inr");
    setConvertedAmount(0);
  }


  return (
      <>
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        <div className="w-full mb-1">
                         <InputBox
                         label="from"
                         amount={amount}
                         currencyOption={option}
                         onCurrencyChange={(currency) => setSelectedFromCurrency(currency) }
                         onAmountChange={ (amount) => setAmount(amount) }
                         selectCurrency={selectedFromCurrency} // Use selectedFromCurrency
                          />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                        <InputBox
                         label="to"
                         amount={convertedAmout}
                         currencyOption={option}
                         onCurrencyChange={(currency) => setSelectedToCurrency(currency)}
                         selectCurrency={selectedToCurrency} // Use selectedToCurrency
                         amountDisable
                          />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {selectedFromCurrency.toUpperCase()} to {selectedToCurrency.toLowerCase()}
                        </button>
                        <button type="button" onClick={resetForm} className="w-full bg-red-500 text-white px-4 py-3 my-2 rounded-lg" >
                            Reset 
                            </button>
                    </form>
                </div>
            </div>
        </div>
      </>
  );

 }

 export default App

``` 

## CUSTOM HOOK FILE:
### File Path: customHook/useCurrencyInfo.js
### useCurrencyInfo.js
```jsx
import { useEffect, useState } from "react";

// Custom Hook 
// function Hello(){
//     return []
// }
// Api URL for currency rate converter :
// let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
// jab pura data milta he tab jo string form me hotahee most of cases me so typeof check .
// so, convert String to Json Conver.


function useCurrencyInfo(currency){
    // jab koi component mount hota he uska life cycle method run hota he tab useEffect(() => {}, []).
        const[data, setData] = useState({});

        useEffect( () => {
            fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]) ) // res[currency] === res.currency
            console.log(data);
        }, [currency])
        console.log(data);
    return data;
}

export default useCurrencyInfo;

```

## component
- InputBox.jsx
- Index.jsx

### Index.jsx
File Path : component/Input.jsx
```jsx
import React, {useId} from 'react'


function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,  
  className = "",
}) {
 
const amountInputId = useId();
  return (

      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
          <div className="w-1/2">
              <label  
              htmlFor={amountInputId}
                //  this is a biding of useId hook.
              className="text-black/40 mb-2 inline-block">
                  {label}
              </label>
              <input
                  id={amountInputId}
                  className="outline-none w-full bg-transparent py-1.5 px-2 bg-blue-200 rounded-sm"
                  type="number"
                  placeholder="Amount"
                  disabled = {amountDisable}
                  value={amount}
                  onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value)) } // stricly check.
                  // onAmountChange event fire karna  ho sakta he onAmountChange me koi value na ho tab check karne k liye && call kar diya jo aur vo string format me hone oar value change karni padti hee.
              />
          </div>
          <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className="text-black/40 mb-2 w-full">Currency Type</p>
              <select
                  className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                  value={selectCurrency}
                  onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                  disabled = {currencyDisable}
                  
              >
                  
                  {
                    currencyOption.map( (currency) => (

                      <option key={currency} value={currency}>
                          {currency}
                      </option>
                    ) )
                  }
              
              </select>
          </div>
      </div>
  );
}

export default InputBox;

```

## Index.js
### File Path : component/Index.jsx
```jsx
import InputBox from "./InputBox"; 

export {InputBox}
```
### result :
<img src="images_md/image7.png" width="600px">
