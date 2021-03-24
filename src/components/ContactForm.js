import React, { useState, useEffect } from 'react';

const ContactForm = (props) => {
    const initialFieldValues = {
        fullName: '',
        mobile: '',
        email: '',
        address: ''
    }

    var [values, setValues] = useState(initialFieldValues)


    useEffect(() => {
        if (props.currentId == '')
            setValues({ ...initialFieldValues })
        else
            setValues({
                ...props.contactObjects[props.currentId]
            })
    }, [props.currentId, props.contactObjects])

    const handleInputChange = e => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        props.addOrEdit(values);
        console.log(values);
    }

    return (
        <form autoComplete="off" onSubmit={handleFormSubmit}>
            
            <div className="form-group input-group">
                
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i class="fas fa-book-reader"></i>
                    </div>
                </div>
               
                <input className="form-control" name="fullName" placeholder="book name"
                    value={values.fullName}    
                    onChange={handleInputChange}
                />
                
            </div>

            
            <div className="form-group input-group ">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i class="fab fa-twitter"></i>
                    </div>
                </div>

                <input className="form-control" name="mobile" placeholder="twitter id"
                    value={values.mobile}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group input-group ">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                       <i class="fas fa-link"></i>
                    </div>
                </div>
                <input className="form-control" name="email" placeholder="book img url"
                    value={values.email}
                    onChange={handleInputChange}
                />
            </div>
           
          
            <div className="form-group">
                <input type="submit" value={props.currentId == "" ? "Save" : "Update"} className="btn btn-primary btn-block" />
            </div>

        </form>
    );
}

export default ContactForm;