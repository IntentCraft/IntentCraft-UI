import Image from 'next/image';
import React from 'react';

const Features = () => {
    return (
        <section id="features" className="py-24 bg-neutral-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20 animate__animated animate__fadeIn">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Powerful Features
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Ai agent takes input of project ideas and descriptions
                        through a user-friendly interface. This agent will
                        analyze the submission to understand the project scope,
                        target audience, unique selling points, and
                        requirements.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-neutral-900 p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeInUp">
                        <div className="bg-blue-600/10 rounded-lg p-3 w-fit mb-6">
                            <Image
                                src=""
                                height={100}
                                width={100}
                                alt="Feature 1"
                                className="w-8 h-8 transition-opacity duration-300 opacity-100"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">
                            AI Project Intake and Analysis
                        </h3>
                        <p className="text-gray-400">
                            Once the project parameters are set, AI agents will
                            automatically generate a tailored launch strategy.
                        </p>
                    </div>

                    <div
                        className="bg-neutral-900 p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeInUp"
                        style={{ animationDelay: '0.2s' }}
                    >
                        <div className="bg-purple-600/10 rounded-lg p-3 w-fit mb-6">
                            <Image
                                src=""
                                alt="Feature 2"
                                height={100}
                                width={100}
                                className="w-8 h-8 transition-opacity duration-300 opacity-100"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">
                            AI-Driven Launch Strategy Development
                        </h3>
                        <p className="text-gray-400">
                            Smart decision-making algorithms powered by advanced
                            machine learning models
                        </p>
                    </div>

                    <div
                        className="bg-neutral-900 p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeInUp"
                        style={{ animationDelay: '0.4s' }}
                    >
                        <div className="bg-green-600/10 rounded-lg p-3 w-fit mb-6">
                            <Image
                                src=""
                                alt="Feature 3"
                                height={100}
                                width={100}
                                className="w-8 h-8 transition-opacity duration-300 opacity-100"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">
                            Automated Social Media and Community Engagement
                        </h3>
                        <p className="text-gray-400">
                            AI agents will handle social media and community
                            engagement strategies
                        </p>
                    </div>

                    <div
                        className="bg-neutral-900 p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeInUp"
                        style={{ animationDelay: '0.6s' }}
                    >
                        <div className="bg-red-600/10 rounded-lg p-3 w-fit mb-6">
                            <Image
                                src=""
                                alt="Feature 4"
                                height={100}
                                width={100}
                                className="w-8 h-8 transition-opacity duration-300 opacity-100"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">
                            Secure Integration
                        </h3>
                        <p className="text-gray-400">
                            Enterprise-grade security with seamless integration
                            capabilities
                        </p>
                    </div>
                </div>

                <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 animate__animated animate__fadeIn">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-4">
                                Ready to transform your business?
                            </h3>
                            <p className="text-white/80 mb-6">
                                Experience the power of AI agents firsthand with
                                our demo
                            </p>
                            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                Try Demo
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="#000000"
                                    className="inline-block ml-2 w-4 h-4 transition-opacity duration-300 opacity-100"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/10 p-4 rounded-xl">
                                <h4 className="text-white font-bold text-4xl mb-2">
                                    99%
                                </h4>
                                <p className="text-white/80">Accuracy Rate</p>
                            </div>
                            <div className="bg-white/10 p-4 rounded-xl">
                                <h4 className="text-white font-bold text-4xl mb-2">
                                    24/7
                                </h4>
                                <p className="text-white/80">Availability</p>
                            </div>
                            <div className="bg-white/10 p-4 rounded-xl">
                                <h4 className="text-white font-bold text-4xl mb-2">
                                    500+
                                </h4>
                                <p className="text-white/80">Integrations</p>
                            </div>
                            <div className="bg-white/10 p-4 rounded-xl">
                                <h4 className="text-white font-bold text-4xl mb-2">
                                    1M+
                                </h4>
                                <p className="text-white/80">Users</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
