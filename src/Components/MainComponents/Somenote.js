const Somenotes = (props) => {

    return (
        <div className="somenotes">
            <div className="somenote">
                <textarea
                    value={props.somenotes.value}
                    className="somenote__input"
                    placeholder="Pls enter somenotes.."
                />
                <button
                    className="somenote__button"
                    onClick={()=>props.addNote(props.somenotes.value)}
                >
                    increase
                </button>
                {
                    props.somenotes.children.map((somenotes, index) => (
                        <div key={index} className="somenote__children">
                            <Somenotes somenotes={somenotes} />
                        </div>
                    ))
                }
            </div>
            <button
                className="somenote__button"
                onClick={()=>props.addNote("first")}
            >
                increase
            </button>
        </div>
    )
}

export default Somenotes