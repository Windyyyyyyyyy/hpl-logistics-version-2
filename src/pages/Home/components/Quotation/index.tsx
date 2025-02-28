import { useEffect } from 'react';
import initAOS from '../../../../utils/aos';

const Quotation = () => {
  // const thValue = [
  //   'Logistics Company',
  //   'Origin/Destination',
  //   'Container Size/Type',
  //   'ETD',
  //   'Transit Time',
  //   'Surcharges',
  //   'Freight Cost',
  //   'Total Cost',
  //   'Valid Till',
  // ];

  const thValue = [
    'POL',
    'POD',
    'CARRIER',
    'LCL RATE',
    'ETD',
    'T/S',
    'T/T',
    'CHINESE LOCAL CHARGE',
    'VIETNAM CHARGE',
  ];

  const trValue = [
    {
      pol: 'SHANGHAI',
      pod: 'HAIPHONG',
      carrier: 'WANHAI',
      lclRate:
        'USD-58/CBM(<1CBM)\n USD-48/CBM(1-3CBM)\n USD-38/CBM(3-5CBM)\n USD-33/CBM(5-10CBM)\n USD-30/CBM(10-15CBM)',
      etd: 'TUE/THU/SAT',
      ts: 'DIR',
      tt: '6 DAYS',
      chineseLocalCharge:
        'DOC:USD20/BL+EBS, CIC:USD12/CBM+CFS:USD8/CBM+LSS:USD5/CBM+VGM, CHARGE:USD20/SET+CUSTOMS, CLEARANCE:SUD20/SET',
      vietnamCharge: 'USD24/RT+USD25/BL',
    },
    {
      pol: 'SHANGHAI',
      pod: 'HAIPHONG',
      carrier: 'WANHAI',
      lclRate:
        'USD-58/CBM(<1CBM)\n USD-48/CBM(1-3CBM)\n USD-38/CBM(3-5CBM)\n USD-33/CBM(5-10CBM)\n USD-30/CBM(10-15CBM)',
      etd: 'TUE/THU/SAT',
      ts: 'DIR',
      tt: '6 DAYS',
      chineseLocalCharge:
        'DOC:USD20/BL+EBS, CIC:USD12/CBM+CFS:USD8/CBM+LSS:USD5/CBM+VGM, CHARGE:USD20/SET+CUSTOMS, CLEARANCE:SUD20/SET',
      vietnamCharge: 'USD24/RT+USD25/BL',
    },
    {
      pol: 'SHANGHAI',
      pod: 'HAIPHONG',
      carrier: 'WANHAI',
      lclRate:
        'USD-58/CBM(<1CBM)\n USD-48/CBM(1-3CBM)\n USD-38/CBM(3-5CBM)\n USD-33/CBM(5-10CBM)\n USD-30/CBM(10-15CBM)',
      etd: 'TUE/THU/SAT',
      ts: 'DIR',
      tt: '6 DAYS',
      chineseLocalCharge:
        'DOC:USD20/BL+EBS, CIC:USD12/CBM+CFS:USD8/CBM+LSS:USD5/CBM+VGM, CHARGE:USD20/SET+CUSTOMS, CLEARANCE:SUD20/SET',
      vietnamCharge: 'USD24/RT+USD25/BL',
    },
    {
      pol: 'SHANGHAI',
      pod: 'HAIPHONG',
      carrier: 'WANHAI',
      lclRate:
        'USD-58/CBM(<1CBM)\n USD-48/CBM(1-3CBM)\n USD-38/CBM(3-5CBM)\n USD-33/CBM(5-10CBM)\n USD-30/CBM(10-15CBM)',
      etd: 'TUE/THU/SAT',
      ts: 'DIR',
      tt: '6 DAYS',
      chineseLocalCharge:
        'DOC:USD20/BL+EBS, CIC:USD12/CBM+CFS:USD8/CBM+LSS:USD5/CBM+VGM, CHARGE:USD20/SET+CUSTOMS, CLEARANCE:SUD20/SET',
      vietnamCharge: 'USD24/RT+USD25/BL',
    },
    {
      pol: 'SHANGHAI',
      pod: 'HAIPHONG',
      carrier: 'WANHAI',
      lclRate:
        'USD-58/CBM(<1CBM)\n USD-48/CBM(1-3CBM)\n USD-38/CBM(3-5CBM)\n USD-33/CBM(5-10CBM)\n USD-30/CBM(10-15CBM)',
      etd: 'TUE/THU/SAT',
      ts: 'DIR',
      tt: '6 DAYS',
      chineseLocalCharge:
        'DOC:USD20/BL+EBS, CIC:USD12/CBM+CFS:USD8/CBM+LSS:USD5/CBM+VGM, CHARGE:USD20/SET+CUSTOMS, CLEARANCE:SUD20/SET',
      vietnamCharge: 'USD24/RT+USD25/BL',
    },
    {
      pol: 'SHANGHAI',
      pod: 'HAIPHONG',
      carrier: 'WANHAI',
      lclRate:
        'USD-58/CBM(<1CBM)\n USD-48/CBM(1-3CBM)\n USD-38/CBM(3-5CBM)\n USD-33/CBM(5-10CBM)\n USD-30/CBM(10-15CBM)',
      etd: 'TUE/THU/SAT',
      ts: 'DIR',
      tt: '6 DAYS',
      chineseLocalCharge:
        'DOC:USD20/BL+EBS, CIC:USD12/CBM+CFS:USD8/CBM+LSS:USD5/CBM+VGM, CHARGE:USD20/SET+CUSTOMS, CLEARANCE:SUD20/SET',
      vietnamCharge: 'USD24/RT+USD25/BL',
    },
    {
      pol: 'SHANGHAI',
      pod: 'HAIPHONG',
      carrier: 'WANHAI',
      lclRate:
        'USD-58/CBM(<1CBM)\n USD-48/CBM(1-3CBM)\n USD-38/CBM(3-5CBM)\n USD-33/CBM(5-10CBM)\n USD-30/CBM(10-15CBM)',
      etd: 'TUE/THU/SAT',
      ts: 'DIR',
      tt: '6 DAYS',
      chineseLocalCharge:
        'DOC:USD20/BL+EBS, CIC:USD12/CBM+CFS:USD8/CBM+LSS:USD5/CBM+VGM, CHARGE:USD20/SET+CUSTOMS, CLEARANCE:SUD20/SET',
      vietnamCharge: 'USD24/RT+USD25/BL',
    },
  ];

  const tdStyle = 'border px-2 text-[13px] py-2';

  useEffect(() => {
    initAOS();
  }, []);

  return (
    <div data-aos="fade-up">
      <div className="overflow-x-auto">
        <table className="w-full table-auto overflow-scroll text-sm">
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
              <tr key={index} className="border border-gray-200">
                <td className={`${tdStyle}`}>{tr.pol}</td>
                <td className={tdStyle}>{tr.pod}</td>
                <td className={`${tdStyle}`}>{tr.carrier}</td>
                <td className={`${tdStyle} whitespace-nowrap`}>
                  {' '}
                  <div dangerouslySetInnerHTML={{ __html: tr.lclRate.replace(/\n/g, '<br>') }} />
                </td>
                <td className={tdStyle}>{tr.etd}</td>
                <td className={tdStyle}>{tr.ts}</td>
                <td className={`${tdStyle} whitespace-nowrap`}>{tr.tt}</td>
                <td className={`${tdStyle} w-fit`}>{tr.chineseLocalCharge}</td>
                <td className={tdStyle}>{tr.vietnamCharge}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Quotation;
