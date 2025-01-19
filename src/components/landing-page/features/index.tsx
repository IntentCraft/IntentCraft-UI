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
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 24 24"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8 transition-opacity duration-300 opacity-100"
                            >
                                <path
                                    fill="none"
                                    stroke-width="2"
                                    d="M20,7 C21.25,8.67 22,10.75 22,13 C22,18.52 17.52,23 12,23 C6.48,23 2,18.52 2,13 C2,7.48 6.48,3 12,3 M12,1 L12,13 L21.6,5.8 C19.41,2.89 15.92,1 12,1 L12,1 Z"
                                ></path>
                            </svg>
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
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 24 24"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8 transition-opacity duration-300 opacity-100"
                            >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M6 15c-.83 0-1.58.34-2.12.88C2.7 17.06 2 22 2 22s4.94-.7 6.12-1.88A2.996 2.996 0 0 0 6 15zm.71 3.71c-.28.28-2.17.76-2.17.76s.47-1.88.76-2.17c.17-.19.42-.3.7-.3a1.003 1.003 0 0 1 .71 1.71zm10.71-5.06c6.36-6.36 4.24-11.31 4.24-11.31S16.71.22 10.35 6.58l-2.49-.5a2.03 2.03 0 0 0-1.81.55L2 10.69l5 2.14L11.17 17l2.14 5 4.05-4.05c.47-.47.68-1.15.55-1.81l-.49-2.49zM7.41 10.83l-1.91-.82 1.97-1.97 1.44.29c-.57.83-1.08 1.7-1.5 2.5zm6.58 7.67-.82-1.91c.8-.42 1.67-.93 2.49-1.5l.29 1.44-1.96 1.97zM16 12.24c-1.32 1.32-3.38 2.4-4.04 2.73l-2.93-2.93c.32-.65 1.4-2.71 2.73-4.04 4.68-4.68 8.23-3.99 8.23-3.99s.69 3.55-3.99 8.23zM15 11c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                            </svg>
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
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 24 24"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8 transition-opacity duration-300 opacity-100"
                            >
                                <path d="M5.23379 7.72989C6.65303 5.48625 9.15342 4 12.0002 4C14.847 4 17.3474 5.48625 18.7667 7.72989L20.4569 6.66071C18.6865 3.86199 15.5612 2 12.0002 2C8.43928 2 5.31393 3.86199 3.54356 6.66071L5.23379 7.72989ZM12.0002 20C9.15342 20 6.65303 18.5138 5.23379 16.2701L3.54356 17.3393C5.31393 20.138 8.43928 22 12.0002 22C15.5612 22 18.6865 20.138 20.4569 17.3393L18.7667 16.2701C17.3474 18.5138 14.847 20 12.0002 20ZM12 8C12.5523 8 13 8.44772 13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8ZM12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12ZM12 15C10.8954 15 10 15.8954 10 17H8C8 14.7909 9.79086 13 12 13C14.2091 13 16 14.7909 16 17H14C14 15.8954 13.1046 15 12 15ZM3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13C3.55228 13 4 12.5523 4 12C4 11.4477 3.55228 11 3 11ZM0 12C0 10.3431 1.34315 9 3 9C4.65685 9 6 10.3431 6 12C6 13.6569 4.65685 15 3 15C1.34315 15 0 13.6569 0 12ZM20 12C20 11.4477 20.4477 11 21 11C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13C20.4477 13 20 12.5523 20 12ZM21 9C19.3431 9 18 10.3431 18 12C18 13.6569 19.3431 15 21 15C22.6569 15 24 13.6569 24 12C24 10.3431 22.6569 9 21 9Z"></path>
                            </svg>
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
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 24 24"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8 transition-opacity duration-300 opacity-100"
                            >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <circle
                                    cx="12"
                                    cy="3.5"
                                    r=".75"
                                    fill="none"
                                ></circle>
                                <circle
                                    cx="12"
                                    cy="3.5"
                                    r=".75"
                                    fill="none"
                                ></circle>
                                <path fill="none" d="M5 15v4h14V5H5z"></path>
                                <path d="M11 14.17 8.83 12 11 9.83 9.59 8.41 6 12l3.59 3.59zM14.41 15.59 18 12l-3.59-3.59L13 9.83 15.17 12 13 14.17z"></path>
                                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04a2.008 2.008 0 0 0-1.44 1.19c-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 15v4H5V5h14v10z"></path>
                            </svg>
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
