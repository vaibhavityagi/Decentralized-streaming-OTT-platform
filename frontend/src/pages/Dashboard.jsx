import Card from "../components/Card";
import Faq from "../components/Faq";
import FreeTrial from "../components/FreeTrial";

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
      <Faq open={true} question={"what is ott"} num={1}>
        I am the answer answer answer
      </Faq>
      <FreeTrial />
    </div>
  );
}