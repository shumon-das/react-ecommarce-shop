import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import ProductsContent from './ProductsContent'
import Rating from './Rating'

const Product = ({ match }) => {
        // const product = ProductsContent.find((pr) => pr.id === match.params.id )
        const singleProduct = ProductsContent.find((productData) => productData.id == match.params.id )

    return (
        <>
            <Link className="btn btn-light my-2" to="/products">Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={singleProduct.image} alt={singleProduct.name} fluid/>
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{singleProduct.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={singleProduct.rating} text={`${singleProduct.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price : {singleProduct.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description : {singleProduct.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Price: 
                                </Col>
                                <Col>
                                    <strong>${singleProduct.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Stock: 
                                </Col>
                                <Col>
                                    {singleProduct.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className="w-100 btn-block" type="button" disabled={singleProduct.countInStock === 0}>
                                Add To Cart
                            </Button>
                        </ListGroup.Item>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Product
