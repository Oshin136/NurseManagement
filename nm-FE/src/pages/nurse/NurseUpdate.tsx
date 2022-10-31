import { Typography } from "antd";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Nurse } from "../../interfaces/nurse";
import NurseForm from "../../components/forms/nurseForm";

function NurseUpdate() {
  const { id } = useParams();
  const { Title } = Typography;
  const [data, setData] = useState<Nurse>();

  useEffect(() => {
    axios
      .get(`/nurses/${id}`)
      .then((res) => {
        const oldData = {
          ...res.data.data,
          photo: [],
          rounding_manager: [res.data.data.is_rounding_manager],
          contact: {
            phone: res.data.data.phone,
            short: "NP",
          },
        };
        setData(oldData);
      })
      .catch((err) => console.log(err));
  }, []);

  return data ? (
    <div className="nurseform_center">
      <div className="nurseform_wrapper">
        <Title className="nurseform_title">Update Nurse</Title>
        <NurseForm update={true} oldData={data} />
      </div>
    </div>
  ) : (
    <div>Loading</div>
  );
}

export default NurseUpdate;
