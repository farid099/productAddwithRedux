import React from 'react';
import {
    Navbar,
    Nav
  } from 'reactstrap';
import Cart from '../cart/Cart';

export default function Navb() {
    return (
        <div>
                  <Navbar style={{placeContent: "flex-end"}} color="light" light expand="md">
          <Nav navbar>
            <Cart></Cart>
          </Nav>
      </Navbar>
        </div>
    )
}
