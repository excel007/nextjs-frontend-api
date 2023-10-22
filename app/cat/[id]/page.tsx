import React from 'react'
type Props = {
    id:string
}
export default function Page({ params }: Props) {
  return (
    <div>{params.id}</div>
  )
}
