import BookInfoForm from "../Components/BookInfoForm"
import Footer from "../Components/Footer"
import Navigation from "../Components/Navigation"
import OtherBookListForm from "../Components/OtherBookListForm"

const BookInfoPage = () =>{
    return(
        <div>
            <Navigation/>
            <BookInfoForm/>
            <OtherBookListForm/>
            <Footer/>
        </div>
    )
}

export default BookInfoPage