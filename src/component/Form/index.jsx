import React, {useState} from 'react';

const UserForm = () => {
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [picture, setPicture] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log({name, dob, picture});
    };

    return (
        <section className='w-40 h-[400px] shadow p-4 rounded-4'>
            <form>
                <h1 className='font-bold mb-4'>User Form</h1>
                <div className="mb-3">
                    <div className='flex justify-content-start'>
                        <label htmlFor="userName" className="form-label">Username</label>
                    </div>
                    <input type="text" className="form-control" id="userName"/>
                </div>
                <div className="mb-3">
                    <div className='flex justify-content-start'>
                        <label htmlFor="birthDay" className="form-label">Date of birth</label>
                    </div>
                    <input type="date" className="form-control" id="birthDay"/>
                </div>

                <div className="mb-3">
                    <div className='flex justify-content-start'>
                        <label htmlFor="picture" className="form-label">Picture</label>
                    </div>
                    <input type="file" className="form-control" id="picture"/>
                </div>

                <div className='mt-5 flex justify-content-end'>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </section>
    );
};

export default UserForm;
