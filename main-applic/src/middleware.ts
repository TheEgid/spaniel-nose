import { type NextMiddleware, NextResponse } from "next/server";

export const middleware: NextMiddleware = (_req: any) => {
    // const { url } = req;

    // const pathsApiNames = [url].filter((e) =>
    //     e.includes("/api/")
    //     && !e.includes("api/user-auth/")
    //     && !e.includes("api/infra/")
    //     && !e.includes("api/geo-img/upload/")).at(0);

    // if (pathsApiNames) {
    //     const authorizationHeader = req.headers.get("authorization");
    //     const token = authorizationHeader?.split(" ").at(1);

    //     if (!token) {
    //         return NextResponse.json({ message: "Auth required" }, { status: 401 });
    //     }
    // }

    return NextResponse.next();
};
