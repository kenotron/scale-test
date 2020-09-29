// Comp_04_1040
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5200 from './Comp_05_5200';
import Comp_05_5201 from './Comp_05_5201';
import Comp_05_5202 from './Comp_05_5202';
import Comp_05_5203 from './Comp_05_5203';
import Comp_05_5204 from './Comp_05_5204';

const Comp_04_1040: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1040
      <div>
      <Comp_05_5200></Comp_05_5200>';
<Comp_05_5201></Comp_05_5201>';
<Comp_05_5202></Comp_05_5202>';
<Comp_05_5203></Comp_05_5203>';
<Comp_05_5204></Comp_05_5204>';
        </div>
      </div>;
};

export default Comp_04_1040;
