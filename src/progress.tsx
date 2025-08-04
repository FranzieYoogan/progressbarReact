import { useEffect, useState } from "react"
import './assets/css/progress.css'
import grocery from './assets/animation/grocery.gif'

function Progress() {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [filled, setFileld] = useState<number>(0)
    const [icon, setIcon] = useState<boolean>(false)

     useEffect(() => {

        if(filled < 100 && isLoading) {

            setTimeout(() => {

                setFileld(filled + 10)

            }, 50);

        }

            if(filled === 100) {

                setIcon(true)

                setTimeout(() => {

                    setIcon(false)
                    setIsLoading(false)
                    setFileld(0)

                }, 2000);

            }

     }, [filled, isLoading])

    return(

        <>

            <div className="container">

                <img className={`icon  ${icon ? 'iconActive' : ''}`} src={grocery} alt="grocery" />
                <progress className="progressbarStyle" value={filled} max="100"></progress>
                <button className="buttonStyle" onClick={() => setIsLoading(true)}>Load</button>

            </div>
        
        </>

    )

}

export default Progress