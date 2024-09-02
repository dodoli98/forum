import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Update(props) {
    let client = await connectDB;
    const db = client.db('forum');


    let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) });

    return (
        <div className="p-20">
            <form action="/api/post/update" method="POST">
                <input type="hidden" name="id" value={result._id} />
                <input name="title" defaultValue={result.title} />
                <input name="content" defaultValue={result.content} />
                <button type="submit">수정하기</button>
            </form>
        </div>
    )

}