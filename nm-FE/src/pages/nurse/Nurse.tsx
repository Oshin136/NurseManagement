import { Typography } from "antd";
import NurseForm from "../../components/forms/nurseForm";
import "./Nurse.css";

function Nurse() {
  const { Title } = Typography;
  return (
    <div className="nurseform_center">
      <div className="nurseform_wrapper">
        <Title className="nurseform_title">Add Nurse</Title>
        <NurseForm update={false} />
      </div>
    </div>
  );
}

export default Nurse;
