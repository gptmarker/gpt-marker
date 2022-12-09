import React from 'react'

export default function og() {
  return (
    <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          backgroundColor: "#F7F7F8",
          borderRadius: "0px",

        }}
      >
        <div tw="flex p-8 bg-[#F7F7F8] w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://www.gptmarker.com/chatgpt.png"
            width="48"
            height="48"
            alt="GPTMarker Avatar"
            tw="rounded-md mr-4 mt-4"
          />
          <p
            style={{
              color: "#00G",
              fontSize: "30px",
              whiteSpace: "pre-wrap",

            }}
          >
            First question to ChatGPT asked by users to abuse the questions and fill the questions they can add more long questions to here?
          </p>
        </div>
        <div tw="flex pl-8 py-8 bg-[#fff] w-full ">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://www.gptmarker.com/chatgpt.png"
            width="48"
            height="48"
            alt="GPTMarker Avatar"
            tw="rounded-md mr-4 mt-4"
          />
          <div
            style={{
              color: "black",
              fontSize: "30px",
              whiteSpace: "pre-wrap",
              lineHeight: "42px",
              paddingTop:"12px"
            }}
          >
            First question to ChatGPT asked by users to abuse the questions and fill the questions they can add more long questions to here?
          </div>

        </div>
        <div tw="flex items-center h-10 px-4 py-2 absolute bottom-0 right-0 bg-[#363543]/55 rounded-tl-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
           <img
            src="https://www.gptmarker.com/chatgpt.png"
            width="16"
            height="16"
            alt="GPTMarker - "
            tw="rounded-sm mr-2"
          />
          <p
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              color: "white",
              marginTop: "16px",
            }}
          >
            GPTMarker - Save and share your ChatGPT conversations
          </p>
        </div>

      </div>
  )
}
