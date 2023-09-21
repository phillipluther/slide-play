import PageTitle from '../../components/page-title';
import FakeDeck from '../../components/fake-deck';

export default function DeckPage() {
  return (
    <main>
      <PageTitle>What the Presenter Sees</PageTitle>
      <FakeDeck showControls />
    </main>
  );
}
