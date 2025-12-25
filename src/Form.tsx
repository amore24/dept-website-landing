import React, { useState, ChangeEvent, FormEvent } from 'react';

interface Errors {
  name?: string,
  email?: string,
  message?: string
}

export default function Form() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
    const [errors, setErrors] = useState<Errors>({});
    const [formStatus, setFormStatus] = useState<Boolean>();

    const validateForm = () => {
    let newErrors:Errors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setFormStatus(true);
      console.log('Form submitted successfully:', formData);
    } else {
      console.log('Form has errors.');
    }
  };

    return(
        <section className='flex flex-wrap py-[48px] px-[36px] lg:p-[58px]'>
          <div className='flex-[100%] text-[26px] mb-[38px] lg:flex-[30%] lg:text-[48px]'>QUESTION? <br />WE ARE HERE <br />TO HELP!</div>
          <form onSubmit={handleSubmit} className='grid grid-cols-2 flex-[100%] lg:flex-[70%]'>
            <div className='col-span-2 mb-[35px] lg:col-span-1'>
              <label htmlFor="name">NAME <span aria-hidden="true">*</span></label> <br />
              <input onChange={handleChange} aria-required="true" className='border-b border-gray-300 w-full lg:w-[70%]' type="text" name="name" id="name" />
              {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
            </div>
            <div className='col-span-2 lg:col-span-1 '>
              <label htmlFor="email">EMAIL <span aria-hidden="true">*</span></label> <br />
              <input onChange={handleChange} aria-required="true" className='border-b border-gray-300 w-full mb-[38px] lg:w-[70%] lg:mb-[0px]' type="text" name="email" id="email"/>
              {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>
            <div className='col-span-2 lg:col-span-2'>
              <label htmlFor="message">MESSAGE <span aria-hidden="true">*</span></label> <br />
              <textarea onChange={handleChange} aria-required="true" className='border-b border-gray-300 w-full lg:w-[35%]' name="message" id="message"></textarea> <br />
              {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
              <button aria-label='Send' className='border w-full text-purple-600 border-purple-600 py-[16px] px-[64px] rounded-[50px] mt-[35px] lg:border-black lg:w-[35%] lg:text-black'>SEND</button>
              {formStatus && <p className='mt-[10px] text-center lg:text-left'>Message sent successfully!!!</p>}
            </div>
          </form>
      </section>
    );
}