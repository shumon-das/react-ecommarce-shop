import React from 'react'
import {Row, Col} from 'react-bootstrap'
import productsContent from './ProductsContent'
import Product from './Product'

const Products = () => {
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
               { 
                productsContent.map(product => (
                        <Col key={product.id} sm={12} md={6} lg={3}>
                            <Product product={product}/>
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}

export default Products
