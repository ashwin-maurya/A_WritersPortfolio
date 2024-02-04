import React from "react";
import { ArrowRightBlack } from "../../assets/icons";

export default function Cards() {
  return (
    <>
      <div className="flex gap-10 max-md:gap-10 max-sm:gap-7 py-10 pb-20 max-sm:py-10 flex-col px-32 max-sm:px-0 mt-5 max-md:mt-0">
        {/* Hardcoded Data 1 */}
        <div className="flex bg-green-50 shadow-sm  rounded-sm">
          <div className="px-12 py-10">
            <h1 className="pb-2 text-4xl relative font-Gamiliademo capitalize">
              Won the 2020 Short Story Contest
            </h1>
            <a
              href="https://defenestrationism.net/announcing-the-winners-of-the-2020-short-story-contest/"
              target="_blank"
              className="cursor-pointer"
            >
              <h5 className="italic font-CooperHevitt text-xl my-1 font-bold">
                by Defenestrationism.net
              </h5>
            </a>

            <a
              href="https://defenestrationism.net/announcing-the-winners-of-the-2020-short-story-contest/"
              target="_blank"
              className="cursor-pointer"
            >
              <div className="max-sm:p-1 max-md:mt-2 max-md:m-0 w-auto max-w-[200px] flex justify-center items-center flex-row text-black border-2 p-2 gap-2 max-md:gap-1 max-sm:text-[14px] border-black mt-5">
                <span>READ MORE</span>
                <img
                  src={ArrowRightBlack}
                  className="w-8 px-1 max-md:pl-0 max-md:w-5 max-md:px-0 pl-2"
                  alt=""
                />
              </div>
            </a>
          </div>
        </div>

        {/* Hardcoded Data 2 */}
        <div className="flex bg-purple-50 shadow-sm ">
          <div className="px-12 py-10">
            <h1 className="pb-2 text-4xl relative font-Gamiliademo capitalize">
              Longlisted for the 2022 TFA Award in Creative writing
            </h1>
          </div>
        </div>

        {/* Hardcoded Data 3 */}
        <div className="flex bg-orange-50 shadow-sm">
          <div className="px-12 py-10">
            <h1 className="pb-2 text-4xl relative font-Gamiliademo capitalize">
              Longlisted for the 2024 TFA Award in Creative Writing
            </h1>

            <a
              href="https://totofundsthearts.org/awards/creative-writing-in-english"
              target="_blank"
              className="cursor-pointer"
            >
              <div className="max-sm:p-1 max-md:mt-2 max-md:m-0 w-auto max-w-[200px] flex justify-center items-center flex-row text-black border-2 p-2 gap-2 max-md:gap-1 max-sm:text-[14px] border-black  mt-5">
                <span>READ MORE</span>
                <img
                  src={ArrowRightBlack}
                  className="w-8 px-1 max-md:pl-0 max-md:w-5 max-md:px-0 pl-2"
                  alt=""
                />
              </div>
            </a>
          </div>
        </div>
        {/* Hardcoded Data 4 */}
        <div className="flex bg-blue-50 shadow-sm">
          <div className="px-12 py-10">
            <h1 className="pb-2 text-4xl relative font-Gamiliademo capitalize mb-5">
              Interviewed by MoneyControl
            </h1>
            <a
              href="https://www.moneycontrol.com/news/lifestyle/books/ai-writing-part-1-four-writers-share-why-human-writing-is-unlikely-to-replace-llm-based-predictive-writing-12008711.html/amp?fbclid=PAAaaWIZ8hQ3jz9c2EtQDNdciSzuMy-QFz5QzrklCImde8xcYiEpjzS2BMgB4_aem_Ae79GF5z7S66-Rfb-nlU6QnK75QqQqTjVtTS2wC-K8fPcu30setZ0nYBHg3coGirNiA"
              target="_blank"
              className="cursor-pointer"
            >
              <h2 className="font-CooperHevitt text-2xl font-semibold mb-2">
                AI & writing{" "}
              </h2>
              <h3 className="font-CooperHevitt text-2xl mb-2">
                <b> Part 1:</b> Four authors on why human writing is unlikely to
                be replaced by LLM-based predictive writing
              </h3>
            </a>
            <a
              href="https://www.moneycontrol.com/news/lifestyle/books/ai-writing-part-1-four-writers-share-why-human-writing-is-unlikely-to-replace-llm-based-predictive-writing-12008711.html/amp?fbclid=PAAaaWIZ8hQ3jz9c2EtQDNdciSzuMy-QFz5QzrklCImde8xcYiEpjzS2BMgB4_aem_Ae79GF5z7S66-Rfb-nlU6QnK75QqQqTjVtTS2wC-K8fPcu30setZ0nYBHg3coGirNiA"
              target="_blank"
              className="cursor-pointer"
            >
              <div className="max-sm:p-1 max-md:mt-2 max-md:m-0 w-auto max-w-[200px] flex justify-center items-center flex-row text-black border-2 p-2 gap-2 max-md:gap-1 max-sm:text-[14px] border-black  mt-2">
                <span>READ MORE</span>
                <img
                  src={ArrowRightBlack}
                  className="w-8 px-1 max-md:pl-0 max-md:w-5 max-md:px-0 pl-2"
                  alt=""
                />
              </div>
            </a>
            <a
              href="https://www.moneycontrol.com/news/trends/lifestyle/ai-writing-part-2-a-failed-chatgpt-experiment-and-a-few-glad-authors-12008821.html"
              target="_blank"
              className="cursor-pointer"
            >
              <h3 className="font-CooperHevitt text-2xl mb-2 mt-8">
                <b> Part 2:</b> A failed ChatGPT experiment and a few glad
                authors
              </h3>
            </a>
            <a
              href="https://www.moneycontrol.com/news/trends/lifestyle/ai-writing-part-2-a-failed-chatgpt-experiment-and-a-few-glad-authors-12008821.html"
              target="_blank"
              className="cursor-pointer"
            >
              <div className="max-sm:p-1 max-md:mt-2 max-md:m-0 w-auto max-w-[200px] flex justify-center items-center flex-row text-black border-2 p-2 gap-2 max-md:gap-1 max-sm:text-[14px] border-black  mt-2">
                <span>READ MORE</span>
                <img
                  src={ArrowRightBlack}
                  className="w-8 px-1 max-md:pl-0 max-md:w-5 max-md:px-0 pl-2"
                  alt=""
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
