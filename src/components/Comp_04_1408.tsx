// Comp_04_1408
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_7040 from './Comp_05_7040';
import Comp_05_7041 from './Comp_05_7041';
import Comp_05_7042 from './Comp_05_7042';
import Comp_05_7043 from './Comp_05_7043';
import Comp_05_7044 from './Comp_05_7044';

const Comp_04_1408: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1408
      <div>
      <Comp_05_7040></Comp_05_7040>';
<Comp_05_7041></Comp_05_7041>';
<Comp_05_7042></Comp_05_7042>';
<Comp_05_7043></Comp_05_7043>';
<Comp_05_7044></Comp_05_7044>';
        </div>
      </div>;
};

export default Comp_04_1408;
