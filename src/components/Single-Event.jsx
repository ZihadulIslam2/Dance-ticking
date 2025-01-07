import { Instagram, Minus, Plus, Youtube } from "lucide-react";
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEventsById } from "../lib/events";
import { Button } from "./button";
import { MailingList } from "./mailing-list";
import Modal from "./shared/dialog";
import CheckoutModal from "../pages/CheckoutModal";

const SingleEvent = () => {

  const [quantity, setQuantity] = React.useState(1);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  const { id } = useParams();
  const params = id.split("-");
  const result = getEventsById(params[0], params[1]);

  const handleBuyNowClick= () => {
    setIsCheckoutOpen(true)
  }

  return (
    <div className="bg-[#1a1b2e] min-h-screen py-20">
      <nav className="fixed top-0 w-full z-50 bg-[#0a192f]/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between flex-wrap">
            {/* Title Section */}
            <a
              href="/"
              className="text-[#64ffda] text-2xl font-serif font-bold sm:text-3xl md:text-4xl"
            >
              <div className="flex flex-col items-center">
                <span className="text-shadow-glow">DANCE WITH</span>
                <span className="text-shadow-glow">PRIYA JAYANTHI</span>
              </div>
            </a>

            {/* Centered Navbar Icons/Buttons */}
            <div className="flex justify-center items-center space-x-2 sm:space-x-4 md:space-x-6">
              <NavbarButtons />
            </div>
            <div className="w-full lg:w-auto mt-2 md:mt-0">
              <EndButton />
            </div>
          </div>
        </div>
      </nav>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <img
            src="/images/_DSC7782.jpg"
            className="h-[500px] w-[500px] object-cover mx-auto "
          />
          <div className="text-white space-y-6 mt-10">
            <h1 className="text-3xl font-bold text-white border-b-2 border-white/20 pb-2">
              {result.eventName}
            </h1>
            <h1 className="text-4xl">${result.basePrice * quantity}.00</h1>
            <div className="border-b-2 border-white/20 pb-2">
              <Description data={result} />
            </div>

            <div>
              <div className="flex items-center gap-2 bg-pink-400/20 rounded-lg p-2 w-fit">
                <button
                  className="h-8 w-8 flex items-center justify-center rounded-full text-pink-400 hover:text-pink-300 hover:bg-pink-400/30"
                  onClick={() => setQuantity((prev) => prev - 1)}
                  disabled={quantity === 1}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-white font-medium min-w-[2rem] text-center">
                  {quantity}
                </span>
                <button
                  className="h-8 w-8 flex items-center justify-center rounded-full text-pink-400 hover:text-pink-300 hover:bg-pink-400/30"
                  onClick={() => setQuantity((prev) => prev + 1)}
                  disabled={quantity === 20}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="flex gap-x-4">
              <Button onClick={handleBuyNowClick}>Buy Now</Button>
            </div>
            {isCheckoutOpen && (
              <CheckoutModal
                isOpen={isCheckoutOpen}
                onClose={() => setIsCheckoutOpen(false)}
                totalAmount={result.basePrice * quantity}
              />
            )}
          </div>
        </div>

        <div className="text-white mt-20">
          <Description data={result} />
        </div>
      </div>
    </div>
  )
};

export default SingleEvent;

const Description = ({ data }) => {
  return (
    <ul className="pl-3">
      <li className="list-disc">
        {data.date} - {data.time}
      </li>
      <li className="list-disc">{data.venue}</li>
      <li className="list-disc">{data.eventDescription}</li>
    </ul>
  );
};




const NavbarButtons = () => {
  
  return (
    <>
      <div className="flex items-center gap-x-2 sm:gap-x-4">
        <button
          title="Youtube"
          className="bg-[#64ffda]/10 text-[#64ffda] p-2 sm:px-4 sm:py-2 rounded-full hover:bg-[#64ffda]/20 transition-colors h-[40px] md:h-[60px] w-[40px]  md:w-[60px] flex justify-center items-center "
        >
          <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          title="Instagram"
          className="bg-[#64ffda]/10 text-[#64ffda] p-2 sm:px-4 sm:py-2 rounded-full hover:bg-[#64ffda]/20 transition-colors h-[40px] md:h-[60px] w-[40px]  md:w-[60px] flex justify-center items-center"
        >
          <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        
      </div>

      
    </>
  );
};

const EndButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
<div className='space-x-3  w-full lg:w-auto flex justify-center gap-x-3 pt-3'>
<Button 
          onClick={() => setIsOpen(true)}
          className="text-xs sm:text-sm md:text-base bg-[#64ffda] text-[#0a192f] hover:bg-[#64ffda]/80 h-[40px] md:h-[60px]"
        >
          Join the Mailing List
        </Button>
        <a href="#class">
          <Button 
            variant="secondary"
            className="text-xs sm:text-sm md:text-base bg-[#0a192f] text-[#64ffda] border-[#64ffda] hover:bg-[#64ffda]/10 h-[40px] md:h-[60px]"
          >
            BUY TICKETS
          </Button>
        </a> {isOpen && (
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <MailingList dialogClose={() => setIsOpen(false)} />
        </Modal>
      )}</div>
  )
}
