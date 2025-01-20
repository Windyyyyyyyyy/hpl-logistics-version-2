import { CheckCheck, ClockArrowDown, Truck, Users } from 'lucide-react';
const Strengths = () => {
  const titleStyle = 'font-bold mt-[20px] mb-[15px]';
  const descStyle = 'text-base';
  const liStyle = 'w-full px-[15px] mb-[60px] md:mb-[0px]';
  return (
    <div className="w-full">
      <ul className="-mx-[15px] flex flex-col md:flex-row">
        <li className={liStyle}>
          <Truck size={50} />
          <h3 className={titleStyle}>The strength of Southeast Asia and China routes</h3>
          <p className={descStyle}>
            With the power of the China and Southeast Asia routes. HPL provides door-to-door
            services and competitive pricing for both full container loads (FCL/FCL) and less than
            container loads (FCL/LCL). We additionally provide various support services (value-added
            services) and deliver items with EXW, FOB, and CIF terms.
          </p>
        </li>
        <li className={liStyle}>
          <CheckCheck size={50} />
          <h3 className={titleStyle}> Handles all requests and orders of customers</h3>
          <p className={descStyle}>
            Having worked in the domestic freight transport industry for many years, HPL is sure it
            can meet all of its clients' needs.
          </p>
        </li>
        <li className={liStyle}>
          <Users size={50} />
          <h3 className={titleStyle}>With the experienced legal team</h3>
          <p className={descStyle}>
            Including delivery services to warehouses. If there are any issues with customs
            declaration, clients can work with HPL because of its skilled legal staff. HPL is
            certain that it can resolve any client issue as quickly as possible.
          </p>
        </li>
        <li className={liStyle}>
          <ClockArrowDown size={50} />
          <h3 className={titleStyle}>Save more time for customers</h3>
          <p className={descStyle}>
            Please consider HPL's Delegation service if you are a time-constrained or inexperienced
            customer. We can finish your order with just one authorization document.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Strengths;
