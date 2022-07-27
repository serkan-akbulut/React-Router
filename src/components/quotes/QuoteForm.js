import { useRef, useState } from "react";
import { isEmpty } from "lodash";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";
import { Prompt } from "react-router-dom";

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const [error, setError] = useState(false);
  const [isEntering, setIsEntering] = useState(false);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    if (isEmpty(enteredAuthor) || isEmpty(enteredText)) {
      setError(true);
    } else {
      setError(false);
    }
    textInputRef.current.value = "";
    authorInputRef.current.value = "";
    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const onFocusHandler = () => {
    setIsEntering(true);
  };
  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  return (
    <>
      <Prompt
        when={isEntering}
        message={() => "Are you sure you want to leave all data will lost"}
      ></Prompt>
      <Card>
        <form
          onFocus={onFocusHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className="btn">
              Add Quote
            </button>
          </div>
          {error && <p>Error</p>}
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
