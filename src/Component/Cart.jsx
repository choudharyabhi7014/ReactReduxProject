// import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../Logics/Action';
function Cart() {
    const cartItems = useSelector((state) => state.cartReducer.cartItems); // Assuming you have the cart items in the 'cartReducer'
    const dispatch=useDispatch()
    const handleRemove=(productId)=>{
        dispatch(removeFromCart(productId))
    }
    return (
        <div className='row'>
            {
                cartItems?.map((v) => {
                    return (
                        <>
                            <div className="col-3">
                                <div className="card h-100 d-flex flex-column">
                                    <img className="card-img-top thumbnail" src={v.thumbnail} alt="Product" />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">Category : <span>{v.category}</span></h5>
                                        <h5 className="card-title">Title : <span>{v.title}</span></h5>
                                        <h5 className="card-title">Price : <span>{v.price}</span></h5>
                                        <h5 className="card-title">Discount : <span>{v.discountPercentage}</span></h5>
                                        <h5 className="card-title">Brand : <span>{v.brand}</span></h5>
                                        <p className="card-text flex-grow-1">Stock : <span>{v.stock}</span></p>
                                        <p className="card-text">escription: {v.description}</p>
                                    </div>
                                    <div className="card-footer">
                                        <button className="btn btn-primary">Buy Now</button>
                                        <button className="btn btn-primary" onClick={()=>handleRemove(v.id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })

            }
        </div>
    );
}

export default Cart;
