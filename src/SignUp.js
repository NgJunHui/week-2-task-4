import React, { Component } from 'react';

class SignUp extends Component {
    state = {
        name: '',
        age: '',
        dob: '',
        email: '',
        password: '',
        contactNo: '',

        nameErr: '',
        ageErr: '',
        dobErr: '',
        emailErr: '',
        passwordErr: '',
        contactErr: '',
        validSuccess: false
    }

    ValChange = (ele) => {
        if (ele.target.id == 'name') {
            this.nameValidate(ele.target.value);
        }

        if (ele.target.id == 'age') {
            this.ageValidate(ele.target.value);
        }
        if (ele.target.id == 'dob') {
            this.dobValidate(ele.target.value);
        }

        if (ele.target.id == 'email') {
            this.emailValidate(ele.target.value);
        }
        if (ele.target.id == 'password') {
            this.passwordValidate(ele.target.value);
        }

        if (ele.target.id == 'contactNo') {
            this.contactNoValidate(ele.target.value);
        }


        // this.setState({
        //     [ele.target.id]: ele.target.value
        // })
    }

    nameValidate = (name) => {
        let nameErr = this.state.nameErr;
        let validSuccess = this.state.validSuccess;
        if (name.trim() === '') {
            nameErr = "*Field is required."
            validSuccess = false;
        }
        else if (!/^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/.test(name)) {
            nameErr = '*Only letters, numbers, _ and - are allowed.'
            validSuccess = false;
        }
        else if (name.trim().length <= 3) {
            nameErr = '*Name should be more than 3 characters.'
            validSuccess = false;
        }
        else {
            nameErr = '';
            validSuccess = true;
        }
        this.setState({
            name,
            nameErr,
            validSuccess
        });

        return validSuccess;
    }

    ageValidate = (age) => {
        let ageErr = this.state.ageErr;
        let validSuccess = this.state.validSuccess;

        if (age.trim() === '') {
            ageErr = "*Field is required.";
            validSuccess = false;
        }
        else if (!/^[0-9]+$/.test(age)) {
            ageErr = '*Please enter numbers only.';
            validSuccess = false;
        }
        else if (age.trim().length > 3) {
            ageErr = '*Age should be less than 3 numbers.';
            validSuccess = false;
        }
        else {
            validSuccess = true;
            ageErr = '';
        }
        this.setState({
            age,
            ageErr,
            validSuccess
        });
        return validSuccess;
    }

    dobValidate = (dob) => {
        let dobErr = this.state.dobErr;
        let validSuccess = this.state.validSuccess;
        if (dob.trim() === '') {
            validSuccess = false;
            dobErr = "*Field is required.";
        }
        else if (!/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/.test(dob)) {
            dobErr = '*DOB should be in DD/MM/YYYY format.';
            validSuccess = false;
        }
        else {
            validSuccess = true;
            dobErr = "";
        }
        this.setState({
            dob,
            dobErr,
            validSuccess
        });
        return validSuccess;
    }

    emailValidate = (email) => {
        let emailErr = this.state.emailErr;
        let validSuccess = this.state.validSuccess;
        if (email.trim() === '') {
            validSuccess = false;
            emailErr = "*Field is required."
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            emailErr = '*Please enter a valid format.e.g name@mail.com'
            validSuccess = false;
        }
        else {
            validSuccess = true;
            emailErr = '';
        }
        this.setState({
            email,
            emailErr,
            validSuccess
        });
        return validSuccess;
    }

    passwordValidate = (password) => {
        let passwordErr = this.state.passwordErr;
        let validSuccess = this.state.validSuccess;
        if (password.trim() === '') {
            validSuccess = false;
            passwordErr = "*Field is required"
        }
        else if (password.trim().length < 8 || password.trim().length >12) {
            passwordErr = '*Password should be between 8 - 12 characters'
            validSuccess = false;
        }
        else {
            validSuccess = true;
            passwordErr = '';
        }
        this.setState({
            password,
            passwordErr,
            validSuccess
        });
        return validSuccess;
    }

    contactNoValidate = (contactNo) => {
        let contactNoErr = this.state.contactNoErr;
        let validSuccess = this.state.validSuccess;
        if (contactNo.trim() === '') {
            validSuccess = false;
            contactNoErr = "*Field is required."
        }
        else if (contactNo.trim().length != 8) {
            contactNoErr = '*Contact number should have 8 digits.'
            validSuccess = false;
        }
        else {
            validSuccess = true;
            contactNoErr = '';
        }
        this.setState({
            contactNo,
            contactNoErr,
            validSuccess
        });
        return validSuccess;
    }

    SubmitForm = (ele) => {
        ele.preventDefault();

        if (this.nameValidate(this.state.name) && this.ageValidate(this.state.age) && this.dobValidate(this.state.dob) && this.emailValidate(this.state.email) && this.passwordValidate(this.state.password) && this.contactNoValidate(this.state.contactNo)) {
            alert('Congratulation! Form successfully submitted.');
            this.props.newData(this.state);
            this.setState({
                name: '',
                age: '',
                dob: '',
                email: '',
                password: '',
                contactNo: '',

            })
        }
        else {
            alert('Please fill in all required fields.');
        }
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <form onSubmit={this.SubmitForm}>
                        <label>Full Name:</label><br></br>
                        <input type="text" placeholder="" id="name" onChange={this.ValChange} value={this.state.name} /><br></br>
                        <p>{this.state.nameErr}</p>

                        <label>Age:</label><br></br>
                        <input type="text" placeholder="" id="age" onChange={this.ValChange} value={this.state.age} /><br></br>
                        <p>{this.state.ageErr}</p>

                        <label >Date of Birth:</label><br></br>
                        <input type="text" placeholder="DD-MM-YYYY" id="dob" onChange={this.ValChange} value={this.state.dob} /><br></br>
                        <p>{this.state.dobErr}</p>

                        <label >Email:</label><br></br>
                        <input type="text" placeholder="" id="email" onChange={this.ValChange} value={this.state.email} /><br></br>
                        <p>{this.state.emailErr}</p>

                        <label >Password:</label><br></br>
                        <input type="password" placeholder="" id="password" onChange={this.ValChange} value={this.state.password} /><br></br>
                        <p>{this.state.passwordErr}</p>

                        <label >Contact:</label><br></br>
                        <input type="number" placeholder="" id="contactNo" onChange={this.ValChange} value={this.state.contactNo} /><br></br>
                        <p>{this.state.contactNoErr}</p>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default SignUp;