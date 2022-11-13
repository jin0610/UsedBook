import BookInfoModal from "./BookInfoModal"
import "../Styles.css"
import { useState } from "react"
import { useEffect } from "react"
import Api from "../../Api"

const BookListItem = (props) =>{
    const {bookname, bookprice, sale, bookIndex, info, bookId, reservationClick, reservationform, bookModal} = props

    const setbookIndex= ()=>{
        reservationform.bookId = info.id
    }
   
    return(
        <>
        <div className="col mb-5">
            <div className="card h-100">
                <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>{sale}</div>
                <img className="card-img-top" src={info.image} alt="..." />

                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{bookname}</h5>
                        {bookprice}
                    </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href={`#bookinfo${bookIndex}`} data-bs-toggle="modal" onClick={setbookIndex}>+ more</a></div>
                </div>
                {bookModal}

                
                
            </div>
        </div>
        
        </>
    )
}

export default BookListItem