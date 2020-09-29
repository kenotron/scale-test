// Comp_04_1200
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6000 from './Comp_05_6000';
import Comp_05_6001 from './Comp_05_6001';
import Comp_05_6002 from './Comp_05_6002';
import Comp_05_6003 from './Comp_05_6003';
import Comp_05_6004 from './Comp_05_6004';

const Comp_04_1200: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1200
      <div>
      <Comp_05_6000></Comp_05_6000>';
<Comp_05_6001></Comp_05_6001>';
<Comp_05_6002></Comp_05_6002>';
<Comp_05_6003></Comp_05_6003>';
<Comp_05_6004></Comp_05_6004>';
        </div>
      </div>;
};

export default Comp_04_1200;
