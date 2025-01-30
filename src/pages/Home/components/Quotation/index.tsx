import { useEffect } from 'react';
import initAOS from '../../../../utils/aos';

const Quotation = () => {
  const thValue = [
    'Logistics Company',
    'Origin/Destination',
    'Container Size/Type',
    'ETD',
    'Transit Time',
    'Surcharges',
    'Freight Cost',
    'Total Cost',
    'Valid Till',
  ];

  const trValue = [
    {
      logisticsCompany: 'Hop Phat Logistics',
      originDestination: 'Ho Chi Minh City - Los Angeles',
      containerSizeType: '20GP',
      etd: '2022-01-01',
      transitTime: '30 days',
      surcharges: 'Fuel Surcharge, Peak Season Surcharge',
      freightCost: '$1,000',
      totalCost: '$1,200',
      validTill: '2022-01-01',
    },
    {
      logisticsCompany: 'Hop Phat Logistics',
      originDestination: 'Ho Chi Minh City - Los Angeles',
      containerSizeType: '20GP',
      etd: '2022-01-01',
      transitTime: '30 days',
      surcharges: 'Fuel Surcharge, Peak Season Surcharge',
      freightCost: '$1,000',
      totalCost: '$1,200',
      validTill: '2022-01-01',
    },
    {
      logisticsCompany: 'Hop Phat Logistics',
      originDestination: 'Ho Chi Minh City - Los Angeles',
      containerSizeType: '20GP',
      etd: '2022-01-01',
      transitTime: '30 days',
      surcharges: 'Fuel Surcharge, Peak Season Surcharge',
      freightCost: '$1,000',
      totalCost: '$1,200',
      validTill: '2022-01-01',
    },
    {
      logisticsCompany: 'Hop Phat Logistics',
      originDestination: 'Ho Chi Minh City - Los Angeles',
      containerSizeType: '20GP',
      etd: '2022-01-01',
      transitTime: '30 days',
      surcharges: 'Fuel Surcharge, Peak Season Surcharge',
      freightCost: '$1,000',
      totalCost: '$1,200',
      validTill: '2022-01-01',
    },
  ];

  const tdStyle = 'border px-1 py-1 text-center';

  useEffect(() => {
    initAOS();
  }, []);

  return (
    <div data-aos="fade-up">
      <div className="overflow-x-auto">
        <table className="w-full table-auto overflow-scroll">
          <thead>
            <tr className="bg-gray-100">
              {thValue.map((th, index) => (
                <th key={index} className="px-2 py-2 text-center">
                  {th}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {trValue.map((tr, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className={`${tdStyle} w-48`}>{tr.logisticsCompany}</td>
                <td className={tdStyle}>{tr.originDestination}</td>
                <td className={`${tdStyle} w-20`}>{tr.containerSizeType}</td>
                <td className={`${tdStyle} whitespace-nowrap`}>{tr.etd}</td>
                <td className={tdStyle}>{tr.transitTime}</td>
                <td className={tdStyle}>{tr.surcharges}</td>
                <td className={tdStyle}>{tr.freightCost}</td>
                <td className={tdStyle}>{tr.totalCost}</td>
                <td className={`${tdStyle} whitespace-nowrap`}>{tr.validTill}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Quotation;
