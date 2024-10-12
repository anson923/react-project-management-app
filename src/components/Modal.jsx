import {createPortal} from "react-dom";
import {forwardRef, useImperativeHandle, useRef} from "react";
import Button from "./Button.jsx";

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
    <dialog ref={dialogRef} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-2xl">
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>
  , document.getElementById('modal-root'));
});

export default Modal;