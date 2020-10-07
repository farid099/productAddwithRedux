import React from 'react'

export default function Pagination(props) {
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(props.totalProduct / props.steps); i++){
        pageNumbers.push(i)
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number=>(
                     <li key={number} className="page_item">
                         <a href="!#" onClick={()=>props.changePage(number)} className="page-link">
                             {number}
                         </a>
                     </li>
                ))}
            </ul>
        </nav>    )
}
