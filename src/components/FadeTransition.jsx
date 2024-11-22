import React from "react";
import { CSSTransition } from "react-transition-group";

function FadeTransition({ show, timeout = 300, children }) {
  return (
    <CSSTransition
      in={show}
      timeout={timeout}
      classNames="fade"
      unmountOnExit
    >
      {children}
    </CSSTransition>
  );
}

export default FadeTransition;
