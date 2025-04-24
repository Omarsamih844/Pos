import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col justify-center sm:px-6 lg:px-8">
            <Head title="Login" />

            <div className="sm:mx-auto sm:w-full sm:max-w-md mb-4">
                <div className="flex justify-center mb-6 relative">
                    <img
                        src="/images/apixelogo.svg"
                        alt="Logo"
                        className="h-20 w-auto transform transition-all duration-500 hover:scale-105"
                    />
                    <div className="absolute -bottom-1 w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transform origin-left transition-all duration-500 hover:scale-x-110"></div>
                </div>
                <h2 className="text-sm text-center text-gray-600">
                    Point of Sale Management System
                </h2>
            </div>

            <div className="flex justify-center">
                <div className="w-full max-w-3xl flex bg-white/80 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-blue-500/10">
                    {/* Left side - Login Form */}
                    <div className="w-full md:w-1/2 p-6">
                        <div className="mb-6">
                            <h2 className="text-xl font-bold text-gray-900">
                                Welcome Back
                            </h2>
                            <p className="text-sm text-gray-600 mt-1">
                                Please sign in to your account
                            </p>
                        </div>

                        {status && (
                            <div className="mb-4 font-medium text-sm text-green-600">
                                {status}
                            </div>
                        )}

                        <form onSubmit={submit} className="space-y-4">
                            <div className="group">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-transform duration-300 group-focus-within:scale-110">
                                        <svg
                                            className="h-4 w-4 text-gray-400 transition-colors duration-300 group-focus-within:text-blue-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        value={data.email}
                                        className="pl-10 w-full h-9 text-sm border-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                                        autoComplete="username"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                    />
                                </div>
                                <InputError
                                    message={errors.email}
                                    className="mt-1"
                                />
                            </div>

                            <div className="group">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-transform duration-300 group-focus-within:scale-110">
                                        <svg
                                            className="h-4 w-4 text-gray-400 transition-colors duration-300 group-focus-within:text-blue-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={data.password}
                                        className="pl-10 w-full h-9 text-sm border-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                                        autoComplete="current-password"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                    />
                                </div>
                                <InputError
                                    message={errors.password}
                                    className="mt-1"
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <label className="flex items-center group">
                                    <Checkbox
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) =>
                                            setData(
                                                "remember",
                                                e.target.checked
                                            )
                                        }
                                        className="rounded border-gray-300 text-blue-500 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all duration-300"
                                    />
                                    <span className="ml-2 text-xs text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                                        Keep me logged in
                                    </span>
                                </label>

                                {canResetPassword && (
                                    <Link
                                        href={route("password.request")}
                                        className="text-xs text-blue-600 hover:text-blue-700 transition-colors duration-300"
                                    >
                                        Forgot password?
                                    </Link>
                                )}
                            </div>

                            <div>
                                <PrimaryButton
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                                    disabled={processing}
                                >
                                    {processing ? "Signing in..." : "Log in"}
                                </PrimaryButton>
                            </div>

                            <div className="relative my-4">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-200"></div>
                                </div>
                                <div className="relative flex justify-center text-xs">
                                    <span className="px-2 bg-white text-gray-500">
                                        Or continue with
                                    </span>
                                </div>
                            </div>

                            <button
                                type="button"
                                className="w-full flex items-center justify-center py-2 px-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 text-sm group"
                            >
                                {/* <svg className="h-4 w-4 text-gray-600 transition-colors duration-300 group-hover:text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 14v2.5M12 9v1.5M8 9h8v10H8z"/>
                                    <path d="M10 5a2 2 0 114 0v4h-4V5z"/>
                                </svg> */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="h-4 w-4 text-gray-600 transition-colors duration-300 hover:text-blue-500"
                                    viewBox="0 0 16 16"
                                    class="bi bi-fingerprint"
                                >
                                    <path d="M8.06 6.5a.5.5 0 0 1 .5.5v.776a11.5 11.5 0 0 1-.552 3.519l-1.331 4.14a.5.5 0 0 1-.952-.305l1.33-4.141a10.5 10.5 0 0 0 .504-3.213V7a.5.5 0 0 1 .5-.5Z" />
                                    <path d="M6.06 7a2 2 0 1 1 4 0 .5.5 0 1 1-1 0 1 1 0 1 0-2 0v.332q0 .613-.066 1.221A.5.5 0 0 1 6 8.447q.06-.555.06-1.115zm3.509 1a.5.5 0 0 1 .487.513 11.5 11.5 0 0 1-.587 3.339l-1.266 3.8a.5.5 0 0 1-.949-.317l1.267-3.8a10.5 10.5 0 0 0 .535-3.048A.5.5 0 0 1 9.569 8m-3.356 2.115a.5.5 0 0 1 .33.626L5.24 14.939a.5.5 0 1 1-.955-.296l1.303-4.199a.5.5 0 0 1 .625-.329" />
                                    <path d="M4.759 5.833A3.501 3.501 0 0 1 11.559 7a.5.5 0 0 1-1 0 2.5 2.5 0 0 0-4.857-.833.5.5 0 1 1-.943-.334m.3 1.67a.5.5 0 0 1 .449.546 10.7 10.7 0 0 1-.4 2.031l-1.222 4.072a.5.5 0 1 1-.958-.287L4.15 9.793a9.7 9.7 0 0 0 .363-1.842.5.5 0 0 1 .546-.449Zm6 .647a.5.5 0 0 1 .5.5c0 1.28-.213 2.552-.632 3.762l-1.09 3.145a.5.5 0 0 1-.944-.327l1.089-3.145c.382-1.105.578-2.266.578-3.435a.5.5 0 0 1 .5-.5Z" />
                                    <path d="M3.902 4.222a5 5 0 0 1 5.202-2.113.5.5 0 0 1-.208.979 4 4 0 0 0-4.163 1.69.5.5 0 0 1-.831-.556m6.72-.955a.5.5 0 0 1 .705-.052A4.99 4.99 0 0 1 13.059 7v1.5a.5.5 0 1 1-1 0V7a3.99 3.99 0 0 0-1.386-3.028.5.5 0 0 1-.051-.705M3.68 5.842a.5.5 0 0 1 .422.568q-.044.289-.044.59c0 .71-.1 1.417-.298 2.1l-1.14 3.923a.5.5 0 1 1-.96-.279L2.8 8.821A6.5 6.5 0 0 0 3.058 7q0-.375.054-.736a.5.5 0 0 1 .568-.422m8.882 3.66a.5.5 0 0 1 .456.54c-.084 1-.298 1.986-.64 2.934l-.744 2.068a.5.5 0 0 1-.941-.338l.745-2.07a10.5 10.5 0 0 0 .584-2.678.5.5 0 0 1 .54-.456" />
                                    <path d="M4.81 1.37A6.5 6.5 0 0 1 14.56 7a.5.5 0 1 1-1 0 5.5 5.5 0 0 0-8.25-4.765.5.5 0 0 1-.5-.865m-.89 1.257a.5.5 0 0 1 .04.706A5.48 5.48 0 0 0 2.56 7a.5.5 0 0 1-1 0c0-1.664.626-3.184 1.655-4.333a.5.5 0 0 1 .706-.04ZM1.915 8.02a.5.5 0 0 1 .346.616l-.779 2.767a.5.5 0 1 1-.962-.27l.778-2.767a.5.5 0 0 1 .617-.346m12.15.481a.5.5 0 0 1 .49.51c-.03 1.499-.161 3.025-.727 4.533l-.07.187a.5.5 0 0 1-.936-.351l.07-.187c.506-1.35.634-2.74.663-4.202a.5.5 0 0 1 .51-.49" />
                                </svg>
                                <span className="ml-2 text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                                    Login with TouchID
                                </span>
                            </button>
                        </form>
                    </div>

                    {/* Right side - Vector Illustration */}
                    <div className="hidden md:block md:w-1/2 bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
                        <div className="h-full flex items-center justify-center relative">
                            {/* Animated background blobs */}
                            <div className="absolute top-0 -left-4 w-32 h-32 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                            <div className="absolute top-0 -right-4 w-32 h-32 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                            <div className="absolute -bottom-8 left-20 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

                            <div className="relative w-full max-w-sm transform transition-all duration-500 hover:scale-105">
                                <img
                                    src="/images/apixelFree.svg"
                                    alt="Point of Sale System"
                                    className="w-full drop-shadow-2xl hover:animate-none transition-all duration-500"
                                    style={{
                                        animation:
                                            "float 3s ease-in-out infinite",
                                    }}
                                />
                                <style jsx>{`
                                    @keyframes float {
                                        0% {
                                            transform: translateY(0px);
                                        }
                                        50% {
                                            transform: translateY(-10px);
                                        }
                                        100% {
                                            transform: translateY(0px);
                                        }
                                    }
                                `}</style>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-blue-500/20 rounded-full animate-ping"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
