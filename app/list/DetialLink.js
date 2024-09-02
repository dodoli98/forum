'use client'

import { usePathname, useSearchParams, useParams, useRouter } from 'next/navigation'

export default function DetailLink() {
    let router = useRouter()

    /**
    usePathname() 쓰면 현재 URL 출력해주고 
  
    useSearchParams() 쓰면 search parameter (query string) 출력해주고
  
    useParams() 쓰면 [dynamic route]에 입력한내용 (URL 파라미터) 을 출력해줍니다. 
  
    자주 안쓸거같은 것들은 외워봤자 까먹으니 필요할 때 검색해서 씁시다. 
     */
    let a = usePathname()
    let b = useSearchParams()
    let c = useParams()
    console.log(a)
    return (
        <div>
            <button onClick={() => { router.push('/') }}>버튼</button>
            <button onClick={() => { router.back() }}>뒤로버튼</button>
            <button onClick={() => { router.forward() }}>앞으로버튼</button>
            <button onClick={() => { router.refresh() }}>버튼</button>
            {/* 근데 페이지를 처음부터 다시 로드하는게 아니라

            이전과 바뀐점을 분석해서 바뀐부분만 새로고침해준다고 합니다. 

            Next.js 공식문서에선 soft refresh라고 부른다.  */}

            <button onClick={() => { router.prefetch('/어쩌구') }}>버튼</button>
            {/* router.prefetch('/어쩌구') 실행하면 '/어쩌구'의 내용을 미리 로드해줍니다. 

            그럼 그 페이지 방문할 때 매우 빠르게 방문할 수 있습니다. 

            빠른 사이트를 만들고 싶을 때 쓸 수 있는 유용한 기능입니다.  */}
        </div>

    )
}