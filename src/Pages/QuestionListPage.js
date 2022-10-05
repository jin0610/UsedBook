import QuestionListForm from "../Components/QuestionListForm"
import Navigation from "../Components/Navigation"
import Footer from "../Components/Footer"
import QuestionListItem from "../Components/QuestionListItem"

const QuestionListPage = () =>{
    return(
        <div>
            <Navigation/>
            <QuestionListForm/>
            <QuestionListItem/>
            <Footer/>
        </div>
    )
}

export default QuestionListPage