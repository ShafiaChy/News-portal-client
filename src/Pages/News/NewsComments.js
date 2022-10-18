import React from "react";
import { useContext } from "react";
import { CommentSection } from "react-comments-section";
import "react-comments-section/dist/index.css";
import { AuthContext } from "../../contexts/UserContext";

const NewsComments = () => {
  const { user } = useContext(AuthContext);
  const data = [];
  return (
    <div className="">
      <CommentSection
        overlayStyle={{ position:"static" }}
        replyInputStyle={{ borderBottom: "1px solid black", color: "black" }}
        currentUser={{
          currentUserId: user?.uid || "01a",
          currentUserImg: "https://i.ibb.co/qRPwMpm/image.png",
          currentUserProfile:
            "https://www.linkedin.com/in/riya-negi-8879631a9/",
          currentUserFullName: user?.displayName || "programming hero",
        }}
        logIn={{
          loginLink: "http://localhost:3000/login",
          signupLink: "http://localhost:3000/login",
        }}
        commentData={data}
        onSubmitAction={(data) => console.log("check submit, ", data)}
        currentData={(data) => {
          console.log("curent data", data);
        }}
      />
    </div>
  );
};

export default NewsComments;
