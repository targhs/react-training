import React from "react";

const NameComponent = ({ username, access }) => {
  return (
    <>
      <p>My name is {username}</p>
      {access == "admin" ? <>I am an admin</> : <>I am a user</>}
    </>
  );
};

const RoleComponent = ({ roleName }) => {
  return <p>Role: {roleName}</p>;
};

export default function Home(props) {
  const roles = ["Software developer", "HR", "Finance"];

  return (
    <>
      <div>This is home</div>
      <NameComponent username="Dhiraj" access="admin"></NameComponent>
      <NameComponent username="vivek" access="user"></NameComponent>
      <br></br>
      +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      {roles.map((role) => {
        return <RoleComponent roleName={role}></RoleComponent>;
      })}
      ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    </>
  );
}
