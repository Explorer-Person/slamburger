'use client';

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-[#fff8ee] flex items-center justify-center relative px-4 pb-25 sm:pt-0">

            {/* Background Shapes */}
            <img
                src="/6.1-login/shapes.png"
                alt="Shape Decoration"
                className="absolute left-50 bottom-25 hidden sm:block"
            />

            {/* Center Content */}
            <div className="text-center">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
                    LOGIN TO YOUR <br /> ACCOUNT
                </h1>
                <p className="text-xl font-medium text-gray-800 mt-2 mb-8">Admin Dashboard</p>

                {/* Login Box */}
                <div className="bg-white px-8 py-8 rounded-2xl shadow-md max-w-md w-full mx-auto">
                    <div className="mb-6">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full border border-gray-300 rounded-xl px-5 py-3 text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    <div className="mb-6">
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border border-gray-300 rounded-xl px-5 py-3 text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#f0422f] hover:bg-[#d53927] text-white text-lg font-semibold py-3 rounded-xl transition duration-200"
                    >
                        LOG IN
                    </button>
                </div>

                <p className="mt-6 text-md font-medium text-gray-800 hover:underline cursor-pointer">
                    Forgot password?
                </p>
            </div>
        </div>
    );
}
