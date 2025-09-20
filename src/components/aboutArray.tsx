import { version } from "react";
// import { Category } from "@mui/icons-material"; // Optional: Remove if unused

function Skills() {
    const skills = {
        "Frontend": ["VUE JS", "REACT JS", "NEXT JS"],
        "Backend": ["Node JS", "DJANGO", ".NET", "LARAVEL"],
        "Database": ["MySQL"],
        "Version Control": ["Git"]
    };

    return (
        <div className="about-section grid grid-cols-2 gap-1">
            {Object.entries(skills).map(([category, skillSet]) => (
                <div
                    key={category}
                    className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm"

                    
                >
                    <h1 className="text-xl font-semibold mb-2 text-center">{category}</h1>
                    <ul className="list-disc list-inside">
                        {skillSet.map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>

        
    );
}

export default Skills;
