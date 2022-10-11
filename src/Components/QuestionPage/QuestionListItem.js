import "../Styles.css"
import {Link} from "react-router-dom"

const QuestionListItem = (props) =>{
    const {qnanum, qnatitle, qnawriter, qnadate} = props

    return(
        <>
        
            <div class="num">{qnanum}</div>
            <div class="title">
            <Link to='/qnaview' state={{
                qnanum:qnanum,
                qnatitle:qnatitle, 
                qnawriter:qnawriter, 
                qnadate:qnadate
            }}>{qnatitle}</Link></div>
            <div class="writer">{qnawriter}</div>
            <div class="date">{qnadate}</div>
        </>
                        
                        
    )
    
}

export default QuestionListItem