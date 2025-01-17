import Image from 'next/image';
import React from 'react';

const Navbar = () => {
    return (
        <nav
            id="navbar"
            className="fixed w-full z-50 bg-neutral-900/80 backdrop-blur-md"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex-shrink-0 flex items-center">
                        IntentCraft
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a
                            href="#hero"
                            className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                        >
                            Home
                        </a>
                        <a
                            href="#features"
                            className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                        >
                            Features
                        </a>
                        <a
                            href="#capabilities"
                            className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                        >
                            Capabilities
                        </a>
                        <a
                            href="#usecases"
                            className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                        >
                            Use Cases
                        </a>
                        <a
                            href="#pricing"
                            className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                        >
                            Pricing
                        </a>
                        <a
                            href="#testimonials"
                            className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                        >
                            Testimonials
                        </a>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors animate__animated animate__pulse animate__infinite">
                            Get Started
                        </button>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            id="mobile-menu-button"
                            className="text-gray-300 hover:text-white"
                        >
                            <Image
                                src=""
                                alt="Menu"
                                className="h-6 w-6 transition-opacity duration-300 opacity-100"
                                height={100}
                                width={100}
                            />
                        </button>
                    </div>
                </div>
            </div>

            <div
                id="mobile-menu"
                className="hidden md:hidden bg-neutral-900 animate__animated animate__fadeIn"
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a
                        href="#hero"
                        className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
                    >
                        Home
                    </a>
                    <a
                        href="#features"
                        className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
                    >
                        Features
                    </a>
                    <a
                        href="#capabilities"
                        className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
                    >
                        Capabilities
                    </a>
                    <a
                        href="#usecases"
                        className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
                    >
                        Use Cases
                    </a>
                    <a
                        href="#pricing"
                        className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
                    >
                        Pricing
                    </a>
                    <a
                        href="#testimonials"
                        className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
                    >
                        Testimonials
                    </a>
                    <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors mt-4">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
