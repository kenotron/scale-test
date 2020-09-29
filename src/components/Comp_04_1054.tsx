// Comp_04_1054
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5270 from './Comp_05_5270';
import Comp_05_5271 from './Comp_05_5271';
import Comp_05_5272 from './Comp_05_5272';
import Comp_05_5273 from './Comp_05_5273';
import Comp_05_5274 from './Comp_05_5274';

const Comp_04_1054: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1054
      <div>
      <Comp_05_5270></Comp_05_5270>';
<Comp_05_5271></Comp_05_5271>';
<Comp_05_5272></Comp_05_5272>';
<Comp_05_5273></Comp_05_5273>';
<Comp_05_5274></Comp_05_5274>';
        </div>
      </div>;
};

export default Comp_04_1054;
