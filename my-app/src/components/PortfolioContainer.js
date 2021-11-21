import React, { useState }from 'react'
import Header from './Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'

export default function PortfolioContainer () {
    const [currentPage, setCurrentPage] = useState("About")

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />
        }
        if (currentPage === 'Contact') {
            return <Contact />
        }
        return <Portfolio />
        
    }

    const handlePageChange = (page) => setCurrentPage(page)

    return (
        <div className='portfolioContainer'>
            <Header
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            />
            {renderPage()}
        </div>
    )

}