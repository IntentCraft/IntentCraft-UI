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
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 24 24"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-8 transition-opacity duration-300 opacity-100"
                            >
                                <path d="M19.9381 8H21C22.1046 8 23 8.89543 23 10V14C23 15.1046 22.1046 16 21 16H19.9381C19.446 19.9463 16.0796 23 12 23V21C15.3137 21 18 18.3137 18 15V9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9V16H3C1.89543 16 1 15.1046 1 14V10C1 8.89543 1.89543 8 3 8H4.06189C4.55399 4.05369 7.92038 1 12 1C16.0796 1 19.446 4.05369 19.9381 8ZM3 10V14H4V10H3ZM20 10V14H21V10H20ZM7.75944 15.7849L8.81958 14.0887C9.74161 14.6662 10.8318 15 12 15C13.1682 15 14.2584 14.6662 15.1804 14.0887L16.2406 15.7849C15.0112 16.5549 13.5576 17 12 17C10.4424 17 8.98882 16.5549 7.75944 15.7849Z"></path>
                            </svg>
                            <div className="bg-blue-600/10 rounded-full p-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="#68ff93"
                                    className="size-6 group-hover:translate-x-2 transition-transform duration-300 opacity-100"
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
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 512 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-8 group-hover:translate-x-2 transition-transform duration-300 opacity-100"
                            >
                                <path d="M456 128a40 40 0 0 0-37.23 54.6l-84.17 84.17a39.86 39.86 0 0 0-29.2 0l-60.17-60.17a40 40 0 1 0-74.46 0L70.6 306.77a40 40 0 1 0 22.63 22.63L193.4 229.23a39.86 39.86 0 0 0 29.2 0l60.17 60.17a40 40 0 1 0 74.46 0l84.17-84.17A40 40 0 1 0 456 128z"></path>
                            </svg>
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
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 512 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-8 group-hover:translate-x-2 transition-transform duration-300 opacity-100"
                            >
                                <path d="M228.844 32.22v114.218h17.687V32.218h-17.686zm-108.25.624c-15.507 0-28.094 12.586-28.094 28.093C92.5 76.444 105.087 89 120.594 89c12.655 0 23.34-8.372 26.844-19.875h44.937v77.313h17.688v-95H147.03c-3.888-10.837-14.262-18.593-26.436-18.593zm193.25 0c-15.507 0-28.063 12.586-28.063 28.093 0 12.124 7.677 22.45 18.44 26.376v59.124h17.655V87.844c11.596-3.452 20.063-14.193 20.063-26.906 0-15.508-12.587-28.094-28.094-28.094zM266.124 92.5v53.938h17.657V92.5h-17.655zm188.532 4.03c-15.507 0-28.094 12.588-28.094 28.095 0 13.083 8.948 24.074 21.063 27.188v27.468h-92.938v17.657h110.624v-46.342c10.223-4.192 17.407-14.233 17.407-25.97 0-15.507-12.557-28.094-28.064-28.094zM30.187 123.657v17.688H96.75v55.594h62.814V179.28h-45.126v-55.624h-84.25zm147.032 40.47v159.718h159.81v-159.72H177.22zm17.56 15.655h17.657v78.595l32.407 32.406h75.28v17.658H237.5l-2.594-2.594-10.75-10.75c-1.033 7.385-7.36 13.062-15.03 13.062-8.392 0-15.19-6.796-15.19-15.187 0-7.682 5.696-13.98 13.095-15l-9.655-9.658-2.594-2.593V179.78zm54.94.157h17.686v55.313h52.53l.002 17.688H249.72v-73zM53.124 217.375V307.344c-11.49 3.512-19.844 14.198-19.844 26.844 0 15.505 12.557 28.093 28.064 28.093s28.093-12.587 28.093-28.092c0-12.195-7.79-22.564-18.656-26.438v-72.72h88.782v-17.655H53.124zm301.563 0v17.656h53.968v-17.655h-53.97zm99.968 21.97c-10.898 0-20.342 6.21-25 15.28h-74.97l.002 17.688H427c2.325 13.168 13.824 23.187 27.656 23.187 15.507 0 28.063-12.588 28.063-28.094 0-15.507-12.557-28.062-28.064-28.062zm-349.062 15.28v17.688h53.97v-17.688h-53.97zm17.156 36.47v84.217c-11.498 3.513-19.875 14.2-19.875 26.844 0 15.506 12.587 28.094 28.094 28.094 15.506 0 28.06-12.588 28.06-28.094 0-12.194-7.766-22.564-18.624-26.437v-66.94h19.156v-17.686H122.75zm231.938 0v17.686h45.156v95.283c-11.323 3.624-19.53 14.26-19.53 26.78-.002 15.506 12.585 28.063 28.092 28.063 15.507 0 28.063-12.557 28.063-28.062 0-12.32-7.935-22.778-18.97-26.563V291.095h-62.814zM192.375 341.53v54.033h17.688V341.53h-17.688zm36.47 0v86.564c-11.013 3.794-18.94 14.233-18.94 26.53 0 15.506 12.588 28.095 28.095 28.095s28.063-12.59 28.063-28.095c0-12.53-8.203-23.14-19.532-26.75V341.53h-17.686zm37.28 0v54.033h17.688l-.032-54.032h-17.655zm38.094 0v140.064h17.655V341.53H304.22z"></path>
                            </svg>
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
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 24 24"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-8 group-hover:translate-x-2 transition-transform duration-300 opacity-100"
                            >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-3.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z"></path>
                            </svg>
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
