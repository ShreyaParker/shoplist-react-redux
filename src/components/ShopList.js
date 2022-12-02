import React from 'react';
import {useSelector} from "react-redux";
import ShopCard from "./ShopCard";




const ShopList = () => {

    const shopList = useSelector(state => state.shop.shopList)
    const filterdShop = useSelector(state => state.shop.filterShop)
    const filterStatus = useSelector(state => state.shop.filterStatusShop)


    const sortedShopList=[...shopList];
    sortedShopList.sort((a,b)=>(a.name)-(b.name))

    const filteredData = sortedShopList.filter(function(item) {
        if(filterdShop.length>0){
            for(let i=0;i<filterdShop.length;i++){
                if(item.area===filterdShop[i] || item.category===filterdShop[i]){
                    return item
                }

            }

            return null
        }else if(filterStatus.length>0){
            let date=new Date();
            if(filterStatus.includes("open")){

                return Date.parse(item.opendate)<=Date.parse(date) && Date.parse(item.closedate)>=Date.parse(date)
            }else if(filterStatus.includes("close")){


                return Date.parse(item.opendate)>=Date.parse(date) || Date.parse(item.closedate)<=Date.parse(date)
            }
        }
        return item

    });








    return (
        <div>
            {filteredData && filteredData.length > 0 ? (
                filteredData.map((shop,index) => (
                    <ShopCard shop={shop} key={index} />
                ))
            ) : (
                    <p>No shops found</p>
                )
}
        </div>
    );
};

export default ShopList;