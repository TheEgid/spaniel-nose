import { type NextApiRequest, type NextApiResponse } from "next";

const getHandler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    try {
        // const page = Number(req.query.page);
        const limit = Number(req.query.limit);

        // console.log(page, limit);

        // const startIndex = (page - 1) * limit;

        // const submission = await prisma.$transaction([
        //     prisma.blogItem.count(),
        //     prisma.blogItem.findMany({ skip: startIndex, take: limit, orderBy: { createdAt: "desc" } }),
        // ]);

        // const totalPages = 0; // submission[0] ?? 0;
        // const result = {
        //     items: submission[1] as [],
        //     totalPages: Math.ceil(totalPages / limit),
        // };

        const totalPages = 1; // submission[0] ?? 0;
        const result = {
            items: [
                {
                    id: "53f7f5ea-47d4-42a6-b3db-88c78ea19ce8",
                    userId: "66955373-fb2e-48aa-99f4-6d96c4725a70",
                    createdAt: "2024-02-17T12:50:01.951Z",
                    updatedAt: "2024-02-17T12:50:06.233Z",
                    imageA1Name: "A1.jpg",
                    imageB1Name: "B1.jpg",
                    imageB2Name: "B2.jpg",
                    imageC1Name: "C1.jpg",
                    imageC2Name: "C2.jpg",
                    imageC3Name: "C3.jpg",
                    noteHead: "Пример заголовка",
                    noteMain: "Main text",
                    noteBottom: "Пример подвала",
                },
            ],
            totalPages: Math.ceil(totalPages / limit),
        };

        // console.log(result);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json(error);
    }
};

// GET /api/blog-item/paginated?page=1&limit=15
const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    if (req.method === "GET") {
        await getHandler(req, res);
    }
    else {
        res.status(405).send({ message: "Method not allowed" });
    }
};

export default handler;
