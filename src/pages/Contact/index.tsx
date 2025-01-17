import React, { useState } from 'react';

const Contact = () => {
  const [cargoType, setCargoType] = useState('FCL');

  const inputClass = "w-full px-3 py-2 bg-white border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-sm disabled:cursor-not-allowed disabled:border-gray-200 disabled:text-gray-500";
  const labelClass = "block text-sm font-medium text-gray-700";
  const labelDisabledClass = "block text-sm font-medium text-gray-400";
  const requiredClass = "text-red-500 text-sm";

  const handleCargoTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCargoType(event.target.value);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-gray-100 rounded-lg p-6">
        <h1 className="text-xl text-green-600 text-center mb-6">Freight Rate Consultation</h1>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <h2 className="text-base font-medium mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className={labelClass}>
                      First and last name <span className={requiredClass}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your first and last name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>
                      Phone <span className={requiredClass}>*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>
                      Email <span className={requiredClass}>*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your Email"
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-base font-medium mb-4">Goods details</h2>
                <div>
                  <label className={labelClass}>Type of goods</label>
                  <input
                    type="text"
                    placeholder="Enter type of goods"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <h2 className="text-base font-medium mb-4">Other information</h2>
                <textarea
                  placeholder="Notes (optional)"
                  rows={5}
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <h2 className="text-base font-medium mb-4">Goods details</h2>
                <div className="space-y-4">
                  <div>
                    <label className={labelClass}>
                      Transportation <span className={requiredClass}>*</span>
                    </label>
                    <select className={inputClass}>
                      <option value="ocean">Ocean Freight</option>
                      <option value="air">Air Freight</option>
                      <option value="land">Land Transportation</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>
                      Type of Shipment <span className={requiredClass}>*</span>
                    </label>
                    <select value={cargoType}
                      onChange={handleCargoTypeChange} className={inputClass}>
                      <option value="">Select Type of Shipment</option>
                      <option value="FCL">FCL</option>
                      <option value="LCL">LCL</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={cargoType === 'LCL' ? labelDisabledClass : labelClass}>
                        Container Type
                      </label>
                      <select className={inputClass} disabled={cargoType === 'LCL'}>
                        <option value="">Select Type</option>
                        <option value="20RF">20'RF</option>
                        <option value="20DC">20'DC</option>
                        <option value="20HC">20'HC</option>
                        <option value="40RF">40'RF</option>
                        <option value="40DC">40'DC</option>
                        <option value="40HC">40'HC</option>
                      </select>
                    </div>
                    <div>
                      <label className={cargoType === 'LCL' ? labelDisabledClass : labelClass}>
                        Container Number
                      </label>
                      <input
                        type="text"
                        placeholder="Enter the container number"
                        className={inputClass}
                        disabled={cargoType === 'LCL'}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={cargoType === 'FCL' ? labelDisabledClass : labelClass}>
                        Weight
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Enter weight"
                          className={inputClass}
                          disabled={cargoType === 'FCL'}
                        />
                        <span className="absolute right-1 top-1 text-black">kg</span>
                      </div>
                    </div>

                    <div>
                      <label className={cargoType === 'FCL' ? labelDisabledClass : labelClass}>
                        Volume
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Enter volume"
                          className={inputClass}
                          disabled={cargoType === 'FCL'}
                        />
                        <span className="absolute right-1 top-1 text-black">m³</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Origin</label>
                      <input
                        type="text"
                        placeholder="Enter origin"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Destination</label>
                      <input
                        type="text"
                        placeholder="Enter destination"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Estimated departure date</label>
                    <div className="relative">
                      <input
                        type="date"
                        className={`${inputClass} `}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-base font-medium mb-4">Support Services</h2>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-green-600 rounded border-gray-300" />
                    <span className="ml-2 text-sm text-gray-600">Cargo Insurance</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-green-600 rounded border-gray-300" />
                    <span className="ml-2 text-sm text-gray-600">Customs declaration</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;