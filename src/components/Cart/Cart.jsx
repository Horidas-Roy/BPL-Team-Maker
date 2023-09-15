/* eslint-disable react/prop-types */
import "./Cart.css"

const Cart = ({actor,handleSelectActor}) => {
    const {name,image,salary,role}=actor
    return (
        <div className="container">
            <img className='photo' src={image} alt="" />
            <h2>{name}</h2>
            <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, aliquid.</small></p>
            <div className='info'>
            <p>Salary:{salary}$</p>
            <p>{role}</p>
            </div>
            <button onClick={()=>handleSelectActor(actor)} className='cart-btn'>select</button>
        </div>
    );
};

export default Cart;