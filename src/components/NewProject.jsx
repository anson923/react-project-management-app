import Input from "./Input.jsx";

export default function NewProject(){
  return (<div>
    <menu>
      <li><button>Cancel</button></li>
      <li><button>Save</button></li>
    </menu>
    <div>
      <Input title="Title"/>
      <Input title="Description" isTextArea/>
      <Input title="Due Date"/>
    </div>
  </div>);
}