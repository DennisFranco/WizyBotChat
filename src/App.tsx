import ChatWindow from "./components/organisms/ChatWindow";

/**
 * Root component of the application.
 * Renders the full chat interface centered on the screen.
 */
function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md h-[90vh] bg-white shadow-lg rounded-xl overflow-hidden">
        <ChatWindow />
      </div>
    </div>
  );
}

export default App;
