import React from "react";
import "./register.scss";
import { registerBg } from "../../assets/tampunganGambar";
import { Button, Gap, Input, Link } from "../../component/tampunganComponent";
const Register = () => {
  return (
    <>
      <div className="container">
        <div className="kiri">
          <img src={registerBg} alt="register" className="bgImage" />
        </div>
        <div className="kanan">
          <p>
            {" "}
            <b>Register</b>{" "}
          </p>
          <Input label="Fullname" placeholder="Full Name" type="text" />
          <Gap height={16} />

          <Input label="Email" placeholder="Email" type="email" />
          <Gap height={16} />

          <Input label="Password" placeholder="Password" type="password" />
          <Gap height={25} />
          <Button title="Register" />
          <Gap height={25} />

          <Link title="Kembali ke Login" />
        </div>
      </div>
    </>
  );
};

export default Register;
