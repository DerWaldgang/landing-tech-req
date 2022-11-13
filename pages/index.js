import PageLayout from "../components/layouts/PageLayout";
import FifthSection from "../components/sections/FifthSection";
import FirtsSection from "../components/sections/FirtsSection";
import FourthSection from "../components/sections/FourthSection";
import SecondSection from "../components/sections/SecondSection";
import ThirdSection from "../components/sections/ThirdSection";

export default function Home() {
  return (
    <PageLayout className="snap-mandatory overflow-scroll h-screen snap-y">

      <section id="FirtsSection" className="snap-end">
        <FirtsSection/>
      </section>

      <section id="SecondSection" className="snap-end">
        <SecondSection/>
      </section>

      <section id="ThirdSection" className="snap-end">
        <ThirdSection/>
      </section>

      <section id="FourthSection" className="snap-end">
        <FourthSection/>
      </section>

      <section id="FifthSection" className=" snap-end">
          <FifthSection/>
      </section>

    </PageLayout>
  );
}
