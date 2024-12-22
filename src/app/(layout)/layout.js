import Header from '@/components/header/Header'
import React from 'react'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}

        </>
    )
}

export default Layout