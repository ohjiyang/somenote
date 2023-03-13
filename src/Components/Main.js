import Somenote from "./MainComponents/Somenote";

const Main = (props) => {

    const addNote = (parentNodeKey, value) => {
        props.addNote(parentNodeKey, value)
    }

    const changeNote = (key, newValue) => {
        props.changeNote(key, newValue)
    }

    return (
        <div className="main">
            <div className="main__body">
                <Somenote somenotes={props.somenotes.root} addNote={addNote} changeNote={changeNote}/>
            </div>
        </div>
    )
}

export default Main