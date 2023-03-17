const Legend = ({ StageNames, onClickHandler }) => {
  return (
    <div>
      <h2>Legend</h2>

      {StageNames.reduce((all, next) => {
        if (all.indexOf(next.StageName) === -1) {
          all.push(next.StageName);
        }
        return all;
      }, []).map((item) => {
        return (
          <button
            onClick={(e) => {
              onClickHandler(e, item);
            }}
            data-stageName={item}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Legend;
