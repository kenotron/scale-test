// Comp_04_1000
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5000 from './Comp_05_5000';
import Comp_05_5001 from './Comp_05_5001';
import Comp_05_5002 from './Comp_05_5002';
import Comp_05_5003 from './Comp_05_5003';
import Comp_05_5004 from './Comp_05_5004';

const Comp_04_1000: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1000
      <div>
      <Comp_05_5000></Comp_05_5000>';
<Comp_05_5001></Comp_05_5001>';
<Comp_05_5002></Comp_05_5002>';
<Comp_05_5003></Comp_05_5003>';
<Comp_05_5004></Comp_05_5004>';
        </div>
      </div>;
};

export default Comp_04_1000;
