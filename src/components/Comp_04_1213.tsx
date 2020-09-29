// Comp_04_1213
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6065 from './Comp_05_6065';
import Comp_05_6066 from './Comp_05_6066';
import Comp_05_6067 from './Comp_05_6067';
import Comp_05_6068 from './Comp_05_6068';
import Comp_05_6069 from './Comp_05_6069';

const Comp_04_1213: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1213
      <div>
      <Comp_05_6065></Comp_05_6065>';
<Comp_05_6066></Comp_05_6066>';
<Comp_05_6067></Comp_05_6067>';
<Comp_05_6068></Comp_05_6068>';
<Comp_05_6069></Comp_05_6069>';
        </div>
      </div>;
};

export default Comp_04_1213;
