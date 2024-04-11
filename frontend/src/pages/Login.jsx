import Card from "../components/Card";
import sp from "../assets/smartphone.png";
import Faq from "../components/Faq";
import FreeTrial from "../components/FreeTrial";

export default function Login() {
  return (
    <div>
      {/* <Card
        type="devices"
        heading="Smartphones"
        body="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface"
        price="99"
        icon={sp}
      /> 
      <Faq open={false} question="Streamvibe?" num={1}>
        I am the answer, I am also the child
      </Faq> */}
      <FreeTrial />
    </div>
  );
}
