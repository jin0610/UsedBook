import "./Styles.css"

const QuestionListItem = (props) =>{
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

export default QuestionListItem