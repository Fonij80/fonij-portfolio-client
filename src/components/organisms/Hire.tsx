import React, { useState } from "react";
import { Button } from "../atoms/button";
import { useTranslation } from "react-i18next";

export const Hire = () => {
    const { t } = useTranslation();
    const [projectDetails, setProjectDetails] = useState({
        projectName: "",
        projectDescription: "",
        projectScope: "",
        technologyStack: "",
        contactEmail: "",
        contactPhone: "",
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setProjectDetails({ ...projectDetails, [name]: value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Here you can add logic to send the form data to your server or email
        console.log(projectDetails);
        alert("Project details submitted successfully!");
        // Reset form fields
        setProjectDetails({
            projectName: "",
            projectDescription: "",
            projectScope: "",
            technologyStack: "",
            contactEmail: "",
            contactPhone: "",
        });
    };

    return (
        <div id="hire" className="py-12">
            <h2 className="text-3xl font-bold mb-4">{t("hire.title")}</h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="projectName">
                        {t("hire.project_name")}
                    </label>
                    <input
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        type="text"
                        id="projectName"
                        name="projectName"
                        value={projectDetails.projectName}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="projectDescription">
                        {t("hire.project_description")}
                    </label>
                    <textarea
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        id="projectDescription"
                        name="projectDescription"
                        value={projectDetails.projectDescription}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="projectScope">
                        {t("hire.project_scope")}
                    </label>
                    <textarea
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        id="projectScope"
                        name="projectScope"
                        value={projectDetails.projectScope}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="technologyStack">
                        {t("hire.technology_stack")}
                    </label>
                    <input
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        type="text"
                        id="technologyStack"
                        name="technologyStack"
                        value={projectDetails.technologyStack}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="contactEmail">
                        {t("hire.contact_email")}
                    </label>
                    <input
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        type="email"
                        id="contactEmail"
                        name="contactEmail"
                        value={projectDetails.contactEmail}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="contactPhone">
                        {t("hire.contact_phone")}
                    </label>
                    <input
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        type="tel"
                        id="contactPhone"
                        name="contactPhone"
                        value={projectDetails.contactPhone}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <Button type="submit" className="w-full">
                    {t("hire.submit_btn")}
                </Button>
            </form>
        </div>
    );
}
