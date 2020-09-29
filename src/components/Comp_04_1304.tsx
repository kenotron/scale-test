// Comp_04_1304
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6520 from './Comp_05_6520';
import Comp_05_6521 from './Comp_05_6521';
import Comp_05_6522 from './Comp_05_6522';
import Comp_05_6523 from './Comp_05_6523';
import Comp_05_6524 from './Comp_05_6524';

const Comp_04_1304: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1304
      <div>
      <Comp_05_6520></Comp_05_6520>';
<Comp_05_6521></Comp_05_6521>';
<Comp_05_6522></Comp_05_6522>';
<Comp_05_6523></Comp_05_6523>';
<Comp_05_6524></Comp_05_6524>';
        </div>
      </div>;
};

export default Comp_04_1304;
