import Somenote from "./MainComponents/Somenote";

const Main = (props) => {
    return (
        <div className="main">
            <div className="main__body">
                <Somenote somenotes={props.somenotes.root}/>
            </div>
        </div>
    )
}

export default Main