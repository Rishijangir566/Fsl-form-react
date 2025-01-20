


function App() {

  return (
    <><form action="" >

      <div className="wrapper">
        <div className="personalDetail border-2 border-gray-400 m-4">
       <h2 className="bg-slate-400 font-bold  pl-4 text-2xl" >Personal Details </h2>

          <div className="basicInfo mx-16 my-4 w-100% m-auto">
            <label htmlFor="name" id="name">Name :</label>
            <input type="text" className="border-2 border-gray-800 ml-20 w-[70%]" placeholder="Enter your Name" />
          </div>
          <div className="basicInfo mx-16 my-4 w-100% m-auto">
            <label htmlFor="mail" id="mail">E-mail :</label>
            <input type="text" className="border-2 border-gray-800 ml-20 w-[70%]" placeholder="Enter your E-mail" />
          </div>
          <div className="basicInfo mx-16 my-4 w-100% m-auto">
            <label htmlFor="Phone" id="phone">Phone :</label>
            <input type="text" className="border-2 border-gray-800 ml-20 w-[70%]" placeholder="Enter your Phone Number" />
          </div>
          <div className="basicInfo mx-16 my-4 w-100% m-auto">
            <label htmlFor="date" id="date">Date Of Birth :</label>
            <input type="date" className="border-2 border-gray-800 ml-8 w-[70%]"  />
          </div>
          <div className="basicInfo mx-16 my-4 w-100% m-auto">
            <label htmlFor="gender">Gender :</label>
            <input type="radio" className=" ml-12 w-[5%]"  />
            <label htmlFor="male" id="female">Male</label>
            <input type="radio" className=" ml-8 w-[5%]"  />
            <label htmlFor="female" id="female">Female</label>
            <input type="radio" className=" ml-8 w-[5%]"  />
            <label htmlFor="other" id="other">Other</label>
          </div>

          <div className="basicInfo mx-16 my-4 w-100% m-auto">
            <label htmlFor="adhar" id="adhar">Adhar Card :</label>
            <input type="file" className="border-2 border-gray-800 ml-12 w-[33%]"  />
            <input type="file" className="border-2 border-gray-800 ml-12 w-[33%]"  />
          </div>
        </div>



       <div className="parentGuardionDetail border-2 border-gray-400 m-4">
       <h2 className="bg-slate-400 font-bold  pl-4 text-2xl" >Parent Guardion Details </h2>
       <div className=" mx-16 my-16 w-100% m-auto">
            <label htmlFor="name" id="pName" >Parent/Guardion <br /> Details :</label>
            <input type="text" className="border-2 border-gray-800 ml-20 w-[70%]" placeholder="Enter your Parent Name" />
          </div>
       <div className=" mx-16 my-16 w-100% m-auto">
            <label htmlFor="name" id="pNumber" >Parent/Guardion <br /> Phone :</label>
            <input type="text" className="border-2 border-gray-800 ml-20 w-[70%]" placeholder="Enter your parent Number" />
          </div>
       </div>


       <div className="ResidentialDetail border-2 border-gray-400 m-4">
       <h2 className="bg-slate-400 font-bold  pl-4 text-2xl" >Residential Details </h2>
       <div className=" mx-16 my-16 w-100% m-auto">
            <label htmlFor="Laddress" id="Laddresh" >Local <br /> Address :</label>
            <input type="text" className="border-2 border-gray-800 ml-20 w-[70%]" placeholder="Enter your Local Address" />
          </div>
          <div className=" mx-16 w-100% m-auto">
          <input type="checkbox" className=" ml-32 w-[5%]"  />
          <label htmlFor="Same">Same as Permanent Address</label>
          </div>
       <div className=" mx-16 mb-16 w-100% m-auto">
            <label htmlFor="Paddress" id="Paddresh" > Permanent <br />Address:</label>
            <input type="text" className="border-2 border-gray-800 ml-20 w-[70%]" placeholder="Enter your Permanent Address" />
          </div>
       </div>



       <div className="EductionDetails border-2 border-gray-400 m-4">
       <h2 className="bg-slate-400 font-bold  pl-4 text-2xl" >Eduction Details</h2>
          <div className=" mx-16 my-16 w-100% m-auto">
          <label htmlFor="u" id="youa" >Are You a:</label>
          <input type="radio" className=" ml-12 w-[5%]"  />
            <label htmlFor="female" id="female">Student</label>
            <input type="radio" className=" ml-8 w-[5%]"  />
            <label htmlFor="other" id="other">Working Professional</label>
          </div>
       <div className=" mx-16 my-16 w-100% m-auto">
            <label htmlFor="qualification" id="qualification" >Last Attained <br /> Quialification:</label>
            <input type="text" className="border-2 border-gray-800 ml-12 w-[70%]" placeholder="Enter your Qualification" />
          </div>
       <div className=" mx-16 my-16 w-100% m-auto">
            <label htmlFor="year" id="year" > Year:</label>
            <input type="text" className="border-2 border-gray-800 ml-28 w-[70%]" placeholder="Enter your Completion year" />
          </div>

       <div className=" mx-16 my-16 w-100% m-auto">
            <label htmlFor="collage" id="collage" > Collage /<br /> university:</label>
            <input type="text" className="border-2 border-gray-800 ml-[4.5rem] w-[70%]" placeholder="Enter your Collage / university" />
          </div>
       </div>
    
       <div className="CourseDetail  border-2 border-gray-400 m-4">
        <h2 className="bg-slate-400 font-bold  pl-4 text-2xl" >Course Details</h2>
       <div className=" mx-16 my-16 w-100% m-auto">
            <label htmlFor="Laddress" id="Laddresh" >Course :</label>
              <select name="course" id="Course" className="border-2 border-gray-800 ml-20 w-[70%]" > 
                <option value="select a course" selected> select a course</option>
                <option value="Full Stack" > Full Stack </option>
                <option value="Mern Stack" > Mern Stack</option>
                <option value=" UI/UX" > UI/UX</option>
              </select>
          </div>
         
       <div className=" mx-16 mb-16 w-100% m-auto">
            <label htmlFor="Paddress" id="Paddresh" >How did you   <br /> come to know <br /> about us? :</label>
            <input type="radio" className=" ml-12 w-[5%]"  />
            <label htmlFor="Google" id="Google">Google</label>
            <input type="radio" className=" ml-8 w-[5%]"  />
            <label htmlFor="Instagram" id="Instagram">Instagram</label>
            <input type="radio" className=" ml-8 w-[5%]"  />
            <label htmlFor="Facebook" id="Facebook">Facebook</label>
            <input type="radio" className=" ml-8 w-[5%]"  />
            <label htmlFor="CollageTPO" id="CollageTPO">Collage TPO</label>
            <input type="radio" className=" ml-8 w-[5%]"  />
            <label htmlFor="Friend" id="friend">Friend</label>

          </div>
       </div>
       

      </div>
    </form>
    </>
  )
}

export default App
