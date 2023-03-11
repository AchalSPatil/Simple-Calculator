
import Calculator from "./calculator"
import { BrowserRouter, Routes, Route } from "react-router-dom";

 function App(){
  return (
   <BrowserRouter>
   <Routes>
<Route path="/" element={<Calculator />} />
</Routes>
    
</BrowserRouter>
  );
}

export default App;


