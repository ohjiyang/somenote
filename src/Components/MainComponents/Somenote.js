const Somenotes = (props) => {
    return (
        <div className="somenotes">
            <div className="somenote">
                <input value={props.somenotes.value} />
                {
                    props.somenotes.children.map((somenotes, index) => (
                        <div key={index} className="somenote__children">
                            <Somenotes somenotes={somenotes}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Somenotes