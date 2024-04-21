import './Register.scss';
import Logo from '../../assets/logo.svg';
import useInput from '../../hooks/useInput';

const Register = () => {
  const [loginHandler, loginData, submitHandler] = useInput();

  return (
    <div className="register">
      <div className="register__cont">
        <div className="register__cont--image">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="register__cont--inputs">
          <div className="register__cont--inputs--input">
            <label htmlFor="name">Name</label>
            <input
              onChange={loginHandler}
              value={loginData.name}
              name="name"
              type="text"
              placeholder="Input your name"
            />
          </div>
          <div className="register__cont--inputs--input">
            <label htmlFor="email">Email</label>
            <input
              onChange={loginHandler}
              value={loginData.email}
              name="email"
              type="email"
              placeholder="Input your email"
            />
          </div>
          <div className="register__cont--inputs--input">
            <label htmlFor="password">Password</label>
            <input
              onChange={loginHandler}
              value={loginData.password}
              name="password"
              type="password"
              placeholder="Input your password"
            />
          </div>
          <div className="register__cont--inputs--input">
            <label htmlFor="rePassword">Confirm Password</label>
            <input
              onChange={loginHandler}
              value={loginData.rePassword}
              name="rePassword"
              type="password"
              placeholder="Input your re-password"
            />
          </div>
        </div>
        <div className="register__cont--submit">
          <button onClick={submitHandler} className="register__cont--submit--submitBtn">
            Register
          </button>
        </div>
      </div>
      <div className="register__login">
        <p>
          Have an account? <span>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
