import { useState, useEffect } from 'react'
import { addToCart } from '../Logics/Action/'
import { useDispatch } from 'react-redux';
function Products() {
    const dispatch = useDispatch()
    const [Product, setProduct] = useState([]);
    const [visible, setvisible] = useState(4);
    const loadMore = () => {
        setvisible(visible + 4);
    };
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setProduct(json.products);
            });
    }, []);
    const handleAdd = (product) => {
        dispatch(addToCart(product))
    }
    return (
        <>
            <div className='row'>
                {
                    Product.slice(0, visible).map((v) => {
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
                                            <button className="btn btn-primary" onClick={() => handleAdd(v)}>Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })

                }
            </div>
            {visible < Product.length && (
                <div className="text-center mt-4">
                    <button className="btn btn-primary" onClick={loadMore}>
                        Load More
                    </button>
                </div>
            )}


        </>
    )
}

export default Products
