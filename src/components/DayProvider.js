import WeekDay from './WeekDay';
import Weekend from './Weekend';

export default function dayProvider() {
    const day = new Date().getDay();
   
   return (
    <div>
          <h1>တပတ်မှာ ခုနစ်ရက် ရှိတယ် ။</h1>
    { day >= 1 && day <= 5 ? <WeekDay day={day}/> : <Weekend day={day} />}
    </div>
   
   );
}