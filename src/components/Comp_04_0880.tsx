// Comp_04_0880
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4400 from './Comp_05_4400';
import Comp_05_4401 from './Comp_05_4401';
import Comp_05_4402 from './Comp_05_4402';
import Comp_05_4403 from './Comp_05_4403';
import Comp_05_4404 from './Comp_05_4404';

const Comp_04_0880: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0880
      <div>
      <Comp_05_4400></Comp_05_4400>';
<Comp_05_4401></Comp_05_4401>';
<Comp_05_4402></Comp_05_4402>';
<Comp_05_4403></Comp_05_4403>';
<Comp_05_4404></Comp_05_4404>';
        </div>
      </div>;
};

export default Comp_04_0880;
