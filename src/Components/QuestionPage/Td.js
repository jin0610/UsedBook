import React from 'react';

const Td = ({item, handleRemove}) => {
    
    const onRemove = () => {
        
        
    }
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
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>

            
            <td onClick={qnaDelete} >
                <a>X</a> 
            </td>
        </tr>
        </>
    )
};

export default Td;