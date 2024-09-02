export default function SignIn() {
    return (
        <div>
            <h2>로그인</h2>
            <form action="/api/user/signin" method="POST">
                <input type="text" name="loginId" placeholder="아이디"></input>
                <input type="password" name="passwd" placeholder="비밀번호"></input>
                <button type="submit">로그인</button>
            </form>
        </div>
    )
}