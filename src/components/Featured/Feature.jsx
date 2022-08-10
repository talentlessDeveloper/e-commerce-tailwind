import { featureMart } from "../../data/featureMart";
import CustomFeature from "./CustomFeature";

function Feature() {
  return (
    <>
      <CustomFeature data={featureMart} title={"Featured"} />
    </>
  );
}

export default Feature;
