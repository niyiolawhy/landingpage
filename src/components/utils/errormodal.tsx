import React, { useEffect } from "react";
import { BsCheckCircleFill } from "react-icons/bs";

interface ErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ErrorModal = ({ isOpen, onClose }: ErrorModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg border-t-4 border-red-500 p-6 w-full lg:max-w-[45em] flex flex-col items-center gap-3">
        <button
          onClick={onClose}
          className=" text-gray-500 hover:text-gray-700 focus:outline-none self-end"
        >
          &#x2715;
        </button>

        <div className="flex items-center space-x-3 ">
          <span className="text-red-500 text-3xl">
            <BsCheckCircleFill />
          </span>
          <h2 className="text-xl text-[#151515] font-semibold">Error!</h2>
        </div>
        <div className="mx-auto px-4 lg:px-12 mb-12">
          <p className="mt-4 text-gray-600 text-center">
            We are unable to process your request right now,
            <br /> Please try again later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
