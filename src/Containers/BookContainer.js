import BookListForm from "../Components/BookPage/BookListForm"
import AWS from "aws-sdk"
import Api from "../Api"
import { useEffect, useState } from "react"

const BookContainer = () =>{
    const [booklist, setBookList] = useState([]);
    let status = 'ALL'
    
    useEffect(() => {
        setForm({
            bookImg:"assets/img/img-upload.png",
            bookName:"",
            bookPrice:"",
        })
        console.log(status)
        // 책 목록 다보기

        Api.get('/books')
        .then((res)=>{
            // 리스트 담아오기
            console.log(res)
            setBookList(res.data)
            console.log(booklist)
        })
        .catch(error=>{console.log("에러")
            console.error(error)
        })

        
    }, []);
    
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
                console.log(res)
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
                setBookList(res.data)
            })
            .catch(error=>{console.log("에러")
                console.error(error)
            })
        }
    }


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
        bookSaleValue:''
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
            statusChange={statusChange}
        />
    )
}

export default BookContainer