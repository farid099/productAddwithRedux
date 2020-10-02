import React from 'react';
import {Row,Col} from "reactstrap";
import ListCategory from '../categories/ListCategory';
import ListProduct from '../products/ListProduct';


export default function Dashboard() {
    return (
        <div>
            <Row>
                <Col xs="3">
                    <ListCategory></ListCategory>
                </Col>
                <Col xs="9">
                    <ListProduct></ListProduct>
                </Col>
            </Row>
        </div>
    )
}
