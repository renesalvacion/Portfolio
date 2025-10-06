import { version } from "react";
// import { Category } from "@mui/icons-material"; // Optional: Remove if unused

function Skills() {
    const skills = {
        "Frontend": ["VUE JS", "REACT JS", "NEXT JS", "TAILWIND CSS", "BOOTSTRAP"],
        "Backend": ["NODE JS","EXPRESS JS", "DJANGO", ".NET", "LARAVEL"],
        "Database": ["MySQL", "POSTGRESQL", "GRAPHQL"],
        "Version Control": ["Git"]
    };

    return (
        <div className="about-section grid grid-cols-1 sm:grid-cols-2 gap-4 p-3">
  {Object.entries(skills).map(([category, skillSet]) => (
    <div
      key={category}
      className="max-w-sm w-full p-6 bg-white border border-gray-200 rounded-lg shadow-sm mx-auto"
    >
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-center">
        {category}
      </h1>
      <ul className="list-disc list-inside font-medium text-sm sm:text-base md:text-lg space-y-1">
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
