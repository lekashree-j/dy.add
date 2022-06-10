import {useState} from "react";

const TestApp = () => {
    const [values, setValues] = useState({first:"",second:"",sum:""})
    const first = ''
    const second = ''
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
            <h3>First</h3>
          
            <input onChange={onChange} defaultValue={first} name='first' id="first" type="number"/>

            <h3>Second</h3>

            <input onChange={onChange} defaultValue={second} name="second"  id="second" type="number"/>

            <h1>{sum}</h1>
            
        </div>
    </form> );
}

    export default TestApp