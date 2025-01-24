import { useState, useRef } from 'react'
import '/src/styles/Pratical.css';

function Pratical() {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const dialogRef = useRef(null);
  
  const openDialog = () => {
    dialogRef.current.showModal();
  };
  
  const closeDialog = () => {
    dialogRef.current.close();
  };

  return (
    <>
    <dialog ref={dialogRef}>
      <label htmlFor={company}>Company: </label>
      <input
        type="text"
        value={company}
        onChange={(event) => setCompany(event.target.value)}
      />
      <label htmlFor={position}>Position: </label>
      <input
        type="text"
        value={position}
        onChange={(event) => setPosition(event.target.value)}
      />
      <label htmlFor={description}>Description: </label>
      <input
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <label htmlFor={date}>Date: </label>
      <input
        type="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />
      <button onClick={closeDialog}>Save</button>
    </dialog>
    
    <div className='Pratical'>
    <div className='contentPratical'>
      <div>Company: {company}</div>
      <div>Position: {position}</div>
      <div>Description: {description}</div>
      <div>Date: {date}</div>
    </div>
    <button onClick={openDialog}>Edit</button>
    </div>
    </>
  )
}

export default Pratical
