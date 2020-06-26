import React from 'react';


function Edit({dados}) {
    return (
        <div className="container">
            <div className="row">
                <div className="input-field col s6">
                    <input value="Alvin" id="first_name2" type="text" class="validate" />
                    <label className="active" for="first_name2">First Name</label>
                </div>
            </div>
        </div>
    );
}

export default Edit;