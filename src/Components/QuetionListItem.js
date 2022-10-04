import "./Styles.css"
import QuetionView from "./QuetionView"

const QuetionListItem = (props) =>{
    const {qnanum, qnatitle, qnawriter, qnadate} = props
    return(
        <>
            <div class="num">{qnanum}</div>
            <div class="title"> <a href="/qnaview">{qnatitle}</a></div>
            <div class="writer">{qnawriter}</div>
            <div class="date">{qnadate}</div>
        </>
                        
                        
    )
    
}

export default QuetionListItem