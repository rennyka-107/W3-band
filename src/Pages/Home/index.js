import { isEmpty } from "lodash";
import React, { useEffect } from "react";
import { removeAuth } from "../../Utils/localStorage";

const Home = (props) => {
  const { todoReducer, getTodo } = props;
  const { todoList } = todoReducer;
  useEffect(() => {
    getTodo();
  }, [getTodo]);

  const logOut = () => {
    removeAuth();
    window.location.reload();
  };

  return (
    <div className="home-container" >
      <ul>
        {!isEmpty(todoList) &&
          todoList.map((td, idx) => <li key={idx}>{td.title}</li>)}
      </ul>
      Home
      <button onClick={logOut}>Log out!</button>
    </div>
  );
};

export default Home;
