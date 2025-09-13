"use client";
import React, { useState } from "react";
import bg from "@/assets/bg.jpg";
import Image from "next/image";
import axios from "axios";
import { toast } from "sonner"
import { Loader2 } from "lucide-react";

const Page = () => {

    const [mediaLoading, setMediaLoading] = useState(false);
    const [investorLoading, setInvestorLoading] = useState(false);

    const [investorForm, setInvestorForm] = useState({
        title: "",
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        phone: "",
        comments: "",
    });
    const [investorErrors, setInvestorErrors] = useState({});

    const [mediaForm, setMediaForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        comments: "",
    });
    const [mediaErrors, setMediaErrors] = useState({});

    const validate = (form) => {
        let errors = {};
        Object.keys(form).forEach((field) => {
            if (!form[field].trim() && (field !== "address2" && field !== "company")) {
                errors[field] = `${field.replace(/([A-Z])/g, " $1")} is required`;
            }
        });
        if (form.email && !/\S+@\S+\.\S+/.test(form.email)) {
            errors.email = "Enter a valid email";
        }
        if (
            form.phone &&
            !/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(form.phone)
        ) {
            errors.phone = "Enter a valid phone number";
        }
        return errors;
    };

    const handleInvestorSubmit = async (e) => {
        e.preventDefault();
        const errors = validate(investorForm);
        setInvestorErrors(errors);
        if (Object.keys(errors).length === 0) {
            setInvestorLoading(true);
            try {
                await axios.post("/api/contact/investor", { ...investorForm });
                toast("Mail has been sent successfully !!");
            } catch (error) {
                toast.error(error.message);
            } finally {
                setInvestorLoading(false);
            }
        }
    };

    const handleMediaSubmit = async (e) => {
        e.preventDefault();
        const errors = validate(mediaForm);
        setMediaErrors(errors);
        if (Object.keys(errors).length === 0) {
            setMediaLoading(true);
            try {
                await axios.post("/api/contact/media", { ...mediaForm });
                toast("Mail has been sent successfully !!");
            } catch (error) {
                toast.error(error.message);
            } finally {
                setMediaLoading(false);
            }
        }
    };

    const renderField = (form, setForm, errors, field, label, placeholder) => (
        <div className="border py-1 px-2 flex flex-col items-start rounded-sm border-gray-400 bg-white">
            <label className="text-gray-500 text-sm">{label}</label>
            <input
                placeholder={placeholder || ""}
                className="border-none w-full text-sm placeholder:text-sm"
                type="text"
                value={form[field]}
                onChange={(e) => setForm({ ...form, [field]: e.target.value })}
            />
            {errors[field] && (
                <p className="text-red-500 text-xs mt-1">{errors[field].toUpperCase()}</p>
            )}
        </div>
    );

    return (
        <div>
            {/* Investor Inquiry */}
            <Image src={bg} className="h-[300px] object-cover" alt="image" />
            <div className="p-2 xl:py-20 xl:w-[60%] text-center mx-auto py-10 pb-20">
                <h1 className="text-2xl xl:text-4xl text-[#6224A9] font-medium">
                    Investor Relations Inquiry
                </h1>
                <form onSubmit={handleInvestorSubmit} className="space-y-5 mt-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                        {renderField(investorForm, setInvestorForm, investorErrors, "title", "TITLE")}
                        {renderField(investorForm, setInvestorForm, investorErrors, "firstName", "FIRST NAME")}
                        {renderField(investorForm, setInvestorForm, investorErrors, "lastName", "LAST NAME")}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                        {renderField(investorForm, setInvestorForm, investorErrors, "email", "EMAIL")}
                        {renderField(investorForm, setInvestorForm, investorErrors, "company", "COMPANY")}
                    </div>

                    {renderField(investorForm, setInvestorForm, investorErrors, "address1", "ADDRESS LINE 1")}
                    {renderField(investorForm, setInvestorForm, investorErrors, "address2", "ADDRESS LINE 2")}

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                        {renderField(investorForm, setInvestorForm, investorErrors, "city", "CITY")}
                        {renderField(investorForm, setInvestorForm, investorErrors, "state", "STATE")}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                        {renderField(investorForm, setInvestorForm, investorErrors, "zip", "ZIP CODE")}
                        {renderField(investorForm, setInvestorForm, investorErrors, "country", "COUNTRY")}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                        {renderField(investorForm, setInvestorForm, investorErrors, "phone", "PHONE", "(000) 000-0000")}
                        {renderField(investorForm, setInvestorForm, investorErrors, "comments", "COMMENTS*")}
                    </div>

                    <p className="text-left text-sm">
                        By providing a telephone number and submitting this form, you are consenting to be contacted by phone or email in response to your Inquiry. Elliott will not send you an SMS text message.
                    </p>

                    <div className="flex justify-start">
                        <button
                            type="submit"
                            className="mt-5 border border-[#6224A9] w-full lg:w-fit text-[#6224A9] px-10 py-3 rounded-sm hover:border-white hover:cursor-pointer"
                        >
                            {
                                investorLoading ? <>Submitting <Loader2 className="animate-spin" /> </> : "Submit"
                            }
                        </button>
                    </div>
                </form>
            </div>

            {/* Media Inquiry */}
            <div className="bg-[#F9FAFB] py-10">
                <div className="p-2 xl:py-20 xl:w-[60%] text-center mx-auto pb-20">
                    <h1 className="text-2xl xl:text-4xl text-[#6224A9] font-medium">
                        Media Inquiry
                    </h1>
                    <form onSubmit={handleMediaSubmit} className="space-y-5 mt-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                            {renderField(mediaForm, setMediaForm, mediaErrors, "firstName", "FIRST NAME")}
                            {renderField(mediaForm, setMediaForm, mediaErrors, "lastName", "LAST NAME")}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                            {renderField(mediaForm, setMediaForm, mediaErrors, "email", "EMAIL")}
                            {renderField(mediaForm, setMediaForm, mediaErrors, "company", "COMPANY")}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                            {renderField(mediaForm, setMediaForm, mediaErrors, "phone", "PHONE", "(000) 000-0000")}
                            {renderField(mediaForm, setMediaForm, mediaErrors, "comments", "COMMENTS*")}
                        </div>

                        <p className="text-left text-sm">
                            By providing a telephone number and submitting this form, you are consenting to be contacted by phone or email in response to your Inquiry. Elliott will not send you an SMS text message.
                        </p>

                        <div className="flex justify-start">
                            <button
                                type="submit"
                                className="mt-5 border border-[#6224A9] w-full lg:w-fit text-[#6224A9] px-10 py-3 rounded-sm hover:border-white hover:cursor-pointer"
                            >
                                {
                                    mediaLoading ? <>Submitting <Loader2 className="animate-spin" /> </> : "Submit"
                                }
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Page;
