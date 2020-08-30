import React,{ useState } from 'react';
import TextLoop from "react-text-loop";
import './App.css';
import EyeIcon from "mdi-react/EyeIcon";
import KeyVariantIcon from "mdi-react/KeyVariantIcon";
import MailRuIcon from "mdi-react/MailIcon";
import { CognitoUserPool } from "amazon-cognito-identity-js";
import { Button ,Alert} from "reactstrap";
import image from "../../swiggy.svg";
import Nabar from "../../components/Navbar/index"
function Login() {
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const poolData={
    UserPoolId:"ap-south-1_eMN7hgJy3",
    ClientId:"2qj8827mugn1sms4l3mmacgghr",
  };

  const UserPool=new CognitoUserPool(poolData);
  const onSubmit=event=>{
    event.preventDefault();
    UserPool.signUp(email,password,[],null,(err,data)=>{
    if(err){
      console.log(err);
    }
    console.log(data)
    }
    );
  };
  return (
    <div className="App">
      <Nabar/>
    <form onSubmit={onSubmit}>
    <div class="col-md-5 pr-lg-5 mt-2 mb-md-0" id="imi">
              <img src={image} alt="" className="img-fluid  d-none d-md-block " />
            </div>
           
    <div className="row">
    <div className="input-group col-lg-12 mb-4">
                    <div className="col-sm-12 ">
                      <TextLoop>
                      <h1 style={{ textAlign: 'center' ,fontSize:"40px"}}>Hungry?</h1>
                      <h1 style={{ textAlign: 'center',fontSize:"40px" }}>You order,we deliver</h1>
                      </TextLoop>
                      
                    </div>
                  </div>
                  <h1>LOGIN</h1>
    <div class="input-group col-lg-12 mb-4">
      
    <div class="input-group-prepend">
    <span class="input-group-text bg-white px-3 border-right-0 border-md" style={{ borderWidth: "1px" }}>
      <MailRuIcon />
      </span>
            </div>
            <input
              name="name"
              type="email"
              id="email"
              placeholder="Enter email"
              value={email}
              style={{ padding: "1.4rem 0.5rem", borderWidth: "1px", fontSize: '20px', fontWeight: 300}}
              className="form-control bg-white  border-md " 
              onChange={event=>setemail(event.target.value)}
              required
              />
              </div>
               <div class="input-group col-lg-12 mb-4">
               <div class="input-group-prepend">
    <span class="input-group-text bg-white px-3 border-right-0 border-md" style={{ borderWidth: "1px" }}>
      <KeyVariantIcon />
      </span>
            </div>
                <input
              name="password"
              type="password"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={event=>setpassword(event.target.value)}
              style={{ padding: "1.4rem 0.5rem", borderWidth: "1px", fontSize: '20px', fontWeight: 300}}
              className="form-control bg-white  border-md " 
              required
              />
              </div>
              
              <Button style = {{backgroundColor : '#FC8019',padding:'0px',fontWeight:"700",border:"none"}}
          className="btn btn-primary account__btn account__btn--small" 
          type="submit"  >
          Sign In
        </Button>
        </div>
    </form>
    </div>
  );
}

export default Login;
