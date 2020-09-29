// Comp_04_0940
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4700 from './Comp_05_4700';
import Comp_05_4701 from './Comp_05_4701';
import Comp_05_4702 from './Comp_05_4702';
import Comp_05_4703 from './Comp_05_4703';
import Comp_05_4704 from './Comp_05_4704';

const Comp_04_0940: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0940
      <div>
      <Comp_05_4700></Comp_05_4700>';
<Comp_05_4701></Comp_05_4701>';
<Comp_05_4702></Comp_05_4702>';
<Comp_05_4703></Comp_05_4703>';
<Comp_05_4704></Comp_05_4704>';
        </div>
      </div>;
};

export default Comp_04_0940;
