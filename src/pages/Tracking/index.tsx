import React, { useState } from 'react';

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Searching for:', trackingNumber);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-2xl w-full mx-4">
        {/* Card Container */}
        <div className="bg-gray-100 rounded-lg shadow-sm p-8 space-y-6">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              Look up bill of lading
            </h1>
            <p className="mt-2 text-gray-600">
              Look up information related to your order using the form below.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label 
                htmlFor="tracking" 
                className="block text-sm font-medium text-gray-700"
              >
                Container Number / Bill of Lading Code
                <span className="text-red-500">*</span>
              </label>
              <div className="mt-2 flex gap-4">
                <input
                  id="tracking"
                  name="tracking"
                  type="text"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Enter Container Number / Bill of Lading Code"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                />
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200 gap-2"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Tracking;