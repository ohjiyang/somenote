const Somenotes = (props) => {

    const addNote = (parentNodeKey, value) => {
        props.addNote(parentNodeKey, value)
    }

    const changeNote = (key, newValue) => {
        props.changeNote(key, newValue)
    }

    return (
        <div className="somenotes">
            <div className="somenote">
                <input
                    value={props.somenotes.value}
                    className="somenote__input"
                    placeholder="Pls enter somenotes.."
                    onChange={(e) => changeNote(props.somenotes.key, e.target.value)}
                />
                <button
                    className="somenote__button"
                    onClick={() => addNote(props.somenotes.key, "IDC")}
                >
                    increase
                </button>
                {
                    props.somenotes.children.map((somenotes, index) => (
                        <div key={index} className="somenote__children">
                            <Somenotes somenotes={somenotes} addNote={addNote} changeNote={changeNote}/>
                        </div>
                    ))
                }
            </div>
            <button
                className="somenote__button"
                onClick={() => props.addNote("first")}
            >
                increase
            </button>
        </div>
    )
}

export default Somenotes