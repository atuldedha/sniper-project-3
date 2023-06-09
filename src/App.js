import Banner from "./components/Banner";
import DemoBanner from "./components/DemoBanner";
import SetupSection from "./components/SetupSection";
import VideoSection from "./components/VideoSection";

function App() {
  return (
    <div className="px-4 md:px-8 py-4 md:py-8 xl:px-24 xl:py-10 flex flex-col">
      {/* top banner section */}
      <section className="pb-7">
        <Banner name="James" />
      </section>

      {/* video section */}
      <section className="pb-7 md:pb-32">
        <VideoSection />
      </section>

      {/* demo banner section */}
      <section className="pb-7">
        <DemoBanner />
      </section>

      {/* setup section */}
      <section className="pb-7">
        <SetupSection />
      </section>
    </div>
  );
}

export default App;
