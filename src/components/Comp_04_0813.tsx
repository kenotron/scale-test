// Comp_04_0813
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4065 from './Comp_05_4065';
import Comp_05_4066 from './Comp_05_4066';
import Comp_05_4067 from './Comp_05_4067';
import Comp_05_4068 from './Comp_05_4068';
import Comp_05_4069 from './Comp_05_4069';

const Comp_04_0813: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0813
      <div>
      <Comp_05_4065></Comp_05_4065>';
<Comp_05_4066></Comp_05_4066>';
<Comp_05_4067></Comp_05_4067>';
<Comp_05_4068></Comp_05_4068>';
<Comp_05_4069></Comp_05_4069>';
        </div>
      </div>;
};

export default Comp_04_0813;
