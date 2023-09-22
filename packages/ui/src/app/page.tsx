import Link from 'next/link';
import PageTitle from '@/components/page-title';

export default function Page() {
  return (
    <main>
      <PageTitle>Fun With Slides!</PageTitle>
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
