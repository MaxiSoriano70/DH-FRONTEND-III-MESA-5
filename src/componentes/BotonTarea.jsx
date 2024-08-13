import Boton from "../style/boton.module.css";

const BotonTarea = ({ tarea, actualizarTarea }) => {
    return (
        <button
            className={Boton.btnPerzonalizado}
            onClick={() => actualizarTarea(tarea.id)}
        >
            {tarea.nombre}
        </button>
    );
};

export default BotonTarea;