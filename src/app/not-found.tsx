import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <h3>Not found content</h3>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href={'/'}>Return home</Link>
    </div>
  )
}
