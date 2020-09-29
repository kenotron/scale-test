// Comp_04_1240
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6200 from './Comp_05_6200';
import Comp_05_6201 from './Comp_05_6201';
import Comp_05_6202 from './Comp_05_6202';
import Comp_05_6203 from './Comp_05_6203';
import Comp_05_6204 from './Comp_05_6204';

const Comp_04_1240: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1240
      <div>
      <Comp_05_6200></Comp_05_6200>';
<Comp_05_6201></Comp_05_6201>';
<Comp_05_6202></Comp_05_6202>';
<Comp_05_6203></Comp_05_6203>';
<Comp_05_6204></Comp_05_6204>';
        </div>
      </div>;
};

export default Comp_04_1240;
