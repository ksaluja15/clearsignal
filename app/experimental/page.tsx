'use client';

import { useState } from 'react';

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
    </svg>
);

const LoadingSpinner = () => (
    <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
    </div>
);

export default function ExperimentalPage() {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;

        setIsLoading(true);
        setError('');
        setResponse('');

        try {
            const res = await fetch('/api/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query: query.trim() }),
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json();
            
            if (data.error) {
                throw new Error(data.error);
            }

            setResponse(data.response);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unexpected error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    const handleClear = () => {
        setQuery('');
        setResponse('');
        setError('');
    };

    return (
        <div className="min-h-screen bg-black text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Experimental Search
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Ask any question and get AI-powered responses using Perplexity
                    </p>
                </div>

                <form onSubmit={handleSearch} className="mb-8">
                    <div className="relative">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Ask me anything..."
                            className="w-full px-6 py-4 pr-20 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            disabled={isLoading}
                        />
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-2">
                            {query && (
                                <button
                                    type="button"
                                    onClick={handleClear}
                                    className="px-3 py-2 text-gray-400 hover:text-white transition-colors"
                                    disabled={isLoading}
                                >
                                    Clear
                                </button>
                            )}
                            <button
                                type="submit"
                                disabled={isLoading || !query.trim()}
                                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-md transition-colors flex items-center gap-2"
                            >
                                <SearchIcon />
                                {isLoading ? 'Searching...' : 'Search'}
                            </button>
                        </div>
                    </div>
                </form>

                {error && (
                    <div className="mb-8 p-4 bg-red-900/50 border border-red-500 rounded-lg">
                        <h3 className="font-semibold text-red-400 mb-2">Error</h3>
                        <p className="text-red-300">{error}</p>
                    </div>
                )}

                {isLoading && <LoadingSpinner />}

                {response && (
                    <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                        <h3 className="font-semibold text-white mb-4 text-lg">Response</h3>
                        <div className="prose prose-invert max-w-none">
                            <div className="whitespace-pre-wrap text-gray-300 leading-relaxed">
                                {response}
                            </div>
                        </div>
                    </div>
                )}

                {!response && !isLoading && !error && (
                    <div className="text-center text-gray-500 py-12">
                        <p>Enter a question above to get started with AI-powered search</p>
                    </div>
                )}
            </div>
        </div>
    );
}
