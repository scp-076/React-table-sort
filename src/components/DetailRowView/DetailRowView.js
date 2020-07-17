import React from "react";

export default ({person}) => (
    <div>
        <p>{person.firstName + ' ' + person.lastName}</p>
        <p>
            Описание: <br/>
            <textarea defaultValue={person.description} />
        </p>
        <p>Адрес проживания: <b>{person.address.streetAddress}</b></p>
        <p>Город: <b>{person.address.city}</b></p>
        <p>Провинция/штат: <b>{person.address.state}</b></p>
        <p>Индекс: <b>{person.address.zip}</b></p>
    </div>
)
