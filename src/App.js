import { useState, useEffect } from "react";
import LinkList from "./components/LinkList";

function App() {
  const [dataLinks, setDataLinks] = useState([]);

  const loadLinks = async () => {
    const res = await fetch("/api/getLinks");
    const links = await res.json();
    setDataLinks(links);
    console.log(dataLinks);
  };
  useEffect(() => {
    loadLinks();
  }, []);
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">List 0 Link</h2>
      <LinkList links={dataLinks} refreshLinks={loadLinks} />
    </div>
  );
}

export default App;
