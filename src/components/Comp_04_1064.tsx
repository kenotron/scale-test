// Comp_04_1064
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5320 from './Comp_05_5320';
import Comp_05_5321 from './Comp_05_5321';
import Comp_05_5322 from './Comp_05_5322';
import Comp_05_5323 from './Comp_05_5323';
import Comp_05_5324 from './Comp_05_5324';

const Comp_04_1064: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1064
      <div>
      <Comp_05_5320></Comp_05_5320>';
<Comp_05_5321></Comp_05_5321>';
<Comp_05_5322></Comp_05_5322>';
<Comp_05_5323></Comp_05_5323>';
<Comp_05_5324></Comp_05_5324>';
        </div>
      </div>;
};

export default Comp_04_1064;
