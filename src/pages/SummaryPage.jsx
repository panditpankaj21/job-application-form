
import LabelValueDisplay from "../components/LabelValueDisplay";
import { formatDateTime } from "../services/formatDateTime";


const SummaryPage  = ({
    formData,
}) => {
    return(
        <div className="h-screen bg-gray-200 flex justify-center w-full">
            <div className=" bg-white w-1/2 h-max mt-14 p-7 shadow-2xl rounded-lg">
                <h2 className="text-2xl text-center font-bold mb-4">Summary 🙂</h2>


                <LabelValueDisplay
                    label = "Name :"
                    value={formData.name}
                    isColor={false}
                />
                <LabelValueDisplay
                    label = "Email :"
                    value={formData.email}
                    isColor={true}
                />
                <LabelValueDisplay
                    label = "Phone Number :"
                    value={formData.phoneNumber}
                    isColor={false}
                />
                <LabelValueDisplay
                    label = "Applying for Position :"
                    value={formData.position}
                    isColor={true}
                />
                {(formData.position === "developer" || formData.position === "designer") &&
                    <LabelValueDisplay
                        label = "Relevant Experience :"
                        value={formData.relevantExperience}
                        isColor={false}
                    />
                }
                
                {formData.position === "designer" &&
                    <LabelValueDisplay
                        label = "PortfolioURL :"
                        value={formData.portfolioURL}
                        isColor={true}
                    />
                }

                {formData.position === "manager" && 
                    <LabelValueDisplay
                        label = "Management Experience :"
                        value={formData.managmentExperience}
                        isColor={false}
                    />
                }

                <LabelValueDisplay
                    label = "Additional Skills :"
                    skills = {formData.additionSkills}
                    isColor={true}
                />


                <LabelValueDisplay
                    label = "Preferred Interview Time :"
                    value={formatDateTime(formData.interviewTime)}
                    isColor={false}
                />
            </div>
        </div>
    )
}

export default SummaryPage;