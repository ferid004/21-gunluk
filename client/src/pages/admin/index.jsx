import React from 'react'
import Admin_header from './a_header'
import { Helmet } from 'react-helmet-async'
import Product_edit from './a_product_edit'

function Admin() {
    return (
        <div>
            <Helmet>
                <title>ADMIN</title>
            </Helmet>
            <Product_edit></Product_edit>
            <Admin_header></Admin_header>
        </div>
    )
}

export default Admin