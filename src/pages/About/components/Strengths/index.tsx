import { StrengthsProps } from '../../../../types';

const Strengths = ({ strengths }: { strengths: Array<StrengthsProps> }) => {
  const titleStyle = 'font-bold mt-[20px] mb-[15px]';
  const descStyle = 'text-base';
  const liStyle = 'w-full px-[15px] mb-[60px] md:mb-[0px]';
  return (
    <div className="w-full">
      <ul className="-mx-[15px] flex flex-col md:flex-row">
        {strengths.map((item, index) => (
          <li key={index} className={liStyle}>
            <item.icon size={50} />
            <h3 className={titleStyle}>{item.label}</h3>
            <p className={descStyle}>{item.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Strengths;
