import { connectDB } from "@/util/database";

export default async function handler(요청, 응답) {
    let client = await connectDB;
    const db = client.db('forum');

    // 포스트 collection의 모든 데이터를 가져와서 array로 변환한 값을  result에 저장
    let result = await db.collection('post').find().toArray();
    return (
         응답.status(200).json(result)
    )
}