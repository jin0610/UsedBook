import { useEffect, useState } from "react"
import Api from "../../Api"

const BookEditModal = (props) =>{
    const {index} =props
    useEffect(()=>{
        setForm({       
            id:index.id,
            name:index.name,
            title:index.title,
            publisher:index.publisher,
            author:index.author,
            image:index.image,
            publicationDate:index.publicationDate,
            price:index.price,
            content:index.content,
            status:index.status,
            userId:userId,
        })
    },[])

    const userId = JSON.parse(sessionStorage.getItem('Session_Attrs')).SESSION_ID
    const [editform, setForm] = useState({
        id:index.id,
        name:index.name,
        title:index.title,
        publisher:index.publisher,
        author:index.author,
        image:index.image,
        publicationDate:index.publicationDate,
        price:index.price,
        content:index.content,
        status:index.status,
        userId:userId,
    })

    const onEditChange = (e) =>{
        const {name, value}= e.target;
        setForm({
            ...editform,
            [name] : value
        })
    }

    const onEdit=(e)=>{
        e.preventDefault()
        
        const {id, name, title, publisher, author, image,
            publicationDate, price, content, status, userId} = editform

        const data = { id, name, title, publisher, author, image,
            publicationDate, price, content, status, userId}

        Api.patch(`/books/${id}?userId=${userId}`,data)
        .then(res => {    
            if(res.status === 200){
                alert("수정되었습니다.")
                window.location.href = '/mypage'
            }
        })
    }

   

    return(
        <div className="book-modal modal fade" id={`editmodal${index.id}`} tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal">
                    <img src="assets/img/close-icon.svg" alt="Close modal"/>
                    </div>
                    <div className="container">
                        <form className="row justify-content-center" onSubmit={onEdit}>
                            <div className="col-4 filebox">
                                <img className="img-thumbnail  d-block  mx-2" src={editform.image}
                                alt="..." />
                                <input type="file" 
                                accept='image/png, image/jpeg, image/jpg' className="form-control" name="image"/>
                            </div>

                            <div className="col-lg-5 text-center">
                                <h2>책 수정</h2>
                                <div className="row justify-content-center mb-4 mt-5">
                                    
                                    <div className="col-8">
                                        <div className="form-group mb-4">
                                            <input className="form-control"type="text"  name="name" placeholder="책 이름" 
                                            onChange={onEditChange} defaultValue={editform.name}/>
                                        </div>
                                        <div className="form-group mb-4">
                                            <input className="form-control"type="text" name="author" placeholder="저자" 
                                            onChange={onEditChange} defaultValue={editform.author}/>
                                        </div>
                                        <div className="form-group mb-4">
                                            <input className="form-control"type="text"  name="publisher" placeholder="출판사" 
                                            onChange={onEditChange} defaultValue={editform.publisher}/>
                                        </div>
                                        <div className="form-group mb-4">
                                            <input className="form-control"type="text" name="publicationDate" placeholder="출판 날짜" 
                                            onChange={onEditChange} defaultValue={editform.publicationDate}/>
                                        </div>
                                        <div className="form-group mb-4 ">
                                            <div className="form-check me-5">
                                            <input type="radio" name="status" id="SELL"  className="form-check-input" onChange={onEditChange} value={"SELL"}/>
                                            <label htmlFor="SELL" className="form-check-label">판매</label>
                                            </div>
                                            <div className="form-check">
                                            <input type="radio" name="status" id="LEND" className="form-check-input" onChange={onEditChange} value={"LEND"} />
                                            <label htmlFor="LEND" className="form-check-label">대여</label>
                                            </div>
                                        </div>


                                            <div className="form-group mb-4">
                                            <input className="form-control"type="text" 
                                            name="price" placeholder="책 가격"
                                            onChange={onEditChange} defaultValue={editform.bookPrice}/>
                                            </div>
       
                                        
                                    </div>
                                </div>
                                <button className="btn btn-primary btn-m text-uppercase" type="submitButton">등록</button> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookEditModal