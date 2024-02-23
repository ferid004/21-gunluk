import { createContext, useContext, useState } from "react";
import useLocalStroge from "../hook/useLocalStroge";
import axios from "axios";

const userContext = createContext()

export const UserProvider = ({ children }) => {
    const [User, setUser,update] = useLocalStroge("profil")

    function LoginUser(user) {
        setUser(user)
    }

    //// basket function
    function addbasket(item) {
        const index=User.basket.findIndex((x)=> x._id === item._id);
        if (index===-1) {
            item.count=1
            User.basket.push(item)
            update()
            putBasket(User.basket,User.userId)
            return
        }
        User.basket[index].count += 1;
        update()
        putBasket(User.basket,User.userId)


    }
    function art(item) {
        const index=User.basket.findIndex((x)=> x._id === item._id);
        User.basket[index].count ++
        update()
        putBasket(User.basket,User.userId)
    }
    function azalt(item) {
        const index=User.basket.findIndex((x)=> x._id === item._id);
        if (User.basket[index].count ===1) {
            return
        }
        User.basket[index].count --
        update()
        putBasket(User.basket,User.userId)
    }
    function basketdelet(item) {
        User.basket=User.basket.filter((x)=> x._id !== item._id);
        update()
        putBasket(User.basket,User.userId)
    }

    
    function addwish(item) {
        const index = User.wishlist.findIndex((x) => x._id === item._id);
        if (index === -1) {
            item.count = 1;
            User.wishlist.push(item);
        } else {
            User.wishlist.splice(index, 1);
        }
        update();
        putWish(User.wishlist, User.userId);
    }

    async function putBasket (basket,id) {
        const res=await axios.put(`http://localhost:3000/user/basket/${id}` ,{basket:basket})
    }   
    async function putWish (wishlist,id) {
        const res=await axios.put(`http://localhost:3000/user/wish/${id}` ,{wishlist:wishlist})
    }   
    ///

    const data = { User, setUser, LoginUser,addbasket,art,azalt,basketdelet ,addwish}

    return (
        <userContext.Provider value={data}>
            {children}
        </userContext.Provider>
    )
}

export const useUser = () => useContext(userContext)