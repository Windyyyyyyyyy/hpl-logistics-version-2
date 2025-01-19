import SeaFrieghtImage from '../../../../assets/images/sea-freight.jpg';

const SeaFreight = () => {
  return (
    <div>
      <div className="mb-8">
        <img
          src={SeaFrieghtImage}
          alt="Airplane wing during sunset"
          className="h-24 w-full object-cover md:h-32 lg:h-64"
        />
      </div>
      <div className="bg-gray-50 p-6 text-gray-800">
        <h1 className="mb-4 text-2xl font-bold uppercase">Sea Freight</h1>
        <p className="mb-4">
          Loyo logistics prioritizes personal service – our land freight experts identify business
          goals and transportation issues in your supply chain through clear communication,
          thoughtful collaboration, and dedicated follow-through to create solutions that deliver.
        </p>
        <p className="mb-4">
          We combine simple, standardized land freight services with a host of customizable options
          to achieve the ideal balance of lead-time, capacity, frequency, and cost. Whether it means
          providing day-definite delivery or hauling hazardous cargo, Loyo Logistics knows the key
          to a successful supply chain is a synergized relationship with you.
        </p>
        <h2 className="mb-2 text-xl font-semibold">
          Our professional transportation services include:
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Same day/next day collections</li>
          <li>FTL-Full Trucking Load</li>
          <li>LTL-Less Trucking Load / Consolidation Service</li>
          <li>Site/City Courier</li>
          <li>Collection & Distribution Service</li>
        </ul>
      </div>
    </div>
  );
};

export default SeaFreight;
