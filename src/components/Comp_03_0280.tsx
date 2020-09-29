// Comp_03_0280
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_1400 from './Comp_04_1400';
import Comp_04_1401 from './Comp_04_1401';
import Comp_04_1402 from './Comp_04_1402';
import Comp_04_1403 from './Comp_04_1403';
import Comp_04_1404 from './Comp_04_1404';

const Comp_03_0280: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0280
      <div>
      <Comp_04_1400></Comp_04_1400>';
<Comp_04_1401></Comp_04_1401>';
<Comp_04_1402></Comp_04_1402>';
<Comp_04_1403></Comp_04_1403>';
<Comp_04_1404></Comp_04_1404>';
        </div>
      </div>;
};

export default Comp_03_0280;
