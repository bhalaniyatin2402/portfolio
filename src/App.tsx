import Header from "./components/Header";
import CustomRoutes from "./routes/CustomRoutes";

function App() {
  return (
    <div className="w-[100%] bg-light dark:bg-dark">
      <div className="w-[100%] max-w-[1350px] mx-auto">
        <Header />
        <CustomRoutes />
      </div>
    </div>
  );
}

export default App;
