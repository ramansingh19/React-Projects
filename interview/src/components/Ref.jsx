import React, { useRef } from 'react';

function ref() {
  const username = useRef(null);
  const password = useRef(null);

  const handleSubmitbtn = (e) => {
    e.preventDefault();
    console.log('Username:', username.current.value, 'Password:', password.current.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-300 text-lg">Please sign in to continue</p>
          </div>

          <form onSubmit={handleSubmitbtn} className="space-y-6">
            {/* Username */}
            <div>
              <label className="block text-white font-semibold mb-3 text-lg">Username</label>
              <input 
                type="text" 
                ref={username}
                className="w-full p-5 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-gray-400 font-medium text-lg focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-300 hover:bg-white/20"
                placeholder="Enter your username"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-white font-semibold mb-3 text-lg">Password</label>
              <input 
                type="password" 
                ref={password}
                className="w-full p-5 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-gray-400 font-medium text-lg focus:outline-none focus:ring-4 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 hover:bg-white/20"
                placeholder="Enter your password"
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-5 px-8 rounded-2xl text-xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Submit
            </button>
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default ref;
