import NotionList from './components/client';

export default function Home() {

  const isAuthorized = true;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Ideas</h1>
      {isAuthorized ? (
        <NotionList />
      ) : (
        <div>
          <p>You are not authorized to access this page.</p>
        </div>
      )}
    </div>
  );
}