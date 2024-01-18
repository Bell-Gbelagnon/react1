import React, { useRef, useEffect } from "react"

const Acceuill = () => {
    let myLoremdiv = useRef(null)
    useEffect(() => {
        console.log("UseEffect");
        myLoremdiv.current.style.color = "blue"
        console.log(myLoremdiv);
    })
    console.log("Bonjour");
    return(
        <div>
            Acceuill
            <div ref={myLoremdiv}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, beatae quaerat repellat, minima officia ea dolore molestiae nam ad id in neque excepturi, non illum quo fuga eaque accusamus necessitatibus.
            </div>
        </div>
    )
}

export default Acceuill