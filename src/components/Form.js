import React, { useState } from "react";
import SignUpInfo from './SignUpInfo';
import PersonalInfo from './PersonalInfo';
import OtherInfo from './OtherInfo'
import axios from 'axios';

function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        email: "", 
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        username: "",
        nationality: "",
        other: ""

    })

    const FormTitles = ["Sign Up", "Personal Info", "Other"]

    const PageDisplay = () => {
        if (page === 0) {
            return <SignUpInfo formData={formData} setFormData={setFormData}/>
        } else if (page === 1){
            return <PersonalInfo formData={formData} setFormData={setFormData} />
        } else {
            return <OtherInfo formData={formData} setFormData={setFormData} />
        }
    };
    const sendEmail = async () => {
        try{
            await axios.post('http://localhost:5000/send-email', {
                to: formData.email,
                subject: 'Account Verification',
                text: `Hello, ${formData.firstName} ${formData.lastName} This is a confirmation email from your form submitiion. Here is the Information we've received:
                \n
                 First Name: ${formData.firstName} 
                 \n
                 Last Name: ${formData.lastName}
                 \n 
                 Username: ${formData.username}
                 \n
                 Nationality: ${formData.Nationality}
                 \n
                 Pronouns: ${formData.Pronouns}
                 `
            })
            
        }
        catch (error){
            console.error('There has been an error sending this email, Sorry.', error);
        }
    };

    const handleSubmit = () => {
        event.preventDefault();
        
        if (page === FormTitles.length - 1) {
            sendEmail();
            alert("Form Submitted");
            console.log(formData);
        } else {
            setPage((currPage) => currPage + 1);
        }
    };

    return (
        <div className="form">
            <div className="progressbar">
                <div style={{width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%"}}></div>
            </div>
            <div className="form-container">
                <div className="progressbar"></div>
                <div className="header">
                    <h1>{FormTitles[page]}</h1>
                </div>
                <div className="body">{PageDisplay()}</div>
                <div className="footer">
                    <button
                        disabled={page == 0}
                        onClick={() => {
                            setPage((currPage) => currPage - 1)
                        }}>
                        Prev</button>
                        <button onClick={handleSubmit}>
                    {page === FormTitles.length - 1 ? "Submit" : "Next"}
                </button>
                </div>
            </div>
        </div>
    )
}

export default Form;