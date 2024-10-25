"use client";

import useAppStore from "@/store";
import { HOST } from "@/utils/constants";
import { useEffect } from "react";

const UserMenu = () => {
  const { userInfo } = useAppStore();

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  return (
    <div className="flex py-6 justify-between items-center px-4">
      <div className="flex items-center justify-center gap-4">
        <div className="grid place-content-center w-16 h-16 rounded-lg bg-zinc-800 overflow-hidden">
          {userInfo.profilePic ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={`${HOST}/${userInfo.profilePic}`}
              alt={userInfo.firstName}
            />
          ) : (
            <span className="fill-zinc-700">
              <svg
                width="60"
                height="40"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          )}
        </div>

        <div className="flex flex-col gap-0.5">
          <h2 className="text-xl font-bold">{`${userInfo.firstName} ${userInfo.lastName}`}</h2>
          <p className="text-zinc-300">{userInfo.status}</p>
        </div>
      </div>

      <div>
        <button className="py-1 px-1 border-2 border-transparent focus:border-zinc-700 rounded-lg">
          <span className="fill-white">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10Z"
                strokeWidth="1.5"
              />
              <path
                d="M19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10Z"
                strokeWidth="1.5"
              />
              <path
                d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
                strokeWidth="1.5"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
