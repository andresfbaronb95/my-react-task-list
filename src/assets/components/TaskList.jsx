import Task from "./Task";

export default function TaskList(props) {
    const { list } = props;

    return(
        <>
        {list.map(task => <Task title={task}/>)}
        </>
    )
}
