import Card from "../components/Card";
import sp from "../assets/smartphone.png";
<<<<<<< HEAD
// import "./App.css";
=======
import Faq from "../components/Faq";
import FreeTrial from "../components/FreeTrial";
import About from "../components/About";
>>>>>>> 46679d1c2bd1f1b06ee59fb3e7542cbeeb8d9ba9

export default function Login() {
  return (
    <div>
<<<<<<< HEAD
      <Card
        type="plan"
        heading="Basic Plan"
        body="Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles."
=======
      {/* <Card
        type="devices"
        heading="Smartphones"
        body="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface"
>>>>>>> 46679d1c2bd1f1b06ee59fb3e7542cbeeb8d9ba9
        price="99"
        icon={sp}
      /> 
      <Faq open={false} question="Streamvibe?" num={1}>
        I am the answer, I am also the child
      </Faq> 
      <FreeTrial /> */}
      <About>this is about us</About>
    </div>
  );
}
