// ContextApi/index.js
import { createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const userProfile = {
    personal: {
      name: "Raman Kumar",
      age: 23,
      email: "raman.kumar@email.com",
      phone: "+91 98765 43210",
      location: "Delhi, India"
    },
    education: {
      course: "B.Tech Computer Science",
      college: "Delhi Technological University",
      year: "2023-2027",
      cgpa: 8.9
    },
    professional: {
      jobTitle: "Frontend Developer Intern",
      company: "TechCorp Solutions",
      experience: "6 months",
      skills: ["React", "JavaScript", "Tailwind CSS", "Node.js"]
    },
    social: {
      github: "github.com/ramankumar",
      linkedin: "linkedin.com/in/ramankumar",
      portfolio: "ramankumar.dev"
    }
  };

  return (
    <ThemeContext.Provider value={userProfile}>
      {children}
    </ThemeContext.Provider>
  );
};
