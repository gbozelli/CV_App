import { useState, useRef } from 'react'

function General() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

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
    <label htmlFor={name}>Name: </label>
    <input
      type="text"
      value={name}
      onChange={(event) => setName(event.target.value)}
    />
    <label htmlFor={email}>Email: </label>
    <input
      type="email"
      value={email}
      onChange={(event) => setEmail(event.target.value)}
    />
    <label htmlFor={phone}>Phone: </label>
    <input
      type="number"
      value={phone}
      onChange={(event) => setPhone(event.target.value)}
    />
    <button onClick={closeDialog}>Save</button>
  </dialog>
  <button onClick={openDialog}>Edit</button>
  <div>{name}</div>
  <div>{email}</div>
  <div>{phone}</div>
  </>    
  )
}

export default General
