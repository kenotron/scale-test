// Comp_04_0920
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4600 from './Comp_05_4600';
import Comp_05_4601 from './Comp_05_4601';
import Comp_05_4602 from './Comp_05_4602';
import Comp_05_4603 from './Comp_05_4603';
import Comp_05_4604 from './Comp_05_4604';

const Comp_04_0920: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0920
      <div>
      <Comp_05_4600></Comp_05_4600>';
<Comp_05_4601></Comp_05_4601>';
<Comp_05_4602></Comp_05_4602>';
<Comp_05_4603></Comp_05_4603>';
<Comp_05_4604></Comp_05_4604>';
        </div>
      </div>;
};

export default Comp_04_0920;
