import React, { useState } from "react"

const Semaforo = () => {
    const [selected, setSelected] = useState("rojo");

    /*   const changeColor = (color) => {
          setSelected(color);
      } */

    const changeColor = () => {
        if (selected === "rojo") {
            setSelected("amarillo");
        } else if (selected === "amarillo") {
            setSelected("verde");
        } else {
            setSelected("rojo");
        }
    };

    return (
        <main>
            <div className="poste"></div>
            <div className="caja">

                <div
                    className={`rojo ${selected == "rojo" ? "luz-on" : ""}`}
                    onClick={() => changeColor("rojo")}
                ></div>

                <div
                    className={`amarillo ${selected == "amarillo" ? "luz-on" : ""}`}
                    onClick={() => changeColor("amarillo")}
                ></div>
                <div
                    className={`verde ${selected == "verde" ? "luz-on" : ""}`}
                    onClick={() => changeColor("verde")}
                ></div>

                <button className="btn" onClick={() => changeColor(" ")}>Cambiar Luz</button>
            </div>


        </main>
    )
}

export default Semaforo
