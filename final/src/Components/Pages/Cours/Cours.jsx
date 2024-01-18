import React from "react"
import Popop from "../../Layout/Popop"
import {AppContext} from "../../Context/AppContext"

const Cours = ({ extrait }) => {
    const [nom, setNom] = useState ('kodjo')
    return(
        <div>
            <h1>Cours</h1>
            <AppContext.Provider value={{ extrait }} >

            <Popop />
            </AppContext.Provider>
        </div>
    )
}

export default Cours