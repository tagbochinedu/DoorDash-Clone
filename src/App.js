import Header from "./Components/Header";
import FirstViewPort from "./Components/FirstViewPort";
import Offers from "./Components/Offers";

function App() {
  return (
    <>
      <div className="bg-background md:h-screen bg-cover py-6 md:px-none">
        <Header />
        <FirstViewPort />
      </div>
      <Offers />
    </>
  );
}

export default App;
