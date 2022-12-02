import React,{useState} from "react";
import FormInput from "./components/FormInput";
import ShopList from "./components/ShopList";

import Filter from "./components/Filter";
import {LibraryAdd} from "@mui/icons-material";


function App() {

    const [formInput,setFormInput]=useState(false)
   return (
    <div className="App">
      <div className="flex m-12 gap-10 flex-col">
          <div className="flex justify-center ">
              <h1 className="text-2xl md:text-4xl text-fuchsia-600
              font-extrabold">SHOP LIST</h1>
          </div>
      <div className="flex flex-row  ">
       <button className="mr-auto" onClick={()=>setFormInput(!formInput)}>
           <LibraryAdd/>Add a Shop</button>
          <div>
              <Filter/>
          </div>


        </div>
      <div>
          {formInput ? <FormInput type="add" setFormInput={setFormInput}/> : ""}
          <ShopList/>
      </div>
      </div>
    </div>
  );
}

export default App;
