// Comp_04_0863
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4315 from './Comp_05_4315';
import Comp_05_4316 from './Comp_05_4316';
import Comp_05_4317 from './Comp_05_4317';
import Comp_05_4318 from './Comp_05_4318';
import Comp_05_4319 from './Comp_05_4319';

const Comp_04_0863: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0863
      <div>
      <Comp_05_4315></Comp_05_4315>';
<Comp_05_4316></Comp_05_4316>';
<Comp_05_4317></Comp_05_4317>';
<Comp_05_4318></Comp_05_4318>';
<Comp_05_4319></Comp_05_4319>';
        </div>
      </div>;
};

export default Comp_04_0863;
