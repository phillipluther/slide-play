import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl">Fun With Slides!</h1>
      <nav>

      <ul>
        <li><Link href="/deck">The Slide Deck (Presenter)</Link></li>
        <li><Link href="/view">The Slide Deck (Viewer)</Link></li>
        <li><Link href="/remoco">The Remote Control</Link></li>
      </ul>
      </nav>

    </main>
  );
}
