import React from 'react';
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import {v4 as uuid} from "uuid";
import {useDispatch} from "react-redux";
import {addShop} from "../slices/shopSlice";
import {updateShop} from "../slices/shopSlice";

const FormInput = ({type,setFormInput,shop}) => {
    const dispatch=useDispatch()
    const availableArea=["thane","pune","mumbai","nashik","nagpur","ahmednagar","solapur","other"]
    const availableCategory=["grocery","stationary","baker","butcher","chemist","other"]


    const initialValues = {
        name: "",
        area: "",
        category: "",
        opendate: "",
        closedate: "",

    };


    const {values, errors, touched, handleBlur, handleChange, handleSubmit} =
            useFormik({
                initialValues,
                validationSchema: basicSchema,
                onSubmit: (values, action) => {
                        if(type==="add"){
                            dispatch(addShop({
                                id:uuid(),
                                name:values.name,area:values.area,category:values.category ,opendate:values.opendate,closedate:values.closedate}))
                        }else{
                            if(shop.title!==values.title || shop.area!==values.area || shop.category!==values.category || shop.opendate!==values.opendate || shop.closedate!==values.closedate){
                                dispatch(updateShop({...shop,
                                    name:values.name,area:values.area,category:values.category ,opendate:values.opendate,closedate:values.closedate}))
                            }
                        }
                        setFormInput(false)
                    action.resetForm();
                },
            });


    return (
        <div className="flex justify-center items-center fixed inset-0 text-white z-50 outline-none focus:outline-none backdrop-blur-lg">
            <div className="bg-zinc-300 px-4 rounded-lg">
                <button className=" pl-64 text-2xl text-red-800" onClick={()=>setFormInput(false)}>
                    x
                </button>
                <h1 className="text-2xl text-black">
                    Add A shop
                </h1>
                <div className="flex flex-col">
                    <form onSubmit={handleSubmit} autoComplete="off" className="text-black gap-2  mx-8 text-start flex flex-col">
                        <div className="flex flex-col ">
                                            <label htmlFor="name" className="input-label">
                                                Shop Name
                                            </label>
                                            <input
                                                type="name"

                                                name="name"
                                                id="name"
                                                placeholder="Please enter shop name"
                                                value={values.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className="p-1 rounded-lg"

                                            />
                                            {errors.name && touched.name ? (
                                                <p className="form-error">{errors.name}</p>
                                            ) : null}
                                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="area" >
                                Area
                            </label>
                            <select
                                type="area"
                                name="area"
                                id="area"
                                placeholder="area"
                                value={values.area}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="p-1 rounded-lg"
                            >
                                <option value="" disabled selected>Select your option</option>
                                {availableArea.map((area,index)=>(
                                    <option key={index} value={area}>{area}</option>
                                ))}
                            </select>
                            {errors.area && touched.area ? (
                                <p className="form-error">{errors.area}</p>
                            ) : null}
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="category" >
                                Category
                            </label>
                            <select
                                type="category"
                                name="category"
                                id="category"
                                placeholder="category"
                                value={values.category}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="p-1 rounded-lg"
                            >
                                <option value="" disabled selected>Select your option</option>
                                {availableCategory.map((category,index)=>(
                                    <option key={index} value={category}>{category}</option>
                                ))}
                            </select>
                            {errors.category && touched.category ? (
                                <p className="form-error">{errors.category}</p>
                            ) : null}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="opendate" className="input-label">
                                Opening Date
                            </label>
                            <input
                                type="date"
                                autoComplete="off"
                                name="opendate"
                                id="opendate"
                                placeholder="Please enter opening date"
                                value={values.opendate}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="p-1 rounded-lg"
                            />
                            {errors.opendate && touched.opendate ? (
                                <p className="form-error">{errors.opendate}</p>
                            ) : null}
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="closeate" className="input-label">
                                closing Date
                            </label>
                            <input
                                type="date"
                                autoComplete="off"
                                name="closedate"
                                id="closedate"
                                placeholder="please enter closing date"
                                value={values.closedate}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="p-1 rounded-lg"
                            />
                            {errors.closedate && touched.closedate ? (
                                <p className="form-error">{errors.closedate}</p>
                            ) : null}
                        </div>


                                            <button className="rounded-lg p-1 bg-fuchsia-300 mb-3 font-bold text-2xl" type="submit">
                                                Submit
                                            </button>

                                    </form>
                </div>
            </div>
        </div>

        )

};

export default FormInput;