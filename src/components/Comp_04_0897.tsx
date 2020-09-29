// Comp_04_0897
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4485 from './Comp_05_4485';
import Comp_05_4486 from './Comp_05_4486';
import Comp_05_4487 from './Comp_05_4487';
import Comp_05_4488 from './Comp_05_4488';
import Comp_05_4489 from './Comp_05_4489';

const Comp_04_0897: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0897
      <div>
      <Comp_05_4485></Comp_05_4485>';
<Comp_05_4486></Comp_05_4486>';
<Comp_05_4487></Comp_05_4487>';
<Comp_05_4488></Comp_05_4488>';
<Comp_05_4489></Comp_05_4489>';
        </div>
      </div>;
};

export default Comp_04_0897;
