// Comp_04_1074
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5370 from './Comp_05_5370';
import Comp_05_5371 from './Comp_05_5371';
import Comp_05_5372 from './Comp_05_5372';
import Comp_05_5373 from './Comp_05_5373';
import Comp_05_5374 from './Comp_05_5374';

const Comp_04_1074: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1074
      <div>
      <Comp_05_5370></Comp_05_5370>';
<Comp_05_5371></Comp_05_5371>';
<Comp_05_5372></Comp_05_5372>';
<Comp_05_5373></Comp_05_5373>';
<Comp_05_5374></Comp_05_5374>';
        </div>
      </div>;
};

export default Comp_04_1074;
