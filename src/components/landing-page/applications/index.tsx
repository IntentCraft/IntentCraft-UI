import Image from 'next/image';
import React from 'react';

const Applications = () => {
    return (
        <section id="usecases" className="py-24 bg-neutral-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20 animate__animated animate__fadeIn">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Real-World Applications
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Discover how our AI agents are transforming industries
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="group bg-neutral-900 rounded-2xl p-8 animate__animated animate__fadeInLeft cursor-pointer hover:bg-neutral-800 transition-all duration-300">
                        <div className="flex items-center justify-between mb-6">
                            <Image
                                src=""
                                alt="UseCase"
                                height={100}
                                width={100}
                                className="w-16 h-16 transition-opacity duration-300 opacity-100"
                            />
                            <div className="bg-blue-600/10 rounded-full p-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="#68ff93"
                                    className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 opacity-100"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                    />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Customer Service
                        </h3>
                        <p className="text-gray-400 mb-6">
                            24/7 intelligent customer support with natural
                            language understanding
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-2 bg-neutral-800 text-gray-300 rounded-full text-sm group-hover:bg-neutral-700">
                                Automated Responses
                            </span>
                            <span className="px-4 py-2 bg-neutral-800 text-gray-300 rounded-full text-sm group-hover:bg-neutral-700">
                                Multi-language
                            </span>
                            <span className="px-4 py-2 bg-neutral-800 text-gray-300 rounded-full text-sm group-hover:bg-neutral-700">
                                24/7 Support
                            </span>
                        </div>
                    </div>

                    <div className="group bg-neutral-900 rounded-2xl p-8 animate__animated animate__fadeInRight cursor-pointer hover:bg-neutral-800 transition-all duration-300">
                        <div className="flex items-center justify-between mb-6">
                            <Image
                                src=""
                                alt="UseCase"
                                height={100}
                                width={100}
                                className="w-16 h-16 transition-opacity duration-300 opacity-100"
                            />
                            <div className="bg-purple-600/10 rounded-full p-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="#68ff93"
                                    className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 opacity-100"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                    />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Data Analysis
                        </h3>
                        <p className="text-gray-400 mb-6">
                            Advanced analytics and insights generation for
                            business intelligence
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-2 bg-neutral-800 text-gray-300 rounded-full text-sm group-hover:bg-neutral-700">
                                Real-time Analytics
                            </span>
                            <span className="px-4 py-2 bg-neutral-800 text-gray-300 rounded-full text-sm group-hover:bg-neutral-700">
                                Predictive Models
                            </span>
                            <span className="px-4 py-2 bg-neutral-800 text-gray-300 rounded-full text-sm group-hover:bg-neutral-700">
                                Reporting
                            </span>
                        </div>
                    </div>

                    <div className="group bg-neutral-900 rounded-2xl p-8 animate__animated animate__fadeInLeft cursor-pointer hover:bg-neutral-800 transition-all duration-300">
                        <div className="flex items-center justify-between mb-6">
                            <Image
                                src=""
                                alt="UseCase"
                                height={100}
                                width={100}
                                className="w-16 h-16 transition-opacity duration-300 opacity-100"
                            />
                            <div className="bg-green-600/10 rounded-full p-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="#68ff93"
                                    className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 opacity-100"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                    />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Process Automation
                        </h3>
                        <p className="text-gray-400 mb-6">
                            Streamline workflows and automate repetitive tasks
                            efficiently
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-2 bg-neutral-800 text-gray-300 rounded-full text-sm group-hover:bg-neutral-700">
                                Workflow Automation
                            </span>
                            <span className="px-4 py-2 bg-neutral-800 text-gray-300 rounded-full text-sm group-hover:bg-neutral-700">
                                Task Management
                            </span>
                            <span className="px-4 py-2 bg-neutral-800 text-gray-300 rounded-full text-sm group-hover:bg-neutral-700">
                                Integration
                            </span>
                        </div>
                    </div>

                    <div className="group bg-neutral-900 rounded-2xl p-8 animate__animated animate__fadeInRight cursor-pointer hover:bg-neutral-800 transition-all duration-300">
                        <div className="flex items-center justify-between mb-6">
                            <Image
                                src=""
                                alt="UseCase"
                                height={100}
                                width={100}
                                className="w-16 h-16 transition-opacity duration-300 opacity-100"
                            />
                            <div className="bg-red-600/10 rounded-full p-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="#68ff93"
                                    className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 opacity-100"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                    />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Decision Support
                        </h3>
                        <p className="text-gray-400 mb-6">
                            AI-powered insights for better business decision
                            making
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-2 bg-neutral-800 text-gray-300 rounded-full text-sm group-hover:bg-neutral-700">
                                Risk Analysis
                            </span>
                            <span className="px-4 py-2 bg-neutral-800 text-gray-300 rounded-full text-sm group-hover:bg-neutral-700">
                                Market Intelligence
                            </span>
                            <span className="px-4 py-2 bg-neutral-800 text-gray-300 rounded-full text-sm group-hover:bg-neutral-700">
                                Forecasting
                            </span>
                        </div>
                    </div>
                </div>

                <div className="mt-16 flex justify-center animate__animated animate__fadeIn">
                    <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-all inline-flex items-center">
                        View All Use Cases
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4 ml-4 group-hover:translate-x-2 transition-transform duration-300 opacity-100"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Applications;
