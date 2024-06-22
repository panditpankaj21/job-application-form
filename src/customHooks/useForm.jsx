import { useState } from "react";
import { isValidURL } from "../services/isValidURL";
import isValidPhoneNumber from "../services/isValidPhoneNumber";



const useForm = (initialState) => {
    const [isSubmit, setIsSubmit] = useState(false);

  const [error, setError] = useState({
    name:'',
    message:''
  })

  const [formData, setFormData] = useState(initialState);


  const handleChange = (e) => {
    const {name, value} = e.target;
    if(name === "additionSkills"){
      const isExist = formData.additionSkills.includes(value);
      if(isExist){
        const newSkills = formData.additionSkills.filter(item => item!==value);
        setFormData(prev => ({
          ...prev,
          [name]: [...newSkills],
        }));
      }else{
        setFormData(prev => ({
          ...prev,
          [name]:[...prev[name], value],
        }));
      }
      
    }else{
      setFormData(prev => ({
          ...prev,
          [name]:value,
      }));
    }
  };

  const handleSubmitEvent = (event)=>{
    event.preventDefault();
    console.log("time",formData.interviewTime)
    

    // validataion

    if(formData.name===""){
        setError(prev => ({
          ...prev,
          name:"name",
          message: "Name is Required!"
        }));
        return;
    }

    if(formData.email===""){
      setError(prev => ({
        ...prev,
        name:"email",
        message: "Email is Required!"
      }));
        return;
    }

    if(formData.phoneNumber===""){
      setError(prev => ({
        ...prev,
        name:"phoneNumber",
        message: "Phone Number is Required!"
      }));
        return;
    }else{
      const isValid = isValidPhoneNumber(formData.phoneNumber)
      if(!isValid){
        setError(prev => ({
          ...prev,
          name:"phoneNumber",
          message: "Please Enter Valid Phone Number!"
        }));
        return;
      }
    }


    if(formData.position==="select"){
      setError(prev => ({
        ...prev,
        name:"position",
        message: "Please Selcect Postion!"
      }));
      return;
    }

    if(formData.position === "developer"){
      //check for must and above the 0 relevantExperience

      if(formData.relevantExperience === ""){
        setError(prev => ({...prev, name:"relevantExperience", message:"Relevant Experience is Required!"}))
        return;
      }else if(parseInt(formData.relevantExperience) < 1){
        setError(prev => ({...prev, name: "relevantExperience", message:"Please Enter Valid Relevant Experience!"}))
        return;
      }

    }else if(formData.position === "designer"){

      if(formData.relevantExperience===""){
        setError(prev => ({...prev, name:"relevantExperience", message:"Relevant Experience is Required!"}))
        return;

      }else if(parseInt(formData.relevantExperience) < 1){
      setError(prev => ({...prev, name: "relevantExperience", message:"Please Enter Valid Relevant Experience!"}))
      return;
      }


      //check for must && valid protfolioURL
      if(formData.portfolioURL===""){
        setError(prev => ({...prev, name:"portfolioURL", message: "portfolioURL is Required!"}))
        return;
      }else if(!isValidURL(formData.portfolioURL)){
        setError(prev => ({...prev, name:"portfolioURL", message: "Please Enter a valid URL"}))
        return;
      }

       //check for must and above the 0 relevantExperience

       

    }else if(formData.position === "manager"){
      //check for must managmentExperience
      if(!formData.managmentExperience){
        setError(prev => ({...prev, name:"managmentExperience", message: "Managment Experience is Required!"}))
        return;
      }
    }

    if(formData.additionSkills.length < 1){
      setError(prev => ({
        ...prev,
        name:"additionSkills",
        message: "Please Select at least one skill!"
      }))
      return;
    }

    if(formData.interviewTime===""){
      setError(prev => ({
        ...prev,
        name: "interviewTime",
        message: "Date and Time is Required!",
      }))
      return;
    }


    setError(prev => ({
      ...prev,
      name:"",
      message: ""
    }));

    setIsSubmit(true);
  }

  return {
    formData,
    isSubmit,
    error,
    handleChange,
    handleSubmitEvent,
  }

}

export default useForm;