import Banner from "./components/Banner";
import DemoBanner from "./components/DemoBanner";
import SetupSection from "./components/SetupSection";
import VideoSection from "./components/VideoSection";

function App() {
  return (
    <div className="px-24 py-10 flex flex-col">
      {/* top banner section */}
      <section className="pb-7">
        <Banner name="James" />
      </section>

      {/* video section */}
      <section className="pb-32">
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
