import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
    return (
        <section
            id="hero"
            className="min-h-screen bg-neutral-900 pt-20 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                    <div className="space-y-8 animate__animated animate__fadeInLeft">
                        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                            The Future of{' '}
                            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                                AI Agents
                            </span>{' '}
                            is Here
                        </h1>
                        <p className="text-xl text-gray-300">
                            Harness the power of intelligent AI agents to
                            transform your digital experience. Join the
                            revolution of autonomous AI assistants.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all hover:scale-105 animate__animated animate__pulse animate__infinite">
                                Get Started Now
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="#ffffff"
                                    className="inline-block ml-2 w-4 h-4 transition-opacity duration-300 opacity-100"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                    />
                                </svg>
                            </button>
                            <button className="border border-gray-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:border-gray-400 transition-all">
                                Learn More
                            </button>
                        </div>
                        <div className="flex items-center gap-6 pt-8">
                            <div className="flex -space-x-4">
                                <Image
                                    src=""
                                    alt="Partner"
                                    height={100}
                                    width={100}
                                    className="w-12 h-12 rounded-full border-2 border-neutral-900 transition-opacity duration-300 opacity-100"
                                />
                                <Image
                                    src=""
                                    height={100}
                                    width={100}
                                    alt="Partner"
                                    className="w-12 h-12 rounded-full border-2 border-neutral-900 transition-opacity duration-300 opacity-100"
                                />
                                <Image
                                    src=""
                                    height={100}
                                    width={100}
                                    alt="Partner"
                                    className="w-12 h-12 rounded-full border-2 border-neutral-900 transition-opacity duration-300 opacity-100"
                                />
                            </div>
                            <p className="text-gray-400">
                                Trusted by leading companies worldwide
                            </p>
                        </div>
                    </div>
                    <div className="relative animate__animated animate__fadeInRight">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full filter blur-3xl"></div>
                        <div className="grid grid-cols-2 gap-4 relative">
                            <Image
                                src=""
                                alt="Feature"
                                className="w-full hover:scale-105 transition-transform duration-300  opacity-100"
                            />
                            <Image
                                src=""
                                alt="Feature"
                                className="w-full hover:scale-105 transition-transform duration-300 opacity-100"
                            />
                            <Image
                                src=""
                                alt="Feature"
                                className="w-full hover:scale-105 transition-transform duration-300  opacity-100"
                            />
                            <Image
                                src=""
                                alt="Feature"
                                className="w-full hover:scale-105 transition-transform duration-300  opacity-100"
                            />
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-900 to-transparent"></div>
            </div>
        </section>
    );
};

export default HeroSection;
