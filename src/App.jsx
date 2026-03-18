import { useState } from "react";
import "./App.css";

function App() {
    const [num, setNum] = useState(0);
    // let num = 0
    const changeNumber = () => {
        setNum(num + 1);

        /*  num++;
            evabe korle just num er value change hobe kintu UI te update hobe na 
            sheta korar jonno amra useState() hook er help nei jeta num value change hobe 
            kina lokkho rakhe and shei onujai pura component ta k re-render kore 
            as a result pura UI tao change hoye jay
        */
    };

    return (
        <>
            <h1>Number:{num}</h1>
            <button onClick={changeNumber}>Change Number</button>
        </>
    );
}

export default App;
