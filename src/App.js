import Banner from "./components/Banner";
import DemoBanner from "./components/DemoBanner";
import SetupSection from "./components/SetupSection";
import VideoSection from "./components/VideoSection";

function App() {
  return (
    <div className="px-4 md:px-8 py-4 md:py-8 xl:px-24 xl:py-10 flex flex-col items-center">
      {/* top banner section */}
      <section className="pb-7 max-w-4xl">
        <Banner name="James" />
      </section>

      {/* video section */}
      <section className="pb-7 md:pb-32 max-w-4xl items-start w-full">
        <VideoSection />
      </section>

      {/* demo banner section */}
      <section className="pb-7 max-w-4xl">
        <DemoBanner />
      </section>

      {/* setup section */}
      <section className="pb-7 max-w-4xl items-start w-full">
        <SetupSection />
      </section>
    </div>
  );
}

export default App;
