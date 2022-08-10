import { bestMart } from "../../data/bestMart";
import CustomFeature from "./CustomFeature";

function BestFeature() {
  return (
    <>
      <CustomFeature data={bestMart} title={"BestSelling"} />
    </>
  );
}

export default BestFeature;
