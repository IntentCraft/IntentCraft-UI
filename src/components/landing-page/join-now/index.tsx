const JoinNow = () => {
    return (
        <section id="cta" className="py-24 bg-neutral-800 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl"></div>
                </div>

                <div className="relative">
                    <div className="text-center max-w-3xl mx-auto mb-16 animate__animated animate__fadeIn">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Transform Your Business With AI Today
                        </h2>
                        <p className="text-xl text-gray-300">
                            Join thousands of companies already using our AI
                            agents to revolutionize their operations
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-neutral-900 rounded-2xl p-8 animate__animated animate__fadeInLeft">
                            <div className="flex items-center gap-4 mb-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="size-6 transition-opacity duration-300 opacity-100"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                                    />
                                </svg>

                                <div>
                                    <h4 className="text-2xl font-bold text-white">
                                        400K+
                                    </h4>
                                    <p className="text-gray-400">
                                        Active Users
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6 transition-opacity duration-300 opacity-100"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                                    />
                                </svg>

                                <div>
                                    <h4 className="text-2xl font-bold text-white">
                                        100M+
                                    </h4>
                                    <p className="text-gray-400">
                                        Tasks Automated
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 animate__animated animate__fadeInRight">
                            <h3 className="text-2xl font-bold text-white mb-6">
                                Get Started Now
                            </h3>
                            <form className="space-y-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:border-white"
                                />
                                <input
                                    type="text"
                                    placeholder="Company name"
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:border-white"
                                />
                                <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center group">
                                    Start Free Trial
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="#000000"
                                        className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform  duration-300 opacity-100"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                        />
                                    </svg>
                                </button>
                            </form>
                            <p className="text-white/60 text-sm mt-4 text-center">
                                No credit card required
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 animate__animated animate__fadeIn">
                        <div className="bg-neutral-900 p-6 rounded-xl">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="#68ff93"
                                className="w-8 h-8 mb-4 transition-opacity duration-300 opacity-100"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m4.5 12.75 6 6 9-13.5"
                                />
                            </svg>

                            <h4 className="text-white font-semibold mb-2">
                                14-Day Free Trial
                            </h4>
                            <p className="text-gray-400">
                                Test all features risk-free
                            </p>
                        </div>

                        <div className="bg-neutral-900 p-6 rounded-xl">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="#68ff93"
                                className="w-8 h-8 mb-4 transition-opacity duration-300 opacity-100"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m4.5 12.75 6 6 9-13.5"
                                />
                            </svg>

                            <h4 className="text-white font-semibold mb-2">
                                24/7 Support
                            </h4>
                            <p className="text-gray-400">
                                Always here to help you
                            </p>
                        </div>

                        <div className="bg-neutral-900 p-6 rounded-xl">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="#68ff93"
                                className="w-8 h-8 mb-4 transition-opacity duration-300 opacity-100"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m4.5 12.75 6 6 9-13.5"
                                />
                            </svg>
                            <h4 className="text-white font-semibold mb-2">
                                Cancel Anytime
                            </h4>
                            <p className="text-gray-400">
                                No long-term contracts
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinNow;
