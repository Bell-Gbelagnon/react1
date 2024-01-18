import React ,{useContext} from "react"

const Popop = () => {
    let {extrait} = useContext(AppContext)
    return <div> {extrait} </div>
}

export default Popop