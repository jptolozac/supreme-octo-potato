export function Person({ name, role, img }){
    return (
        <div className="p-4 bg-secondary me-4 rounded">.
            <div className="mx-auto">
                <img src={img} alt={`Imagen de ${name}`} />
            </div>
            <div className="text-light mt-2">
                <p className="fs-4">{name}</p>
                <p>{role}</p>
            </div>
        </div>
    )
}