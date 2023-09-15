/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart';

const Home = () => {
    const [allActors,setAllActors]=useState([])

    const [selectActors,setSelectActors]=useState([])

    const [totalCost,setTotalCost]=useState(0)

    const [remaining,setRemainig]=useState(0)


    useEffect(()=>{
        fetch('cart.json')
        .then(res=>res.json())
        .then(data=>setAllActors(data))
    },[])
    // console.log(allActors)
   
    const handleSelectActor=(actor)=>{
        // console.log("Actor select",actor)
        const isExist=selectActors.find(item=>item.id==actor.id)
        let count=actor.salary;
        if(isExist){
          return alert("Already Booked");
        }
        else{
            selectActors.forEach(actor=>{
                count=count+actor.salary;
            })

            if(count>20000){
               return alert('Insufficient Balance');
            }
            setTotalCost(count)
            const totalRemaining=20000-count;
            setRemainig(totalRemaining);
            setSelectActors([...selectActors,actor]);

        }
    }
    console.log(selectActors)

    return (
        <div className='home-container'>
            <div className='cart-container'>
                
                  <div className="cart">
                  {
                    allActors.map(actor=>
                    <Cart 
                    key={actor.id}
                     actor={actor}
                     handleSelectActor={handleSelectActor}
                     ></Cart>)
                   } 
                  </div>
                
            </div>
            <div className="add-cart">
                <h2>Total Actors: {selectActors.length}</h2>
                <h4>Remainig:{remaining}$</h4>
                <h4>Total Cost:{totalCost}$</h4>
                {
                    selectActors.map(actor=>(
                        <li key={actor.id}>{actor.name}</li>
                    ))
                }
             </div>
        </div>
    );
};

export default Home;