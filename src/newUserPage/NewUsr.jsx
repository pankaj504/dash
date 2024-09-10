import React from "react";
import "./newUsr.css";
const NewUsr = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>UserName</label>
          <input type="text" placeholder="pankaj" />
        </div>{" "}
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="Pankaj Lohani" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="pankajlohani84@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+918686868638" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="Male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="Female">Female</label>
            <input type="radio" name="gender" id="others" value="others" />
            <label htmlFor="Others">Others</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserBtn">Create</button>
      </form>
    </div>
  );
};

export default NewUsr;
