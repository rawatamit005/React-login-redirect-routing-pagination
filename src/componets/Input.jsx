import React from 'react'


 const  Input = ({name, label, value, onChange})=> {
    return (
        <div>
            <div className="form-group">
                    <label for={name}>{label}</label>
                    <input 
                        value={value}
                        // ref={this.username}
                        name={name}
                        type="text"
                        className="form-control"
                        id="name" 
                        
                        onChange={onChange} />
                   
                </div>
        </div>
    )
}

export default Input;
