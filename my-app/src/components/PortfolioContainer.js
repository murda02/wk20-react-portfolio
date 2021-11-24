// import React, { useState }from 'react'
// import Header from './Header'
// import Navigation from './Navigation'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Portfolio from './pages/Portfolio'

// export default function PortfolioContainer () {
//     const [currentPage, setCurrentPage] = useState("")

//     const renderPage = () => {
//         if (currentPage === 'About') {
//             return <About />
//         }
//         if (currentPage === 'Contact') {
//             return <Contact />
//         }
//         return <Portfolio />
        
//     }

//     const handlePageChange = (page) => setCurrentPage(page)

//     return (
//         <div>
//             <Header currentPage={currentPage} g={handlePageChange} />
//             {renderPage()}
//         </div>
//     )

// }