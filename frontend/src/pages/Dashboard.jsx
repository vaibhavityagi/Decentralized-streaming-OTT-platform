import FreeTrial from "../components/FreeTrial";
import Card from "../components/Card";
import Faq from "../components/Faq";
import Title from "../components/Title";

export default function Dashboard() {
  return (
    <div>
      <Card
        type="plan"
        heading="Basic Plan"
        body="Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles."
        icon="im icon"
        price={99}
      >
        /month
      </Card>
      <Faq open={true} question={"What is StreamVibe?"} num={1}>
        StreamVibe is a streaming service that allows you to watch movies and
        shows on demand.
      </Faq>
    </div>
  );
}
