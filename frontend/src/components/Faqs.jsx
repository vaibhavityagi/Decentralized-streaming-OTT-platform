import Faq from "./Faq";

export default function Faqs() {
  return (
    <div>
      <Faq
        question="Why are we better than other streaming platforms?"
        num={1}
        open={false}
      >
        ***** is a streaming platform where you can watch movies and web series
        as per your convenience without buying the monthy or yearly
        subscription. Just subscribe for a day or an hour!
      </Faq>
      <Faq question="What content is available on *****" num={2} open={false}>
        You can watch anything and everything on **** starting only at ***
      </Faq>
      <Faq
        question="Is there any scheme of refund in *****"
        num={3}
        open={false}
      >
        Once you have bought the tokens, they cannot be refunded. Although you
        can use them sitewise.
      </Faq>
      <Faq question="What are the subscription plans?" num={4} open={false}>
        **********************
      </Faq>
      <Faq question="How do I resolve my queries?" num={5} open={false}>
        You can send a mail to us at ****@gmail.com
      </Faq>
      <Faq
        question="How long it take to resolve the issue?"
        num={6}
        open={false}
      >
        Sometimes It may take 24 working hours to resolve the issue .
      </Faq>
    </div>
  );
}
