import "./App.css";
import Activealert from "./components/ActiveAlert";

export default function App() {
  return (
    <div className="w-screen px-1.5 lg:px-6 md:px-3 flex flex-col items-center box-border">
      <div className="container max-w-5xl mt-10">
        <Activealert className="mt-1" />
        <Activealert className="mt-1" />
        <Activealert className="mt-1" />
        <Activealert className="mt-1" />
        <Activealert className="mt-1" />
        <Activealert className="mt-1" />
        <Activealert className="mt-1" />
        <Activealert className="mt-1" />
        <Activealert className="mt-1" />
      </div>
    </div>
  );
}
