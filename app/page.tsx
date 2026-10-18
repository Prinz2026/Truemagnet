"use client";
import { useState, useEffect } from "react";
const PRODUCTS=[
{id:1,name:"Oraimo FreePods 4",price:18500,old:35000,off:47,img:"https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500"},
{id:2,name:"Men Sneakers White",price:12000,old:20000,off:40,img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"},
{id:3,name:"Itel 32'' TV",price:95000,old:120000,off:20,img:"https://images.unsplash.com/photo-1593359677879-a4bb92f367d8?w=500"},
{id:4,name:"Anker Powerbank",price:15500,old:25000,off:38,img:"https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500"},
];
export default function Home(){
const [cart,setCart]=useState<any[]>([]);
const [logo,setLogo]=useState("OptimumMart");
useEffect(()=>{
const l=localStorage.getItem("optimum-logo");if(l)setLogo(l);
const c=localStorage.getItem("optimum-cart");if(c)setCart(JSON.parse(c));
},[]);
const add=(p:any)=>{const nc=[...cart,p];setCart(nc);localStorage.setItem("optimum-cart",JSON.stringify(nc));alert(p.name+" added!")};
return(
<div className="min-h-screen">
<div className="bg-[#f68b1e] text-white px-4 py-3 flex justify-between items-center sticky top-0 z-50">
<h1 className="font-black text-xl">{logo} ★</h1>
<div className="flex gap-2"><a href="/admin" className="bg-black px-3 py-1 rounded text-sm">ADMIN</a><div className="bg-white text-[#f68b1e] px-3 py-1 rounded font-bold text-sm">🛒 {cart.length}</div></div>
</div>
<div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-3 p-2 md:p-4">
<div className="hidden md:block col-span-3 bg-white rounded p-3 shadow h-fit"><b className="text-sm">Categories</b>{["Supermarket","Phones & Tablets","Health & Beauty","Home & Office","Electronics","Fashion","Computing","Baby","Gaming"].map(c=>(<div key={c} className="py-2 text-sm border-b last:border-0 hover:text-[#f68b1e]">› {c}</div>))}</div>
<div className="col-span-12 md:col-span-6"><img src="https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/0110_BFTeaser/BF-Desktop-Homepage_Slider__712x384.png" className="w-full h-[180px] md:h-[384px] rounded shadow object-cover bg-white" alt="banner"/></div>
<div className="hidden md:block col-span-3 space-y-3"><div className="bg-white rounded shadow p-3 text-sm font-bold">CALL TO ORDER<br/>0700-600-0000</div><div className="bg-[#f68b1e] text-white rounded shadow p-4 text-center font-bold">SELL ON {logo.toUpperCase()}</div></div>
</div>
<div className="max-w-[1200px] mx-auto p-2 md:p-4"><div className="bg-white rounded shadow"><div className="bg-[#e61601] text-white p-3 flex justify-between rounded-t font-bold"><span>⚡ Flash Sales</span><span className="text-sm">12:45:20</span></div><div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-3">{PRODUCTS.map(p=>(<div key={p.id} className="border rounded p-2 hover:shadow-lg"><img src={p.img} className="w-full h-[140px] object-contain"/><p className="text-sm mt-2 h-[40px] overflow-hidden">{p.name}</p><p className="font-bold">₦{p.price.toLocaleString()}</p><p className="text-xs line-through text-gray-400">₦{p.old.toLocaleString()}</p><span className="bg-orange-100 text-orange-600 text-xs px-1 rounded">-{p.off}%</span><button onClick={()=>add(p)} className="w-full mt-2 bg-[#f68b1e] text-white py-2 rounded font-bold text-sm">ADD TO CART</button></div>))}</div></div></div>
</div>
);}
