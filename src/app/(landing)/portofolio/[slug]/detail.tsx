"use client";

import React from "react";
import Container from "@/components/container";
import PortofolioPict from "@/modules/portofolio/PortofolioPict";
import PortofolioDesc from "@/modules/portofolio/PortofolioDesc";
import PortofolioInfo from "@/modules/portofolio/PortofolioInfo";
import PortofolioContact from "@/modules/portofolio/PortofolioContact";
// import portofolioList from "@/data/portofolio.json";

interface Props {
  data: any;
}

const DetailPortofolio = ({ data }: Props) => {
  const portofolio = data;

  if (!portofolio) {
    return <div>Portofolio tidak ditemukan</div>;
  }

  const header = {
    name: portofolio.title,
    type: portofolio.type,
    picture: portofolio.cover,
  };

  const description = {
    overview_description: portofolio.overviewDescription,
    the_challenge: portofolio.challenges.split("\n").filter(Boolean),
    the_solution: portofolio.solutions.split("\n").filter(Boolean),
    features: portofolio.features.split("\n").filter(Boolean),
  };

  const projectDesc = {
    category: portofolio.type,
    duration: portofolio.duration,
    client: portofolio.client,
    develope: [],
  };

  return (
    <section className="py-14 lg:py-30 relative w-full bg-white dark:bg-slate-900">
      <Container className="relative w-full space-y-5">
        <PortofolioPict data={header} />
        <div className="pt-5 flex flex-col lg:flex-row w-full gap-5">
          <div className="lg:w-3/5 space-y-6">
            <PortofolioDesc data={description} />
          </div>
          <div className="lg:w-2/5 ">
            <div className="space-y-5">
              <PortofolioInfo data={projectDesc} />
              <PortofolioContact />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DetailPortofolio;
