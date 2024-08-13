import { useState } from "react";
import SectionTareas from "./style/sectionTareas.module.css";
import BotonTarea from "./componentes/BotonTarea";

const tareasIniciales = [
  { id: 1, nombre: "Ver Radio Garka", estado: true },
  { id: 2, nombre: "Ver Top5", estado: false },
  { id: 3, nombre: "Ver CDT", estado: false },
  { id: 4, nombre: "Ver CDM", estado: false },
  { id: 5, nombre: "Ver SAPE o SAPEN'T", estado: false}
];

function App() {
  const [tareas, setTareas] = useState(tareasIniciales);

  const actualizarTarea = (id) => {
    setTareas(tareas.map(tarea =>
      tarea.id === id ? { ...tarea, estado: !tarea.estado } : tarea
    ));
  };

  return (
    <section className={SectionTareas.sectionTareas}>
      <h1>Tareas</h1>
      <article className={SectionTareas.articleContenedor}>
        <h2>Pendiente</h2>
        <div className={SectionTareas.contenedorBotones}>
          {tareas.filter(tarea => !tarea.estado).map((tarea) => (
            <BotonTarea
              key={tarea.id}
              tarea={tarea}
              actualizarTarea={actualizarTarea}
            />
          ))}
        </div>
      </article>

      <article className={SectionTareas.articleContenedor}>
        <h2>Realizado</h2>
        <div className={SectionTareas.contenedorBotones}>
          {tareas.filter(tarea => tarea.estado).map((tarea) => (
            <BotonTarea
              key={tarea.id}
              tarea={tarea}
              actualizarTarea={actualizarTarea}
            />
          ))}
        </div>
      </article>
    </section>
  );
}

export default App
