import React from 'react'
import FooterSimples from '../FooterSimples'
import HeaderBlog from '../HeaderBlog'

const LayoutBlog = ({ children }) => {
    return (
        <div>
            <HeaderBlog />
            {children}
            <FooterSimples />
        </div>
    )
}

export default LayoutBlog