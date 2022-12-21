import { useState } from "react"
import style from "./calculator.module.css"

const Calculator = () => {
   let [input1, setInput1] = useState()
   let [input2, setInput2] = useState()
   let [input3, setInput3] = useState()

    let inputData1 = (e) => {
        setInput1(e.target.value)
    }
    let inputData2 = (f) => {
       setInput2(f.target.value)
    }
    let add = () => {
       setInput3(parseInt(input1)+ parseInt(input2)) 
    }
    let sub = () => {
        setInput3(parseInt(input1) - parseInt(input2)) 
    }

    let mul = () => {
        setInput3(parseInt(input1) * parseInt(input2)) 
    }

    let div = () => {
        setInput3(parseInt(input1) / parseInt(input2)) 
    }

    let reset = () => {
        document.getElementById("input1").value = ""
        document.getElementById("input2").value = ""
        document.getElementById("input3").value = ""
        setInput3("")
    }

    let pre = (e) => {
        e.preventDefault()
    }

    return (
            <form onSubmit={pre}>
                <h1>== CALCULATOR ==</h1>
                <div>
                <label htmlFor="" >Enter First Number : </label> <br />
                <input type="number" onChange={inputData1} id="input1"/> <br /> <br />
                </div>
                <div>
                <label htmlFor="">Enter Second Number : </label> <br />
                <input type="number" onChange={inputData2} id="input2" /> <br /><br />
                </div>
                <div>
                <label htmlFor="">Result : </label> <br />
                <input type="text" id="input3" value={input3}/> <br />
                </div>
                <div>
                <button onClick={add}>+</button>
                <button onClick={sub}>-</button>
                </div>
                <div>
                <button onClick={mul}>*</button> 
                <button onClick={div}>/</button>
                </div>
                <div>
                <button onClick={reset}>Reset</button> <br />
                </div>
            </form>
    )
}
export default Calculator