// ContextApi/Home.jsx
import { useContext } from "react";
import { ThemeContext } from ".";

export const Home = () => {
  const { personal, education, professional } = useContext(ThemeContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 mb-8 shadow-2xl">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-2xl">
              RK
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">{personal.name}</h1>
              <p className="text-xl text-cyan-400">{professional.jobTitle} at {professional.company}</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div classAge="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
            <div className="text-3xl font-bold text-cyan-400">{personal.age}</div>
            <div className="text-gray-400 mt-1">Age</div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
            <div className="text-3xl font-bold text-green-400">{education.cgpa}</div>
            <div className="text-gray-400 mt-1">CGPA</div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
            <div className="text-3xl font-bold text-purple-400">{professional.experience}</div>
            <div className="text-gray-400 mt-1">Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
};
