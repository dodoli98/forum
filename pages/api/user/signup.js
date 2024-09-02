import { connectDB } from "@/util/database"

export default async function handler(request, response) {

    if (request.method == "POST") {
        if (request.loginId == "") {
            return response.status(500).json("아이디를 입력해 주세요")
        } 
        try {
            let db = (await connectDB).db('forum')
            let result = db.collection('user').insertOne(request.body)
            response.redirect(302, '/user/signin')
        } catch (error) {
            return response.status(500).json('db오류')
        }
    }


}