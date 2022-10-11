import React, {useState} from 'react';

const Modal = ({ selectedData, handleCancel, handleEditSubmit}) => {
    const [edited, setEdited] = useState(selectedData);

    const onCancel = () => {
        handleCancel();
    }
    const onEditChange = (e) => {
        setEdited({
            ...edited,
            [e.target.name] : e.target.value
        })
    }
    const onSubmitEdit = (e) => {
        e.preventDefault();
        handleEditSubmit(edited);
    }
   

    const handleEdit = (item) =>{
        //setModalOn(true);
        const selectedData ={
            id: item.id,
            name: item.name,
            email: item.email,
            phone: item.phone
        };
        console.log(selectedData);
        selectedData(selectedData);
    }

    return(
        <div>
            <div>
                <div>
                    <h3>고객정보 수정하기</h3>
                    <i onClick={onCancel}></i>
                </div>
                <form onSubmit={onSubmitEdit}>
                    <div>
                        <div>ID:{edited.id}</div>
                        <div>Name: <input type='text' name='name' value={edited.name} onChange={onEditChange}/></div>
                        <div>Email: <input type='text' name='email' value={edited.email} onChange={onEditChange}/></div>
                        <div>Phone: <input type='text' name='phone' value={edited.phone} onChange={onEditChange}/></div>
                    </div>
                    <div>
                        <button onClick={onCancel}>취소</button>
                        <button type='submit'>수정</button>
                    </div>
                </form>
            </div>
        </div>

    );
};
export default Modal;