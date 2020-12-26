import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './ProductScreen.css'
import { useParams, useHistory } from 'react-router-dom'


// actions
import { getProductDetails } from '../../Redux/actions/productAction'
import { addToCart } from '../../Redux/actions/cartActions'


const ProductScreen = () => {

    const [qty, setQty] = useState(1)
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    const { loading, error, product } = useSelector(state => state.getProductDetails)

    useEffect(() => {
        if (product && id !== product._id) {
            dispatch(getProductDetails(id))
        }
    }, [dispatch, product, id])

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty))
        history.push("/cart");
    }

    return (
        <div className="productscreen">
            {loading ? (
                <h2>Loading...</h2>)
                : error ? (
                    <h2>{error}</h2>
                ) : (
                        <>
                            <div className="productscreen__left">
                                <div className="left__image">
                                    <img
                                        src={product.imageUrl}
                                        alt={product.name}
                                    />
                                </div>

                                <div className="left__info">
                                    <p className="left__name">{product.name}</p>
                                    <p className="left__price">Price: ${product.price}</p>
                                    <p>{product.description}</p>
                                </div>
                            </div>
                            <div className="productscreen__right">
                                <div className="right__info">
                                    <p>
                                        Price: <span>${product.price}</span>
                                    </p>
                                    <p>
                                        Status: <span>{product.countInStock > 0 ? "In stock" : "Out of stock"}</span>
                                    </p>
                                    <p>
                                        Qty
                                        <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                            {[...Array(product.countInStock).keys()].map((x) => (
                                                <option key={x + 1} value={x + 1}>{x + 1}</option>
                                            ))}
                                        </select>
                                    </p>
                                    <p>
                                        <button type="button" onClick={addToCartHandler}>Add To Cart </button>
                                    </p>
                                </div>
                            </div>

                        </>
                    )
            }

        </div>
    )
}

export default ProductScreen
