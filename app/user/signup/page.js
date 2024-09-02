export default function SignUp() {
    return (
        <div>
            <h2>회원가입</h2>
            <form action="/api/user/signup" method="POST">
                <input type="text" name="loginId" placeholder="아이디"></input>
                <input type="password" name="passwd" placeholder="비밀번호"></input>
                <button type="submit">등록</button>
            </form>
        </div>
    )
}