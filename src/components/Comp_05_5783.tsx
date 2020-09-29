// Comp_05_5783
import React from 'react';
import { incModCount } from '../modCount';


const Comp_05_5783: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_05_5783
      <div>
      
        </div>
      </div>;
};

export default Comp_05_5783;
