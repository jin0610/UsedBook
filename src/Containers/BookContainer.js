import BookListForm from "../Components/BookPage/BookListForm"
import Api from "../Api"
import { useEffect, useState } from "react"

const BookContainer = () =>{

    const [booklist, setBookList] = useState([]);
    let status = 'ALL'
    const userId = JSON.parse(sessionStorage.getItem('Session_Attrs')).SESSION_ID

    useEffect(() => {

        setTitle('')
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

        }).catch(error => console.log(error))

    }, []);

    // 판매 대여 상태별 책 목록 보기  get / books/status/{status}
    const statusChange = (e) =>{
        const {value} = e.target
        status = value
        if (status === "ALL") {
            Api.get(`/books`)
            .then((res)=>{
                // 리스트 담아오기
                setBookList(res.data)
            })
            .catch(error=>{
                console.error(error)
            })
        } else {
            Api.get(`/books/status/${status}`)
            .then((res)=>{
                // 리스트 담아오기
                setBookList(res.data)
                
            })
            .catch(error=>{console.log("에러")
                console.error(error)
                
            })
        }
    }


    // 글 제목으로 검색 get /books/title/{title}
    const [title, setTitle] = useState('');

    const ontitleChange = e =>{
        const {name, value} = e.target
        setTitle(`${value}`)
    }
    const onSerch = e =>{
        e.preventDefault()
        if(title==='') alert('검색어를 입력하세요')
        Api.get(`/books/name?name=${title}`)
        .then(res =>{

            setBookList(res.data)
        })
    }


    // 책 이미지 등록 
   
    //  책등록 post /books

// {"id":null,"name":"책이름2","title":"제목","publisher":"출판사","author":"저자","image":"이미지2","publicationDate":"출판날짜","price":12000,"content":"내용","status":"LEND","userId":"user1"}

   
    // 책 예약하기 
    const [reservationform, setReservationForm] = useState({
        id:null,
        bookId:null,
        userId:JSON.parse(sessionStorage.getItem('Session_Attrs')).SESSION_ID,
        phoneNumber:null,
    })

    const reservationClick = () =>{
        const {id, bookId, userId, phoneNumber} = reservationform
        const data = {id, bookId, userId, phoneNumber}
        Api.post(`/reservations?userId=${JSON.parse(sessionStorage.getItem('Session_Attrs')).SESSION_ID}`,data)
        .then(res =>{
            if(res.status === 200){
                alert("예약 완료되었습니다.")
                window.location.href = '/booklist'
            }
        })
        .catch(err => console.log(err))
    }

    return(
        <BookListForm 
            statusChange={statusChange}
            reservationform={reservationform}
            booklist={booklist}
            reservationClick={reservationClick}
            title={title}
            ontitleChange={ontitleChange}
            onSerch={onSerch}
        />
    )
}

export default BookContainer