import React from 'react'
import '../../../styles/ui/dashboard/update-profile-form.scss'
import Button from '../Button'

function UpdateProfileForm() {
    return (
        <form>
            <div className='form-input-container'>
                {/* Phone Number Input field */}
                <div className='form-input-container__half'>
                    <div className='form-input__value '>
                        <label>First Name</label>
                        <input type="text" placeholder='Peter' />
                    </div>
                    <div className='form-input__value'>
                        <label>Last Name</label>
                        <input type="text" placeholder='Olusesan' />
                    </div>
                </div>

                {/* Email Input field */}
                <div className='form-input-container__full'>
                    <label>Email Address</label>
                    <input type="email" placeholder='PeterOlusesan@gmail.com' />
                </div>

                {/* Phone Number Input field */}
                <div className='form-input-container__half'>
                    <div className='form-input__value'>
                        <label>Phone Number</label>
                        <input type="text" placeholder='09045278894' />
                    </div>
                    <div className='form-input__value'>
                        <label>Whatsapp Number</label>
                        <input type="text" placeholder='09067537754' />
                    </div>
                </div>

                {/* Password Input field  */}
                <div className='form-input-container__half__password'>
                    <div className='form-input__value'>
                        <label>Password</label>
                        <input type="text" placeholder='09045278894' />
                    </div>
                    <span>
                        <a href="#">Change</a>
                    </span>
                </div>

                {/* Update Button Input field  */}
                <Button text={"Update Profile"} styles={{ backgroundColor: "#4b5ffa" }} link="#" />
            </div>

        </form>
    )
}

export default UpdateProfileForm
