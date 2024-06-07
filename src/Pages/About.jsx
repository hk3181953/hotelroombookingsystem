import React from 'react';
import Mnavbar from '../Component/Mnavbar';
import Footer from '../Component/Footer';

function About() {
  return (
    <>
      <Mnavbar />
      <div className="bg-White-100">
        <img src="pexels-pixabay-161758.jpg" className="w-full h-[500px] object-cover" alt="Hotel Lobby" />
        <div className="container mx-auto px-4 py-8">
          <h1 className=" text-6xl font-bold text-center text-gray-900 dark:text-white">
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-800">A</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-800 absolute top-0 left-0 animate-ping">A</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-800">bout</span>
            </span>
          </h1>


          <div className="mt-10 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Lounge Area</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our lounge area is the perfect spot to relax and unwind. Designed with comfort and elegance in mind, it features plush seating, warm lighting, and tasteful decor that creates an inviting atmosphere. Whether you're enjoying a quiet moment with a book, catching up with friends, or simply taking a break, the lounge provides a serene environment for all. The space is equipped with complimentary Wi-Fi, ensuring you stay connected while enjoying your surroundings. Indulge in a cup of freshly brewed coffee or tea from our beverage station as you take in the cozy ambiance. Our lounge is a versatile space where you can feel at home, making it an ideal spot to relax after a long day or to gather before heading out.
              </p>
            </div>
            <img src="pexels-osho-1001965.jpg" className="w-full md:w-[400px] h-[300px] mt-6 md:mt-0 rounded-lg" alt="Lounge Area" />
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center justify-between mt-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Hotel Rooms</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Welcome to our Hotel, where comfort meets elegance. Our rooms are meticulously designed to provide a tranquil and luxurious experience. From the moment you step into one of our rooms, you will be greeted by an inviting ambiance, modern furnishings, and state-of-the-art amenities. Each room is a sanctuary of relaxation, featuring plush bedding, tasteful decor, and breathtaking views. Whether you are here for business or leisure, our rooms offer the perfect retreat to unwind and recharge. Experience the ultimate in comfort and style during your stay with us. We take pride in ensuring that every detail contributes to your overall satisfaction. Discover a home away from home in our exquisite rooms.
              </p>
            </div>
            <img src="pexels-pixabay-164595.jpg" className="w-full md:w-[400px] h-[300px] mt-6 md:mt-0 rounded-lg" alt="Room Showcase" />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between mt-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Canteen Bar</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our canteen bar offers a delightful culinary experience that complements your stay. Enjoy a diverse menu featuring local and international cuisine, all prepared with the freshest ingredients. The bar provides a cozy atmosphere where you can unwind with a selection of fine wines, craft beers, and signature cocktails. Whether you're starting your day with a hearty breakfast or ending it with a relaxing drink, our canteen bar is the perfect place to gather and savor life's simple pleasures. Experience exceptional service and gourmet dining in a welcoming setting that enhances your overall experience at our hotel. Indulge in delicious meals and beverages, making every moment memorable.
              </p>
            </div>
            <img src="pexels-pixabay-260922.jpg" className="w-full md:w-[400px] h-[300px] mt-6 md:mt-0 rounded-lg" alt="Canteen Bar" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
