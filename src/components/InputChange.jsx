import React from 'react'

function InputChange() {
    const [data, setData] = useState([]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        setData([...data,e.target.search.value]);
        e.target.search.value = "";

    }
  return (
    <>
    <form action="" onSubmit={handleSubmit}>
        <input type="text" name='search' placeholder='search' />
        <input type="submit" value="" />
    </form>
         
    </>
  )
}

export default InputChange