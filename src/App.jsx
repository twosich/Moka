import Corpse from "./modules/body";
import Navbar from "./modules/navbar";

function App() {
  return (
    <body className="bg-[url('./assets/wal.jpg')] bg-cover bg-center h-screen w-full m-0 p-0">
      <div>
        <Navbar className="m-0" />
        <Corpse />
      </div>
    </body>
  );
}

export default App;
