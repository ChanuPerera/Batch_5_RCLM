import React, { useContext } from "react";
import { UserContext, UserProvider } from "../context/UserContext";
import { ThemeContext, ThemeProvider } from "../context/ThemeContext";

function UserCard() {
  const userCtx = useContext(UserContext);
  // const themeCtx = useContext(ThemeContext)

  return (
    <div className="p-5 
    hover:scale-110 transition-all duration-300 cursor-wait
    w-1/2 rounded-md my-5 text-center flex flex-col space-y-2 bg-slate-900">
      <h4>User Card</h4>

      <span className="my-6 text-md text-cyan-600">
        {userCtx
          ? `${userCtx?.user?.name} (${userCtx?.user?.role})`
          : "undefined"}
      </span>

      <button
        onClick={userCtx?.toggleUser}
        className="px-3 py-3 rounded-l-md bg-teal-800 text-white text-center text-sm"
      >
        Toggle user (Ayodhya - Aruna)
      </button>
    </div>
  );
}

function ThemeCard() {
  // const userCtx = useContext(UserContext);
  const themeCtx = useContext(ThemeContext);

  const isLight = themeCtx?.theme === "light";

  return (
    <div
      className={`p-5 w-1/2 rounded-md my-5 text-center flex flex-col space-y-2 ${isLight ? "bg-cyan-950" : "bg-slate-600"} `}
    >
      <h4>Theme Card</h4>

      <button
        onClick={themeCtx?.toggleTheme}
        className="px-3 py-3 rounded-l-md bg-teal-800 text-white text-center text-sm"
      >
        Toggle Theme
      </button>
    </div>
  );
}

function ContextScope() {
  return (
    <div className="px-10 w-full h-screen bg-slate-950 flex flex-col  justify-center items-center text-white text-2xl font-semibold ">
      <h3>Handle two Context</h3>

      <div className="w-full flex flex-row space-x-2">
        <UserProvider>
          <UserCard />
        </UserProvider>

        <ThemeProvider>
          <ThemeCard />
        </ThemeProvider>
      </div>
    </div>
  );
}

export default ContextScope;
