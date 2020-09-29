// Comp_04_0800
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4000 from './Comp_05_4000';
import Comp_05_4001 from './Comp_05_4001';
import Comp_05_4002 from './Comp_05_4002';
import Comp_05_4003 from './Comp_05_4003';
import Comp_05_4004 from './Comp_05_4004';

const Comp_04_0800: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0800
      <div>
      <Comp_05_4000></Comp_05_4000>';
<Comp_05_4001></Comp_05_4001>';
<Comp_05_4002></Comp_05_4002>';
<Comp_05_4003></Comp_05_4003>';
<Comp_05_4004></Comp_05_4004>';
        </div>
      </div>;
};

export default Comp_04_0800;
