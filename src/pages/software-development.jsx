import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import DesignStudioHero from "@/components/hero/DesignStudioHero";
import DesignStudioFeature from "@/components/feature/DesignStudioFeature";
import DesignStudioRoll from "@/components/roll/DesignStudioRoll";
import DesignStudioProtfolio from "@/components/portfolio/DesignStudioProtfolio";
import DesignStudioAbout from "@/components/about/DesignStudioAbout";
import DesignStudioService from "@/components/service/DesignStudioService";
import DesignStudioAward from "@/components/award/DesignStudioAward";
import DesignStudioCTA from "@/components/cta/DesignStudioCTA";
import DesignStudioBlog from "@/components/blog/DesignStudioBlog";

const SoftwareDevelopment = () => {
  return (
    <div>
      <Head>
          <title>Software Development</title>
        <meta name="description" content="Software Development Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header2" footer="footer2">
          <DesignStudioHero />
          <DesignStudioFeature />
          <DesignStudioRoll />
          <DesignStudioProtfolio />
          <DesignStudioAbout />
          <DesignStudioService />
          {/* <DesignStudioAward /> */}
          <DesignStudioCTA />
          {/* <DesignStudioBlog /> */}
        </RootLayout>
      </main>
    </div>
  );
};

export default SoftwareDevelopment;
