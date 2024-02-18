export default function WeekDay(props) {
  return (
  <div>
    {tellMessage(props.day)}
    </div>
    );
}
function tellMessage(day) {
  switch (day) {
    case 1:
      return <h1>ဒီနေ့က တနင်္လာနေ့ ။ ဒီနေ့ အကောင်းဆံုး ကြိုးစားရအောင်။</h1>;

    case 2:
      return <h1>ဒီနေ့က အင်္ဂါနေ့ ။ နှစ်ရက် ကုန်သွားပြီ</h1>;

    case 3:
      return (
        <h1>ဒီနေ့က ဗုဒ္ဓဟူး။ တစ်ပတ်လံုး ရဲ့ အလယ် မှာ ရောက်နေပြီ ဟီးဟီ ။</h1>
      );

    case 4:
      return <h1>ဒီနေ့က ကြာသပတေး ဆိုတော့ မနက်ဖန် ဆိုရင် သောကြာပေါ့</h1>;

    case 5:
      return <h1>ဒီနေ့က သောကြာ ။ ပိတ်ရက် ရောက်တော့မယ်</h1>;
    default:
      return <h1>တစ်ခုခု မှားနေပြီ</h1>;
  }
}
