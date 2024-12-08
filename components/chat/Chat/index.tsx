"use client";

import { useState } from "react";

import { EmptyChat, MessageBar, ChatHeader, ChatInfo, MessagesContainer } from "./components";

import useAppStore from "@/store";

const Chat = () => {
  const { chatType } = useAppStore();
  const [chatInfoVisible, setChatInfoVisible] = useState(false);

  return (
    <main
      className={`fixed ${
        chatType && "z-[1000] md:z-0"
      } bg-zinc-950 top-0 left-0 md:relative w-full h-screen md:w-[62vw] lg:w-[70vw] xl:w-[75vw] 2xl:w-[80vw]`}
    >
      {chatType ? (
        <>
          <div className="flex">
            <div
              className={`${
                chatInfoVisible ? "hidden xl:flex" : "flex"
              } relative w-full h-screen flex-col`}
            >
              <ChatHeader
                chatInfoVisible={chatInfoVisible}
                setChatInfoVisible={setChatInfoVisible}
              />

                <MessagesContainer chatInfoVisible={chatInfoVisible} />

              <MessageBar />
            </div>
            {chatInfoVisible && (
              <ChatInfo setChatInfoVisible={setChatInfoVisible} />
            )}
          </div>
        </>
      ) : (
        <EmptyChat />
      )}
    </main>
  );
};

export default Chat;
