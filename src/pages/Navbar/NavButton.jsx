import React from 'react'
import { Button, Space } from "antd";
import { useNavigate } from 'react-router';

const  NavButton = () => {
    const navigate = useNavigate()

    const navigateLogIn = ()=>{
        navigate('/login')
    }
    const navigateSignUp = ()=>{
        navigate("/signup")
    }
  return (
    <div>
      <Space wrap>
        <Button onClick={navigateLogIn} type="primary">
          Log-in
        </Button>
        <Button onClick={navigateSignUp}>Sign-up</Button>
      </Space>
    </div>
  );
}

export default NavButton