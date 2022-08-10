import { newMart } from "../../data/newMart";
import CustomFeature from "./CustomFeature";

function NewFeature() {
  return (
    <>
      <CustomFeature data={newMart} title={"New"} />
    </>
  );
}

export default NewFeature;
