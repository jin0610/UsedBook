import { useState } from "react"

const BookRegisterModal = (props) =>{
    const {form, onChange, onSubmit} = props

    const [image, setImage] = useState({
        image_file: "",
        default_image:"assets/img/img-upload.png",
    })
    return(
        <div className="book-modal modal fade" id="registerModal" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal">
                    <img src="assets/img/close-icon.svg"  alt="Close modal"/>
                    </div>
                    <div class="container">
                        <form class="row justify-content-center" onSubmit={onSubmit}>
                            <div class="col-4 filebox">
                                {/* <img class="img-fluid  d-block  mx-auto" src="https://dummyimage.com/480x700/dee2e6/6c757d.jpg" alt="..." /> */}
                                <img class="img-thumbnail  d-block  mx-2" src="assets/img/img-upload.png" alt="..." />
                                <input type="file" accept='image/*' class="form-control" id="bookImg" onChange={onChange} value={form.img}/>
                            </div>

                            <div class="col-lg-5 text-center">
                                <h2>책 등록</h2>
                                <div className="row justify-content-center mb-4 mt-5">
                                    
                                    <div className="col-8">
                                        <div className="form-group mb-4">
                                            <input className="form-control"type="text" id="bookName" name="bookName" placeholder="책 이름" 
                                            onChange={onChange} defaultValue={form.bookName}/>
                                        </div>
                                        <div className="form-group mb-4 ">
                                            <div class="form-check me-5">
                                            <input type="radio" name="bookSaleValue" id="sale"  className="form-check-input" onChange={onChange} value={"sale"}/>
                                            <label htmlFor="sale" className="form-check-label">판매</label>
                                            </div>
                                            <div class="form-check">
                                            <input type="radio" name="bookSaleValue" id="rental" className="form-check-input" onChange={onChange} value={"rental"} />
                                            <label htmlFor="rental" className="form-check-label">대여</label>
                                            </div>
                                        </div>
                                        {form.bookSaleValue === "sale"?

                                            <div className="form-group mb-4">
                                            <input className="form-control"type="text" 
                                             id="bookPrice" name="bookPrice" placeholder="책 가격"
                                            onChange={onChange} defaultValue={form.bookPrice}/>
                                            </div>
                                        :null}
                                        
                                    </div>
                                </div>
                                <button class="btn btn-primary btn-m text-uppercase" type="submitButton">등록</button> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookRegisterModal