import React from "react"
import profilePicture from "../../../static/assets/images/auth/login.jpg"

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        My name is Brayden and I am a software developer. Please reach out to me
        to discuss any projects and/or employment opportunities you may have!
      </div>
    </div>
  )
}
