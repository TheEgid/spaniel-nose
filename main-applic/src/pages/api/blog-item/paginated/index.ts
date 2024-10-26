import { type NextApiRequest, type NextApiResponse } from "next";
import prisma from "../../../../database-connector";

interface PaginatedResult {
    items: any[],
    totalPages: number
}

const calculatePagination = (page: number, limit: number): { startIndex: number, limit: number } => ({
    startIndex: (page - 1) * limit,
    limit,
});

const getHandler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;

        const { startIndex, limit: take } = calculatePagination(page, limit);

        const [totalItems, items] = await prisma.$transaction([
            prisma.blogItem.count(),
            prisma.blogItem.findMany({
                skip: startIndex,
                take,
                orderBy: { createdAt: "desc" },
            }),
        ]);

        const totalPages = Math.ceil(totalItems / limit);

        const result: PaginatedResult = { items, totalPages };

        res.status(200).json(result);
    }
    catch (error) {
        console.error("Error fetching paginated data:", error);
        res.status(500).json({ message: "Internal Server Error" });
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
