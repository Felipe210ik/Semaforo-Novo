
const SemaforoLuz = ({ corBase, aceso }) => {
  const classeLuz = `semaforo-luz ${aceso ? `luz-acesa-${corBase}` : ''}`;
  return <div className={classeLuz}></div>;
};

export default SemaforoLuz;