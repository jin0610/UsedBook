import React from 'react';
import {Link} from "react-router-dom"

const Td = ({item, handleRemove}) => {

    const qnaDelete =() =>{
        const {id}=item;
        const data = {id};
        
        /*Api.delete('/qna', queryString.stringify(data))
        .then(res=>{
            console.log(res)
            //console.log(data)
        })
        .catch(error =>{
            console.log(error)
        })*/
        handleRemove(id)
    }


    return (
        <>
        <tr>
            <td>{item.id}</td>
            <td class = "qnaTitle_link">
                <Link class="aa" to='qnaview' state={{
                    qnanum:item.id,
                    qnatitle:item.name,
                    qnawriter:item.email,
                    qnadate:item.phone
                }}>{item.name}</Link></td>
            <td>{item.email}</td>
            <td>{item.phone}</td>

            
            <td class="remove_x" onClick={qnaDelete} >
                <a>X</a> 
            </td>
        </tr>
        </>
    )
};

export default Td;
/*
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
    
}*/