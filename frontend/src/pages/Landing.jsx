import About from "../components/About";
import Faqs from "../components/Faqs";
import FreeTrial from "../components/FreeTrial";
import Plans from "../components/Plans";
import Title from "../components/Title";

export default function Landing() {
  return (
    <div>
      <Title />
      <About>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </About>
      <Faqs />
      <Plans />
      <FreeTrial />
    </div>
  );
}
