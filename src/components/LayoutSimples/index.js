import React from 'react'
import Footer from '../Footer'
import HeaderSimples from '../HeaderSimples'

const LayoutSimples = ({ children }) => {
    return (
        <div>
            <HeaderSimples />
            {children}
            <Footer />
        </div>
    )
}

export default LayoutSimples