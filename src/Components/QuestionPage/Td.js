import React from 'react';
import {Link} from "react-router-dom"
import api from '../../Api'


//질문 삭제할 때 통신
const Td = ({item, handleRemove}) => {
    const qnaDelete =() =>{
        const {id}=item;
        const data = {id};
        
        api.get('/boards').then(res=>{
            console.log(res)
            if(res.status===200){
                console.log('삭제 성공');
                alert('삭제 성공');
            }
            handleRemove(id)
        })
    };

    return (
        <>
        <tr class="content_height">
            <td>{item.id}</td>
            <td class = "qnaTitle_link">
                <Link class="aa" to='/qnaview' state={{
                    title:item.title,
                    id:item.id,
                    userId:item.userId,
                    content:item.content
                }}>{item.title}</Link></td>
            <td>{item.userId}</td>

            <td class="remove_x" onClick={qnaDelete} >
                <a>✖ </a> 
            </td>
        </tr>
        </>
    )
};
export default Td;