export default function handler(요청, 응답) {
    // 현재 날짜와 시간을 가져오기
    const currentDate = new Date();

   

    return(
        응답.status(200).json(currentDate)
    )
}