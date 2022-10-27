import React from 'react';
import {Link} from "react-router-dom"
import api from '../../Api'


//질문 삭제할 때 통신
const Td = ({item, handleRemove}) => {


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
        </tr>
        </>
    )
};
export default Td;