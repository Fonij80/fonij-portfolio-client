interface EducationProps {
    university: string;
    degree: string;
    from: string;
    to: string;
}

const educationList: EducationProps[] = [
    {
        university: "Sharif University of Technology",
        degree: "Bachelor of Science in Computer Engineering",
        from: "1/2/2020",
        to: "1/2/2025"
    }
];

export const Education = () => {
    return (
        <section id="education" className="container py-24 sm:py-32 space-y-8">
            <div className="flex flex-wrap md:justify-center gap-4">
                {educationList.map((education, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 w-full md:w-1/2 lg:w-1/3"
                    >
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {education.university}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            {education.degree}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            {education.from} - {education.to}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};
