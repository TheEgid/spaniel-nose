import { type NextApiRequest, type NextApiResponse } from "next";
// import path from "path";
// import { getHandbookFromExcelFile, waitFor } from "src/tools/some-tools";

const getHandler = async (res: NextApiResponse): Promise<void> => {
    try {
        const content = 777; // getHandbookFromExcelFile(path.join(process.cwd(), "public", "baza", "_ss.xlsx"), "sh1");

        // await waitFor(0);

        res.status(200).json(content);
    }
    catch (error) {
        res.status(403).json(error);
    }
};

// GET /infra/segment
const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    if (req.method === "GET") {
        await getHandler(res);
    }
    else {
        res.status(405).send({ message: "Method not allowed" });
    }
};

export default handler;
