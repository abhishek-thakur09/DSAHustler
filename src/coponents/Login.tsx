export const LoginPage = () => {
  return (
    <div className="h-screen w-full flex bg-black overflow-hidden">

      <div className="hidden lg:flex w-1/2 h-screen">
        <img src="/Side.png" alt="Side Image" className="w-70 h-full" />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center relative">
        <div
          className="
            relative z-10
            w-full max-w-md p-8 bg-white/90 backdrop-blur-md
            rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.25)]
            transition-all duration-500
            hover:-translate-y-2 hover:scale-105
          "
        >
          <div className="flex justify-center mb-6">
            <span className="text-2xl font-bold">
              DSA<span className="text-red-500">hustler</span>
            </span>
          </div>

          <h2 className="text-2xl font-semibold text-center mb-2">Welcome</h2>

          <p className="text-center text-gray-500 mb-6">Log in to DSAhustler</p>

          <button className="static w-full border rounded-md py-2 mb-4 hover:bg-gray-100">
            Continue with Google
          </button>

          <button className="w-full border rounded-md py-2 hover:bg-gray-100">
            Continue with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};
