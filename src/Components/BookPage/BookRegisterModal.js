import { useEffect, useRef, useState } from "react"
import Api from "../../Api"
import AWS from "aws-sdk"

const BookRegisterModal = (props) =>{

    useEffect(()=>{
        setForm({       
            id:null,
            name:null,
            title:"",
            publisher:null,
            author:null,
            image:"assets/img/img-upload.png",
            publicationDate:null,
            price:null,
            content:"",
            status:null,
            userId:userId,
        })
    },[])

    const userId = JSON.parse(sessionStorage.getItem('Session_Attrs')).SESSION_ID
    const [registerform, setForm] = useState({
        id:null,
        name:"",
        title:null,
        publisher:"",
        author:"",
        image:"assets/img/img-upload.png",
        publicationDate:"",
        price:"",
        content:null,
        status:"",
        userId:userId
    })

    const onRegisterChange = (e) =>{
        const {name, value}= e.target;
        setForm({
            ...registerform,
            [name] : value
        })
        console.log(registerform)
    }

    const onSubmit=(e)=>{
        e.preventDefault()
        
        const {id, name, title, publisher, author, image,
            publicationDate, price, content, status, userId} = registerform
        if(status==="sale" && [name, title, publisher, author, image,
            publicationDate, price, content, status].includes('')){
            alert('모두 입력하세요.');
            return;
        }
        const data = { id, name, title, publisher, author, image,
            publicationDate, price, content, status, userId}
        Api.post(`/books?userId=${userId}`,data)
        .then(res => {    
            if(res.status === 201){
                alert("등록 완료했습니다")
                window.location.href = '/booklist'
            }
        })
        console.log(data)
    }


    let now = new Date()
    const date =  String(now.getMonth()) + String(now.getDate()) + String(now.getHours()) + ":" + String(now.getMinutes()) +":"+ String(now.getSeconds())
    console.log(date)
    AWS.config.update({
        region :"ap-northeast-2",
        credentials: new AWS.CognitoIdentityCredentials({
            IdentityPoolId: "ap-northeast-2:d330819f-938f-459e-8931-e2ddd2568f57", // cognito 인증 풀에서 받아온 키를 문자열로 입력합니다. (Ex. "ap-northeast-2...")
        }),
    })    

    const handleFileInput = e =>{
        const file = e.target.files[0]
        let uploadname
        if (file.type === 'image/jpeg') {uploadname = "upload/"+date+file.name +".jpeg"}
        else if (file.type === 'image/png') {uploadname = "upload/"+date+file.name +".png"}  
        else uploadname = "upload/" + date+file.name + ".jpg"


        console.log(file.name)

        const upload = new AWS.S3.ManagedUpload({
            params: {
              Bucket: "usedbook", // 업로드할 대상 버킷명
              Key:  date+userId+".jpg", // 업로드할 파일명 (* 확장자를 추가해야 합니다!)
              Body: file, // 업로드할 파일 객체
            },
          })
        
          const promise = upload.promise()
        
          promise.then(
            function (data) {
              alert("이미지 업로드에 성공했습니다.")
              registerform.image=`https://usedbook.s3.ap-northeast-2.amazonaws.com/${date}${userId}.jpg`
            },
            function (err) {
              return alert("오류가 발생했습니다: ", err.message)
            }
          )
    }

    return(
        <div className="book-modal modal fade" id="registerModal" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal">
                    <img src="assets/img/close-icon.svg" alt="Close modal"/>
                    </div>
                    <div className="container">
                        <form className="row justify-content-center" onSubmit={onSubmit}>
                            <div className="col-4 filebox">
                                <img className="img-thumbnail  d-block  mx-2" src={registerform.image}
                                alt="..." />
                                <input type="file" 
                                // name="image" 
                                accept='image/jpeg, image/jpg' className="form-control" id="image" onChange={handleFileInput}/>
                            </div>

                            <div className="col-lg-5 text-center">
                                <h2>책 등록</h2>
                                <div className="row justify-content-center mb-4 mt-5">
                                    
                                    <div className="col-8">
                                        <div className="form-group mb-4">
                                            <input className="form-control"type="text" id="name" name="name" placeholder="책 이름" 
                                            onChange={onRegisterChange} defaultValue={registerform.name}/>
                                        </div>
                                        <div className="form-group mb-4">
                                            <input className="form-control"type="text" id="author" name="author" placeholder="저자" 
                                            onChange={onRegisterChange} defaultValue={registerform.author||''}/>
                                        </div>
                                        <div className="form-group mb-4">
                                            <input className="form-control"type="text" id="publisher" name="publisher" placeholder="출판사" 
                                            onChange={onRegisterChange} defaultValue={registerform.publisher||''}/>
                                        </div>
                                        <div className="form-group mb-4">
                                            <input className="form-control"type="text" id="publicationDate" name="publicationDate" placeholder="출판 날짜" 
                                            onChange={onRegisterChange} defaultValue={registerform.publicationDate}/>
                                        </div>
                                        <div className="form-group mb-4 ">
                                            <div className="form-check me-5">
                                            <input type="radio" name="status" id="sale"  className="form-check-input" onChange={onRegisterChange} value={"SELL"}/>
                                            <label htmlFor="sale" className="form-check-label">판매</label>
                                            </div>
                                            <div className="form-check">
                                            <input type="radio" name="status" id="rental" className="form-check-input" onChange={onRegisterChange} value={"LEND"} />
                                            <label htmlFor="rental" className="form-check-label">대여</label>
                                            </div>
                                        </div>


                                            <div className="form-group mb-4">
                                            <input className="form-control"type="text" 
                                             id="price" name="price" placeholder="책 가격"
                                            onChange={onRegisterChange} defaultValue={registerform.bookPrice}/>
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

export default BookRegisterModal