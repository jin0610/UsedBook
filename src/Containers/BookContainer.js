import BookListForm from "../Components/BookPage/BookListForm"
import AWS from "aws-sdk"
import Api from "../Api"
import { useEffect, useState } from "react"

const BookContainer = () =>{
    const [booklist, setBookList] = useState([]);
    
    let status = 'ALL'
    
    const userId = JSON.parse(sessionStorage.getItem('Session_Attrs')).SESSION_ID
    useEffect(() => {
        
        setForm({       
            id:null,
            name:null,
            title:null,
            publisher:null,
            author:null,
            image:null,
            publicationDate:null,
            price:null,
            content:null,
            status:null,
            userId:userId,
        })
        console.log(status)
        // 책 목록 다보기
        
        Api.get('/books',)
        .then((res)=>{
            // 리스트 담아오기
            setBookList(res.data)
        })
        .catch(error=>{
            console.error(error)
        })

        Api.get(`/users?userId=${userId}`)
        .then(res =>{
            setReservationForm({...reservationform, phoneNumber : res.data.phoneNumber})
            // console.log(res.data)
        }).catch(error => console.log(error))

       

    }, []);
    
    // const imgRef = useRef(null)
    // // Cognito 연동으로 S3 접근 권한을 얻는 부분
    // AWS.config.update({
    //     region: bucketRegion,
    //     credentials: new AWS.CognitoIdentityCredentials({
    //     IdentityPoolId: IdentityPoolId
    //     }),
    // })

    // const handleFileInput = e => {
    //     const file = e.target.files[0]
    
    //     // AWS sdk에 포함된 함수로 파일을 업로드하는 부분
    //     const upload = new AWS.S3.ManagedUpload({
    //         params: {
    //         Bucket: [S3 버킷명],
    //         Key: [파일명] + ".jpg",
    //         Body: file,
    //         },
    //     })
    
    //     const promise = upload.promise()
    
    //     promise.then(
    //         function (data) {
    //         alert("이미지 업로드에 성공했습니다.")
    //         },
    //         function (err) {
    //         return alert("오류가 발생했습니다: ", err.message)
    //         }
    //     )
    // }
    

    // 책 상세보기 get /books/{id}
    const bookInfo = ({id}) =>{
        console.log("책상세")
        console.log(id)
        // Api.get(`/books/1`)
        // .then(res =>{
        //     console.log(res)
        //     console.log(res.data)
        // })
        // .then(err => console.log(err))
    }

    // 판매 대여 상태별 책 목록 보기  get / books/status/{status}
    const statusChange = (e) =>{
        const {value} = e.target
        status = value
        console.log(status)
        if (status === "ALL") {
            Api.get(`/books`)
            .then((res)=>{
                // 리스트 담아오기
                setBookList(res.data)
            })
            .catch(error=>{console.log("에러")
                console.error(error)
            })
        } else {
            Api.get(`/books/status/${status}`)
            .then((res)=>{
                // 리스트 담아오기
                console.log(res)
                
            })
            .catch(error=>{console.log("에러")
                console.error(error)
            })
        }
    }


    // 글 제목으로 검색 get /books/title/{title}
    //  책등록 post /books
    const [form, setForm] = useState({
        id:null,
        name:null,
        title:null,
        publisher:null,
        author:null,
        image:"assets/img/img-upload.png",
        publicationDate:null,
        price:null,
        content:null,
        status:null,
        userId:userId,
    })

    const onChange = (e) =>{
        const { value, name }= e.target
        if(e.target.files){
            const uploadFile = e.target.files[0]
            const formData = new FormData()
            formData.append('image',uploadFile)
        
        setForm({
            ...form,
            image : uploadFile,
            [name] : value
        })
        }
        console.log(form)
    }
// {"id":null,"name":"책이름2","title":"제목","publisher":"출판사","author":"저자","image":"이미지2","publicationDate":"출판날짜","price":12000,"content":"내용","status":"LEND","userId":"user1"}

    const onSubmit=(e)=>{
        e.preventDefault()
        const {id, name, title, publisher, author, image,
            publicationDate, price, content, status, userId} = form
        if(status==="sale" && [name, title, publisher, author, image,
            publicationDate, price, content, status,].includes('')){
            alert('모두 입력하세요.');
            return;
        }
        const data = { id, name, title, publisher, author, image,
            publicationDate, price, content, status, userId}
        Api.post('/books',data)
        .then(res => {    
            if(res.status === 200){
                alert("성공")
                window.location.href = '/booklist'
            }
        })
        console.log(data)
    }

    // 책 예약하기 
    const [reservationform, setReservationForm] = useState({
        id:null,
        bookId:null,
        userId:userId,
        phoneNumber:null,
    })

    const reservationClick = () =>{
        const {id, bookId, userId, phoneNumber} = reservationform
        const data = {id, bookId, userId, phoneNumber}
        Api.post(`/reservations?userId=${userId}`,data)
        .then(res =>{
            console.log(res)
            if(res.status === 200){
                alert("예약 완료되었습니다.")
                window.location.href = '/booklist'
            }
        })
        .catch(err => console.log(err))
    }




    return(
        <BookListForm 
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            bookInfo={bookInfo}
            statusChange={statusChange}
            reservationform={reservationform}
            booklist={booklist}
            reservationClick={reservationClick}
        />
    )
}

export default BookContainer