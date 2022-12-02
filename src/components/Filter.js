import React from 'react';
import{useState} from "react";
import {useDispatch} from "react-redux";
import {filterShop} from "../slices/shopSlice";
import {filterStatusShop} from "../slices/shopSlice";
import {ArrowDropDown,  Tune} from "@mui/icons-material";


const Filter = () => {
    const dispatch = useDispatch();
    const [showFilter,setShowFilter]=useState(false)
    const [filter,setFilter]=useState([])
    const [statusFilter,setStatusFilter]=useState([])
    const handleChange=(e)=>{
        let filterArray = [...filter];
        if (e.target.checked) {
            filterArray = [...filter, e.target.value];
        } else {
            filterArray.splice(filter.indexOf(e.target.value), 1);
        }
        setFilter(filterArray);
        dispatch(filterShop(filterArray))

    }
    const handleStatusChange=(e)=>{
        let filterArray = [...statusFilter];
        if (e.target.checked) {
            filterArray = [...statusFilter, e.target.value];
        } else {
            filterArray.splice(statusFilter.indexOf(e.target.value), 1);
        }
        setStatusFilter(filterArray);
        dispatch(filterStatusShop(filterArray))

    }
    const availableArea=["thane","pune","mumbai","nashik","nagpur","ahmednagar","solapur","other"]
    const availableCategory=["grocery","stationary","baker","butcher","chemist","other"]

    return (
        <div >
            <div>
            <div className="flex flex-row gap-3">
                <Tune/>
                <h1 >Filter</h1>
                <button onClick={()=>setShowFilter(!showFilter)}><ArrowDropDown/></button>
            </div>
                {showFilter  && <div className="fixed z-50  px-1  bg-white">
                    <div className=" flex flex-col">
                        <h1 className="md:text-2xl bg-fuchsia-300">Area</h1>
                        <div className="flex flex-col">
                            {availableArea.map((area,index)=>(
                                <div key={index}>
                                    <input type="checkbox" value={area} onChange={handleChange}/>
                                    <label htmlFor={area}>{area}</label>
                                </div>

                            ))}

                        </div>

                        <h1 className="md:text-2xl bg-fuchsia-300">Category</h1>
                        <div className="flex flex-col">
                            {availableCategory.map((area,index)=>(
                                <div key={index} >
                                    <input type="checkbox" value={area} onChange={handleChange}/>
                                    <label htmlFor={area}>{area}</label>
                                </div>
                            ))}
                        </div>
                        <div>

                                <input type="checkbox" value="open" onChange={handleStatusChange}/>
                                <input type="checkbox" value="close" onChange={handleStatusChange}/>

                        </div>
                    </div>

                </div>}
            </div>
        </div>
    );
};

export default Filter;