import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import PropTypes from "prop-types";

const ProviderConfig = ({ children }) => {
  const client = new QueryClient();
  return (
    <BrowserRouter>
      <ConfigProvider>
        <QueryClientProvider client={client}>
          <ReactQueryDevtools />
          {children}
        </QueryClientProvider>
      </ConfigProvider>
    </BrowserRouter>
  );
};

ProviderConfig.propTypes = {
  children: PropTypes.object,
};

export default ProviderConfig;
