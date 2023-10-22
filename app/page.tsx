import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      API Lists
      <ul>
        <li><Link href="cat">CAT</Link></li>
        <li><Link href="#">USER</Link></li>
      </ul>
    </div>
  )
}
