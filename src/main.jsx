import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./Root";
import ProviderConfig from "./tools/provider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProviderConfig>
    <Root />
  </ProviderConfig>
);
