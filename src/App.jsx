
import FormPage from "./pages/FormPage";
import SummaryPage from "./pages/SummaryPage";
import useForm from "./customHooks/useForm";

function App() {

  const {
    formData, 
    isSubmit, 
    error, 
    handleChange, 
    handleSubmitEvent,  
  } = useForm({
    name: "",
    email: "",
    phoneNumber: "",
    position:"select",
    relevantExperience: "",
    portfolioURL: "",
    managmentExperience: "",
    additionSkills:[],
    interviewTime:"",
  })

  return (
    <div>
      {!isSubmit ?
       <FormPage
          handleChange = {handleChange}
          handleSubmitEvent={handleSubmitEvent}
          formData = {formData}
          error = {error}
       /> 
       :
       <SummaryPage
          formData = {formData}
       />}
    </div>
  )
}

export default App
