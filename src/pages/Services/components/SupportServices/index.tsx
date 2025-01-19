import SupportServicesImage from '../../../../assets/images/support-services.png';

const SupportServices = () => {
  return (
    <div>
      <div className="mb-8">
        <img
          src={SupportServicesImage}
          alt="Airplane wing during sunset"
          className="h-24 w-full object-cover md:h-32 lg:h-64"
        />
      </div>
      <div className="bg-gray-50 p-6 text-gray-800">
        <h1 className="mb-4 text-2xl font-bold uppercase">Support Services</h1>
        <p className="mb-4">
          As a major global Air and Sea Freight Forwarding Company, we take our delivery
          responsibility seriously. Being one of the leading air freight forwarders, we bring your
          shipments on time and safely to any destination in the world thanks to our strategic
          alliances with prime carriers across all major commercial destinations. For cost-effective
          solutions, sea freight is often the preferred choice. Using our contacts with all the
          major shipping lines, we offer services with different transit times, enabling customers
          to make accurate forecasts and keep costs within budget.
        </p>
        <h2 className="mb-2 text-xl font-semibold">
          Our professional air and sea freight services include:
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Import and export to/from anywhere in the world</li>
          <li>Most hazardous commodities and specialist products catered for</li>
          <li>Courier services for urgent cargo/documentation</li>
          <li>Full Container Load (FCL)/Less than Container Load (LCL) shipments worldwide</li>
          <li>Out of Gauge/special equipment and RoRo</li>
          <li>
            All equipment available: 20GP and 40GP; High Cubes; Reefers; Open Tops; Flat racks.
          </li>
          <li>
            Regular departures to/from all international ports worldwide working with various
            shipping lines.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SupportServices;
