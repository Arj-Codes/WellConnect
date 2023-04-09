import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#00b4b1] text-white py-5">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0 flex flex-col items-center  justify-center">
            <img
              src="./logo.png"
              alt=""
              className="lg:w-[15vw] w-[20vw] bg-[#65fff5] rounded-3xl p-2"
            />
          </div>
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Appointments
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Doctors
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Hospitals
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Any queries
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4">123 Street Name</p>
            <p className="mb-4">Jaipur, IN 303007</p>
            <p className="mb-4">Phone: 555-555-5555</p>
            <p className="mb-4">Email: info@medicare.com</p>
          </div>
        </div>
        <hr className="border-gray-600 my-8" />
        <p className="text-center">
          Copyright &copy; 2023 MediCare.
          <a href="#" className="hover:text-gray-300 ml-2">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-300 ml-2">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
