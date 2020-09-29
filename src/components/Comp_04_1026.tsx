// Comp_04_1026
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5130 from './Comp_05_5130';
import Comp_05_5131 from './Comp_05_5131';
import Comp_05_5132 from './Comp_05_5132';
import Comp_05_5133 from './Comp_05_5133';
import Comp_05_5134 from './Comp_05_5134';

const Comp_04_1026: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1026
      <div>
      <Comp_05_5130></Comp_05_5130>';
<Comp_05_5131></Comp_05_5131>';
<Comp_05_5132></Comp_05_5132>';
<Comp_05_5133></Comp_05_5133>';
<Comp_05_5134></Comp_05_5134>';
        </div>
      </div>;
};

export default Comp_04_1026;
