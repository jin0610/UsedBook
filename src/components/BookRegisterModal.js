import { useState } from "react"

const BookRegisterModal = () =>{
    const [image, setImage] = useState({
        image_file: "",
        default_image:"./assets/img/img-upload.png",
    })
    return(
        <div className="book-modal modal fade" id="registerModal" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal">
                    <img src="assets/img/close-icon.svg" alt="Close modal"/>
                    </div>
                    <div class="container">
                        <form class="row justify-content-center">
                            <div class="col-4 filebox">
                                <img class="img-fluid  d-block  mx-auto" src="https://dummyimage.com/480x700/dee2e6/6c757d.jpg" alt="..." />
                                <input type="file" class="form-control" id="bookImg"/>
                            </div>

                            <div class="col-lg-5 text-center">
                                <h2>책 등록</h2>
                                <div className="row justify-content-center mb-4 mt-5">
                                    
                                    <div className="col-8">
                                        <div className="form-group mb-4">
                                            <input className="form-control"type="text" id="bookName" placeholder="책 이름"/>
                                        </div>
                                        <div className="form-group mb-4">
                                            <input className="form-control"type="text" id="bookPrice" placeholder="책 가격"/>
                                        </div>
                                    </div>
                                </div>
                                <button class="btn btn-primary btn-m text-uppercase" type="button">등록</button> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookRegisterModal