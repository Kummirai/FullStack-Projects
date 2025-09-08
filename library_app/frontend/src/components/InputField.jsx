import React from 'react';

function InputField({buttonText}) {
    return (
        <form action="" className="d-flex align-items-center">
            <input className={"form-control w-100"} style={{minWidth: "350px"}} type="text" name="book"/>
            <div className="col-sm-4 px-2">
                <button className={"btn bg-lime-outline"}>{buttonText}</button>
            </div>
        </form>
    );
}

export default InputField;