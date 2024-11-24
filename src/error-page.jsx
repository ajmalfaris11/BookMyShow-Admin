import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
      <div className="text-center max-w-md px-6">
        <h1 className="text-6xl font-bold mb-4">Oops!</h1>
        <p className="text-xl font-medium mb-2">Something went wrong.</p>
        <p className="text-gray-400 italic mb-6">
          {error.statusText || error.message}
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}
