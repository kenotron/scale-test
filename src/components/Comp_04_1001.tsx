// Comp_04_1001
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5005 from './Comp_05_5005';
import Comp_05_5006 from './Comp_05_5006';
import Comp_05_5007 from './Comp_05_5007';
import Comp_05_5008 from './Comp_05_5008';
import Comp_05_5009 from './Comp_05_5009';

const Comp_04_1001: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1001
      <div>
      <Comp_05_5005></Comp_05_5005>';
<Comp_05_5006></Comp_05_5006>';
<Comp_05_5007></Comp_05_5007>';
<Comp_05_5008></Comp_05_5008>';
<Comp_05_5009></Comp_05_5009>';
        </div>
      </div>;
};

export default Comp_04_1001;
