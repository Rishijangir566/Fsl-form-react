import { useState } from "react"
import { Link } from "react-router-dom";


function App() {

 const[isChecked , setIsChecked]= useState(false)

//  const [isChecked, setIsChecked] = useState(false);

 const handleToggleChange = () => {
   setIsChecked(!isChecked)
      };

  return (
    <><form action="" >

      <div className="wrapper font-Roboto">

        <div className="personalDetail border border-gray-400 m-4">
          <h2 className="bg-slate-400 font-bold  pl-4 text-2xl" >Personal Details </h2>

          <div className="basicInfo mx-16 my-4 w-100% ">
            <label  id="name">Name :</label>
            <input type="text"
            id="name"
            name="name"
            className="border border-gray-300 pl-2 ml-20 my-3 w-[70%]" placeholder="Enter your Name" />
          </div>
          <div className="basicInfo mx-16 my-4 w-100%  ">
            <label  id="mail">E-mail :</label>
            <input type="text"
            id="mail"
            name="mail"
            className="border border-gray-300 pl-2 ml-20 my-3 w-[70%]" placeholder="Enter your E-mail" />
          </div>
          <div className="basicInfo mx-16 my-4 w-100%">
            <label  id="phone">Phone :</label>
            <input type="text"
            id="phone"
            name="phone"
            className="border border-gray-300 pl-2 ml-20 my-3 w-[70%]" placeholder="Enter your Phone Number" />
          </div>
          <div className="basicInfo mx-16 my-4 w-100%">
            <label  id="date">Date Of Birth :</label>
            <input type="date"
               id="date"
               name="date"
            className="border border-gray-300 pl-2 ml-8 my-3 w-[70%]" />
          </div>
          <div className="basicInfo mx-16 my-4 w-100% ">
            <label id="gender" >Gender :</label>
            <input type="radio" 
            id="male"
            name="male"
            className=" ml-12 w-[5%]" />
            <label  id="female">Male</label>
            <input type="radio"
            id="female"
            name="female"
            className=" ml-8 w-[5%]" />
            <label  id="female">Female</label>
            <input type="radio" 
            id="other"
            name="other"
            className=" ml-8 w-[5%]" />
            <label  id="other">Other</label>
          </div>

          <div className="basicInfo mx-16 my-6 w-100% ">
            <label id="adhar">Adhar Card :</label>
            <input type="file" 
              id="adharleft"
              name="adharleft"
            className="border border-gray-300 ml-12 w-[33%]" />
            <input type="file"
             id="adharright"
             name="adharright"
            className="border border-gray-300  ml-12 w-[33%]" />
          </div>
        </div>



        <div className="parentGuardianDetail border-2 border-gray-400 m-4">
          <h2 className="bg-slate-400 font-bold  pl-4 text-2xl" >Parent Guardian Details </h2>
          <div className=" mx-16 my-16 w-100% ">
            <label  id="pName" >Parent/Guardian <br /> Details :</label>
            <input type="text" 
            id="pName"
            name="pName"
            className="border border-gray-300 pl-2 ml-20 w-[70%]" placeholder="Enter your Parent / Guardian Name" />
          </div>
          <div className=" mx-16 my-16 w-100% ">
            <label  id="pNumber" >Parent/Guardian <br /> Phone :</label>
            <input type="text"
            id="pNumber"
            name="pNumber"
            className="border border-gray-300 pl-2 ml-20 w-[70%]" placeholder="Enter your parent / Guardian Number" />
          </div>
        </div>


        <div className="ResidentialDetail border-2 border-gray-400 m-4">
          <h2 className="bg-slate-400 font-bold  pl-4 text-2xl" >Residential Details </h2>
          <div className=" mx-16 my-16 w-100%">
            <label  id="Laddresh" >Local <br /> Address :</label>
            <input type="text" 
            id="Laddresh"
            name="Laddresh"
            className="border border-gray-300 pl-2  ml-20 w-[70%]" placeholder="Enter your Local Address" />
          </div>
          <div className=" mx-16 w-100% ">
            <input type="checkbox"
            id="same"
            name="same"
            className=" ml-32 w-[5%]" />
            <label id="same">Permanent Address is same as Local Address</label>
          </div>
          <div className=" mx-16 mb-16 w-100% ">
            <label id="Paddresh" > Permanent <br />Address:</label>
            <input type="text" 
            id="Paddresh"
            name="Paddresh"
            className="border border-gray-300 pl-2 ml-20 w-[70%]" placeholder="Enter your Permanent Address" />
          </div>
        </div>



        <div className="EductionDetails border-2 border-gray-400 m-4">
          <h2 className="bg-slate-400 font-bold  pl-4 text-2xl" >Eduction Details</h2>
          <div className=" mx-16 my-16 w-100% ">
            <label htmlFor="u" id="youa" >Are You a:</label>
            <input type="radio"
            id="student"
            name="student"
            className=" ml-12 w-[5%]" />
            <label htmlFor="female" id="female">Student</label>
            <input type="radio" 
            id="working"
            name="working"
            className=" ml-8 w-[5%]" />
            <label htmlFor="other" id="other">Working Professional</label>
          </div>
          <div className=" mx-16 my-16 w-100% ">
            <label id="qualification" >Last Attained <br /> Quialification:</label>
            <input type="text" 
            id="qualification"
            name="qualification"
            className="border border-gray-300 pl-2  ml-12 w-[70%]" placeholder="Enter your Qualification" />
          </div>
          <div className=" mx-16 my-16 w-100% ">
            <label  id="year" > Year:</label>
            <input type="text"
            id="year"
            name="year"
            className="border border-gray-300 pl-2 ml-28 w-[70%]" placeholder="Enter your Completion year" />
          </div>

          <div className=" mx-16 my-16 w-100%">
            <label  id="collage" > Collage /<br /> university:</label>
            <input type="text"
            id="collage"
            name="collage"
           className="border border-gray-300 pl-2 ml-[4.5rem] w-[70%]" placeholder="Enter your Collage / university" />
          </div>
        </div>

        <div className="CourseDetail  border-2 border-gray-400 m-4">
          <h2 className="bg-slate-400 font-bold  pl-4 text-2xl" >Course Details</h2>
          <div className=" mx-16 my-16 w-100% ">
            <label  id="Laddresh" >Course :</label>
            <select name="course" id="Course" className="border border-gray-300 pl-2 ml-20 w-[70%]" >
              <option value="select a course" selected> select a course</option>
              <option value="Full Stack" > Full Stack </option>
              <option value="Mern Stack" > Mern Stack</option>
              <option value=" UI/UX" > UI/UX</option>
            </select>
          </div>

          <div className=" mx-16 mb-16 w-100% ">
            <label htmlFor="about" id="about" >How did you   <br /> come to know <br /> about us? :</label>

            <input type="radio"
             id="google" 
             name="google" 
             className=" ml-12 w-[5%]" />
            <label  id="Google">Google</label>

            <input type="radio"
            id="instagram" 
             name="instagram"
             className=" ml-8 w-[5%]" />
            <label  id="instagram">Instagram</label>

            <input type="radio" 
            id="facebook" 
             name="facebook"
            className=" ml-8 w-[5%]" />
            <label  id="facebook">Facebook</label>

            <input type="radio" 
            id="collageTPO" 
             name="collageTPO"
            className=" ml-8 w-[5%]" />
            <label  id="collageTPO">Collage TPO</label>

            <input type="radio"
            id="friend" 
             name="friend"
            className=" ml-8 w-[5%]" />
            <label  id="friend">Friend</label>

          </div>
        </div>

        <div className=" mx-20 w-100% ">
        <label className="relative inline-block w-14 my-2 h-6">
  <input
    type="checkbox"
    id="agree"
    name="agree"
    className="opacity-0 w-0 h-0 "
    checked={isChecked}
    onChange={handleToggleChange}
  />
  <span
    className={`absolute top-0 left-0 w-full h-full rounded-full transition-all duration-300 ${
      isChecked ? 'bg-green-500' : 'bg-gray-400'
    }`}
  ></span>
  <span
    className={`absolute top-1 left-1 w-6 h-4 bg-white rounded-full transition-all duration-300 ${
      isChecked ? 'transform translate-x-8' : ''
    }`}
  ></span>
     </label> 
     <label id="bysubmit" className="ml-3"> By clicking submit , you agree to our</label>
   
         </div>
         <div className=" mx-20 w-100%  text-center">
         <input
            type="submit"
            name="register"
            className="bg-blue-700 w-[100%] font-bold text-2xl text-white mb-4 py-2 "
            value="Register"
            // disabled={!termsAccepted}
          />
           </div>
      </div>
    </form>
    </>
  )
}

export default App
