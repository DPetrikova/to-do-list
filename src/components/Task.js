function Task({task, finished = false, handleClick}) {

    return (
        <li>
            <p className={finished ? "finished" : ""}>{task}</p> 
            {!finished && <button onClick={handleClick}>X</button>}
        </li>
    )
}

export default Task;