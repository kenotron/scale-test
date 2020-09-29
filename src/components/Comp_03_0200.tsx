// Comp_03_0200
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_1000 from './Comp_04_1000';
import Comp_04_1001 from './Comp_04_1001';
import Comp_04_1002 from './Comp_04_1002';
import Comp_04_1003 from './Comp_04_1003';
import Comp_04_1004 from './Comp_04_1004';

const Comp_03_0200: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0200
      <div>
      <Comp_04_1000></Comp_04_1000>';
<Comp_04_1001></Comp_04_1001>';
<Comp_04_1002></Comp_04_1002>';
<Comp_04_1003></Comp_04_1003>';
<Comp_04_1004></Comp_04_1004>';
        </div>
      </div>;
};

export default Comp_03_0200;
