import { connectDB } from "@/util/database"

export default async function handler(request, response) {
    if (request.method == 'POST') {
        if (request.body.title == '') {
            return response.status(500).json('제목써라')
        }
        try {
            let db = (await connectDB).db('forum')
            let result = db.collection('post').insertOne(request.body)
            response.redirect(302, '/list')
        } catch (error) {
            return response.status(500).json('db오류')
        }
    }
} 