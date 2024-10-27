import "./App.css";
import Header from "./header/Header";
import ProjectContent from "./projectContent/ProjectContent";
import DataContextProvider from "./provider/DataContextProvider";
import Sidebar from "./sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <DataContextProvider>
            <Header />
            <ProjectContent />
          </DataContextProvider>
        </main>
      </div>
    </>
  );
}

export default App;
