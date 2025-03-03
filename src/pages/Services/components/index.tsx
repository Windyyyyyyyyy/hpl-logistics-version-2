import { ServicesComponentProps } from '../../../types';

const ServicesComponent = ({
  title,
  image,
  whyChoose,
  whyChooseLabel,
  servicesLabel,
  services,
  desc,
}: ServicesComponentProps) => {
  return (
    <div>
      <div className="mb-8">
        <img src={image} alt={title} className="h-24 w-full object-cover md:h-32 lg:h-64" />
      </div>
      <div className="bg-gray-50 p-6 text-gray-800">
        <h3 className="mb-4 text-2xl font-bold uppercase">{title}</h3>
        <p className="mb-8">{desc}</p>
        <div className="mb-8">
          <h3 className="mb-4 font-bold">{whyChooseLabel}</h3>
          <ul>
            {whyChoose.map((item, index) => (
              <li key={index} className="mb-2">
                <span className="font-semibold">{item.h4}</span>
                <span>{item.span}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-bold">{servicesLabel}</h3>
          <ul>
            {services.map((item, index) => (
              <li key={index} className="mb-2 ml-4 list-disc">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
