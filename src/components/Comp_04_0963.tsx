// Comp_04_0963
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4815 from './Comp_05_4815';
import Comp_05_4816 from './Comp_05_4816';
import Comp_05_4817 from './Comp_05_4817';
import Comp_05_4818 from './Comp_05_4818';
import Comp_05_4819 from './Comp_05_4819';

const Comp_04_0963: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0963
      <div>
      <Comp_05_4815></Comp_05_4815>';
<Comp_05_4816></Comp_05_4816>';
<Comp_05_4817></Comp_05_4817>';
<Comp_05_4818></Comp_05_4818>';
<Comp_05_4819></Comp_05_4819>';
        </div>
      </div>;
};

export default Comp_04_0963;
