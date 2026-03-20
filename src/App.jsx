import { Suspense } from "react";
import "./App.css";
import FoodSection from "./Components/FoodSection/FoodSection";
import Navbar from "./Components/Navbar/Navbar";


const foodDataPromise = fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a").then(res =>res.json())

function App() {
    return (
        <>
            <Navbar></Navbar>

            <Suspense>
                <FoodSection foodDataPromise={foodDataPromise}></FoodSection>
            </Suspense>
        </>
    );
}

export default App;
