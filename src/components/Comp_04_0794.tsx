// Comp_04_0794
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3970 from './Comp_05_3970';
import Comp_05_3971 from './Comp_05_3971';
import Comp_05_3972 from './Comp_05_3972';
import Comp_05_3973 from './Comp_05_3973';
import Comp_05_3974 from './Comp_05_3974';

const Comp_04_0794: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0794
      <div>
      <Comp_05_3970></Comp_05_3970>';
<Comp_05_3971></Comp_05_3971>';
<Comp_05_3972></Comp_05_3972>';
<Comp_05_3973></Comp_05_3973>';
<Comp_05_3974></Comp_05_3974>';
        </div>
      </div>;
};

export default Comp_04_0794;
