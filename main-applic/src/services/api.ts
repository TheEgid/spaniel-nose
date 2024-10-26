// import { getCookie } from "cookies-next";
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import ky, { type BeforeErrorHook, HTTPError } from "ky";
// import router from "next/router";
// import { $userStatus, logoutClicked, userRefreshFx } from "@/model/user/state";
// import { type ILoginResponse, type IUser } from "@/types";

const apiUrl = "/api/";

export const urlPathForFiles = "/files/";

// const beforeRequest: BeforeRequestHook = (request) => {
//     const currentUser = $userStatus.getState().visitor as IUser;

//     if (currentUser?.accessToken) {
//         request.headers.set("Authorization", `Bearer ${currentUser.accessToken}`);
//     }
// };

const beforeError: BeforeErrorHook = async (error) => {
    const { response } = error;

    if (response?.body) {
        const { name, message } = response as unknown as HTTPError;

        error.name = name;
        error.message = message;
    }

    return error;
};

// const beforeRetry: BeforeRetryHook = async () => {
//     const currentRefreshToken = getCookie("refreshToken");

//     if (currentRefreshToken) {
//         const currentUser = $userStatus.getState().visitor as IUser;
//         const tokens: ILoginResponse = await ky
//             .put(`${apiUrl}user-auth/refresh`, {
//                 headers: {
//                     Authorization: `Bearer ${currentRefreshToken}`,
//                 },
//             })
//             .json();
//         const updatedUser: IUser = { ...currentUser, ...tokens };

//         await userRefreshFx({ updatedUser });
//     }
//     else {
//         logoutClicked();
//         void router.push("/");
//     }
// };

export const apiRoot = ky.create({
    prefixUrl: apiUrl,
    credentials: "include",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "X-UA-Compatible": "IE=edge",
    },
    retry: {
        limit: 3,
        methods: ["get", "post", "put", "patch"],
        statusCodes: [403],
        backoffLimit: 3000,
    },
    hooks: {
        // beforeRequest: [beforeRequest],
        beforeError: [beforeError],
        // beforeRetry: [beforeRetry],
    },
});
