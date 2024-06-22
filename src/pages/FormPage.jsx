import Input from "../components/Input";
import ErrorMessage from "../components/ErrorMessage";
import { skills } from "../data/skills.js";
import SelectMultiple from "../components/SelectMultiple.jsx";

const FormPage = ({
    handleChange, 
    handleSubmitEvent,
    formData,
    error
})=>{
    return(
        <div className="flex justify-center items-start h-full">
            <div className="w-[50%] h-max p-5 my-10 rounded-lg bg-white shadow-2xl">
            <h1 className="text-lg text-center font-bold mb-1">Enter Details</h1>
            <form onSubmit={handleSubmitEvent}>
                <Input 
                    type="text" 
                    label="Name *" 
                    placeholder="John"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {error.name==="name" && 
                <ErrorMessage mssg={error.message}/>}

                <Input 
                    type="email"
                    label="Email *" 
                    placeholder="john@gmail.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {error.name==="email" && 
                <ErrorMessage mssg={error.message}/>}
                
                <Input 
                    type="text"
                    name="phoneNumber"
                    placeholder="e.g. 99124XXXXX"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    label="Phone Number *"
                />
                {error.name==="phoneNumber" && 
                <ErrorMessage mssg={error.message}/>}

                <div className="mb-2">
                    <label htmlFor="position" className="text-xs mb-1 font-semibold block">Role *</label>
                    <select
                        id="position"
                        name="position"
                        defaultValue="select"
                        onChange={handleChange}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 border-[1.5px]  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                        <option value="select" disabled>Select</option>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="manager">Manager</option>
                    </select>
                </div>
                {error.name==="position" && 
                <ErrorMessage mssg={error.message}/>}

                {
                (formData.position === "developer" || formData.position ==="designer") 
                &&
                    <>
                    <Input 
                        type="Number"
                        name="relevantExperience"
                        value={formData.relevantExperience}
                        placeholder="in years e.g. 2"
                        onChange={handleChange}
                        label="Relevant Experience *"
                    />
                    {error.name==="relevantExperience" && 
                    <ErrorMessage mssg={error.message}/>}
                    </>
                }
                
                {formData.position === "designer"
                && 
                    <>
                    <Input 
                        type="text"
                        name="portfolioURL"
                        value={formData.portfolioURL}
                        placeholder="http://john.com"
                        onChange={handleChange}
                        label="Portfolio URL *"
                    />
                    {error.name==="portfolioURL" && 
                        <ErrorMessage mssg={error.message}/>}
                    </>
                }
                

                {formData.position === "manager"
                &&
                    <>
                    <Input 
                        type="Number"
                        name="managmentExperience"
                        value={formData.managmentExperience}
                        onChange={handleChange}
                        placeholder="in years e.g. 3"
                        label="Management Experience *"
                    />
                    {error.name==="managmentExperience" && 
                        <ErrorMessage mssg={error.message}/>}
                    </>
                }
                

                <SelectMultiple
                    name="additionSkills"
                    value={formData.additionSkills}
                    onChange={handleChange}
                    options={skills}
                    label="I want Fibrey to know more about: *"
                />
                {error.name==="additionSkills" && 
                <ErrorMessage mssg={error.message}/>}

                <Input 
                    type="datetime-local"
                    name="interviewTime"
                    value={formData.interviewTime}
                    onChange={handleChange}
                    label="Interview Date and Time *"
                />
                {error.name==="interviewTime" && 
                <ErrorMessage mssg={error.message}/>}
            
                
                <button  
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm py-2 px-5 rounded-lg mb-5 mt-4"
                    type="submit"
                >
                    Submit
                </button>
            </form>
            </div>
        </div>
    )
}
export default FormPage;