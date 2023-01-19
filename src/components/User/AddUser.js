import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enterUsername, setEnteredUserName] = useState("");
  const [enterAge, setEnteredAge] = useState("");

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enterUsername.trim().length === 0 || enterAge.trim().length===0)  {
     setError({
      title: 'Invalid input',
      message: 'Please add a valid name and age'
     })
      return;
    }
    if (+enterAge < 1) {
      setError({
        title: 'Invalid input',
        message: 'Please add a valid age'
       })
      return;
    }
    props.onAddUser(enterUsername,enterAge);
    setEnteredUserName("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null)
  }

  return (
    <div>
   { error &&  <ErrorModal title={error.title} message={error.message} onConfirm = {errorHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enterUsername}
          onChange={usernameChangeHandler}
        />

        <label htmlFor="age">Age </label>
        <input
          id="age"
          type="number"
          value={enterAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};

export default AddUser;
