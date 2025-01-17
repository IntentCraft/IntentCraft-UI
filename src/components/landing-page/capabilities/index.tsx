import Image from 'next/image';
import React from 'react';

const Capabilities = () => {
    return (
        <section id="capabilities" className="py-24 bg-neutral-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20 animate__animated animate__fadeIn">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        AI Agent Capabilities
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Discover what our AI agents can do for your business
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="group relative overflow-hidden animate__animated animate__fadeInUp">
                        <div className="bg-neutral-800 rounded-2xl p-8 h-full transform transition-transform group-hover:-translate-y-2">
                            <div className="flex items-start justify-between mb-6">
                                <Image
                                    src=""
                                    alt="Capability 1"
                                    height={100}
                                    width={100}
                                    className="w-16 h-16 transition-opacity duration-300 opacity-100"
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="#68ff93"
                                    className="size-5 ml-4 group-hover:translate-x-2 transition-transform duration-300 opacity-100"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                AI Project Intake and Analysis
                            </h3>
                            <p className="text-gray-400 mb-6">
                                Advanced algorithms for processing and analyzing
                                large datasets in real-time
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center text-gray-300">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="#68ff93"
                                        className="size-12 mr-3 transition-opacity duration-300"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m4.5 12.75 6 6 9-13.5"
                                        />
                                    </svg>
                                    Natural language processing (NLP) to parse
                                    and make sense of user-submitted project
                                    descriptions.
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="#68ff93"
                                        className="size-12 mr-3 transition-opacity duration-300"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m4.5 12.75 6 6 9-13.5"
                                        />
                                    </svg>
                                    Machine learning models to classify and
                                    suggest the optimal token model (e.g.,
                                    utility, governance, NFT) based on the
                                    project description.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div
                        className="group relative overflow-hidden animate__animated animate__fadeInUp"
                        style={{ animationDelay: '0.2s' }}
                    >
                        <div className="bg-neutral-800 rounded-2xl p-8 h-full transform transition-transform group-hover:-translate-y-2">
                            <div className="flex items-start justify-between mb-6">
                                <Image
                                    src=""
                                    alt="Capability 2"
                                    height={100}
                                    width={100}
                                    className="w-16 h-16 transition-opacity duration-300 opacity-100"
                                />
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
                            <h3 className="text-2xl font-bold text-white mb-4">
                                AI-Driven Launch Strategy Development
                            </h3>
                            <p className="text-gray-400 mb-6">
                                Streamline your business processes with
                                intelligent automation
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center text-gray-300">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="#68ff93"
                                        className="size-12 mr-3 transition-opacity duration-300"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m4.5 12.75 6 6 9-13.5"
                                        />
                                    </svg>
                                    Integration with historical data models to
                                    suggest the best launch practices based on
                                    similar successful projects.
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="#68ff93"
                                        className="size-12 mr-3 transition-opacity duration-300"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m4.5 12.75 6 6 9-13.5"
                                        />
                                    </svg>
                                    Automated timeline creation for phased
                                    launches, including pre-sale, public sale,
                                    and post-launch activities.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div
                        className="group relative overflow-hidden animate__animated animate__fadeInUp"
                        style={{ animationDelay: '0.4s' }}
                    >
                        <div className="bg-neutral-800 rounded-2xl p-8 h-full transform transition-transform group-hover:-translate-y-2">
                            <div className="flex items-start justify-between mb-6">
                                <Image
                                    src=""
                                    alt="Capability 3"
                                    className="w-16 h-16 transition-opacity duration-300 opacity-100"
                                    height={100}
                                    width={100}
                                />
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
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Automated Social Media and Community Engagement
                            </h3>
                            <p className="text-gray-400 mb-6">
                                Natural language processing for seamless
                                communication
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center text-gray-300">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="#68ff93"
                                        className="size-12 mr-3 transition-opacity duration-300"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m4.5 12.75 6 6 9-13.5"
                                        />
                                    </svg>
                                    AI content generators to create engaging and
                                    relevant content across various platforms
                                    (Twitter, Discord, Telegram).
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="#68ff93"
                                        className="size-12 mr-3 transition-opacity duration-300"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m4.5 12.75 6 6 9-13.5"
                                        />
                                    </svg>
                                    Sentiment analysis to gauge community
                                    response and dynamically adjust engagement
                                    strategies.
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="#68ff93"
                                        className="size-12 mr-3 transition-opacity duration-300"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m4.5 12.75 6 6 9-13.5"
                                        />
                                    </svg>
                                    Automated response systems to handle FAQs
                                    and provide real-time interaction with the
                                    community.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center animate__animated animate__fadeIn">
                    <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all inline-flex items-center group">
                        Explore All Capabilities
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="#ffffff"
                            className="size-5 ml-4 group-hover:translate-x-2 transition-transform duration-300 opacity-100"
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

export default Capabilities;
