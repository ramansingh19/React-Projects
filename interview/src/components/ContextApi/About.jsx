// ContextApi/About.jsx
import { useContext } from "react";
import { ThemeContext } from ".";

export const About = () => {
  const { personal, social } = useContext(ThemeContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-2xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 mb-12 text-center shadow-2xl">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
            {personal.name}
          </h1>
          <p className="text-xl text-gray-300">Connect with me</p>
        </div>

        {/* Social Links - Full Width */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center tracking-wide">
            Find Me Online
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* GitHub */}
            <a 
              href={`https://${social.github}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 p-8 rounded-2xl text-center transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-white/10"
            >
              <div className="w-20 h-20 bg-white/10 rounded-2xl mx-auto mb-4 group-hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">GitHub</h3>
              <p className="text-gray-400 text-sm"></p>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
            </a>

            {/* LinkedIn */}
            <a 
              href={`https://${social.linkedin}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 p-8 rounded-2xl text-center transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-white/10"
            >
              <div className="w-20 h-20 bg-white/20 rounded-2xl mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300 flex items-center justify-center">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">LinkedIn</h3>
              <p className="text-gray-300 text-sm"></p>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
            </a>

            {/* Portfolio */}
            <a 
              href={social.portfolio} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 p-8 rounded-2xl text-center transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-white/10"
            >
              <div className="w-20 h-20 bg-white/20 rounded-2xl mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300 flex items-center justify-center">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">Portfolio</h3>
              <p className="text-gray-300 text-sm"></p>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-pink-400/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
