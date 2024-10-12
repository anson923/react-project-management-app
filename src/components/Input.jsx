export default function Input({title, isTextArea, ...props}) {
  return <p>
    <label>{title}</label>
    {isTextArea ? <textarea {...props}/> : <input {...props}/>}
  </p>;
}