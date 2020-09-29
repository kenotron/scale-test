// Comp_04_1800
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_9000 from './Comp_05_9000';
import Comp_05_9001 from './Comp_05_9001';
import Comp_05_9002 from './Comp_05_9002';
import Comp_05_9003 from './Comp_05_9003';
import Comp_05_9004 from './Comp_05_9004';

const Comp_04_1800: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1800
      <div>
      <Comp_05_9000></Comp_05_9000>';
<Comp_05_9001></Comp_05_9001>';
<Comp_05_9002></Comp_05_9002>';
<Comp_05_9003></Comp_05_9003>';
<Comp_05_9004></Comp_05_9004>';
        </div>
      </div>;
};

export default Comp_04_1800;
