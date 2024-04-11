import Card from "../components/Card";

export default function Test() {
    return <div>
        <Card type="plan" heading="Basic Plan" body="I am body"
            icon="im icon" price={99}></Card>
    </div>
}