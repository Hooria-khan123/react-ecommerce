import { createContext, useContext, useEffect, useState } from 'react';

export const ShopContext=createContext(null);
export function useShop(){return useContext(ShopContext)}
export function ShopProvider({children}){
 const [cart,setCart]=useState(()=>JSON.parse(localStorage.getItem('northstar-cart')||'[]'));
 const [saved,setSaved]=useState(()=>JSON.parse(localStorage.getItem('northstar-saved')||'[]'));
 useEffect(()=>localStorage.setItem('northstar-cart',JSON.stringify(cart)),[cart]); useEffect(()=>localStorage.setItem('northstar-saved',JSON.stringify(saved)),[saved]);
 const add=(product,qty=1)=>setCart(c=>{const exists=c.find(i=>i.id===product.id);return exists?c.map(i=>i.id===product.id?{...i,qty:i.qty+qty}:i):[...c,{...product,qty}]});
 const change=(id,amount)=>setCart(c=>c.map(i=>i.id===id?{...i,qty:Math.max(1,i.qty+amount)}:i)); const remove=id=>setCart(c=>c.filter(i=>i.id!==id));
 const toggle=id=>setSaved(s=>s.includes(id)?s.filter(x=>x!==id):[...s,id]); const clearCart=()=>setCart([]); const count=cart.reduce((n,i)=>n+i.qty,0); const subtotal=cart.reduce((n,i)=>n+i.price*i.qty,0);
 return <ShopContext.Provider value={{cart,add,change,remove,saved,toggle,count,subtotal,clearCart}}>{children}</ShopContext.Provider>
}
