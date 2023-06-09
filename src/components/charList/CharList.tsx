import { CharacterArray, MyCompProps } from '../types';

export const CharacterList: React.FunctionComponent<MyCompProps> = ({
  data,
}) => {
  const charactersArray: CharacterArray = Array.from(data);
  const fishSortedByName: CharacterArray = charactersArray.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  return (
    <section id="character-cards">
      {fishSortedByName.map((elm, index: number) => (
        <div key={index} className="card">
          <div className="card-titles">
            <h3>{elm.name}</h3>
            <h4>{elm.nickName}</h4>
          </div>
          <img src={elm.imageUrl}></img>
          <p>{elm.background}</p>
        </div>
      ))}
    </section>
  );
};
