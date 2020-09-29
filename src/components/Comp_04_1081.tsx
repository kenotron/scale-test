// Comp_04_1081
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5405 from './Comp_05_5405';
import Comp_05_5406 from './Comp_05_5406';
import Comp_05_5407 from './Comp_05_5407';
import Comp_05_5408 from './Comp_05_5408';
import Comp_05_5409 from './Comp_05_5409';

const Comp_04_1081: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1081
      <div>
      <Comp_05_5405></Comp_05_5405>';
<Comp_05_5406></Comp_05_5406>';
<Comp_05_5407></Comp_05_5407>';
<Comp_05_5408></Comp_05_5408>';
<Comp_05_5409></Comp_05_5409>';
        </div>
      </div>;
};

export default Comp_04_1081;
