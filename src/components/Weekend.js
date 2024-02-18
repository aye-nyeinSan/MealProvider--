export default function Weekend(props) {
  return (
    <>
     <div>{tellMessage(props.day)}</div>
    </>
 
  );
}
function tellMessage(day) {
  switch (day) {
    case 6:
      return <h1>နောက်ဆံုးတော့ ဒီနေ့က စနေ လေ</h1>;
    case 0:
      return <h1>ဒီနေ့က တင်းဂွေ နေ့လေ ဘေးဘီ</h1>;
    default:
       return <h1>တစ်ခုခု မှားနေပြီ</h1>;
  }
}
