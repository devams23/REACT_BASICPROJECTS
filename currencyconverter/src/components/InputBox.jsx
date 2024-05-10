import { useId , useRef} from "react";

function InputBox({
    label, // this is the label for "to"  / "from "
    amount,
    amount2,
    convert,
    change,
    change2,
    selectcurrency,
    onAmountChange,
    onCurrencyChange,
    currencyoption = [],
    amountdisable = false,
    currencydisable = false,

}) {
   
    const amountId = useId();
    const amref = useRef(null);

    return (
        <div className={`bg-gray-300 p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label htmlFor={amountId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
    id={amountId}
    ref={amref}
    className="outline-none w-full bg-transparent py-1.5"
    placeholder="Amount"
    disabled={amountdisable}
    value={amount || ''} // Set value to empty string when amount is null or undefined
    onChange={(e) => {
        onAmountChange(Number(e.target.value));
        convert(Number(e.target.value) * change);
        
    }}
/>
            
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" 
                disabled = {currencydisable} 
                value={selectcurrency}
                onChange={(e) => { 
                // console.log("amount2",amount2)
                // console.log("change",change2)
                onCurrencyChange(e.target.value);
                }
                }>
                        {
                        currencyoption.map(
                            (currency)=><option key={currency} value={currency} >{currency} </option>
                        )
                        
                        }
                        
                </select>
            </div>
        </div>
    );
}

export default InputBox;
