import { useState, useRef } from 'react'

function Pratical() {
  const company = useState("");
  const position = useState("");
  const description = useState("");
  const date = useState("");

  const dialogRef = useRef(null);
  
  const openDialog = () => {
    dialogRef.current.showModal();
  };
  
  const closeDialog = () => {
    dialogRef.current.close();
  };

  return (
    <>
      
    </>
  )
}

export default Pratical
