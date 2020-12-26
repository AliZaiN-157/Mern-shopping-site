import React, { useEffect } from 'react'
import Product from '../../components/Product/Product'
import './HomeScreen.css'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts as listProducts } from '../../Redux/actions/productAction';

const HomeScreen = () => {

    const dispatch = useDispatch();

    const { products, loading, error } = useSelector(state => state.getProducts);

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <div className="homescreen">
            <h2 className="homescreen__title">
                Latest Products
            </h2>
            <div className="homescreen__products">
                {loading ? (
                    <h2>Loading...</h2>)
                    : error ? (
                        <h2>{error}</h2>
                    ) : (
                            products.map((product) => (
                                <Product key={product._id}
                                    productId={product._id}
                                    name={product.name}
                                    price={product.price}
                                    imageUrl={product.imageUrl}
                                    description={product.description}
                                />
                            ))
                        )
                }
            </div>

        </div>
    )
}

export default HomeScreen
