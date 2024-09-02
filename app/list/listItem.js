'use client'

import Link from "next/link";

export default function ListItem({ result }) {
    return (
        <div>
            {
                result.map(function (a, i) {
                    return (
                        <div className="list-item" key={i}>
                            <Link href={`/detail/${result[i]._id}`}>{result[i].title}</Link>
                            <p>1월 1일</p>

                            <button>
                                <Link href={`/update/${result[i]._id}`}>글 수정</Link>
                            </button>
                            <br />
                            <span onClick={(e) => {
                                fetch('/api/post/delete', { method: 'DELETE', body: result[i]._id })
                                .then(() => {
                                    e.target.parentElement.style.opacity = 0;
                                    setTimeout(() => {
                                        e.target.parentElement.style.display = 'none';
                                    }, 1000)
                                })
                            }}>
                                🗑️
                            </span>

                        </div>
                    )
                })
            }
        </div>
    )
}