import React, { useState, useEffect } from 'react';
import ContactForm from "./ContactForm";
import firebaseDb from "../firebase";

const Contacts = () => {

	var [currentId, setCurrentId] = useState('');
    var [contactObjects, setContactObjects] = useState({})

 

    const addOrEdit = obj => {
        if(currentId === ''){
             firebaseDb.child('contacts').push(
                obj,
                err =>{
                    if(err)
                        console.log(err);
                    else{
                        setCurrentId('');
                    }
                }
            )
        }
        else{
             firebaseDb.child(`contacts/${currentId}`).set(
                obj,
                err =>{
                    if(err)
                        console.log(err);
                    else{
                        setCurrentId('');
                    }
                }
            )

        }

            console.log('object added');
        }
      
    
    //Once components load complete
    useEffect(() => {
        firebaseDb.child('contacts').on('value', snapshot => {
            if (snapshot.val() != null) {
                setContactObjects({
                    ...snapshot.val()
                });
            }
            else{
                setContactObjects({});
            }
             
        })
    }, [])




    const onDelete = key  => {
        // record with given id is to be deleted.
        if(window.confirm("are you sure....."));
        firebaseDb.child(`contacts/${key}`).remove(
                
                err =>{
                    if(err)
                        console.log(err);
                    else{
                        setCurrentId('');
                    }
                }
            )
    }


  return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center">BOOK SHARING SITE</h1>
                </div>
            </div>
         
      
            <div className="row">
                <div className="col-md-5">
                    <ContactForm {...({ currentId, contactObjects, addOrEdit })} ></ContactForm>
                </div>                 
            </div>





              <div className="col-md-15">
                    <table className="table table-borderless table-stripped"
                    style = {{borderCollapse: "separate" ,borderSpacing: "0 1em"}} 
                    >

                        <thead  className="thead-light">
                            <tr>
                                <th>book name</th>
                                <th>twitter id</th>
                                <th>image</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(contactObjects).map((key) => (
                                    <tr key={key}
                                        style={{backgroundColor:'#DCDCDC'}}
                                         
                                    >
                                        <td>{contactObjects[key].fullName}</td>
                                        <td>{contactObjects[key].mobile}</td>
                                        {/* <td> */}
                                            <img src = {contactObjects[key].email}></img>
                                        {/* </td> */}
                                        <td   style={{backgroundColor:'#DCDCDC'}}>
                                            <a className="btn text-primary" onClick={() =>{ { setCurrentId(key) }; window.scrollTo(0,0);} }>
                                                <i className="fas fa-pencil-alt"></i>
                                            </a>
                                            <a className="btn text-danger" onClick={() => { onDelete(key) }}>
                                                <i className="far fa-trash-alt"></i>
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>  
        </>
    );
}

export default Contacts;
