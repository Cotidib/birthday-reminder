import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import React , {useState} from 'react';

const AddPanel = (props) => {
    const [personName, setPersonName] = useState("");
    const [personDay, setPersonDay] = useState("");
    const [personImg, setPersonImg] = useState("");

    const handleSubmit = (e) =>
    {
        e.preventDefault()
        props.onSubmit(personName, personDay, personImg);
        setPersonName("");
        setPersonDay("");
        setPersonImg("");
    }

    return (    
        <form className='add-form' onSubmit={handleSubmit}>
            <button type="submit" className='add-btn'><FontAwesomeIcon icon={faPlus}/> add</button>
            <div className='inputs'>
                <input type="text" placeholder="Name" value={personName} onChange={(e) => setPersonName(e.target.value)}/>
                <input type="text" placeholder="Month Day" value={personDay} onChange={(e) => setPersonDay(e.target.value)}/>
                <input typr='text' placeholder='Image URL' value={personImg} onChange={(e) => setPersonImg(e.target.value)}/>
            </div>     
        </form> 
       
    )
}

export default AddPanel
