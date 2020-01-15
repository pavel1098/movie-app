import React from 'react'

const Pagination = (props) => {
    return (
        <div className="container"> 
            <div className='row'>
                {
                    props.currentPage > 1 
                    ? <a href="#!" onClick={() => props.nextPage(props.currentPage - 1) }><i className="material-icons">navigate_before</i></a>
                    : ""
                }
                <a href="#!" onClick={() => props.nextPage(props.currentPage + 1) }><i className="material-icons">navigate_next</i></a>  
            </div>
        </div>   
    )
}

export default Pagination