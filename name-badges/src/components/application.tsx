import ControlPanel from './controls';
import Counter from './counter';
import Counter2 from './counter2';
import NameBadge from './name-badge';

const Application = () => (
  <main className="application">
    {/* <NameBadge name="guy" /> */}
    <Counter2 />
    <Counter />
  </main>
);

export default Application;
