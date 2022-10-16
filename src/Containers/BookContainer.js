import BookListForm from "../Components/BookPage/BookListForm"
import AWS from "aws-sdk"
import Api from "../Api"
import { useEffect, useState } from "react"

const BookContainer = () =>{
    const [booklist, setBookList] = useState([]);
    useEffect(() => {
        setForm({
            bookImg:"assets/img/img-upload.png",
            bookName:"",
            bookPrice:"",
            bookSaleValue:""
        })
        // 책 목록 다보기
        Api.get('/books')
        .then((res)=>{
            // 리스트 담아오기
                console.log(res)
            //  setBookList()
        })
        .catch(error=>{
            console.error(error)
        })
    }, []);
    
    // 책 상세보기 get /books/{id}
    const bookInfo = ({id}) =>{
        console.log("책상세")
        console.log(id)
        // Api.get(`/books/${id}`)
        // .then(res =>{
        //     console.log(res)
        // })
        // .then(err => console.log(err))
    }

    // 판매 대여 상태별 책 목록 보기  get / books/status/{status}
    // 글 제목으로 검색 get /books/title/{title}
    //  책등록 post /books
    const region = "ap-northeast-2"
    const bucket = "버킷 이름"
    // AWS.config.update({
    //     region: region,
    //     accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    //     secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    // });
    const [form, setForm] = useState({
        bookImg:"assets/img/img-upload.png",
        bookName:"",
        bookPrice:"",
        bookSaleValue:""
    })

    const onChange = (e) =>{
        const { value, name }= e.target
        setForm({
            ...form,
            [name] : value
        })
        console.log(form)
    }

    const onSubmit=(e)=>{
        e.preventDefault()
        const {bookImg,bookName, bookPrice, bookSaleValue} = form
        if(bookSaleValue==="sale" && [bookImg, bookName, bookPrice, bookSaleValue].includes('')){
            alert('모두 입력하세요.');
            return;
        }
        const data = { bookImg,bookName, bookPrice, bookSaleValue }
        // Api.post('/books',queryString.stringify(data))
        // .then(res => {    
        //     if(res.status === 200){
        //         alert("성공")
        //         window.location.href = '/booklist'
        //     }
        // })
        console.log(data)
    }


    return(
        <BookListForm 
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            bookInfo={bookInfo}
            booklist={booklist}
        />
    )
}

export default BookContainer