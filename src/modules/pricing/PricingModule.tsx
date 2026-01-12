"use client";
import { PricingDataValues } from "@/interface/pricing";
import PricingUiWeb from "./PricingUiWeb";
import PricingBundle from "./PricingBundle";

interface Props {
  title: string;
  data: PricingDataValues[];
}
const PricingModule = ({ data, title }: Props) => {
  if (title === "ui" || title === "webdevelopment") {
    return <PricingUiWeb data={data} title={title} />;
  } else {
    return <PricingBundle />;
  }
};

export default PricingModule;
