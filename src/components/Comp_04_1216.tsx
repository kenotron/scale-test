// Comp_04_1216
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6080 from './Comp_05_6080';
import Comp_05_6081 from './Comp_05_6081';
import Comp_05_6082 from './Comp_05_6082';
import Comp_05_6083 from './Comp_05_6083';
import Comp_05_6084 from './Comp_05_6084';

const Comp_04_1216: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1216
      <div>
      <Comp_05_6080></Comp_05_6080>';
<Comp_05_6081></Comp_05_6081>';
<Comp_05_6082></Comp_05_6082>';
<Comp_05_6083></Comp_05_6083>';
<Comp_05_6084></Comp_05_6084>';
        </div>
      </div>;
};

export default Comp_04_1216;
