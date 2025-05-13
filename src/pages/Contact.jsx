
import React, { useState } from 'react';
const Contact= () => {
    const [formData, setformData] = useState({
        name:"",
        email:"",
        message:""
    });

    let handlechange=(e)=>{
        setformData({...formData,[e.target.name]:e.target.value})
    }


    let sendEmail= (e)=>{
        e.preventDefault()
    

    emailjs.send(
        'service_k08aykw',
        'template_mfscriw',
        formData,
        '2-B9fwXCzo2imxDOH'
    )
        .then((result)=>{
            alert("Message was sent")
            setformData({name:'',email:'',message:''})
        })
        .catch((error)=>{
            alert("failed to send message")
        })
}
    return (
        <div>
            <h1 className=' flex justify-center pt-30 text-5xl '>
            CONTACT<span className='text-[#C81636] pl-3'> ME</span>
            </h1>

          <form className='max-w-md ml-100 mt-20  space-y-4 border-1 p-10 rounded-xl '>
           <input type="text"
           name='name'
           placeholder='Your name'
           value={formData.name}
           onChange={handlechange}
           className='w-full border border-gray-300 p-2 rounded ' />

           <input type="email"
           name='email'
           placeholder='Your Email id'
           value={formData.email}
           onChange={handlechange}
           className='w-full border border-gray-300 p-2 rounded' />

           <textarea name="message"
           placeholder='Message '
           value={formData.message}
           onChange={handlechange}
           className='w-full border border-gray-300 pb-20 pl-2 rounded'>
            </textarea>

            <button type='submit'  className='bg-[#C81636] p-1 rounded ml-1'>
                submit
            </button>
          </form>
            
        </div>
    );
}

export default Contact;
