import { connect } from "react-redux";
import Home from "../../Pages/Home";
import { TODO_ACTION } from "../Action";

const mapStateToProps = (state) => {
  return {
    todoReducer: state.todoReducer,
  };
};

const mapDispatchToProps = {
  getTodo: TODO_ACTION.getTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
