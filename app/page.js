import { connectDB } from "/util/database.js"

export default async function Home() {
  let client = await connectDB;
  const db = client.db('forum');

  // 포스트 collection의 모든 데이터를 가져와서 array로 변환한 값을  result에 저장
  let result = await db.collection('post').find().toArray();

  console.log(result);

  return (
    <main>
      {result[0].title}
    </main>
  )
}