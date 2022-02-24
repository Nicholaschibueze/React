import logo from './logo.svg';
import './App.css';
import './component/Profile';
import './component/Comp1';
import './component/Comp2';
import './component/Comp3';
import Profile from './component/Profile';
import Comp1 from './component/Comp1';
import Comp2 from './component/Comp2';
import Comp3 from './component/Comp3';

function App() {
    return (


        
       < div className = "App" >

<Profile name=" Rhema"/>
<Comp1 name="Heartbreak"></Comp1>
<Comp2 class="Joy is Coming"></Comp2>
<Comp3 class="I Need Ego"></Comp3>

        
        </div>
    );
}

export default App;