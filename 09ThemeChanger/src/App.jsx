import { useEffect, useState } from "react";
import { ThemeProvider } from "./Context/theme";
import ThemeBtn from "./Components/ThemeBtn";
import Card from "./Components/CardBtn";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkMode = () => setThemeMode("dark");
  const lightMode = () => setThemeMode("light");

  useEffect(() => {
  document.querySelector('html').classList.remove('light', 'dark')
  document.querySelector('html').classList.add(themeMode)
}, [themeMode])


  return (
    <ThemeProvider value={{ themeMode, darkMode, lightMode }}>
      <div className="flex flex-wrap min-h-screen items-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
