import prisma from "@src/prisma";

// type
import type { NextApiRequest, NextApiResponse } from "next";
import type { ApiGetRelatedProductsResponse } from "@src/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiGetRelatedProductsResponse>
) {
  const { method } = req;

  try {
    // lastIdx 기준으로 상품들 요청
    if (method === "GET") {
      const limit = Number(req.query.limit);
      const lastIdx = Number(req.query.lastIdx);
      const productIdx = Number(req.query.productIdx);

      let where: Object = {
        NOT: {
          idx: productIdx,
        },
      };

      if (typeof req.query.keywords === "string") {
        const keywords = req.query.keywords.split(",");

        where = {
          ...where,
          keywords: {
            some: {
              OR: keywords.map((keyword) => ({
                keywordIdx: { equals: keyword },
              })),
            },
          },
        };
      }

      const products = await prisma.product.findMany({
        where,
        take: limit,
        skip: lastIdx === -1 ? 0 : 1,
        ...(lastIdx !== -1 && { cursor: { idx: lastIdx } }),
        orderBy: { updatedAt: "desc" },
      });

      return res.status(200).json({
        products,
        message: "특정 상품과 연관된 상품들을 가져왔습니다.",
      });
    }
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      products: [],
      message: "서버측 에러입니다. 잠시후에 다시 시도해주세요!",
    });
  }
}
