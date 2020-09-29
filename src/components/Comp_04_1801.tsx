// Comp_04_1801
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_9005 from './Comp_05_9005';
import Comp_05_9006 from './Comp_05_9006';
import Comp_05_9007 from './Comp_05_9007';
import Comp_05_9008 from './Comp_05_9008';
import Comp_05_9009 from './Comp_05_9009';

const Comp_04_1801: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1801
      <div>
      <Comp_05_9005></Comp_05_9005>';
<Comp_05_9006></Comp_05_9006>';
<Comp_05_9007></Comp_05_9007>';
<Comp_05_9008></Comp_05_9008>';
<Comp_05_9009></Comp_05_9009>';
        </div>
      </div>;
};

export default Comp_04_1801;
