// const Home = () => {
//   return (
//     <>
//       <section className="block">
//         <div className="relative">
//           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/[0.49] to-black"></div>
//           <div className="z-[-2] w-full">
//             <img
//               src="https://kflv.vn/wp-content/uploads/2024/05/hban-scaled.jpg"
//               alt=""
//               className="h-full w-full object-cover"
//             />
//           </div>
//           <div className="mx-auto h-full w-full max-w-[1170px] px-[15px]">
//             <div className="z-10 flex flex-col items-center justify-center py-[100px] text-white">
//               <h1>Hop Phat Logistics</h1>
//               <p>"If you want to go fast, go alone. If you want to go far, go together"</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

import CardInfo from './components/CardInfo';

// export default Home;

const Home = () => {
  return (
    <>
      <section className="block">
        <div className="relative h-[400px] md:h-[600px] lg:h-[750px]">
          {/* Background overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/[0.49] to-black"></div>

          {/* Responsive Image */}
          <img
            src="https://kflv.vn/wp-content/uploads/2024/05/hban-scaled.jpg"
            alt="Background"
            className="absolute inset-0 z-[-2] h-full w-full object-cover"
          />

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
            <h1 className="text-3xl font-bold uppercase md:text-5xl lg:text-7xl">
              Hop Phat Logistics
            </h1>
            <p className="mt-4 text-sm md:text-lg lg:text-xl">
              "If you want to go fast, go alone. If you want to go far, go together"
            </p>
          </div>
        </div>
      </section>
      <section className="lg:-translate-y-[50%]">
        <div className="py-10 lg:py-0">
          <div className="mx-auto h-full w-full max-w-[1170px] px-[15px]">
            <div className="flex flex-wrap justify-center">
              <CardInfo label="Order" number="3597" />
              <CardInfo label="Customer" number="1576" />
              <CardInfo label="Mass" number="8500" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
