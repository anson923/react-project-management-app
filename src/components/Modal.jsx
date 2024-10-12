import {createPortal} from "react-dom";
import {forwardRef, useImperativeHandle, useRef} from "react";

const Modal =  forwardRef(function({children, buttonCaption}, ref){
  const dialogRef = useRef(null);
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialogRef.current.showModal();
      }
    }
  })

  return createPortal(
    <dialog ref={dialogRef}>
      {children}
      <form method="dialog">
        <button>{buttonCaption}</button>
      </form>
    </dialog>
  , document.getElementById('modal-root'));
});

export default Modal;