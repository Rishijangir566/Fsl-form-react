import { useState } from "react"
// import { Link } from "react-router-dom";


function App() {

//  const[isChecked , setIsChecked]= useState(false)


 const [formdata , setFormData]=useState(
  {
        name: "",
        mail: "",
        phone: "",
        date: "",
        gender: "",
        aadharFront: "",
        aadharBack: "",
        laddress: "",
        paddress: "",
        fName: "",
        fNumber: "",
        areYoua: "",
        qualification: "",
        qualificationYear: "",
        college: "",
        sameAsLocal: false,
        status: "",
        course: "",
        source: "",
     
  }
 )

//  const handleToggleChange = () => {
//    setIsChecked(!isChecked)
//       };

      function handleformSubmit(e){
        e.preventDefault()
        console.log(formdata)
      }

      const handleInputChangeForm = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (type === "checkbox") {
          setFormData((prev) => ({
            ...prev,
            [name]: checked,
            ...(name === "sameAsLocal" && checked && { permanentAddress: prev.localAddress }),
          }));
        } else if (type === "file") {
          setFormData((prev) => ({
            ...prev,
            [name]: files[0], 
          }));
        } else {
          setFormData((prev) => ({
            ...prev,
            [name]: value,
          }));
        }
          };
          


  return (
    <>
    <form 
      onSubmit={handleformSubmit}
      encType="multipart/form-data"
    >

      <div className="wrapper font-Roboto">

        <div className="personalDetail border border-gray-400 m-4">
          <h2 className="bg-slate-400 font-bold  pl-4 text-2xl" >Personal Details </h2>

          <div className="basicInfo mx-16 my-4 w-100% ">
            <label >Name :</label>
            <input type="text"
            id="name"
            name="name"
            value={formdata.name}
            onChange={handleInputChangeForm}
            className="border border-gray-300 pl-2 ml-20 my-3 w-[70%]" placeholder="Enter your Name" />
          </div>
          <div className="basicInfo mx-16 my-4 w-100%  ">
            <label>E-mail :</label>
            <input type="text"
            id="mail"
            name="mail"
            value={formdata.mail}
            onChange={handleInputChangeForm}
            className="border border-gray-300 pl-2 ml-20 my-3 w-[70%]" placeholder="Enter your E-mail" />
          </div>
          <div className="basicInfo mx-16 my-4 w-100%">
            <label >Phone :</label>
            <input type="text"
            id="phone"
            name="phone"
            value={formdata.phone}
            onChange={handleInputChangeForm}
            className="border border-gray-300 pl-2 ml-20 my-3 w-[70%]" placeholder="Enter your Phone Number" />
          </div>
          <div className="basicInfo mx-16 my-4 w-100%">
            <label >Date Of Birth :</label>
            <input type="date"
               id="date"
               name="date"
               value={formdata.date}
               onChange={handleInputChangeForm}
            className="border border-gray-300 pl-2 ml-8 my-3 w-[70%]" />
          </div>
          <div className="basicInfo mx-16 my-4 w-100% ">
            <label >Gender :</label>
            <input type="radio" 
            name="male"
            value={"male"}
            checked={formdata.gender==="male"}
            onChange={handleInputChangeForm}
            className=" ml-12 w-[5%]" />

            <label  id="male">Male</label>
            <input type="radio"
            name="female"
            value={"female"}
            onChange={handleInputChangeForm}
            checked={formdata.gender==="female"}
            className=" ml-8 w-[5%]" />

            <label >Female</label>
            <input type="radio" 
            name="other"
            value={"other"}
            onChange={handleInputChangeForm}
            checked={formdata.gender==="other"}
            className=" ml-8 w-[5%]" />
            <label  id="other">Other</label>
          </div>

          <div className="basicInfo mx-16 my-6 w-100% ">
            <label >Adhar Card :</label>
            <input type="file" 
              id="aadharFront"
              name="aadharFront"
              value={formdata.aadharFront}
              onChange={handleInputChangeForm}
            className="border border-gray-300 ml-12 w-[33%]" />

            <input type="file"
             id="aadharBack"
             name="aadharBack"
             value={formdata.aadharBack}
             onChange={handleInputChangeForm}
            className="border border-gray-300  ml-12 w-[33%]" />
          </div>
        </div>



        <div className="parentGuardianDetail border-2 border-gray-400 m-4">
          <h2 className="bg-slate-400 font-bold  pl-4 text-2xl" >Parent Guardian Details </h2>
          <div className=" mx-16 my-16 w-100% ">
            <label  >Parent/Guardian <br /> Details :</label>
            <input type="text" 
            id="fName"
            name="fName"
            value={formdata.fName}
            onChange={handleInputChangeForm}
            className="border border-gray-300 pl-2 ml-20 w-[70%]" placeholder="Enter your Parent / Guardian Name" />
          </div>
          <div className=" mx-16 my-16 w-100% ">
            <label  >Parent/Guardian <br /> Phone :</label>
            <input type="text"
            id="fNumber"
            name="fNumber"
            value={formdata.fNumber}
            onChange={handleInputChangeForm}
            className="border border-gray-300 pl-2 ml-20 w-[70%]" placeholder="Enter your parent / Guardian Number" />
          </div>
        </div>


        <div className="ResidentialDetail border-2 border-gray-400 m-4">
          <h2 className="bg-slate-400 font-bold  pl-4 text-2xl" >Residential Details </h2>
          <div className=" mx-16 my-16 w-100%">
            <label >Local <br /> Address :</label>
            <input type="text" 
            id="laddress"
            name="laddress"
            value={formdata.laddress}
            onChange={handleInputChangeForm}
            required
            className="border border-gray-300 pl-2  ml-20 w-[70%]" placeholder="Enter your Local Address" />
          </div>
          <div className=" mx-16 w-100% ">
            <input type="checkbox"
            name="same"
             value={formdata.sameAsLocal}
             onChange={handleInputChangeForm}
            className=" ml-32 w-[5%]" />
            <label>Permanent Address is same as Local Address</label>
          </div>
          <div className=" mx-16 mb-16 w-100% ">
            <label> Permanent <br />Address:</label>
            <input type="text" 
            id="paddress"
            name="paddress"
            value={formdata.paddress}
            onChange={handleInputChangeForm}
            required
            className="border border-gray-300 pl-2 ml-20 w-[70%]" placeholder="Enter your Permanent Address" />
          </div>
        </div>



        <div className="EductionDetails border-2 border-gray-400 m-4">
          <h2 className="bg-slate-400 font-bold  pl-4 text-2xl" >Eduction Details</h2>
          <div className=" mx-16 my-16 w-100% ">
            <label  >Are You a:</label>
            <input type="radio"
            name="student"
            value={"student"}
            onChange={handleInputChangeForm}
            checked={formdata.areYoua==="student"}
            className=" ml-12 w-[5%]" />
            <label >Student</label>
            
            <input type="radio" 
            name="working"
            value={"working"}
            onChange={handleInputChangeForm}
            checked={formdata.areYoua==="working"}
            className=" ml-8 w-[5%]" />
            <label>Working Professional</label>
          </div>


          <div className=" mx-16 my-16 w-100% ">
            <label >Last Attained <br /> Quialification:</label>
            <input type="text" 
            id="qualification"
            name="qualification"
            value={formdata.qualification}
            onChange={handleInputChangeForm}
            className="border border-gray-300 pl-2  ml-12 w-[70%]" placeholder="Enter your Qualification" />
          </div>
          <div className=" mx-16 my-16 w-100% ">
            <label > Year:</label>
            <input type="number"
            id="qualificationYear"
            name="qualificationYear"
            value={formdata.qualificationYear}
            onChange={handleInputChangeForm}
            className="border border-gray-300 pl-2 ml-28 w-[70%]" placeholder="Enter your Completion year" />
          </div>

          <div className=" mx-16 my-16 w-100%">
            <label > College /<br /> university:</label>
            <input type="text"
            id="college"
            name="college"
            value={formdata.college}
            onChange={handleInputChangeForm}
           className="border border-gray-300 pl-2 ml-[4.5rem] w-[70%]" placeholder="Enter your Collage / university" />
          </div>
        </div>

        <div className="CourseDetail  border-2 border-gray-400 m-4">
          <h2 className="bg-slate-400 font-bold  pl-4 text-2xl" >Course Details</h2>
          <div className=" mx-16 my-16 w-100% ">
            <label >Course :</label>
            <select name="course" 
            id="Course"
            value={formdata.course}
            onChange={handleInputChangeForm} 
            className="border border-gray-300 pl-2 ml-20 w-[70%]" >
              <option value="select a course" selected> select a course</option>
              <option value="Full Stack" > Full Stack </option>
              <option value="Mern Stack" > Mern Stack</option>
              <option value=" UI/UX" > UI/UX</option>
            </select>
          </div>

          <div className=" mx-16 mb-16 w-100% ">
            <label >How did you   <br /> come to know <br /> about us? :</label>

            <input type="radio"
             name="google" 
             value={"google"}
             checked={formdata.knowus==="google"}
             onChange={handleInputChangeForm}
             className=" ml-12 w-[5%]" />
            <label>Google</label>

            <input type="radio"
             name="instagram"
             value={"instagram"}
             checked={formdata.knowus==="instagram"}
             onChange={handleInputChangeForm}
             className=" ml-8 w-[5%]" />
            <label  >Instagram</label>

            <input type="radio" 
             name="facebook"
             value={"facebook"}
             onChange={handleInputChangeForm}
            checked={formdata.knowus==="facebook"}
            className=" ml-8 w-[5%]" />
            <label  >Facebook</label>

            <input type="radio" 
             name="collegeTPO"
             value={"collegeTPO"}
             onChange={handleInputChangeForm}
            checked={formdata.knowus==="collegeTPO"}
            className=" ml-8 w-[5%]" />
            <label  >College TPO</label>

            <input type="radio"
             name="friend"
             value={"friend"}
             onChange={handleInputChangeForm}
             checked={formdata.knowus==="friend"}
            className=" ml-8 w-[5%]" />
            <label  >Friend</label>

          </div>
        </div>

       

         <div className=" mx-20 w-100% bg-blue-600 text-white text-center">
          <button type="submit" className="py-2 text-2xl  font-semibold">
            Submit
          </button>
        </div>
      </div>
    </form>
    </>
  )
}

export default App
