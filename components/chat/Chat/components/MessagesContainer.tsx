"use client";

import useAppStore from "@/store";

import { useEffect, useRef } from "react";

import Message from "./Message";
import GroupMessage from "./GroupMessage";

const MessagesContainer = ({
  chatInfoVisible,
}: {
  chatInfoVisible: boolean;
}) => {
  const { messages, chatData } = useAppStore();
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView();
  }, [messages]);

  return (
    <div id="messages-container" className={`flex-1 overflow-y-auto`}>
      <div
        id="messages"
        className={`flex flex-col w-[90%] max-w-[1000px] mx-auto gap-4 p-6 lg:py-10 ${
          chatInfoVisible ? "lg:px-10" : "px-0"
        } 2xl:px-0`}
      >
        {messages.map((message) => {
          return chatData?.chatType === "personal" ? (
            <Message key={message._id} message={message} />
          ) : (
            <GroupMessage key={message._id} message={message} />
          );
        })}
      </div>
      <div ref={scrollRef} />
    </div>
  );
};

export default MessagesContainer;
