import {createSlice} from "@reduxjs/toolkit";



const getInitialShop=()=>{
    const localShop = localStorage.getItem("shopList");
    if(localShop){
        return JSON.parse(localShop);
    }
}
const initialValue={
    filterShop:[],
    filterStatusShop:[],
    shopList:getInitialShop()
}
export const shopSlice = createSlice({
    name:"shop",
    initialState:initialValue,
    reducers:{
        addShop:(state,action)=>{
            state.shopList.push(action.payload)
            const shopList = localStorage.getItem("shopList")
            if(shopList){
const shopListArray = JSON.parse(shopList)
                shopListArray.push({...action.payload})
                localStorage.setItem("shopList",JSON.stringify(shopListArray))


            }else{
                localStorage.setItem("shopList",JSON.stringify([{...action.payload}]))
            }

        },
        filterShop:(state,action)=>{
            state.filterShop.splice(0,state.filterShop.length,...action.payload)
        },
        filterStatusShop:(state,action)=>{
            state.filterStatusShop.splice(0,state.filterStatusShop.length,...action.payload)

        },
        deleteShop:(state,action)=>{
            const shopList = localStorage.getItem("shopList");
            if(shopList){
                const shopListArray = JSON.parse(shopList)
                shopListArray.forEach((shop,index)=>{
                    if(shop.id===action.payload){
                        shopListArray.splice(index,1)
                    }
                }
                )
                localStorage.setItem("shopList",JSON.stringify(shopListArray))
                state.shopList = shopListArray;
            }

        },
        updateShop:(state,action)=>{
            const shopList= localStorage.getItem("shopList");
            if(shopList){
                const shopListArray = JSON.parse(shopList)
                shopListArray.forEach((shop,index)=>{
                    if(shop.id===action.payload.id){
                        shop.name=action.payload.name;
                        shop.opendate=action.payload.opendate;
                        shop.closedate=action.payload.closedate;
                        shop.area=action.payload.area;
                        shop.category=action.payload.category;


                    }
                })
                localStorage.setItem("shopList",JSON.stringify(shopListArray))
                state.shopList = shopListArray;
            }
        }

    }})


export const {addShop,filterShop,deleteShop,updateShop,filterStatusShop}=shopSlice.actions;
export default shopSlice.reducer;
