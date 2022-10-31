import { Button, Space, Table, Typography } from "antd";
import { ColumnsType } from "antd/lib/table";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Nurse } from "../../interfaces/nurse";
import { getUserLoginFromLocalStorage } from "../../utils/localStorage";
import "./Nurse.css";

const NurseList = () => {
  const { Title } = Typography;
  const { userId } = getUserLoginFromLocalStorage();
  const [data, setData] = useState<Nurse[]>([]);

  const deleteHandler = (id: string) => {
    axios
      .delete(`/nurses/${id}`)
      .then((res) => {
        window.location.reload();
      })
      .then((err) => console.log(err));
  };

  const columns: ColumnsType<Nurse> = [
    {
      title: "Photo",
      dataIndex: "photo",
      key: "photo",
      render: (url) => (
        <img
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            border: "1px solid #1e90ff",
          }}
          src={url}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Contact",
      dataIndex: "contact",
      key: "contact",
    },
    {
      title: "Rounding Manager",
      dataIndex: "rounding_manager",
      key: "rounding_manager",
      render: (fav) => `${fav}`,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/nurses/update-nurse/${record.id}`}>
            <Button className="btn_edit">Edit</Button>
          </Link>
          <Button
            className="btn_delete"
            onClick={() => deleteHandler(record.id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    axios
      .post("/nurses", { id: userId })
      .then((res) => {
        const newData = res.data.data.map((item: Nurse, idx: number) => ({
          ...item,
          key: idx,
        }));
        setData(newData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="nurseList_wrapper">
      <Title className="nurse_title">Nurses</Title>
      <Table dataSource={data} pagination={false} columns={columns} />
    </div>
  );
};

export default NurseList;
