import React from 'react'
import FooterSimples from '../FooterSimples'
import HeaderSimples from '../HeaderSimples'

const LayoutSimples = ({ children }) => {
    return (
        <div>
            <HeaderSimples />
            {children}
            <FooterSimples />
        </div>
    )
}

export default LayoutSimples