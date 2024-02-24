"use client";

export default function S2() {
  return (
    <section className="w-[100%] md:w-[90%] xl:w-[40%] p-5 my-5 bg-white rounded-lg shadow-lg">
      <SignupForm />
    </section>
  );
}

import React from "react";
import { useFormik } from "formik";
import { data } from "autoprefixer";
const validate = (values) => {
  const errors = {};

  if (!values.email) {
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    alert("ایمیل خود را درست وارد کنید");
  }

  return errors;
};

function SignupForm() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      file: "",
    },
    validate,
    onSubmit: async (values) => {
      fetch("https://65cfd171bdb50d5e5f5bdd2a.mockapi.io/profile/1", {
        method: "DELETE",
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          // handle error
        })
        .then((task) => {
          // Do something with deleted task
        })
        .catch((error) => {
          // handle error
        });
      fetch("https://65cfd171bdb50d5e5f5bdd2a.mockapi.io/profile/2", {
        method: "DELETE",
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          // handle error
        })
        .then((task) => {
          // Do something with deleted task
        })
        .catch((error) => {
          // handle error
        });
      fetch("https://65cfd171bdb50d5e5f5bdd2a.mockapi.io/profile/3", {
        method: "DELETE",
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          // handle error
        })
        .then((task) => {
          // Do something with deleted task
        })
        .catch((error) => {
          // handle error
        });
      fetch("https://65cfd171bdb50d5e5f5bdd2a.mockapi.io/profile/4", {
        method: "DELETE",
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          // handle error
        })
        .then((task) => {
          // Do something with deleted task
        })
        .catch((error) => {
          // handle error
        });
      try {
        const response = await fetch("https://65cfd171bdb50d5e5f5bdd2a.mockapi.io/profile", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const data = await response.json();

        alert("با موفقیت ارسال شد");
      } catch (error) {
        alert("ارسال نشد");
      }
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-[100%] flex flex-wrap justify-center"
    >
      <label htmlFor="firstName" className="w-[100%] h-[5vh]">
        نام
      </label>
      <input
        className="w-[100%] h-[5vh] border border-zinc-400 rounded-lg mb-2"
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

      <label htmlFor="lastName" className="w-[100%] h-[5vh]">
        نام خانوادگی
      </label>
      <input
        className="w-[100%] h-[5vh] border border-zinc-400 rounded-lg mb-2"
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

      <label htmlFor="email" className="w-[100%] h-[5vh]">
        ایمیل
      </label>
      <input
        className="w-[100%] h-[5vh] border border-zinc-400 rounded-lg mb-2"
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <label htmlFor="file" className="w-[100%] h-[5vh]">
        آپلود تصویر
      </label>
      <input
        className="w-[100%] h-[5vh] border border-zinc-400 rounded-lg mb-2"
        id="file"
        name="file"
        type="file"
        onChange={formik.handleChange}
        value={formik.values.file}
      />
      {formik.errors.file ? <div>{formik.errors.file}</div> : null}

      <button
        type="submit"
        className="w-[40%] h-[2.5rem] bg1 rounded-lg text-white font-bold"
      >
        ذخیره پرفایل
      </button>
    </form>
  );
}
