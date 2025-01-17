import Image from 'next/image';
import React from 'react';

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
                                <Image
                                    height={50}
                                    width={50}
                                    src=""
                                    alt="Stats"
                                    className="w-12 h-12 transition-opacity duration-300 opacity-100"
                                />
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
                                <Image
                                    height={50}
                                    width={50}
                                    src=""
                                    alt="Stats"
                                    className="w-12 h-12 transition-opacity duration-300 opacity-100"
                                />
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
