import BookListForm from "../Components/BookPage/BookListForm"
import AWS from 'aws-sdk';
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
            image:"assets/img/img-upload.png",
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
    

    
    // 책 상세보기 get /books/{id}
    const bookInfo = ({id}) =>{
        console.log("책상세")
        console.log(id)
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
    // const [title, setTitle] = useState('');

    const onSearch = () =>{
        
    }

    // 책 이미지 등록 
    // const [progress , setProgress] = useState(0);
    // const [selectedFile, setSelectedFile] = useState(null);
    // const [showAlert, setShowAlert] = useState(false);

    // const ACCESS_KEY = 'AKIATLKSXUOROJEBUWDV';
    // const SECRET_ACCESS_KEY = '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';
    // const REGION = "ap-northeast-2";
    // const S3_BUCKET = 'usedbook';

    // AWS.config.update({
    // accessKeyId: ACCESS_KEY,
    // secretAccessKey: SECRET_ACCESS_KEY
    // });

    // const myBucket = new AWS.S3({
    // params: { Bucket: S3_BUCKET},
    // region: REGION,
    // });

    // const handleFileInput = (e) => {
    //     const file = e.target.files[0];
    //     const fileExt = file.name.split('.').pop();
    //     if(file.type !== 'image/jpeg' || fileExt !=='jpg' || file.type !== 'image/png'){
    //       alert('jpg, png 파일만 Upload 가능합니다.');
    //       return;
    //     }
    //     setProgress(0);
    //     setSelectedFile(e.target.files[0]);
    //   }
    //   const uploadFile = (file) => {
    //     const params = {
    //       ACL: 'public-read',
    //       Body: file,
    //       Bucket: S3_BUCKET,
    //       Key: "upload/" + file.name
    //     };
        
    //     myBucket.putObject(params)
    //       .on('httpUploadProgress', (evt) => {
    //         setProgress(Math.round((evt.loaded / evt.total) * 100))
    //         setShowAlert(true);
    //         setTimeout(() => {
    //           setShowAlert(false);
    //           setSelectedFile(null);
    //         }, 3000)
    //       })
    //       .send((err) => {
    //         if (err) console.log(err)
    //       })
    //   }
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
        const [name, value]= e.target
        setForm({
            ...form,
            // image : file,
            [name] : value
        })

        console.log(form)
    }
// {"id":null,"name":"책이름2","title":"제목","publisher":"출판사","author":"저자","image":"이미지2","publicationDate":"출판날짜","price":12000,"content":"내용","status":"LEND","userId":"user1"}

    const onSubmit=(e)=>{
        e.preventDefault()
        
        const {id, name, title, publisher, author, image,
            publicationDate, price, content, status, userId} = form
        if(status==="sale" && [name, title, publisher, author, image,
            publicationDate, price, content, status].includes('')){
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