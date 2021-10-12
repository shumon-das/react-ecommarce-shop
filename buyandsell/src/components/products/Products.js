import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Row, Col} from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// import Product from './Product'
import Rating from './Rating'

const Products = () => {
    const [productsContent, setProductsContent] = useState([])

    useEffect(() => {
       const fetchProducts = async () => {
          const {data} = await axios.get('/api/products')
          setProductsContent(data)
       }
       fetchProducts()
    }, [])
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
               { 
                productsContent.map(product => (
                        <Col key={product.id} sm={12} md={6} lg={3}>
                             <Card className="my-3 p-3 rounded">
                                <Link to={`/product/${product.id}`}>
                                    <Card.Img className="productImg" src={`${product.image}`}  />
                                </Link>

                                <Card.Body>
                                    <Link to={`/product/${product.id}`}>
                                        <Card.Title><strong> {product.name} </strong></Card.Title>
                                    </Link>

                                    <Card.Text as='div'>
                                        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                                    </Card.Text>
                                    
                                    <Card.Text as='h3'>${product.price}</Card.Text>
                                </Card.Body>
                            </Card>
                            {/* <Product product={product}/> */}
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}

export default Products
