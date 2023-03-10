import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Login = () => {
  const [userInput, setUserInput] = useState({ id: "", pw: "" });
  const cursorId = useRef();
  const cursorPw = useRef();
  const idCheck = /\S+@\S+\.\S+/.test(userInput.id);
  const pwCheck = userInput.pw.length > 7;
  const navigate = useNavigate();
  const changeInput = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const doLogin = () => {
    axios({
      url: "https://pre-onboarding-selection-task.shop/auth/signin",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        email: userInput.id,
        password: userInput.pw,
      }),
    }).then((res) => {
      localStorage.setItem("token", res.data.access_token);
      navigate("/todo");
    });
  };
  // console.log(userInput);

  useEffect(() => {
    if (cursorId.current) {
      cursorId.current.focus();
    }
  }, []);
  return (
    <Wrap>
      <WrapInner>
        <Logo>
          <img
            src={process.env.PUBLIC_URL + "/images/logo.png"}
            alt=""
            style={{ width: 120 }}
          />
        </Logo>
        <Form>
          <Id>
            <p>아이디</p>
            <input
              ref={cursorId}
              name="id"
              placeholder="아이디 입력하세요"
              onChange={changeInput}
            ></input>
            {idCheck ? null : <p>⚠️ 올바른 이메일 주소를 입력해주세요</p>}
          </Id>
          <PW>
            <p>비밀번호</p>
            <input
              ref={cursorPw}
              name="pw"
              placeholder="비밀번호를 입력하세요"
              onChange={changeInput}
            ></input>
            {pwCheck ? null : <p>⚠️ 8자 이상의 비밀번호를 사용하세요</p>}
          </PW>

          <Membership>
            {idCheck && pwCheck ? (
              <LoginBtn onClick={doLogin}>로그인</LoginBtn>
            ) : (
              <LoginBtn style={{ opacity: 0.4 }}>로그인</LoginBtn>
            )}
            <JoinBtn onClick={() => navigate("/signup")}>회원가입GO !</JoinBtn>
          </Membership>
        </Form>
      </WrapInner>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e6e9ed;
`;
const WrapInner = styled.div`
  position: relative;
  width: 300px;
  height: 470px;
  margin: 0 auto;
  padding: 0 30px;
  background: #fafafa;
  box-shadow: 0 13px 27px -5px rgb(50 50 93 / 25%),
    0 8px 16px -8px rgb(0 0 0 / 30%), 0 -6px 16px -6px rgb(0 0 0 / 3%);
  border-radius: 25px;
`;
const Logo = styled.div`
  padding: 60px 0 30px;
  text-align: center;
`;
const Form = styled.div`
  text-align: center;
`;
const Id = styled.div`
  text-align: left;
  > p {
    font-size: 0.8rem;
    margin: 2px 0 6px;
  }
  > input {
    width: calc(100% - 26px);
    height: 38px;
    padding: 0 13px;
    border-radius: 30px;
    border: 1px solid #a9a9a9;
    font-size: 0.7rem;
  }
`;
const PW = styled.div`
  text-align: left;
  margin: 30px 0 0;
  > p {
    font-size: 0.8rem;
    margin: 2px 0 6px;
  }
  > input {
    width: calc(100% - 26px);
    height: 38px;
    padding: 0 13px;
    border-radius: 30px;
    border: 1px solid #a9a9a9;
    font-size: 0.7rem;
  }
`;
const Membership = styled.div`
  position: absolute;
  left: 30px;
  bottom: 20px;
  width: 300px;
`;
const LoginBtn = styled.button`
  width: 100%;
  height: 38px;
  background-color: #0081c7;
  border-radius: 30px;
  border: 0;
  color: #fff;
`;
const JoinBtn = styled.p`
  margin: 7px 10px 12px 0;
  font-size: 0.8rem;
  text-align: right;
  color: #666;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
export default Login;
