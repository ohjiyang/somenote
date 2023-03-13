import Somenote from "./MainComponents/Somenote";

const Main = (props) => {

    const addNote = (parentNodeKey, value) => {
        props.addNote(parentNodeKey, value)
    }

    return (
        <div className="main">
            <div className="main__body">
                <Somenote somenotes={props.somenotes.root} addNote={addNote}/>
            </div>
        </div>
    )
}

export default Main