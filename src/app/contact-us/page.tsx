"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { HiOutlineMail } from "react-icons/hi";
import { PiPhoneCall } from "react-icons/pi";
import { LuInstagram } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import InputField from "@/components/utils/input";
import TextAreaField from "@/components/utils/textarea";
import Button from "@/components/utils/btn";
import { fetchAPI } from "@/components/utils/fetchApi";
import SuccessModal from "@/components/utils/sucessmodal";
import ErrorModal from "@/components/utils/errormodal";
import Link from "next/link";

const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phoneNumber: yup.string().required("Phone Number is required"),
  message: yup.string().required("Message is required"),
});

type FormData = yup.InferType<typeof schema>;

const Page: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);

  const onSubmit: SubmitHandler<FormData> = async (data: any) => {
    try {
      const response = await fetchAPI<{ message: string }>("api/contact", {
        method: "POST",
        body: data,
      });
      if (response.message) {
        setIsModalOpen(true);
      }
    } catch (error) {
      setOpenError(true);
      console.log(`error:${error}`);
    } finally {
      reset();
    }
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="container mx-auto px-6 lg:px-12 xl:px-44 py-12">
      <div className="text-center mb-12">
        <h1>Contact Us</h1>
      </div>
      <div className="bg-[#F6F6F6] border border-[#004646] p-6 xl:p-12 mb-12 rounded-xl">
        <h3 className="text-lg font-medium text-center text-primary-text">
          We&apos;re Here to Meet Your Pressing Needs
        </h3>
        <p className="text-center mt-4 text-sm text-primary-text">
          Our team is dedicated to understanding your unique needs...
        </p>
      </div>
      <div className="max-w-[700px] mx-auto">
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="First Name"
              {...register("firstName")}
              error={errors.firstName?.message}
            />
            <InputField
              label="Last Name"
              {...register("lastName")}
              name="lastName"
              error={errors.lastName?.message}
            />
          </div>
          <InputField
            label="Email"
            {...register("email")}
            name="email"
            error={errors.email?.message}
          />
          <InputField
            type="tel"
            label="Phone Number"
            {...register("phoneNumber")}
            error={errors.phoneNumber?.message}
          />
          <TextAreaField
            label="Message"
            {...register("message")}
            error={errors.message?.message}
          />
          <Button
            disabled={isSubmitting}
            children={
              isSubmitting ? (
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Submitting...
                </div>
              ) : (
                "Submit"
              )
            }
            color="bg-[#000000] text-[#FEFEFE]"
            textSize="w-full py-2 text-lg"
            type="submit"
          />
        </form>
       
      </div>
      <div className="bg-[#FFF9EE] text-primary-text mt-12 p-6 rounded-xl shadow-md shadow-[#00000026]">
        <div className="flex flex-col gap-6 sm:flex-row flex-wrap justify-between text-center sm:text-left">
          <div className="mb-4 sm:mb-0 lg:max-w-[30%]">
            <p className="font-medium">Office Address</p>
            <div className="flex items-start justify-center my-3 md:gap-2">
              <CiLocationOn />
              <p className="text-primary-text">
                Dele Asiru street, Okota Lagos
              </p>
            </div>
          </div>
          <div className="mb-4 sm:mb-0">
            <p className="font-medium mb-3">Phone Number</p>
            <div className="flex items-center justify-center my-3 gap-2">
              <PiPhoneCall />
              <a href="tel:08161858407" className="text-black">
                08161858407
              </a>
            </div>
          </div>
          <div className="mb-4 sm:mb-0">
            <p className="font-medium mb-3">Email</p>
            <div className="flex items-center justify-center hover:underline text-center my-3 gap-2">
              <HiOutlineMail />
              <a
                href="mailto:tajudeenomoniyi346@gmai.com"
                className="text-black"
              >
                tajudeenomoniyi346@gmai.com
              </a>
            </div>
          </div>
          <div>
            <p className="font-medium mb-3">Social Media</p>
            <div className="w-full lg:w-auto flex space-x-1 justify-center lg:justify-end mt-4 lg:mt-0">
              <Link
                href="https://www.instagram.com/sheyi00"
                target="_blank"
                className="w-8 h-8 flex items-center justify-center bg-white hover:shadow-lg rounded-full"
              >
                <LuInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <SuccessModal isOpen={isModalOpen} onClose={closeModal} />
      <ErrorModal isOpen={openError} onClose={() => setOpenError(false)} />
    </div>
  );
};

export default Page;
