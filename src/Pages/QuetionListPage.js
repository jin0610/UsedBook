import QuetionListForm from "../Components/QuetionListForm"
import Navigation from "../Components/Navigation"
import Footer from "../Components/Footer"
import QuetionListItem from "../Components/QuetionListItem"

const QuetionListPage = () =>{
    return(
        <div>
            <Navigation/>
            <QuetionListForm/>
            <QuetionListItem/>
            <Footer/>
        </div>
    )
}

export default QuetionListPage