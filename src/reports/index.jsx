import { useState } from "react";
import { Table } from "antd";
import taskData from "./task_ids_urls.json";

const Reports = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const columns = [
    {
      title: "№",
      dataIndex: "index",
      key: "index",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Task ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Task URL",
      dataIndex: "url",
      key: "url",
      render: (text) => (
        <a
          href={text}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {text}
        </a>
      ),
    },
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedRowKeys) => {
      setSelectedRowKeys(newSelectedRowKeys);
    },
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Task Reports</h2>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={taskData}
        rowKey="id"
        pagination={{ pageSize: 12 }}
        bordered
      />
    </div>
  );
};

export default Reports;
