import api from "../../Api"

const WriteListBlock = (props) =>{
    const {index, writeModal} = props

    const userId = JSON.parse(sessionStorage.getItem('Session_Attrs')).SESSION_ID
    const  onDelete = () =>{
        const data = {userId:userId}
        api.delete(`/books/${index.id}?userId=${userId}`,{data:data})
        .then(res => {
            alert("삭제되었습니다.")
            window.location.href = '/mypage'
        })
        .catch(error => console.log(error))
    }

    return(
        <div className="tab-pane" id="writelistblock" role="tabpanel" aria-labelledby="writelistblock-tab">
            <div className="block-icon">
                <div className="icon-group" id="edit">
                    <a href={`#editmodal${index.id}`}  data-bs-toggle="modal"><img src={"/assets/icon/edit_icon.svg"}/></a>
                    {writeModal}
                </div>
                <div className="icon-group">
                    <a href="#" onClick={onDelete}><img src={"/assets/icon/delete_icon.svg"}/></a>
                </div>
                
            </div>
            <div className="row justify-content-center px-5 pb-5">
                <div className="col-3">
                    {/* info.name */}
                    <img class="card-img-top" src={index.image} alt="..." />
                </div>
                <div className="col-8">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <span className="me-3">책 명</span>
                            <p>{index.name}</p>
                        </li>
                        <li className="list-group-item">
                            <span className="me-3">저 자</span>
                            <p>{index.author}</p>
                        </li>
                        <li className="list-group-item">
                            <span className="me-3">가 격</span>
                            <p>{index.price}</p>
                        </li>
                        <li className="list-group-item">    
                            <span className="me-3">출판사</span>
                            <p>{index.publisher}</p>
                        </li>
                        <li className="list-group-item">    
                            <span className="me-3">출판날짜</span>
                            <p>{index.publicationDate}</p>
                        </li>                      
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WriteListBlock