// Comp_04_1013
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5065 from './Comp_05_5065';
import Comp_05_5066 from './Comp_05_5066';
import Comp_05_5067 from './Comp_05_5067';
import Comp_05_5068 from './Comp_05_5068';
import Comp_05_5069 from './Comp_05_5069';

const Comp_04_1013: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1013
      <div>
      <Comp_05_5065></Comp_05_5065>';
<Comp_05_5066></Comp_05_5066>';
<Comp_05_5067></Comp_05_5067>';
<Comp_05_5068></Comp_05_5068>';
<Comp_05_5069></Comp_05_5069>';
        </div>
      </div>;
};

export default Comp_04_1013;
