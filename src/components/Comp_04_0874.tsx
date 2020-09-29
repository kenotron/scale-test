// Comp_04_0874
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4370 from './Comp_05_4370';
import Comp_05_4371 from './Comp_05_4371';
import Comp_05_4372 from './Comp_05_4372';
import Comp_05_4373 from './Comp_05_4373';
import Comp_05_4374 from './Comp_05_4374';

const Comp_04_0874: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0874
      <div>
      <Comp_05_4370></Comp_05_4370>';
<Comp_05_4371></Comp_05_4371>';
<Comp_05_4372></Comp_05_4372>';
<Comp_05_4373></Comp_05_4373>';
<Comp_05_4374></Comp_05_4374>';
        </div>
      </div>;
};

export default Comp_04_0874;
