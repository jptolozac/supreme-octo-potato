import { useState } from "react"
import { Person } from "./Person";

export function Persons() {
    const [persons, setPersons] = useState([{
        id: 1,
        name: "Pepito",
        role: "DevOps Developer",
        img: "https://bootdey.com/img/Content/avatar/avatar1.png"
    }, {
        id: 2,
        name: "Juanito",
        role: "FullStack Developer",
        img: "https://bootdey.com/img/Content/avatar/avatar4.png"
    }, {
        id: 3,
        name: "Alejandra",
        role: "UX/UI Developer",
        img: "https://bootdey.com/img/Content/avatar/avatar3.png"
    }]);

    return (
        <div className="m-4 ">
            <h3>IT Team</h3>
            <div className="h-full d-flex">
                {persons.map(person => (
                    <Person
                        key={person.id}
                        img={person.img}
                        name={person.name}
                        role={person.role}
                    />
                ))}
            </div>
        </div>
    )
}