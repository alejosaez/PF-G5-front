"use client"

import React, { useState } from 'react';

interface FormData {
    name: string;
    jobTitle: string;
    description: string;
    bio: string;
    publishedDate: string;
    readingTime: string;
    imageUrl: string;
}

const FormJobs: React.FC = () => {

    const [formData, setFormData] = useState<FormData>({
        name: '',
        jobTitle: '',
        description: '',
        bio: '',
        publishedDate: '',
        readingTime: '',
        imageUrl: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        // Aquí se realizará el envío de datos a la API.
    };

    return (
        <section className="bg-gray-100">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="lg:col-span-2 lg:py-12">
                        <p className="max-w-xl text-lg">
                            poner algo  jaja
                        </p>
                    </div>
                    <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
                            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
                            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                                <div>
                                    <label htmlFor="name"></label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Name"
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="jobTitle"></label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Job Title"
                                        type="text"
                                        id="jobTitle"
                                        value={formData.jobTitle}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="description"></label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Description"
                                        type="text"
                                        id="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="bio"></label>
                                    <textarea
                                        className="w-full rounded-lg focus:border-custom-focus p-3 text-sm"
                                        placeholder="Bio"
                                        id="bio"
                                        rows={4}
                                        value={formData.bio}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <div>
                                    <label htmlFor="publishedDate"></label>
                                    <input
                                        className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:border-custom-focus"
                                        placeholder="Published Date"
                                        type="text"
                                        id="publishedDate"
                                        value={formData.publishedDate}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="readingTime"></label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Reading Time"
                                        type="text"
                                        id="readingTime"
                                        value={formData.readingTime}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="imageUrl"></label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Image URL"
                                        type="text"
                                        id="imageUrl"
                                        value={formData.imageUrl}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="inline-block w-full rounded-lg px-5 py-3 font-medium text-white sm:w-auto"
                                        style={{ backgroundColor: '#4537D4' }}
                                    >
                                       Create Proposal
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormJobs;
