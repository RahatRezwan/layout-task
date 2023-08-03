import BestSeller from './components/sections/BestSeller/BestSeller';
import Category from './components/sections/CategorySection/Category';
import ExploreCollection from './components/sections/ExploreCollection/ExploreCollection';

const App = () => {
   return (
      <div>
         <Category />
         <ExploreCollection />
         <BestSeller />
      </div>
   );
};

export default App;
