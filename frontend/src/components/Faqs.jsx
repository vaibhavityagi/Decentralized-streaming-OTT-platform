import Faq from "./Faq";
import "../css/faq.css";

export default function Faqs() {
  return (
    <div className="main-form-body">
      <div className="FAQ-HEADING"><h3>FREQUENTLY ASKED QUESTIONS</h3></div>
      <div className="sub-heading"><p>Got questions? We have answers for you</p></div>
      <div className="f">
        <div>
          <Faq
            question="Why are we better than other streaming platforms?"
            num={1}
            open={false}
          >
            StreamVibe is a streaming platform where you can watch movies and web
            series as per your convenience without buying the monthy or yearly
            subscription. Just subscribe for a day or an hour!
          </Faq>
        </div>
        <div>
          <Faq
            question="What content is available on StreamVibe"
            num={2}
            open={false}
          >
            You can watch anything and everything on StreamVibe starting only at StreamVibe
          </Faq>
        </div>
        <div>
          <Faq
            question="Is there any scheme of refund in StreamVibe"
            num={3}
            open={false}
          >
            Once you have bought the tokens, they cannot be refunded. Although
            you can use them sitewise.
          </Faq>
        </div>
        <div>
          <Faq question="What are the subscription plans?" num={4} open={false}>
            We have a per hour and a per day subscription plan. Buy according to your convenience.
          </Faq>
        </div>
        <div>
          <Faq question="How do I resolve my queries?" num={5} open={false}>
            You can send a mail to us at streamvibe@gmail.com
          </Faq>
        </div>
        <div>
          <Faq
            question="How long it take to resolve the issue?"
            num={6}
            open={false}
          >
            Sometimes It may take 24 working hours to resolve the issue .
          </Faq>
        </div>
      </div>
    </div>
  );
}
