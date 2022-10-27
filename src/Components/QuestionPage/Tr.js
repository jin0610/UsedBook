import React from 'react';
import Td from './Td';

const Tr = ({info, handleRemove, handleSave, id})=>{
    // id갯수만큼 td 컴포넌트 호출.
    return(
        <tbody>
            {
                info.map(item => {
                    return(
                        <Td key={item.id} item={item} handleRemove = {handleRemove} handleSave={handleSave}/>
                    )
                })
            }
        </tbody>
    );
};
export default Tr;