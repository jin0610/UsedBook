import QuestionListForm from "../Components/QuestionPage/QuestionListForm"
import Navigation from "../Components/Navigation"
import Footer from "../Components/Footer"
import QuestionListItem from "../Components/QuestionPage/QuestionListItem"

const QuestionListPage = () =>{
    return(
        <div>
            <Navigation/>
            <QuestionListForm/>
            
            <Footer/>
        </div>
    )
}

export default QuestionListPage