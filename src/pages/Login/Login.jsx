import React from "react";
import { loginBg } from "../../assets/tampunganGambar";
import { Button, Gap, Input, Link } from "../../component/tampunganComponent";
const Login = () => {
  return (
    <>
      <div className="container">
        <div className="kiri">
          <img src={loginBg} alt="register" className="bgImage" />
        </div>
        <div className="kanan">
          <p>
            {" "}
            <b>Register</b>{" "}
          </p>

          <Input label="Email" placeholder="Email" type="email" />
          <Gap height={16} />

          <Input label="Password" placeholder="Password" type="password" />
          <Gap height={25} />
          <Button title="Login" />
          <Gap height={25} />

          <Link title="Belum punya akun?, daftar sekarang!" />
        </div>
      </div>
    </>
  );
};

export default Login;
