// Comp_04_1418
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_7090 from './Comp_05_7090';
import Comp_05_7091 from './Comp_05_7091';
import Comp_05_7092 from './Comp_05_7092';
import Comp_05_7093 from './Comp_05_7093';
import Comp_05_7094 from './Comp_05_7094';

const Comp_04_1418: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1418
      <div>
      <Comp_05_7090></Comp_05_7090>';
<Comp_05_7091></Comp_05_7091>';
<Comp_05_7092></Comp_05_7092>';
<Comp_05_7093></Comp_05_7093>';
<Comp_05_7094></Comp_05_7094>';
        </div>
      </div>;
};

export default Comp_04_1418;
