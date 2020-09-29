// Comp_04_0840
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4200 from './Comp_05_4200';
import Comp_05_4201 from './Comp_05_4201';
import Comp_05_4202 from './Comp_05_4202';
import Comp_05_4203 from './Comp_05_4203';
import Comp_05_4204 from './Comp_05_4204';

const Comp_04_0840: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0840
      <div>
      <Comp_05_4200></Comp_05_4200>';
<Comp_05_4201></Comp_05_4201>';
<Comp_05_4202></Comp_05_4202>';
<Comp_05_4203></Comp_05_4203>';
<Comp_05_4204></Comp_05_4204>';
        </div>
      </div>;
};

export default Comp_04_0840;
