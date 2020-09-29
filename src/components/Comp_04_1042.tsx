// Comp_04_1042
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5210 from './Comp_05_5210';
import Comp_05_5211 from './Comp_05_5211';
import Comp_05_5212 from './Comp_05_5212';
import Comp_05_5213 from './Comp_05_5213';
import Comp_05_5214 from './Comp_05_5214';

const Comp_04_1042: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1042
      <div>
      <Comp_05_5210></Comp_05_5210>';
<Comp_05_5211></Comp_05_5211>';
<Comp_05_5212></Comp_05_5212>';
<Comp_05_5213></Comp_05_5213>';
<Comp_05_5214></Comp_05_5214>';
        </div>
      </div>;
};

export default Comp_04_1042;
