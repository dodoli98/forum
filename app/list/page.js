import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetialLink";
import ListItem from "./listItem";

export default async function List() {
    let client = await connectDB;
    const db = client.db('forum');

    // 포스트 collection의 모든 데이터를 가져와서 array로 변환한 값을  result에 저장
    let result = await db.collection('post').find().toArray();
    return (
        <div className="list-bg">
            <ListItem result={result}></ListItem>
            <DetailLink></DetailLink>
        </div>
    )
}


/*
    글수정 기능 
    1. 글마다 수정버튼 만들기, 누르면 수정페이지 이동
    2. 수정페이지 만들기 (해당 글을 DB에서 가져와서 미리 채워노야함)
    3. 발행누렴 DB수정

*/