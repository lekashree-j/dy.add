import {useState} from "react";

const TestApp = () => {
    const [values, setValues] = useState({first:"",second:"",sum:""})
    const [first,setFirst]=useState('')
    const [second,setSecond]=useState('')
    const [sum,setSum]=useState('')
const onChange=(e)=> {
    let name = e.target.name;
    let value = e.target.value;
    const newValues = {
        ...values,
        [name]: value
    }
    setValues(newValues)
    calcSum(newValues)

}
    const calcSum = (newValues) => {
        const { first,second} = newValues;
        const newSum = parseInt(first,10)+parseInt(second,10)
        setSum(newSum)
    }
    return ( <form>
        <div >
          First
            <input type="text" onChange={onChange} defaultValue={first} name='first' id="first" type="number"/>

            Second
            <input type="text" onChange={onChange} defaultValue={second} name="second"  id="second" type="number"/>


            <h1> total
                <input onChange={onChange} defaultValue={sum} id="sum" name="sum" type="number"/></h1>


        </div>
    </form> );
}

    export default TestApp