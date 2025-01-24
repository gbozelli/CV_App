import { useState, useRef } from 'react'
import '/src/styles/Educational.css';

function Educational() {
  const [school, setSchool] = useState("");
  const [title, setTitle] = useState("");
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
      <label htmlFor={school}>School: </label>
      <input
        type="text"
        value={school}
        onChange={(event) => setSchool(event.target.value)}
      />
      <label htmlFor={title}>Title: </label>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <label htmlFor={date}>Date: </label>
      <input
        type="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />
      <button onClick={closeDialog}>Save</button>
    </dialog>
    <div className='Educational'>
    
    <div className='contentEducational'>
      <div>School: {school}</div>
      <div>Title: {title}</div>
      <div>Date: {date}</div>
    </div>
    <button onClick={openDialog}>Edit</button>
    </div>
    </>
  )
}

export default Educational
