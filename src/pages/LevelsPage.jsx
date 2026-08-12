import Levels from "../components/Levels";
import PageBanner from "../components/PageBanner";

export default function LevelsPage() {
  return (
    <>
      <PageBanner
        label="Learning path"
        title="Join our classes"
        lead="A clear path from Basic Python to Advanced Python and Machine Learning."
      />
      <Levels />
    </>
  );
}
