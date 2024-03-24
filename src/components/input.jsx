const Input = ({handleChange, handleKeyDown, tarea}) => {
    return (
        <>
            <input type="text" onChange={handleChange} onKeyDown={handleKeyDown} value={tarea} className="inputComponent" placeholder="What needs to be done?" name="task" id="task"/>
        </>
    )
}
export default Input