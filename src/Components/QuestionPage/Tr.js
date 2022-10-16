import React from 'react';
import Td from './Td';

const Tr = ({info, handleRemove, handleEdit})=>{
    // id갯수만큼 td 컴포넌트 호출.
    return(
        <tbody>
            {
                info.map(item => {
                    return(
                        <Td key={item.id} item={item} handleRemove = {handleRemove} handleEdit = {handleEdit}/>
                    )
                })
            }
        </tbody>
    );
};
export default Tr;