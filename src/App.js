import "./styles.css";
import data from "./data.json";

import FileExplorer from "./Component/FileExplorer";
export default function App() {
  return <FileExplorer folderData={data} />;
}
