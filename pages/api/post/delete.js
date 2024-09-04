import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
    let session = await getServerSession(request, response, authOptions)
    console.log(session.user.email);
    
    if (request.method == 'DELETE') {
        let db = (await connectDB).db('forum')
        let result = await db.collection('post').findOne({ _id: new ObjectId(request.body) })
        console.log(result);
       
       
        if (result.author == session.user.email) {
            let deleteItem = await db.collection('post').deleteOne({_id: new ObjectId(request.body)});
            return response.status(200).json('삭제완료')
            console.log(deleteItem);
        } else {
            return response.status(500).json('현재유저와 작성자 불일치')

        }
    }
}