import LandTransImage from '../../../../assets/images/land-transportation.png';

const LandTransportation = () => {
  return (
    <div>
      <div className="mb-8">
        <img
          src={LandTransImage}
          alt="Airplane wing during sunset"
          className="h-24 w-full object-cover md:h-32 lg:h-64"
        />
      </div>
      <div className="bg-gray-50 p-6 text-gray-800">
        <h1 className="mb-4 text-2xl font-bold uppercase">Land Transportation</h1>
        <p className="mb-4">
          We provide General, Hazardous, and Project cargo trucking and packing service with
          commitment from our trusted warehouse. We offer secure and hassle-free re-packing service
          to our customer's transloading cargo. We also provide manpower or labour service for both
          stuffing and unstuffing of cargo inside and outside Free Trade Zone.
        </p>
      </div>
    </div>
  );
};

export default LandTransportation;
