"use client";

import { useEffect, useRef, useState } from "react";

import useAppStore from "@/store";

import { apiClient } from "@/lib/api-client";
import {
  ADD_PROFILE_PIC_ROUTE,
  DELETE_PROFILE_PIC_ROUTE,
  HOST,
  UPDATE_PROFILE_ROUTE,
} from "@/utils/constants";

import { useRouter } from "next/navigation";

import { useError } from "@/context";

const ProfilePage = () => {
  const router = useRouter();
  const { userInfo, setUserInfo } = useAppStore();
  const errorContext = useError();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("Hey, there I am using Chaters!");

  const [profilePic, setProfilePic] = useState("");
  const [error, setError] = useState("");

  const [buttonHovered, setButtonHovered] = useState(false);

  const fileUploadRef = useRef<HTMLInputElement>(null);

  const checkForErrors = () => {
    if (!firstName) {
      setError("First name is required");
      return false;
    }

    setError("");
    return true;
  };

  const updateProfile = async () => {
    if (checkForErrors()) {
      try {
        const response = await apiClient.patch(
          UPDATE_PROFILE_ROUTE,
          { firstName, lastName, status },
          { withCredentials: true }
        );

        if (response.status === 200) {
          setUserInfo(response.data.user);
          router.push("/chat");
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setError(error.message);
      }
    }
  };

  useEffect(() => {
    if (userInfo.email) {
      setFirstName(userInfo.firstName);
    }
    if (userInfo.lastName) {
      setLastName(userInfo.lastName);
    }

    if (userInfo.status) {
      setStatus(userInfo.status);
    }

    if (userInfo.profilePic) {
      setProfilePic(`${HOST}/${userInfo.profilePic}`);
    }
  }, [userInfo]);

  const handleFileInputClick = () => {
    if (!profilePic) {
      fileUploadRef.current!.click();
    }
  };

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files![0];

    if (file) {
      const formData = new FormData();
      formData.append("profile-image", file);

      try {
        const response = await apiClient.post(ADD_PROFILE_PIC_ROUTE, formData, {
          withCredentials: true,
        });

        if (response.status === 200) {
          setUserInfo(response.data.user);
          setProfilePic(response.data.user.profilePic);
        }
      } catch (error) {
        errorContext?.setErrorMessage("Failed to update profile picture");
      }
    }
  };

  const deleteProfilePic = async () => {
    try {
      const response = await apiClient.delete(DELETE_PROFILE_PIC_ROUTE, {
        withCredentials: true,
      });

      if (response.status === 200) {
        const newUserInfo = userInfo;
        newUserInfo.profilePic = "";

        setProfilePic("");
        setUserInfo(newUserInfo);
      }
    } catch (error) {
      errorContext?.setErrorMessage("Failed to delete profile picture");
    }
  };

  return (
    <main className="min-h-screen xl:p-8 grid place-content-center">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        <div>
          <div className="relative bg-zinc-900 border-2 border-zinc-700 rounded-2xl overflow-hidden">
            <div
              onMouseEnter={() => setButtonHovered(true)}
              onMouseLeave={() => setButtonHovered(false)}
              onClick={handleFileInputClick}
              className="relative w-[80vw] h-[80vw] max-w-[360px] max-h-[360px] grid place-content-center"
            >
              {buttonHovered && !profilePic && (
                <div className="grid place-content-center absolute z-20 top-0 left-0 w-full h-full bg-zinc-950 bg-opacity-90 transition-all duration-300 cursor-pointer">
                  <span className="stroke-white">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12H18"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 18V6"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              )}
              {profilePic ? (
                <div>
                  {
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={profilePic}
                      alt={firstName}
                      className="w-full h-full"
                    />
                  }
                  <button
                    onClick={deleteProfilePic}
                    className="absolute top-2 right-2 pt-1.5 p-2 bg-zinc-800 border-2 border-zinc-700 rounded-lg"
                  >
                    <span className="stroke-white">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          stroke="rgb(39 39 42)"
                          width="23"
                          height="23"
                        />
                        <path
                          d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.85 9.14001L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79002C6.00002 22 5.91002 20.78 5.80002 19.21L5.15002 9.14001"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.33 16.5H13.66"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.5 12.5H14.5"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              ) : (
                <span className="fill-zinc-700">
                  <svg
                    width="150"
                    height="150"
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
            <input
              type="file"
              ref={fileUploadRef}
              onChange={handleImageChange}
              name="profile-image"
              accept=".png, .jpg, .svg, .jpeg, .webp"
              className="absolute hidden top-0 left-0 w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-[80vw] max-w-[400px]">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold">Name</h2>
            <div className="relative flex flex-col gap-1">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={`py-4 px-4 w-full bg-transparent border-2 border-neutral-900 ${
                  error
                    ? "placeholder:text-red-600 text-red-600"
                    : "placeholder:text-neutral-600 text-white"
                } rounded-t-lg`}
                autoComplete="off"
                placeholder="first name"
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="py-4 px-4 w-full bg-transparent border-2 border-neutral-900 rounded-b-lg placeholder:text-neutral-600 text-white"
                autoComplete="off"
                placeholder="last name"
              />
              {error && (
                <div className="absolute right-0 top-3 mt-4 flex items-center justify-center gap-2 text-sm text-center text-red-500">
                  <div className="bg-neutral-900 py-1.5 pb-1 px-2 rounded-ss-lg">
                    {error}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold">Status</h2>
            <input
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="py-4 px-4 w-full bg-transparent border-2 border-neutral-900 placeholder:text-neutral-600 text-white rounded-lg"
              autoComplete="off"
              placeholder="status"
            />{" "}
          </div>
          <button
            onClick={updateProfile}
            className="font-bold mt-3 w-full py-[14px] text-black bg-primary rounded-xl hover:text-white hover:bg-zinc-800 hover:bg-opacity-10 transition-all duration-300"
          >
            Save Changes
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
