// Comp_04_1746
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8730 from './Comp_05_8730';
import Comp_05_8731 from './Comp_05_8731';
import Comp_05_8732 from './Comp_05_8732';
import Comp_05_8733 from './Comp_05_8733';
import Comp_05_8734 from './Comp_05_8734';

const Comp_04_1746: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1746
      <div>
      <Comp_05_8730></Comp_05_8730>';
<Comp_05_8731></Comp_05_8731>';
<Comp_05_8732></Comp_05_8732>';
<Comp_05_8733></Comp_05_8733>';
<Comp_05_8734></Comp_05_8734>';
        </div>
      </div>;
};

export default Comp_04_1746;
