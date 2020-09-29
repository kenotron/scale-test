// Comp_04_1280
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6400 from './Comp_05_6400';
import Comp_05_6401 from './Comp_05_6401';
import Comp_05_6402 from './Comp_05_6402';
import Comp_05_6403 from './Comp_05_6403';
import Comp_05_6404 from './Comp_05_6404';

const Comp_04_1280: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1280
      <div>
      <Comp_05_6400></Comp_05_6400>';
<Comp_05_6401></Comp_05_6401>';
<Comp_05_6402></Comp_05_6402>';
<Comp_05_6403></Comp_05_6403>';
<Comp_05_6404></Comp_05_6404>';
        </div>
      </div>;
};

export default Comp_04_1280;
