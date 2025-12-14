import {  useState } from 'react'
const Homework = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



  function handleUserNameInput(e){
    const value = e.target.value;
    setUsername(value);

  }
  function handlePasswordInput(e) {
    const value = e.target.value
    setPassword(value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (username !== "admin") {
      alert("username ບໍ່ຖືກຕ້ອງ");
      return;
    }
    if (password !== "123456") {
      alert("ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ ບໍ່ຖືກຕ້ອງ");
      return;
    }
    alert("ເຂົ້າສູ່ສໍາເລັດ");
  }

  return(
    <div className='container'>
      {/* <div className='box'> */}
      
{/* ໂຕເອື້ນໃຊ້ Submit  */}
        <form className='form_userPass' onSubmit={handleSubmit}> 
        <h1 className='text_login'>Login</h1>
        <div>
          <h4 className='text_UserPass'>Username</h4>
          <input className='box_UserPass'
            value={username}
            type="text"
            placeholder="username"
            onChange={handleUserNameInput}// ໂຕເອື້ນໃຊ້
          />
        </div>
        <div>
          <h4 className='text_UserPass'>Password</h4>
          <input className='box_UserPass'
            value={password}
            type="password"
            placeholder="password"
            onChange={handlePasswordInput}// ໂຕເອື້ນໃຊ້
          />
        </div>
        
        <div className='button_form'>
          <button className='btn_style' type="reset">ຍົກເລີກ</button>
          <button className='btn_style1' type="submit">ເຂົ້າສູ່ລະບົບ</button>
        </div>
      </form>
      {/* </div> */}
    </div>
  )
}

export default Homework

