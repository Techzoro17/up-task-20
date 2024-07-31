import React, { useState } from 'react'
import { useEffect } from 'react';
import '../App.css'

const Main = () => {
    const [item,setItem]=useState([
        {
            name:"Air Jordan-1",
            quan:1,
            link:"shoe-1",
            price:299
        },{
            name:"Air Jordan-2",
            quan:1,
            link:"shoe-2",
            price:159
        },{
            name:"Air Force-21",
            quan:1,
            link:"shoe-3",
            price:399
        },{
            name:"Air wings-1",
            quan:1,
            link:"shoe-4",
            price:499
        },{
            name:"nike sleeper-1",
            quan:1,
            link:"shoe-5",
            price:278
        },{
            name:"Vans Old school-1",
            quan:1,
            link:"shoe-6",
            price:256
        },{
            name:"demon slayer-1",
            quan:1,
            link:"shoe-7",
            price:299
        },{
            name:"Air-1",
            quan:1,
            link:"shoe-8",
            price:399
        }
    ]);
    const [cart,setCart]=useState([]);
    const [total,setTotal] =useState(0);

    const Addcart =(data)=>{
        const dataa ={
            name:data.name,
            price:data.price,
            quan:data.quan,
            Amount:data.price*data.quan
        }
        setCart([...cart,dataa])

    }
    const Addquan =(temp)=>{
        const newcart = cart.map((data)=>(data.name).includes(temp)?{...data,quan:data.quan+1,Amount:data.price*(data.quan+1)}:data)
       setCart(newcart)
    }
    const Subquan =(temp)=>{
        const newcart = cart.map((data)=>(data.name).includes(temp)?{...data,quan:data.quan-1,Amount:data.price*(data.quan-1)}:data)
       setCart(newcart)
    }
    useEffect(() => {
        const totalAmount = cart.reduce((acc, curr) => acc + curr.Amount, 0);
        setTotal(totalAmount);
        const cartdata = cart.filter((data)=>(data.quan>0))
        setCart(cartdata)
    }, [cart]);

   
    

   
    

    
  return (
    <div  className='  m-4 main-h  flex justify-between'>

        <div className='grid grid-cols-2 bg-slate-400 overflow-auto w-5/12 px-14 mx-8 '>
            {item.map((itemm)=>(
            <div key={itemm.link} className='bg-white m-1 w-max p-4 rounded-xl'>
                    <h2 className='font-bold text-xl'>{itemm.name}</h2>
                    <img src={`..//Image/${itemm.link}.jpg`} alt={itemm.name} className='size-44 rounded-xl' />
                    <p className='text-sm font-semibold'>Price:${itemm.price}</p>
                    <button className='bg-green-800 text-white px-2 py-1 rounded-lg' onClick={()=>Addcart(itemm)}>Add Cart</button>
            </div>

            ))}

        </div>

        <div className='bg-slate-400 w-5/12 mx-8'>
            <div className=' h-full' >
                <h2 className='flex justify-center font-bold text-2xl w-full '>Cart</h2>
                <div className='h-4/5  overflow-auto'>
                    {cart.map((data)=>(
                        data.quan>0&&
                        
                        <div className='flex bg-white mx-10 my-2 justify-between p-4 rounded-2xl font-bold' >
                            
                            <h2>{data.name}</h2>
                            <div className='flex w-2/5 justify-evenly'>
                                <button onClick={()=>Subquan(data.name)}>-</button>
                                <h2>{data.quan}</h2>
                                <button onClick={()=>Addquan(data.name)}>+</button>
                            </div>
                            <p>{data.Amount}</p>
                        </div>
                        
))}
                </div>
                <h2 className='flex justify-center font-bold text-2xl w-full '>Total:{total}</h2>
            </div>
        </div>


    </div>
  )
}

export default Main