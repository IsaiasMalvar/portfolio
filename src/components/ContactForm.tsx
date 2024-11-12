"use client";

import React, { FormEvent, useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { TechIcon } from "./TechIcon";
import houseIcon from "@/assets/icons/icons8-home.svg";

import Link from "next/link";

const ContactForm: React.FC = () => {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  console.log(API_KEY);

  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState<string | null>(null);

  const [name, setName] = useState<string | null>("");
  const [email, setEmail] = useState<string | null>("");
  const [text, setText] = useState<string | null>("");

  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isMessageFocused, setIsMessageFocused] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  if (!API_KEY) {
    console.error("API_KEY is not defined");
    return null;
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      console.error("Form values are missing");
      setMessageStatus("Please fill out all fields.");
      setLoading(false);
      return;
    }

    const data = {
      access_key: API_KEY,
      name,
      email,
      message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.error("Error with API response", response);
        setMessageStatus("Submission failed, please try again.");
        setLoading(false);
        return;
      }

      const result = await response.json();
      if (result.success) {
        setLoading(false);
        setMessageStatus("Thanks for your time! ⭐");
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
        }, 4000);
      }
    } catch (error) {
      console.error("Request failed", error);
      setMessageStatus("Try again, please.");
      setError(true);
      setShowModal(true);
      setLoading(false);
      setTimeout(() => {
        setShowModal(false);
        setError(false);
      }, 4000);
    }

    setName("");
    setEmail("");
    setText("");
  };

  return (
    <div className="relative overflow-clip">
      <section className="xs:hidden md:relative md:flex md:h-screen md:items-center md:justify-center md:overflow-clip md:p-2">
        <div className="hero-ring size-[1600px]"></div>
        <div className="hero-ring size-[1820px]"></div>
        <div className="hero-ring size-[2000px]"></div>
        <div
          className="after:!outline-non p-15 relative z-20 flex flex-col bg-transparent after:z-10 md:w-[1200px]"
          style={{
            outlineColor: "transparent",
          }}
        >
          <SectionHeader eyebrow="I’d Love to Hear from You!" size="4" />
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start justify-center gap-10 text-wrap p-5 pt-24 text-sm"
          >
            <input type="hidden" name="access_key" value={API_KEY} />
            <div className="flex flex-col text-wrap">
              <label hidden htmlFor="name">
                Name
              </label>
              <input
                value={name!}
                type="text"
                onChange={handleNameChange}
                name="name"
                onFocus={() => setIsNameFocused(true)}
                onBlur={() => setIsNameFocused(false)}
                required
                placeholder="What is your&#10;name?"
                className={`${!isNameFocused ? "cursor-pointer" : "cursor-auto"} bg-transparent text-slate-50 ${isNameFocused && !name ? "animate-pulse" : ""} w-[700px] text-wrap border border-white/20 border-l-transparent border-r-transparent border-t-transparent p-3 font-serif outline-none placeholder:text-wrap placeholder:font-sans md:h-auto md:text-3xl`}
              />
            </div>
            <div className="flex flex-col">
              <label hidden htmlFor="email">
                Your email
              </label>
              <input
                value={email!}
                type="email"
                name="email"
                onChange={handleEmailChange}
                onBlur={() => setIsEmailFocused(false)}
                onFocus={() => setIsEmailFocused(true)}
                required
                placeholder="What is your email?"
                className={`${!isEmailFocused ? "cursor-pointer" : "cursor-auto"} bg-transparent text-slate-50 outline-none ${isEmailFocused && !email ? "animate-pulse" : ""} w-[700px] text-wrap border border-white/20 border-l-transparent border-r-transparent border-t-transparent bg-transparent p-3 font-serif placeholder:text-wrap placeholder:font-sans md:h-auto md:text-3xl`}
              />
            </div>
            <div className="flex flex-col overflow-clip">
              <label hidden htmlFor="message">
                Message
              </label>
              <textarea
                required
                value={text!}
                onChange={handleTextChange}
                onFocus={() => setIsMessageFocused(true)}
                onBlur={() => setIsMessageFocused(false)}
                className={`${!isMessageFocused ? "cursor-pointer" : "cursor-auto"} bg-transparent text-slate-50 ${isMessageFocused && !text ? "animate-pulse" : ""} h-[250px] w-[750px] text-wrap p-3 font-serif outline-none placeholder:font-sans md:text-3xl`}
                name="message"
                placeholder="Enter Message"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="mx-auto flex w-[600px] items-center justify-center border border-white/20 border-l-transparent border-r-transparent border-t-transparent bg-transparent p-4 text-center text-3xl tracking-wider"
            >
              <span className="duration-100 active:scale-125">
                {loading ? "Submitting..." : "Send"}
              </span>
            </button>
          </form>
        </div>
      </section>
      <section className="relative flex h-screen flex-col items-center justify-start gap-9 overflow-x-clip overflow-y-clip p-2 pt-[7rem] md:hidden">
        <SectionHeader eyebrow="I’d Love to Hear from You!" size="5" />

        <form
          onSubmit={handleSubmit}
          className="xs:gap-10 xs:p-6 xs:text-base flex w-full flex-col items-start justify-center gap-8 text-wrap p-5 text-sm"
        >
          <input type="hidden" name="access_key" value={API_KEY} />

          <div className="flex w-full flex-col text-wrap">
            <label hidden htmlFor="name">
              Name
            </label>
            <input
              type="text"
              onChange={handleNameChange}
              name="name"
              onFocus={() => setIsNameFocused(true)}
              onBlur={() => setIsNameFocused(false)}
              required
              placeholder="What is your&#10;name?"
              className={`${!isNameFocused ? "cursor-pointer" : "cursor-auto"} bg-transparent text-slate-50 ${isNameFocused && !name ? "animate-pulse" : ""} xs:h-12 xs:text-xl text-wrap border border-white/20 border-l-transparent border-r-transparent border-t-transparent p-3 font-serif outline-none placeholder:text-wrap placeholder:font-sans md:h-auto md:text-3xl`}
            />
          </div>
          <div className="flex w-full flex-col text-wrap">
            <label hidden htmlFor="email">
              Your email
            </label>
            <input
              type="email"
              name="email"
              onChange={handleEmailChange}
              onBlur={() => setIsEmailFocused(false)}
              onFocus={() => setIsEmailFocused(true)}
              required
              placeholder="What is your email?"
              className={`${!isEmailFocused ? "cursor-pointer" : "cursor-auto"} bg-transparent text-slate-50 outline-none ${isEmailFocused && !email ? "animate-pulse" : ""} xs:h-12 xs:text-xl text-wrap border border-white/20 border-l-transparent border-r-transparent border-t-transparent bg-transparent p-3 font-serif placeholder:text-wrap placeholder:font-sans md:h-auto md:text-3xl`}
            />
          </div>
          <div className="flex w-full flex-col text-wrap">
            <label hidden htmlFor="message">
              Message
            </label>
            <textarea
              required
              onChange={handleTextChange}
              onFocus={() => setIsMessageFocused(true)}
              onBlur={() => setIsMessageFocused(false)}
              className={`${!isMessageFocused ? "cursor-pointer" : "cursor-auto"} bg-transparent text-slate-50 ${isMessageFocused && !text ? "animate-pulse" : ""} xs:h-24 xs:text-xl w-full p-3 font-serif outline-none placeholder:font-sans md:h-auto md:text-3xl`}
              name="message"
              placeholder="Enter Message"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="xs:text-xl xs:w-[50%] mx-auto mt-16 flex items-center justify-center border border-white/20 border-l-transparent border-r-transparent border-t-transparent bg-transparent p-2 text-center text-4xl tracking-wider duration-300"
          >
            <span className="duration-100 active:scale-125">
              {loading ? "Submitting..." : "Send"}
            </span>
          </button>
        </form>
      </section>
      <div className="xs:bottom-10 absolute bottom-0 left-1/2 h-[30px] w-[150px] -translate-x-1/2 pb-1">
        <Link href={"/"} className="flex items-end justify-center gap-2">
          <span className="xs:text-sm bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent md:text-xl">
            Main page
          </span>
          <div className="">
            <TechIcon component={houseIcon} />
          </div>
        </Link>
      </div>
      <div
        className={`${showModal ? "block" : "hidden"} ${error ? "bg-red-400" : ""} absolute right-10 top-10 z-30 animate-bounce rounded-full border border-green-400 border-transparent bg-green-400/35 p-5 font-serif text-white/90 outline-none transition-all duration-300 after:outline-transparent`}
      >
        {messageStatus}
      </div>
    </div>
  );
};

export default ContactForm;
