import Navigation from "../Components/Navigation"
import Footer from "../Components/Footer"
import BookContainer from "../Containers/BookContainer"

const BookListPage = () =>{
    return(
        <div>
            <Navigation/>
            <BookContainer/>
            <Footer/>
        </div>
    )
}

export default BookListPage