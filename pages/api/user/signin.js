import { connectDB } from "@/util/database";

export default async function handler(request, response) {
    if (request.method === "POST") {
        const { loginId, passwd } = request.body;
        console.log(loginId, passwd)
        // 데이터베이스 연결
        let client = await connectDB;
        const db = client.db('forum');

        try {
            let user = await db.collection("user").findOne({ loginId: loginId, passwd: passwd });

            console.log(user);
            if (user) {
                // 유저가 존재하고 인증이 성공한 경우
                response.status(200).json(user);
            } else {
                // 유저가 없거나 패스워드가 일치하지 않는 경우
                response.status(401).json('Invalid credentials');
            }
        } catch (error) {
            console.error("Database error:", error);
            response.status(500).json('Database error');
        }
    } else {
        response.status(405).json('Method Not Allowed');
    }
}
``