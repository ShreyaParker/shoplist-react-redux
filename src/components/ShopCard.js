import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {deleteShop} from "../slices/shopSlice";
import FormInput from "./FormInput";
import {DeleteTwoTone, EditTwoTone} from "@mui/icons-material";
const ShopCard = ({shop}) => {
    const [updateInputOpen, setUpdateInputOpen] = useState(false);
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(deleteShop(shop.id))

    }
    const handleEdit = () => {
        setUpdateInputOpen(true)
    }
    return (
        <div className="rounded-lg bg-fuchsia-300 mb-1 mx-auto">
            <div className="flex flex-col">
                <div className="flex flex-row justify-around">
                    <h1 className=" p-2 md:px-28 text-3xl">{shop.name}</h1>
                    <div className="md:flex md:flex-row">
                        <h1 className=" p-2 text-sm ">{shop.opendate}</h1>
                        <h1 className=" p-2 text-sm ">{shop.closedate}</h1>
                    </div>
                </div>
                <div className="flex flex-row justify-around">
                    <div className="p-2 md:px-16">
                        <h1>{shop.area}</h1>
                        <h1>{shop.category}</h1>
                    </div>
                   <div>
                       <button onClick={handleDelete}><DeleteTwoTone/></button>
                       <button onClick={handleEdit}><EditTwoTone/></button>
                   </div>
                </div>
            </div>
            {updateInputOpen ? <FormInput type="update" shop={shop} setFormInput={setUpdateInputOpen}/> : ""}
        </div>

    );
};

export default ShopCard;