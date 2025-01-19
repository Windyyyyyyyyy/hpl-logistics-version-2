import AirFreightImage from '../../../../assets/images/air-freight.jpg';

const AirFreight = () => {
  return (
    <div>
      <div className="mb-8">
        <img
          src={AirFreightImage}
          alt="Airplane wing during sunset"
          className="h-24 w-full object-cover md:h-32 lg:h-64"
        />
      </div>
      <div className="bg-gray-50 p-6 text-gray-800">
        <h1 className="mb-6 text-2xl font-bold uppercase">Air Freight</h1>

        <p className="mb-6">
          Our newly refurbished state of the art 60,000 sq.ft. secure warehouse and distribution
          facility in Shenzhen,China has over 10,000 pallet spaces of racking, secure storage rooms,
          3 mezzanine floors for pick and pack operations, 4 loading bays each able to accommodate
          articulated lorry's, along with a secure 25,000 sq. ft. enclosed yard. Our offices are
          within the same facility enabling us to operate smoothly as one team through out.
        </p>

        <p className="mb-6">
          We are well positioned for major China airports, seaports, road and rail networks. We also
          operate out of town storage facilities, enabling us to offer the most competitive rates in
          the market.
        </p>

        <h2 className="mb-4 font-bold">Our professional warehouse services include:</h2>

        <ul className="mb-6 space-y-2">
          <li>Same day/next day collections</li>
          <li>Short and long term storage</li>
          <li>Dispatch and returns management</li>
          <li>Inventory control and stock management</li>
          <li>Pick and pack and re-work services</li>
          <li>Dedicated space and shared storage solutions</li>
          <li>Pay as you go or fixed price per pallet charges</li>
          <li>Container loading/unloading and cross loading</li>
          <li>
            Bonded warehousing facilities (allowing for deferment of all duties until point of
            dispatch)
          </li>
        </ul>

        <p>
          Our experienced warehouse team and equipment can accommodate all your requirements, high
          value, over-sized, heavy, delicate, hazardous or unusual. We know having the right product
          in the right place, packaged and delivered on time is crucial to deliver the
          instore/online experience customers now expect.
        </p>
      </div>
    </div>
  );
};

export default AirFreight;
