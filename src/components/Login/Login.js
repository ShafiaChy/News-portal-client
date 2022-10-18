import React from "react";
import { useContext } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";
import { AuthContext } from "../../contexts/UserContext";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { signInWithGoogle } = useContext(AuthContext);
  function signIn() {
    signInWithGoogle().then((res) => navigate(from, { replace: true }));
  }
  return (
    <div className="d-flex justify-content-center">
      <ButtonGroup className="w-1/2" vertical>
        <Button className="mb-2" variant="outline-primary" onClick={signIn}>
          <span>
            <FaGoogle />
          </span>{" "}
          Login via Google
        </Button>
        <Button variant="outline-dark">
          <span>
            <FaGithub />
          </span>{" "}
          Login via Github
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Login;
