


export default function S2(){
    return(
        <section className="w-[100%] md:w-[90%] xl:w-[50%] bg-white my-5 shadow-xl rounded-lg">
            <SignupForm/>
        </section>
    )
}

import React from 'react';
import { useFormik } from 'formik';
const validate = values => {
  const errors = {};
  if (!values.email) {
    alert('ایمیل خود را وارد کنید')

  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    alert('ایمیل خود را درست وارد کنید')
  }
  if (!values.firstName) {
    
  } else if (values.firstName.length > 15) {
    
  }

  if (!values.tel) {
    
  } else if (values.tel.length > 11) {
    
  }
  if (!values.text) {
    
  } else if (values.text.length > 250) {
    
  }


  return errors;
};

function SignupForm(){
  const formik = useFormik({
    initialValues: {
        email: '',
      firstName: '',
      tel: '',
      select: '',
      text: '',
    },
    validate,
    onSubmit: async (values) => {
        try {
          
          const response = await fetch('http://localhost:4001/form1', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          });
  
          const data = await response.json();
  
          
         alert('با موفقیت ارسال شد')
        } catch (error) {
          alert('ارسال نشد')
        }
      },
  });
  return (
      <form onSubmit={formik.handleSubmit} className='w-[100%] flex flex-wrap justify-center gap-y-5 p-3'>
        <label htmlFor="email" className='w-[30%] h-[6vh] flex items-center'>ایمیل :*</label>
        <input
        className='w-[70%] h-[6vh] border border-zinc-400 rounded-lg'
          id="email"
          name="email"
          placeholder='ایمیل'
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        
      <label htmlFor="firstName" className='w-[30%] h-[6vh] flex items-center'>نام :</label>
      <input
        id="firstName"
        name="firstName"
        className='w-[70%] h-[6vh] border border-zinc-400 rounded-lg'
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

      <label htmlFor="tel" className='w-[30%] h-[6vh] flex items-center'>شماره همراه:</label>
      <input
        id="tel"
        maxLength={11}
        className='w-[70%] h-[6vh] border border-zinc-400 rounded-lg'
        placeholder='09121594246'
        name="tel"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.tel}
      />
      {formik.errors.tel ? <div>{formik.errors.tel}</div> : null}
      
      <label htmlFor="select" className='w-[30%] h-[6vh] flex items-center'>بخش:</label>
        <select id="select" name="select" class="w-[70%] h-[6vh] border border-zinc-400 rounded-lg" onChange={formik.handleChange} value={formik.values.select}>
            <option value="فروش">فروش</option>
            <option value="پشتیبانی">پشتیبانی</option>
            <option value="همکاری">همکاری</option>
            <option value="سایر">سایر</option>
        </select>
      {formik.errors.select ? <div>{formik.errors.select}</div> : null}

      <label htmlFor="text" className='w-[30%] h-[6vh] flex items-center'>متن پیام:*</label>
      <textarea onChange={formik.handleChange} value={formik.values.text} name="text" style={{resize:'none'}} id="text" cols="30" rows="10" className='w-[70%] h-[15vh] border border-zinc-400 rounded-lg'></textarea>
      {formik.errors.tel ? <div>{formik.errors.tel}</div> : null}


      <button type="submit" className='w-[70%] h-[2.5rem] bg1 rounded-lg'>ارسال پیام</button>
    </form>
  );
};




