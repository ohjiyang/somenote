import Somenote from "./MainComponents/Somenote";

const Main = (props) => {

    const addNote = (parentNodeKey) => {
        props.addNote(parentNodeKey)
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