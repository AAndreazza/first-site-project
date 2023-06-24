import React from 'react'
import FooterPost from '../FooterPost'
import HeaderPost from '../HeaderPost'

const LayoutPost = ({ children }) => {
    return (
        <div>
            <HeaderPost />
            {children}
            <FooterPost />
        </div>
    )
}

export default LayoutPost