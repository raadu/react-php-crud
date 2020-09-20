import React, {useReducer} from 'react';

export function Update(props) {
    const tableData = props.location.state;

    console.log("props on update", tableData);

    // State
    const [formData, setFormData] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            created_at: "",
            id: "",
            message: "",
            name: "",
        }
    );

    function onChangeHandler(event) {
        const name = event.target.name;
        const value = event.target.value;

        setFormData({[name]: value});
    }

    function submitForm(event) {
        event.preventDefault();

        const requestOptions = {
            method: "POST",
            body: JSON.stringify({formData}),
            headers: {"Content-Type": "application/json"},
        };
        fetch(`/api/submit_form.php`, requestOptions)
        .then(response => response.json())
        .then(data => console.log("Reply data by api", data));

        console.log(formData);
        
    }

    console.log("formdata", formData);

    return (
        <div>
            <form onSubmit={submitForm}>
            <label>
                Name:
                <input
                    type="text"
                    value={tableData.name}
                    onChange={(event) => onChangeHandler(event)}
                    name="name"
                />
            </label>
            <label>
                ID:
                <input
                    type="text"
                    value={tableData.id}
                    onChange={(event) => onChangeHandler(event)}
                    name="id"
                />
            </label>
            <label>
            Created At:
            <input
                type="text"
                value={tableData.created_at}
                onChange={(event) => onChangeHandler(event)}
                name="created_at"
            />
            </label>
            <label>
            Feedback Message:
            <input
                type="text"
                value={tableData.message}
                onChange={(event) => onChangeHandler(event)}
                name="message"
            />
            </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}