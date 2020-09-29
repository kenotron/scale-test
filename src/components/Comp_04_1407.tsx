// Comp_04_1407
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_7035 from './Comp_05_7035';
import Comp_05_7036 from './Comp_05_7036';
import Comp_05_7037 from './Comp_05_7037';
import Comp_05_7038 from './Comp_05_7038';
import Comp_05_7039 from './Comp_05_7039';

const Comp_04_1407: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1407
      <div>
      <Comp_05_7035></Comp_05_7035>';
<Comp_05_7036></Comp_05_7036>';
<Comp_05_7037></Comp_05_7037>';
<Comp_05_7038></Comp_05_7038>';
<Comp_05_7039></Comp_05_7039>';
        </div>
      </div>;
};

export default Comp_04_1407;
