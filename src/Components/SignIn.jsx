import { useFormik } from "formik";
import { useEffect } from "react";
import { signUpSchema } from "../schemas";
import "./CSS/signin.css"

export const SignIn = () => {
  const initialValues = {
    Fullname: "",
    Email: "",
    Number: "",
    Password: "",
  }
  useEffect(() => {
    document.title = "SignIn";
  }, []);
  const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    validationSchema: signUpSchema,
    initialValues: initialValues,
    onSubmit: (values,action)=>{
      console.log(values);
      action.resetForm();
    }
  });
  return (
    <div className="mt-[100px]">
      <div className="sm:flex flex sm:flex-row flex-col w-[90%] mx-auto  h-[80vh] ">
        <div className="flex flex-col sm:justify-center items-center sm:w-[60%] w-[90%] mx-auto sm:h-full h-[800px]">
          <p className="sm:text-[28px] text-[20px] text-[#fbc531] sm:ml-[20%] font-bold sm:leading-[2px] leading-6">
            Get started with your account
          </p>
          <p className="sm:text-[18px] text-[12px] sm:ml-[20%] text-center">
            Find your favourite food on our plateform.. just one step to order
            your food.
          </p>
        </div>
        <div className="sm:w-[40%] w-[100%] ">
          <div className="sm:w-[70%] w-[90%] mx-auto sm:h-[80%] sm:mt-[10%] mt-[5%] bg-[#eef3f6] rounded-md sm:mb-[100px] mb-[400px] ">
            <div className="p-[20px]">
              <p className=" text-black font-medium text-[20px] mb-4">
                Sign Up
              </p>
              <div>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="fullname" className="text-[15px]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    name="Fullname"
                    value={values.Fullname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                    className="w-full h-[35px] mb-3 border-[1px] border-[skyblue]"
                  />
                {errors.Fullname && touched.Fullname ? <p className="form-error">{errors.Fullname}</p>:null}
                  <label htmlFor="email" className="text-[15px]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="Email"
                    value={values.Email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                    className="w-full h-[35px] mb-3 border-[1px] border-[skyblue]"
                  />
                  {errors.Email && touched.Email ? <p className="form-error">{errors.Email}</p>:null}
                  <label htmlFor="number" className="text-[15px]">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    id="number"
                    name="Number"
                    value={values.Number}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                    className="w-full h-[35px] mb-3 border-[1px] border-[skyblue]"
                  />
                  {errors.Number && touched.Number ? <p className="form-error">{errors.Number}</p>:null}
                  <label htmlFor="pass" className="text-[15px]">
                    Password
                  </label>
                  <input
                    type="password"
                    id="pass"
                    name="Password"
                    value={values.Password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                    className="w-full h-[35px] mb-4 border-[1px] border-[skyblue]"
                  />
                  {errors.Password && touched.Password ? <p className="form-error">{errors.Password}</p>:null}
                  <button type="submit" className="w-full bg-[#fbc531] text-black text-[15px] font-bold h-[35px] rounded-md">
                    Sign up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
