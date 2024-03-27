import React from "react"
import "./Content.css"
import image1 from "../assets/images/image-retro-pcs.jpg"
import image2 from "../assets/images/image-top-laptops.jpg"
import image3 from "../assets/images/image-gaming-growth.jpg"

const Content = () => {
  return (
    <div className="grid grid-cols-1 row-auto gap-4 mt-8 custom-lg:grid-cols-[repeat(3,440px)] custom-lg:grid-rows-[repeat(3,25rem)] custom-lg:gap-x-12">
      <section className="bg-blue-500 custom-lg:col-span-2 custom-lg:object-cover custom-lg:h-[2rem] custom-lg:order-1">
        <img alt="hero" className="img object-cover h-[30rem]" />
      </section>
      <section className="flex flex-col gap-y-4 custom-lg:order-3 custom-lg:col-span-2 custom-lg:mt-24 custom-lg:flex-row">
        <h1 className="font-inter font-extrabold text-[45px] leading-[1] custom-lg:text-[82px] custom-lg:tracking-tighter custom-lg:leading-[1.2] custom-lg:pr-[4.1rem]">
          The Bright Future of Web 3.0?
        </h1>
        <div>
          <p className="font-inter font-light text-neutral-700 custom-lg:text-[1.25rem] custom-lg:leading-[2rem] custom-lg:pt-12 custom-lg:pb-8">
            We dive into the next evolution of web that claims the power of the
            platform back into the hands of the people. But is it really
            fulfilling its promise?{" "}
          </p>
          <button className="h-12 w-52 bg-red-500 mt-4 text-neutral-300 tracking-[0.4em] uppercase text-sm font-bold hover:bg-slate-950 focus:bg-slate-950 outline-none custom-lg:h-20 custom-lg:w-64 custom-lg:text-xl ">
            Read More
          </button>
        </div>
      </section>
      <section className="mt-8 custom-lg:order-2 custom-lg:row-span-2 custom-lg:m-0 custom-lg:bg-slate-950 custom-lg:pr-1 custom-lg:pl-2">
        <div className="bg-slate-950 text-white pt-8 pl-6 pr-8 pb-4">
          <h1 className="text-4xl text-orange-400 font-inter font-bold custom-lg:text-6xl custom-lg:mt-8 ">
            New
          </h1>
          <div className="mt-8 custom-lg:mt-12">
            {articles(
              "Hydrogen vs Electric Cars",
              "Will hydrogen-fueled cars ever catch up to EVs?"
            )}
            <hr className="h-[1px] w-[100%] bg-neutral-300 opacity-50" />
            {articles(
              "The Downside of AI Artistry",
              "What are the possible adverse effects of on-demand AI image generation?"
            )}
            <hr className="h-[1px] w-[100%] bg-neutral-300 opacity-50" />
            {articles(
              "Is VC Funding Drying Up?",
              "Private funding by VC firms is down 50% YOY. We take a look at what that means."
            )}
          </div>
        </div>
      </section>
      <section className="mt-8 mb-16 flex flex-col gap-y-9 custom-lg:order-3 custom-lg:mt-20 custom-lg:flex-row custom-lg:col-span-3 custom-lg:grid custom-lg:grid-cols-[repeat(3,440px)] custom-lg:gap-x-12">
        {articlesWithImage(
          image1,
          "01",
          "Reviving Retro PCs",
          "What happens when old PCs are given modern upgrades?"
        )}
        {articlesWithImage(
          image2,
          "02",
          "Top 10 Laptops of 2024",
          "Our best pics of various needs and budgets."
        )}
        {articlesWithImage(
          image3,
          "03",
          "The Growth of Gaming",
          "How the pandemic has sparked fresh opportunities."
        )}
      </section>
    </div>
  )

  function articlesWithImage(img, number, title, desc) {
    return (
      <div className="flex gap-x-6 font-inter custom-lg:first:ml-0">
        <img
          src={img}
          alt="image"
          className="w-[9rem] object-cover custom-lg:w-[11rem] custom-lg:h-[12rem]"
        />
        <div className="flex flex-col">
          <h1 className="text-neutral-300 font-bold text-4xl mb-1 custom-lg:text-5xl custom-lg:mb-2">
            {number}
          </h1>
          <a className="cursor-pointer text-xl font-extrabold mb-2 hover:text-orange-500 focus:text-orange-500 custom-lg:text-2xl">
            {title}
          </a>
          <p className="text-gray-500 text-lg custom-lg:text-xl">{desc}</p>
        </div>
      </div>
    )
  }

  function articles(title, desc) {
    return (
      <div className="mt-6 custom-lg:mb-10 custom-lg:mt-8">
        <a className="text-2xl font-inter font-semibold tracking-wider hover:text-orange-500 focus:text-orange-500 cursor-pointer custom-lg:text-[27px] custom-lg:leading-10">
          {title}
        </a>
        <p className="mt-2 text-gray-500 text-lg mb-6 custom-lg:text-[25px] custom-lg:mt-3">
          {desc}
        </p>
      </div>
    )
  }
}

export default Content
