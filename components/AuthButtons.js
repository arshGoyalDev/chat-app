import { useState, useEffect } from "react";
import { useAuth } from "../context";

import { auth } from "../config/firebase";
import { getRedirectResult } from "firebase/auth";

import { useRouter } from "next/router";

const AuthButtons = ({ form }) => {
  const { googleAuth } = useAuth();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    // popup

    // getRedirectResult(auth)
    //   .then((redirectResult) => {
    //     console.log("hello")
    //   // }
    //   //   const userCred = redirectResult.user;
    //   //   console.log(userCred);

    //   //   setLoading(false);
    //   //   if (form === "sign-up") {
    //   //     router.push({
    //   //       pathname: "get-started",
    //   //     });
    //   //   } else if (form === "login") {
    //   //     router.push({
    //   //       pathname: "login",
    //   //     });
    //   //   }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex items-center gap-2 mt-6">
      <button
        onClick={() => {
          setLoading(true);
          googleAuth(form, setLoading, router);
        }}
        className="flex items-center justify-center gap-2 w-full h-12 py-3 px-4 bg-gray-100 dark:bg-zinc-800 rounded-lg"
      >
        {loading ? (
          <div className="w-5 h-5 border-t-2 border-l-2 border-white border-solid animate-spin rounded-full"></div>
        ) : (
          <>
            <span className="icon">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5892 10.1783H12.1992V13.8883H17.7092C17.5992 14.8083 16.9992 16.1983 15.6692 17.1283C14.8292 17.7183 13.6892 18.1283 12.1992 18.1283C9.55922 18.1283 7.30922 16.3883 6.50922 13.9683C6.29922 13.3483 6.17922 12.6783 6.17922 11.9883C6.17922 11.2983 6.29922 10.6283 6.49922 10.0083C6.55922 9.8283 6.62922 9.63829 6.70922 9.46829C7.65922 7.33829 9.75922 5.85828 12.1992 5.85828C14.0792 5.85828 15.3392 6.6683 16.0692 7.3483L18.8892 4.58829C17.1592 2.97829 14.8992 1.98828 12.1992 1.98828C8.28922 1.98828 4.90922 4.22829 3.26922 7.49829C2.58922 8.85829 2.19922 10.3783 2.19922 11.9883C2.19922 13.5983 2.58922 15.1183 3.26922 16.4783L3.27922 16.4683V16.4783C4.91922 19.7483 8.28922 21.9883 12.1992 21.9883C14.8992 21.9883 17.1692 21.0983 18.8192 19.5683C20.7092 17.8283 21.7992 15.2583 21.7992 12.2083C21.7992 11.3983 21.7292 10.7983 21.5892 10.1783Z"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="font-medium">Google</span>
          </>
        )}
      </button>

      {/* <button className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-gray-100 dark:bg-zinc-800 rounded-lg">
        <span className="icon">
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22 16.19C22 19.83 19.83 22 16.19 22H15C14.45 22 14 21.55 14 21V15.23C14 14.96 14.22 14.73 14.49 14.73L16.25 14.7C16.39 14.69 16.51 14.59 16.54 14.45L16.89 12.54C16.92 12.36 16.78 12.19 16.59 12.19L14.46 12.22C14.18 12.22 13.96 12 13.95 11.73L13.91 9.28C13.91 9.12 14.04 8.98001 14.21 8.98001L16.61 8.94C16.78 8.94 16.91 8.81001 16.91 8.64001L16.87 6.23999C16.87 6.06999 16.74 5.94 16.57 5.94L13.87 5.98001C12.21 6.01001 10.89 7.37 10.92 9.03L10.97 11.78C10.98 12.06 10.76 12.28 10.48 12.29L9.28 12.31C9.11 12.31 8.98001 12.44 8.98001 12.61L9.01001 14.51C9.01001 14.68 9.14 14.81 9.31 14.81L10.51 14.79C10.79 14.79 11.01 15.01 11.02 15.28L11.11 20.98C11.12 21.54 10.67 22 10.11 22H7.81C4.17 22 2 19.83 2 16.18V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81V16.19Z" />
          </svg>
        </span>
        <span className="font-medium">Facebook</span>
      </button> */}
    </div>
  );
};

export default AuthButtons;
