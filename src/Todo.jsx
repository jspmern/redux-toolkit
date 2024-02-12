import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addText,
  deleteText,
  editData,
  submitData,
} from "./redux/store/slice/userSlice";

function Todo() {
  let todo = useSelector((item) => {
    return item.todo;
  });
  console.log(todo);
  let dispatch = useDispatch();
  //this is for text handler
  function textHandler(e) {
    dispatch(addText(e.target.value));
  }
  //this is the function handler
  function submitHandler() {
    dispatch(submitData());
  }
  //this is for the edit and delete handler
  function delteHandler(id) {
    dispatch(deleteText(id));
  }
  function editHandler(id) {
    dispatch(editData(id));
  }
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-start m-5">
          <div className="col">
            <input
              type="text"
              placeholder="enter your text"
              onChange={(e) => {
                textHandler(e);
              }}
              value={todo.text}
            />
            <button className="btn btn-primary" onClick={submitHandler}>
              add
            </button>
            <br />
            <br />
            <hr />
          </div>
        </div>
        {/* //this is for the card */}
        <div className="row justify-content-start m-3">
          {todo.todo?.map((item) => {
            return (
              <div className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <h6>{item.text}</h6>
                    <div>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          editHandler(item.id);
                        }}
                      >
                        edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          delteHandler(item.id);
                        }}
                      >
                        delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Todo;
