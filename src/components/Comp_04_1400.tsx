// Comp_04_1400
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_7000 from './Comp_05_7000';
import Comp_05_7001 from './Comp_05_7001';
import Comp_05_7002 from './Comp_05_7002';
import Comp_05_7003 from './Comp_05_7003';
import Comp_05_7004 from './Comp_05_7004';

const Comp_04_1400: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1400
      <div>
      <Comp_05_7000></Comp_05_7000>';
<Comp_05_7001></Comp_05_7001>';
<Comp_05_7002></Comp_05_7002>';
<Comp_05_7003></Comp_05_7003>';
<Comp_05_7004></Comp_05_7004>';
        </div>
      </div>;
};

export default Comp_04_1400;
