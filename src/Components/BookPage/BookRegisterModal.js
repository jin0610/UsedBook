import { useState } from "react"

const BookRegisterModal = (props) =>{
    const {form, onChange, onSubmit} = props

    return(
        <div className="book-modal modal fade" id="registerModal" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal">
                    <img src="assets/img/close-icon.svg"  alt="Close modal"/>
                    </div>
                    <div className="container">
                        <form className="row justify-content-center" onSubmit={onSubmit}>
                            <div className="col-4 filebox">
                                <img className="img-thumbnail  d-block  mx-2" src={form.image} alt="..." />
                                <input type="file" 
                                // name="image" 
                                accept='image/png, image/jpeg' className="form-control" id="image" onChange={onChange}/>
                            </div>

                            <div className="col-lg-5 text-center">
                                <h2>책 등록</h2>
                                <div className="row justify-content-center mb-4 mt-5">
                                    
                                    <div className="col-8">
                                        <div className="form-group mb-4">
                                            <input className="form-control"type="text" id="name" name="name" placeholder="책 이름" 
                                            onChange={onChange} defaultValue={form.name}/>
                                        </div>
                                        <div className="form-group mb-4">
                                            <input className="form-control"type="text" id="author" name="author" placeholder="저자" 
                                            onChange={onChange} defaultValue={form.author}/>
                                        </div>
                                        <div className="form-group mb-4">
                                            <input className="form-control"type="text" id="publisher" name="publisher" placeholder="출판사" 
                                            onChange={onChange} defaultValue={form.publisher}/>
                                        </div>
                                        <div className="form-group mb-4">
                                            <input className="form-control"type="text" id="publicationDate" name="publicationDate" placeholder="출판 날짜" 
                                            onChange={onChange} defaultValue={form.publicationDate}/>
                                        </div>
                                        <div className="form-group mb-4 ">
                                            <div className="form-check me-5">
                                            <input type="radio" name="status" id="sale"  className="form-check-input" onChange={onChange} value={"sale"}/>
                                            <label htmlFor="sale" className="form-check-label">판매</label>
                                            </div>
                                            <div className="form-check">
                                            <input type="radio" name="status" id="rental" className="form-check-input" onChange={onChange} value={"rental"} />
                                            <label htmlFor="rental" className="form-check-label">대여</label>
                                            </div>
                                        </div>
                                        {form.status === "sale"?

                                            <div className="form-group mb-4">
                                            <input className="form-control"type="text" 
                                             id="bookPrice" name="bookPrice" placeholder="책 가격"
                                            onChange={onChange} defaultValue={form.bookPrice}/>
                                            </div>
                                        :null}
                                        
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

export default BookRegisterModal