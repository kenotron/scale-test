// Comp_04_1413
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_7065 from './Comp_05_7065';
import Comp_05_7066 from './Comp_05_7066';
import Comp_05_7067 from './Comp_05_7067';
import Comp_05_7068 from './Comp_05_7068';
import Comp_05_7069 from './Comp_05_7069';

const Comp_04_1413: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1413
      <div>
      <Comp_05_7065></Comp_05_7065>';
<Comp_05_7066></Comp_05_7066>';
<Comp_05_7067></Comp_05_7067>';
<Comp_05_7068></Comp_05_7068>';
<Comp_05_7069></Comp_05_7069>';
        </div>
      </div>;
};

export default Comp_04_1413;
