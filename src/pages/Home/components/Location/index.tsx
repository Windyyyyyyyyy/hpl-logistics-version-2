import LocationIcon from '../../../../assets/icons/location.svg';

const Location = () => {
  return (
    <div className="w-full">
      <div className="relative bg-gray-100 p-8 pt-8">
        <div className="absolute top-0 inline-block translate-y-[-50%] rounded-[50%] bg-primary p-4">
          <img src={LocationIcon} alt="location" />
        </div>
        <div>
          <div className="pt-4 text-2xl font-semibold">
            <h2>Ho Chi Minh City</h2>
          </div>
          <div className="pt-4">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Address:</h3>
              <p>585 Tung Thien Vuong, Ward 12, District 8, Ho Chi Minh City</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Phone Number:</h3>
              <p>+(028) 221 15 806</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Email:</h3>
              <p>info@hopphatlog.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
