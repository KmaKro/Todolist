const Tareas = ({ tareas, deleteItem }) => {
    return (
        <>
            <div className="containerTareas">
                {
                    tareas.length > 0 ?
                        tareas.map((tarea, index) => {
                            return <div key={index} style={{ display: 'flex', flexDirection: 'row', width: "100%", justifyContent: 'space-between', borderBottom: '1px solid #fff', marginBottom: 10 }}>
                                <p key={index}>{index + 1} - {tarea}</p>
                                <button onClick={() => deleteItem(index)}>Delete</button>
                            </div>
                        })
                        :
                        'No hay tareas'

                }
                <p className="text-end">Tiene {tareas.length} Tareas pendendientes</p>
            </div>

        </>
    )
}

export default Tareas