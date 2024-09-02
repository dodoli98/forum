

import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
    console.log("hihi", request.body);

    if (request.method === 'POST') {
        const { id, title, content } = request.body;

        if (!title) {
            return response.status(400).json('제목을 써주세요');
        }

        try {
            let db = (await connectDB).db('forum');
            let result = await db.collection('post').updateOne(
                { _id: new ObjectId(id) },  // id를 ObjectId로 변환
                { $set: { title: title, content: content } }
            );
            response.redirect(302, '/list');
        } catch (error) {
            console.error(error);
            return response.status(500).json('데이터베이스 오류');
        }
    } else {
        return response.status(405).json('허용되지 않은 메서드');
    }
}
