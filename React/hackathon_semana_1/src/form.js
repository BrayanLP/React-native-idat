const Form = () =>{
  return (
    <div>
    <form className="form">
      <h1>
        Hello.<br />
        Welcome Back
      </h1>
      <div className="fields">
      <div className="group">
        <label htmlFor="">
          Correo
        </label>
        <input type="text" value="blaureanop@gmail.com"/>
      </div>
      <div className="group">
        <label htmlFor="">
          Contraseña
        </label>
        <input type="text" value="P@ssw0rd"/>
      </div>
      <a className="btn btn-light align-right" href='#forgot'>Forgot Password ?</a>
      </div>
      <div className="footer-button">
      <button className='btn btn-primary'>LOGIN</button>
      <button className='btn btn-light'>Registrar Cuenta</button>
      </div>
    </form>
    </div>
  )
}

export default Form;