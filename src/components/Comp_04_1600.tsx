// Comp_04_1600
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8000 from './Comp_05_8000';
import Comp_05_8001 from './Comp_05_8001';
import Comp_05_8002 from './Comp_05_8002';
import Comp_05_8003 from './Comp_05_8003';
import Comp_05_8004 from './Comp_05_8004';

const Comp_04_1600: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1600
      <div>
      <Comp_05_8000></Comp_05_8000>';
<Comp_05_8001></Comp_05_8001>';
<Comp_05_8002></Comp_05_8002>';
<Comp_05_8003></Comp_05_8003>';
<Comp_05_8004></Comp_05_8004>';
        </div>
      </div>;
};

export default Comp_04_1600;
