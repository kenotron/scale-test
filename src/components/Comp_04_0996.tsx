// Comp_04_0996
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4980 from './Comp_05_4980';
import Comp_05_4981 from './Comp_05_4981';
import Comp_05_4982 from './Comp_05_4982';
import Comp_05_4983 from './Comp_05_4983';
import Comp_05_4984 from './Comp_05_4984';

const Comp_04_0996: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0996
      <div>
      <Comp_05_4980></Comp_05_4980>';
<Comp_05_4981></Comp_05_4981>';
<Comp_05_4982></Comp_05_4982>';
<Comp_05_4983></Comp_05_4983>';
<Comp_05_4984></Comp_05_4984>';
        </div>
      </div>;
};

export default Comp_04_0996;
